import React,{useContext} from "react";
import Item from "./Item.js";
import './Cart.css'

import '../index.css'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Contextcart } from "./Cartcontext.js";

 const Cart = ({Closecart}) =>{
   const { item  ,totalItem , totalAmount}= useContext(Contextcart);
   return (
      <>
     <div className="cartContainer" onClick={Closecart}>
     </div>
       <section className="cart_section">
       <div className="cart_section_header">
       <div> <h3>Your Cart ({totalItem})</h3></div>
        <div className="aero">
            <button onClick={Closecart}><img src="./images/cross.webp" className="cross" alt="aero" /></button>
        </div>
       </div>
       
       <hr />
       <div className="itemHolder">
       <Scrollbars>
        {
            item.map((curItem)=>{
              return <Item key = {curItem.id} {...curItem}/>
            }) 
        }
        </Scrollbars>
       </div>
       
       <div className="coupon">
        <input type="text" placeholder="coupon" name="coupon"/>
        <button>Apply Coupon</button>
       </div>
       <hr />
       <div className="total">
        <p><strong>SUBTOTAL</strong></p>
        <p className="subtotal">₹<p>{totalAmount}</p></p>
       </div>
       <div className="checkout">
        <p><strong>CHECKOUT</strong></p>
       </div>
       <div className="continue_shop">
        <p><strong><u>CONTINUE SHOPING</u></strong></p>
       </div>
       </section>
    
      
      </>
   )
}
 export  default Cart