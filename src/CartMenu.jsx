import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CartIcon from './images/cart-icon.png';
import pimg from './images/pizza-menu.png';

const CartMenu = () =>
{ 

    return (
        <>
        <section className="cart" id='cart'>

        <div className="order container mx-auto w-full">
        <div className="d-flex pt-5 align-items-center justify-content-center pb-4">
        <div className='w-25'>
        <img className="w-75 cimg" src={CartIcon} alt="cart-icon"/>
        </div>
        <h3 className="font-bold ml-4 text-2xl">Order Summary</h3>
        </div><hr/>

        <div className="pizza-list">

            <div className="d-flex align-items-center justify-content-around">
            
                <img className="w-25 lol" src={pimg} alt="pizza"/>
        
                
                <div className="ml-4">
                    
                    <h1 className='head'>Marinara</h1>

                    <span className='size'>MEDIUM</span>
                     
                </div>

                <span>1 pc</span>

                <span className=""><b>Rs 350</b></span>
            </div><hr/>

            </div>

            <div className="pizza-list">

            <div className="d-flex align-items-center justify-content-around">
            
                <img className="w-25 lol" src={pimg} alt="pizza"/>
        
                
                <div className="ml-4">
                    
                    <h1 className='head'>Marinara</h1>

                    <span className='size'>MEDIUM</span>
                     
                </div>

                <span>1 pc</span>

                <span className=""><b>Rs 350</b></span>
            </div><hr/>

            </div>

            <div className="pizza-list">

            <div className="d-flex align-items-center justify-content-around">
            
                <img className="w-25 lol" src={pimg} alt="pizza"/>
        
                
                <div className="ml-4">
                    
                    <h1 className='head'>Marinara</h1>

                    <span className='size'>MEDIUM</span>
                     
                </div>

                <span>1 pc</span>

                <span className=""><b>Rs 350</b></span>
            </div><hr/>

            </div>

        </div>

        </section>
        </>
    )
}

export default CartMenu;