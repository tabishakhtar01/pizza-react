import React from 'react';
import './css/app.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import heroPizza from './images/hero-pizza.png';
import Pizza from './Pizza';

const Home = () =>
{
    return(
        <>
        
        <section className="hero d-flex justify-content-center">
        <div className="container-fluid d-flex align-items-center">
            <div className="w-50 tagline">
                <p className="mt-5"><em>Hunger makes you MAD?</em></p>
                <h1 className="dontWait">Don't wait!!</h1>
                <button className="px-4 py-2 mb-5 mt-4 btn-primarys" style={{borderRadius :'30px',borderStyle : 'none',
                textDecoration : 'none',}}>
                <a style={{textDecoration: 'none'}} className='text-white' href="#orderNow">Order Now</a></button>
            </div>
            <div className="w-50">
                <img src={heroPizza} className='heroImg' style={{width : '85%'}} alt="hero-pizza"/>
            </div>
        </div>
    </section><hr/>
    <Pizza/>
        </>
    )
}

export default Home;