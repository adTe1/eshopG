import React from "react"
import './shop.css'
import { FaHeart,FaEye } from "react-icons/fa";


const Shop = ({shop, Filter, allcatefilter,addtocart}) => {
    return (
        <>
        <div className="shop">
            <h2># shop</h2>
            <p>Home . shop</p>
            <div className="container">
                <div className="left_box">
                    <div className="category">
                        <div className="header">
                            <h2>all categories</h2>
                        </div>
                        <div className="box">
                            <ul>
                                <li onClick={() => allcatefilter('All')}>#All</li>
                                <li onClick={() => Filter('headphone')}># Headphone</li >
                                <li onClick={() => Filter('laptop')}># Laptop</li >
                                <li onClick={() => Filter('watch')}># Watch</li >
                                <li onClick={() => Filter('speaker')}># Speaker</li >
                            </ul>
                        </div>
                    </div>
                    <div className="banner">
                        <div className="img_box">
                            <img src ='EIKONES/shop_left.jpeg' alt="banner"></img>
                        </div>
                    </div>
                </div>
                <div className="right_box">
                    <div className="banner">
                        <div className="img_box">
                            <img src="EIKONES/right-banner.jpeg" alt="banner"></img>
                        </div>
                    </div>
                    <div className="product_box">
                        <h2>Shop Product</h2>
                        <div className="product_container">
                            {
                                shop.map((curElm) =>
                                {
                                    return(
                                        <>
                                        <div className="box">
                                            <div className="img_box">
                                                <img src={curElm.image}></img>
                                                <div className="icon">
                                                <li ><FaHeart /></li >
                                                <li ><FaEye /></li >
                                                </div>
                                            </div>
                                            <div className="detail">
                                                <h3>{curElm.Name}</h3>
                                                <p>€{curElm.price}</p>
                                                <button onClick={() => addtocart (curElm)}>Add to cart</button>
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
        </div>
        </>
    )
}

export default Shop