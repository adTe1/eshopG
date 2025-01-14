import React from 'react'
import './cart.css'
import { Link } from 'react-router-dom'
import { FaRegWindowClose } from "react-icons/fa";

const Cart = ({cart}) => {
  return (
    <>
      <div className='cart'>
      <h3>#cart</h3>
      {
        cart.length === 0 && 
        <>
          <div className='empty_cart'>
            <h2>Your shopping cart is empty</h2>
            <Link to='/shop'><button>Shop now</button></Link>
            
          </div>

        </>
      }
        <div className='container'>
          {
            cart.map((curElm) => 
            {
              return(
                <>
                <div className='box'>
                  <div className='img_box'>
                    <img src={curElm.image} alt='image'></img>
                  </div>
                  <div className='detail'>
                    <div className='info'>
                    <h4>{curElm.cat}</h4>
                    <h3>{curElm.Name}</h3>
                    <p>Price: €{curElm.price}</p>
                    <p>Total: €{curElm.price * curElm.qty}</p>
                    </div>
                    
                    <div className='quantity'>
                      <button>+</button>
                      <input type='number' value={curElm.qty}></input>
                      <button>-</button>
                      </div>
                    <div className='icon'>
                      <li><FaRegWindowClose /></li>
                    </div>
                   
                    </div>
                  </div>
                
                </>
              )
            })
          }
         
        </div>
      </div>
    
    </>
    
  )
}

export default Cart