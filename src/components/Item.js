 import './Cart.css'
 import React ,{useContext} from 'react';

import { Contextcart } from './Cartcontext';
 const Item = ({img , name , quality_des , price ,id,count })=>{
  const {removeItem , add ,min} = useContext(Contextcart)
return(
    <div className="item_box">
        <div className="item_img"><img src={img} className='item_image' alt="item" /></div>
        <div className="item_detail">
            <p>{name}</p>
            <p>{quality_des}</p>
            <p>{price}</p>
            <div className='item_count_box'>
                <img src="./images/minus.png" className='minus_icon' alt="minus" onClick={()=>{min(id)}} />
                <p>{count}</p>
                <img src="./images/add.png" className='add_icon' alt="add" onClick={()=>{add(id)}}/>
            </div>
        </div>
        <div className="delete_item"><img src="./images/delete.png" alt="Delete" className='delete_icon' onClick={()=>{removeItem(id)}} /></div>
    </div>
)
}
export default Item;