// import { TrainOutlined } from '@material-ui/icons';
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CartMenu from './CartMenu';
import './css/app.css'
import PizzaList from './PizzaList';
import PizzaMenu from './PizzaMenu';

const Pizza = () =>
{
    return (
        <>
        <h3 className='container text-center mt-5 mb-5'>All Pizzas</h3>
        <div style={{display : 'flex', margin : 'auto'}} className='row res'>
        {PizzaList.map((x,index)=>
        {
        return (
        <PizzaMenu
            key={index}
            img={x.img}
            name={x.name}
            price={x.price}
            size={x.size}
        />
        )
    })}
    </div>
    </>
    )
    
}

export default Pizza;