import React, { useEffect, useState } from "react";
import './home.css';
import { Link } from "react-router-dom";
import Homeproduct from "./home_product";
import { FaEye,FaHeart,FaFacebookF,FaTwitter,FaInstagram,FaCartArrowDown  } from "react-icons/fa";



const Home = ({addtocart}) => {
    //product category
    const [newProduct, setNewProduct]= useState([])
    const [featuredProduct, setFeaturedProduct]= useState([])
    const [topProduct, setTopProduct]= useState([])
    //tranding product
    const [trendingProduct, setTrendingProduct] = useState(Homeproduct)
    //filter of tranding product 
    const filtercate = (x) =>
    {
        const filterproduct = Homeproduct.filter((curElm) =>
        {
            return curElm.type === x
        })
        setTrendingProduct(filterproduct)
    }

    //all trending product
    const allTrendingProduct = () =>
    {
        setTrendingProduct(Homeproduct)
    }

    //product type
    useEffect(() => 
    {
        productcategory()
    })


    const productcategory = () =>
    {
        // new product
        const newcategory = Homeproduct.filter((x) =>
        {
            return x.type === 'new'
        
    })
        setNewProduct(newcategory)

        //featured product
        const featuredcategory = Homeproduct.filter((x) => {
            return x.type === 'featured'
        })
        setFeaturedProduct(featuredcategory)

        //top product
        const topcategory = Homeproduct.filter((x) => {
            return x.type === 'top'
        })
        setTopProduct(topcategory)
    }
    return (
        <>
            <div className="home">
                <div className="top_banner">
                    <div className="contant">
                        <h3>HP ProBook 640 G5</h3>
                        <h2>Intel Core i5-8365U</h2>
                        <h2>Screen: 14" 1920x1080 Full HD </h2>
                        <h3>Warranty: 12 Months</h3>
                        <Link to='/shop' className="link">Shop Now</Link>

                    </div>

                </div>

                <div className="trending">
                    <div className="container">
                        <div className="left_box">
                            <div className="header">
                                
                                    <div className="heading">
                                        <h2 onClick={() => allTrendingProduct ()}>trending product</h2>
                                    </div>
                                    
                                    <div className="cate">
                                        <h3 onClick={() => filtercate ('new')}>New</h3>
                                        <h3 onClick={() => filtercate ('featured')}>Featured</h3>
                                        <h3 onClick={() => filtercate ('top')}>top selling</h3>
                                    
                                    </div>
                            </div>
                                <div className="products">
                                    <div className="container">
                                        {
                                            trendingProduct.map((curElm) =>
                                            {
                                                return(
                                                    <>
                                                        <div className="box">
                                                            <div className="img_box">
                                                                <img src={curElm.image} alt=""></img>
                                                                <div className="icon">
                                                                    <div className="icon_box">
                                                                    <FaEye />


                                                                    </div>
                                                                    <div className="icon_box">
                                                                    <FaHeart />


                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="info">
                                                                <h3>{curElm.Name}</h3>
                                                                <p>€{curElm.price}</p>
                                                                <button className="btn" onClick={ () => addtocart (curElm)}>Add to cart</button>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }

                                    </div>
                                    <button> Show more </button>
                                </div>
                        </div>
                                <div className="right_box">
                                    <div className="right_container">
                                        <div className="newsletter">
                                            <div className="head">
                                                <h3>newsletter</h3>
                                            </div>
                                            <div className="form">
                                                <p>join our malling list</p>
                                                <input type="email" placeholder="E-mail" autoComplete="off"></input>
                                                <button>subscribe</button>
                                                <div className="icon_box">
                                                    <div className="icon">
                                                <FaFacebookF />
                                                </div>
                                                <div className="icon">
                                                    <FaInstagram/>
                                                </div>
                                                <div className="icon">
                                                    <FaTwitter/>
                                                </div>
                                                </div>

                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                
                                    
                            
                                 </div>
                    </div>
                    <div className="banners">
                        <div className="container">
                            <div className="left_box">
                                <div className="box">
                                    <img src="EIKONES/multi-banner-1.jpeg" alt="banner"></img>
                                </div>
                                <div className="box">
                                    <img src="EIKONES/multi-banner-2.jpeg" alt="banner"></img>
                                </div>
                            </div>
                            <div className="right_box">
                                <div className="top">
                                    <img src="EIKONES/multi-banner-3.jpeg" alt="banner"></img>
                                    <img src="EiKONES/multi-banner-4.jpeg" alt=""></img>
                                </div>
                                <div className="bottom">
                                    <img src="EIKONES/multi-banner-5.jpeg" alt=""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product_type">
                        <div className="container">
                            <div className="box">
                             <div className="'header">
                                <h2>Featured Product</h2>
                              </div>
                              {
                                featuredProduct.map((curElm) => {
                                    return(
                                       <>
                                            <div className="productbox">
                                                <div className="img-box">
                                                    <img src={curElm.image} alt=""></img>
                                                </div>
                                                <div className="detail">
                                                    <h3>{curElm.Name}</h3>
                                                    <p>{curElm.price}</p>
                                                    <div className="icon">
                                                        <button><FaEye /></button>
                                                        <button><FaHeart /></button>
                                                        <button onClick={() => addtocart (curElm)}><FaCartArrowDown /></button>
                                                    </div>
                                                </div>
                                            </div>

                                       </> 
                                    )
                                })
                              }
                            

                            </div>
                            <div className="box">
                             <div className="'header">
                                <h2>Top Product</h2>
                              </div>
                              {
                                topProduct.map((curElm) => {
                                    return(
                                       <>
                                            <div className="productbox">
                                                <div className="img-box">
                                                    <img src={curElm.image} alt=""></img>
                                                </div>
                                                <div className="detail">
                                                    <h3>{curElm.Name}</h3>
                                                    <p>{curElm.price}</p>
                                                    <div className="icon">
                                                        <button><FaEye /></button>
                                                        <button><FaHeart /></button>
                                                        <button onClick={() => addtocart (curElm)}><FaCartArrowDown /></button>
                                                    </div>
                                                </div>
                                            </div>

                                       </> 
                                    )
                                })
                              }
                            

                            </div>
                            <div className="box">
                             <div className="'header">
                                <h2>New Product</h2>
                              </div>
                              {
                                newProduct.map((curElm) => {
                                    return(
                                       <>
                                            <div className="productbox">
                                                <div className="img-box">
                                                    <img src={curElm.image} alt=""></img>
                                                </div>
                                                <div className="detail">
                                                    <h3>{curElm.Name}</h3>
                                                    <p>{curElm.price}</p>
                                                    <div className="icon">
                                                        <button><FaEye /></button>
                                                        <button><FaHeart /></button>
                                                        <button onClick={() => addtocart (curElm)}><FaCartArrowDown /></button>
                                                    </div>
                                                </div>
                                            </div>

                                       </> 
                                    )
                                })
                              }
                            

                            </div>
                            

                        </div>
                    </div>
                </div>
      
        </>
    )
}

export default Home