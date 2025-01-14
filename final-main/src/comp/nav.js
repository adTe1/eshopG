import React, { Fragment } from "react";
import { MdLocalShipping } from "react-icons/md";
import './nav.css'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';




const Nav = ({auth: { isAuthenticated, loading, user }, logout, search,setSearch, searchproduct}) => {
   
    
    const authLinks = (
       //if user is login then logout button will shown  and also user profile
       <div className='user'>
       <div className='icon'>
       <li>
       <div className='btn'>
       <Link to="/" onClick={logout}>
            Logout
        </Link>
       </div>
       </li>
    </div>
    </div>  
      );

      const authLinks1 = (
        <>
        <div className='icon'> 
        </div>
        <div className='info'>
        {user?.data?.data && (
        <>
            <h2>{user.data.data.name}</h2>
            <p>{user.data.data.email}</p>
        </>
        )}

        </div>
        
    </>
      );
    
      const guestLinks = (
           //if user is not login then login button will shown
           <div className='user'>
           <div className='icon'>
           <li>
           <div className='btn'>
               <Link to="/login">Login</Link>
           </div>
           </li>
        </div>
        </div>  
      );

      const guestLinks1 = (
        <>
        <div className='icon'>
            
        </div>
        <div className='info'>
            <h2>Please Login</h2>
        </div>
    </>
      )
    return (
       <>
       <div className='header'>
        <div className='top_header'>
            <div className='icon'>
            <MdLocalShipping />
            </div>
            <div className='info'>
                <p>Δωρεάν Μεταφορικά Για Αγορές ανω των 100€</p>
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
                    { !loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks }</Fragment>)}
                
            </div>
                <div className='last_header'>
                    <div className='user_profile'>
                            { !loading && (<Fragment>{isAuthenticated ? authLinks1 : guestLinks1 }</Fragment>)}
                        
                    </div>
                    <div className='nav'>
                        <ul>
                            <li><Link to='/' className='link'>Home</Link></li>
                            <li><Link to='/shop' className='link'>Shop</Link></li>
                            <li><Link to='/about' className='link'>About</Link></li>
                            <li><Link to='/contact' className='link'>Contact</Link></li>
                            <li><Link to='/cart' className='link'>Cart</Link></li>
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

Nav.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
 

  export default connect(
      mapStateToProps, 
      { logout }
  )(Nav);