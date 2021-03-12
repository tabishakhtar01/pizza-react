import React, { useEffect, useState } from 'react';
import './css/app.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CartMenu from './CartMenu'


const PizzaMenu = (prop) =>
{   
    const [cart,newCart] = useState(prop);

    const getMenu = () =>

    { 
        newCart(prop);
        // console.log(cart);
        return(
            <>
                {cart.map((tab,index)=>{
                 <CartMenu 
                //   key={index} 
                  img = {tab.img}
                  name = {tab.name}
                  price = {tab.price}
                  size = {tab.size}
                  />  

                })}
            </>
        )
    }
    
    
        
    return (
        <>
        <div className="mb-5 d-flex flex-column col-lg-3 col-md-4 col-sm-6 col-6">
                    
                    <div style={{minWidth : '160px'}} className='pi_list container-fluid'>
                    <img src={prop.img} alt="pizza-menu" className="img-fluid pi_img mb-4" />
                    
                    
                    <div className="text-center">
                        
                        <p className="naming mb-4 text-lg">{prop.name}</p>
                        
                        <span className="size py-1 px-4 text-uppercase">{prop.size}</span>
                        
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            
                            <span className=""><b>{`₹ ${prop.price}`}</b></span>
                            
                            <button onClick={getMenu} className="add-to-cart py-1 px-2 d-flex align-items-center">

                                <span>+</span>
                                <span className="ml-4">Add</span>
                            
                            </button>
                        
                        </div>
                    
                    </div>
                    </div>
                
                </div>
        </>
    )
}


export default PizzaMenu;