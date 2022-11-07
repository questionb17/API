import React from 'react'
import {Link} from 'react-router-dom';
// import '../styles/header.css'

const Header = () => {
    return(
        <>
      <div>
        <nav>
            <div>
                <div>
                    <Link to='./'>HOME</Link>
                    <Link to='./AddProduct'>ADDITM</Link>
                </div>
            </div>
        </nav>
      </div>
      </>
    )
}
export default Header























//   <nav>
//             <div className="nav_box">
//                 <span className="my_store" >
//                     ShoppingMall
//                 </span>
//                 <div className="hme" >
//                     <p>HOME</p>
//                 </div>
//                 <div className="Addprdct" >
//                     <p>ADD PRODUCT</p>
//                 </div>
//                 <div className="cart">
//                     <span>
//                     <i className="fas fa-cart-plus"></i>
//                     </span>
//                     <span>{size}</span>
//                 </div>
//             </div>