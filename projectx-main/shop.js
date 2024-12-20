import React, { useState } from "react"
import './shop.css'
import { FaHeart,FaEye } from "react-icons/fa";
import { FaSkullCrossbones } from "react-icons/fa6";


const Shop = ({shop, Filter, allcatefilter,addtocart}) => {
    //toggle product detail
    const [showDetail, setShowDetail]= useState(false)
    //detail page data
    const [detail, setDetail] = useState([])
    //sort of prices
    const [sortOption, setSortOption] = useState('price'); 
    //detail page

    const detailpage =(product) =>
    {
        const detaildata = ([{product}])
        const productdetail = detaildata [0] ['product']
        //console.log(productdetail)
        setDetail(productdetail)  
        setShowDetail(true)
    }
   // console.log(detail)
    const closedetail  = () =>
    {
        setShowDetail(false)
    }

    const sortedShop = [...shop].sort((a, b) => {
        if (sortOption === 'price') {
            return a.price - b.price; // Ταξινόμηση με βάση την τιμή
        } else if (sortOption === 'name') {
            return a.Name.localeCompare(b.Name); // Ταξινόμηση με βάση το όνομα
        }
        return 0;
    });
    //setSortedShop(sortedProducts); // Ενημέρωση των ταξινομημένων προϊόντων
    //}, [sortOption, shop]); // Όταν αλλάζει το `sortOption` ή το `shop` τα προϊόντα ανανεώνονται

    return (
        <>
        {
            showDetail ? 
            <> 
                <div className="product_detail">
                    <button className="close_btn" onClick={closedetail}><FaSkullCrossbones /></button>
                    <div className="container">
                        <div className="img_box">
                            <img src={detail.image} alt=''></img>
                        </div>
                        <div className="info">
                            <h4># {detail.cat}</h4>
                            <h2>{detail.Name}</h2>
                            <p>{detail.Detail}</p>
                            <h3>€ {detail.price}</h3>
                            <button onClick={() => addtocart(detail)}>Add to Cart </button>
                        </div>
                    </div>

                </div>
            
            </>
            :null
        }
        
            
      
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
                                <li onClick={() => allcatefilter('All')}># All</li>
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

                    <div className="sort-options">
                            <label>Sort by: </label>
                            <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
                                <option value="price">Price</option>
                                <option value="name">Name</option>
                            </select>
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
                                                <li onClick={() => detailpage(curElm)}><FaEye /></li >
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