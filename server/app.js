const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const prodRouter = require(`./routes/prodRoutes`);
const userRouter = require(`./routes/userRoutes`);
const reviewRouter = require('./routes/reviewRoutes');

const app = express();

// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'));

// Allow requests from your frontend origin
app.use(cors({ origin: 'http://localhost:3000' }));
// 1) Global  Midlewares

// Serving static files
// app.use(express.static(`${__dirname}/public`));
app.use(express.static(path.join(__dirname, 'public')));

// Set Security HTTP headers
app.use(helmet());

// Development logging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

// What max request from the same IP in 1 hour
const limiter = rateLimit({
    max: 100,
    windowM: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour !'
});
app.use('/api',limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '100kb'}));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// DAta sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(hpp({
    whitelist: [
        'ratingsQuantity',
        'ratingsAverage',
        'price',
        'countInStock'
    ]
}));



// Test middleware
app.use((req, res, next) => {
    req.requestTime =new Date().toISOString();
    // console.log(req.headers);
    next();
});


// 2) Routes Handles
//app.get('/api/v1/products', getAllProduct);
// app.get(`/api/v1/products`, getAllProduct);
// app.get('/api/v1/products/:id', getProduct);
// app.post('/api/v1/products', createProduct);
// app.patch('/api/v1/products/:id', updateProduct);
// app.delete('/api/v1/products/:id', deleteProduct);

// 3) Routes
app.get('/', (req, res) => {
    res.status(200).render('base');
});

app.use('/api/v1/products', prodRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

// 4) Start Server
module.exports = app;