const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({path: './config.env'});

// console.log(app.get('env'));  //development
//console.log(process.env);

   

const DB = process.env.DATABASE.replace(    
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

dbConnect().catch(err => console.log(err));
   
async function dbConnect() {
  await mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
   useFindAndModify: false
})
.then(() => console.log('DB connection successful'));
}

// Testing
//  const testProduct =new Product({
//      name: 'pc1',
//      price: 999
     
//  });

//  testProduct.save().then(doc => {
//      console.log(doc);
//  }).catch(err => {
//      console.log('!! ERROR !!:', err)

//  });


const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`App running port ${port}...`);
});


