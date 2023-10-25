import './Cart.css'

import { useState } from 'react';
import {Cartcontext } from './Cartcontext.js';
export default function Navbar(){
    const [cartAccess , setcartAccess] = useState(false);
    const Closecart  = ()=>{
        cartAccess ? setcartAccess(false) : setcartAccess(true)
    }
   return( 
   <>
        <div className="navbar_container">
            <div className='logo'><h1>Mandeshi</h1></div>
            <div className='home'>Home</div>
            <div className='shop'>Shop</div>
            <div className='explore'>Explore</div>
            <div className='help'>Help</div>
            <div className='search'><input type="text" /> <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-strong-128.png" className='searchIcon' alt="search"/></div>
            <div className='bucket'><button className='bucketBut' onClick={()=>{Closecart()}} ><img src="https://cdn-icons-png.flaticon.com/512/1235/1235348.png" alt="cart"  className='bucketIcon'/></button></div>
            <div className=''><img src="https://cdn3d.iconscout.com/3d/premium/thumb/man-4928309-4107685.png" alt="account"  className='accountIcon'/></div>
        </div>
       { cartAccess && <Cartcontext Closecart = {Closecart}/>}

    </>
   )
}