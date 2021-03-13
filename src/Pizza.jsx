// import { TrainOutlined } from '@material-ui/icons';
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CartMenu from './CartMenu';
import './css/app.css'
import PizzaList from './PizzaList';
import CartIcon from './images/cart-icon.png';
import cartIcon from './images/cart-icon.png';
import Navbars from './Navbars'


// import PizzaMenu from './PizzaMenu';

//
import margherita from './images/margherita.png';
import peppyPaneer from './images/peppy-paneer.png';
import mexicanWave from './images/mexican-wave.png';
import deluxVeggie from './images/delux-veggie.png';
import vegExtravaganza from './images/veg-extravaganza.png';
import cheeseNcorn from './images/cheese-n-corn.png';
import veggieParadise from './images/veggie-paradise.png';
import farmHouse from './images/farmhouse.png';
import pepperBarbecue from './images/pepper-barbecue.png';
import chickenSausage from './images/chicken-sausage.png';
import chickenGolden from './images/chicken-golden.png';
import nonVegSupreme from './images/non-veg-supreme.png';
import EmptyCart from './images/empty-cart.png';
import { useState } from 'react';
//

const Pizza = () =>
{
    //
    const [cart,setCart] = useState([]);
    const [page,setPage]= useState('products');
    const [total,setTotal] = useState();

    const [pizzaLi] = useState([
        {
            img : margherita,
            name : 'Margherita',
            price : 99,
            size : 'small'
        },
        {
            img : peppyPaneer,
            name : 'Peppy Paneer',
            price : 200,
            size : 'medium'
        },
        {
            img : mexicanWave,
            name : 'Mexican Wave',
            price : 270,
            size : 'large'
        },
        {
            img : deluxVeggie,
            name : 'Delux Veggie',
            price : 210,
            size : 'medium'
        },
        {
            img : vegExtravaganza,
            name : 'VegExtravaganza',
            price : 240,
            size : 'small'
        },
        {
            img : cheeseNcorn,
            name : 'Cheese N Corn',
            price : 115,
            size : 'large'
        },
        {
            img : veggieParadise,
            name : 'Veggie Paradise',
            price : 290,
            size : 'large'
        },
        {
            img : farmHouse,
            name : 'Farm House',
            price : 245,
            size : 'small'
        },
        {
            img : pepperBarbecue,
            name : 'Pepper Barbecue',
            price : 300,
            size : 'medium'
        },
        {
            img : chickenSausage,
            name : 'Chicken Sausage',
            price : 350,
            size : 'large'
        },
        {
            img : chickenGolden,
            name : 'Chicken Delight',
            price : 370,
            size : 'large'
        },
        {
            img : nonVegSupreme,
            name : 'NonVeg Supreme',
            price : 420,
            size : 'medium'
        }
        ])
    
    const addTocart = (products) =>
        {
            setCart([...cart,products]);
        }

    const navigateTo = (nextPage) =>
    {
        setPage(nextPage);
    }  
    var sum=0;
    {cart.map((x)=>
        {
            sum = sum+x.price;
        })}
        console.log(sum);
    //
    return (<>
    <div className='d-flex justify-content-around'>
        <button style={{letterSpacing: '2px', fontWeight : 'bolder', fontSize : '17px'}} className="btn btn-primarys w-50" onClick={()=>navigateTo('cart')}>{`Go To Cart (${cart.length})`}</button>
        <button style={{letterSpacing: '2px', fontWeight : 'bolder', fontSize : '17px'}} className="btn btn-primarys  w-50" onClick={()=>navigateTo('products')}><b>Go To Products</b></button>
    </div>
        
        {page === 'products' && (<>

        <h3 className='container text-center mt-5 mb-5' id='orderNow'>All Pizzas</h3>
        <div style={{display : 'flex', margin : 'auto'}} className='row res'>
        {pizzaLi.map((product)=>
        {
        return (
        <>
        <div className="mb-5 d-flex flex-column col-lg-3 col-md-4 col-sm-6 col-6">
                    
                    <div style={{minWidth : '160px'}} className='pi_list container-fluid'>
                    <img src={product.img} alt="pizza-menu" className="img-fluid pi_img mb-4" />
                    
                    
                    <div className="text-center">
                        
                        <p className="naming mb-4 text-lg">{product.name}</p>
                        
                        <span className="size py-1 px-4 text-uppercase">{product.size}</span>
                        
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            
                            <span className=""><b>{`₹ ${product.price}`}</b></span>
                            
                            <button onClick={()=>addTocart(product)} className="add-to-cart py-1 px-2 d-flex align-items-center">

                                <span>+</span>
                                <span className="ml-4">Add</span>
                            
                            </button>
                        
                        </div>
                    
                    </div>
                    </div>
                
                </div>
            </>)
            })}
    </div>
        </>)}



        {page === 'cart' && (
            <>
            {cart.length == 0 ? (<div><section class="mt-5 empty-cart">
    
    <div className="container mx-auto text-center">
        
        <h1 className="mb-5">Cart Empty 😲</h1><hr/>

        <h5 className="mb-5">You probably haven't ordered a pizza yet.</h5>

            <h5>To order a pizza, go to the Product page.</h5>
        
        <img className="w-50 mx-auto" src={EmptyCart} alt="empty-cart"/>
    
    </div>
    
    </section>
    </div>)
    :
     ( 
         <section className="cart" id='menupage'>
                <div className="order container mx-auto w-full">
                    <div className="d-flex pt-5 align-items-center justify-content-center pb-4">
                        <div className='w-25'>
                            <img className="w-75 cimg" src={CartIcon} alt="cart-icon"/>
                        </div>
                        <h3 className="font-bold ml-4 text-2xl">Order Summary</h3>
                    </div><hr/>
                        {cart.map((prod)=>
                        {
                        {console.log(prod.price)}
                        return(
                        <>
                        <div className="pizza-list">
                        <div className="d-flex align-items-center justify-content-around">
                            <img className="w-25 lol" src={prod.img} alt="pizza"/>
                            <div className="ml-4">
                                <h1 className='head'>{prod.name}</h1>
                                <span className='size'>{prod.size}</span>
                            </div>
                            <span className=""><b>{`Rs ${prod.price}`}</b></span>
                            </div><hr/>
                        </div>
                        </>)})}

                        <div className="text-right py-4">

                        <div style={{fontSize : '20px'}}>
                            <span className="text-lg font-bold">Total Amount: </span>
                            <span className="amount font-bold text-2xl ml-2">{`Rs ${sum}`}</span>
                        </div>

                        <div>
                    <div>
                        <button type="submit" style={{backgroundColor: '#960202', color : 'white', borderRadius : '30px'}} className="btn px-5 py-2 mt-5">Order Now</button>
                    </div>

            </div>
                        </div>
                </div>
            </section>
     )}

            </>
        )}
    
    
    
    </>)
    
}

export default Pizza;