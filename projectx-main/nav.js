import React from 'react';
import { MdLocalShipping } from "react-icons/md";
import './nav.css'
import { CiSearch } from "react-icons/ci";
import { CiLogin,CiUser } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';




const Nav = ({search,setSearch, searchproduct}) => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    return (
       <>
       <div className='header'>
        <div className='top_header'>
            <div className='icon'>
            <MdLocalShipping />
            </div>
            <div className='info'>
                <p>Free Shipping For Purchases over €100</p>
            </div>
        </div>
        <div className='mid_header'>
            <div className='logo'>
                 <img src='EIKONES\newlogo.jpeg' alt='newlogo'></img>
            </div>
            <div className='search_box'>
                <input type='text' value={search} placeholder='search' onChange={(e) => setSearch(e.target.value)}></input>
                <button onClick={searchproduct}><CiSearch /></button>
            </div>
                {
                    isAuthenticated ?
                    //if user is login then logout button will shown  and also user profile
                    <div className='user'>
                        <div className='icon'>
                
                          <CiLogout />
                         </div>
                     <div className='btn'>
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                     </div>     
                    </div>

                    :
                    //if user is not login then login button will shown
                <div className='user'>
                    <div className='icon'>
                    <CiLogin />
                    </div>
                     <div className='btn'>
                          <button onClick={() => loginWithRedirect()} >Login </button>
                      </div>
                 </div>  

                }
              
            
            </div>
                <div className='last_header'>
                    <div className='user_profile'>
                        {
                            //user profile is shown here 
                            isAuthenticated ?
                            <>
                                <div className='icon'>
                                     <CiUser />
                                </div>
                                <div className='info'>
                                    <h2>{user.name}</h2>
                                     <p>{user.email}</p>
                                </div>
                                
                            </>
                            :
                            <>
                                <div className='icon'>
                                     <CiUser />
                                </div>
                                <div className='info'>
                                    <p>Please Login</p>
                                </div>
                            </>
                        }
                    </div>


                    <div className='nav'>
                        <ul>
                            <li><Link to='/' className='link'>Home</Link></li>
                            <li><Link to='/shop' className='link'>Shop</Link></li>
                            <li><Link to='/cart' className='link'>Cart</Link></li>
                            <li><Link to='/about' className='link'>About</Link></li>
                            <li><Link to='/contact' className='link'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className='offer'>
                        <p>flat 10% over all Laptops</p>
                    </div>
                </div>
       </div>
       </>
    )
}

export default Nav