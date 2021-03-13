import React,{useState} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/app.css';
import bg from '../images/loginbg.jpg';
import bg2 from '../images/image.jpg';



function LoginForm({Login, error}) 
{
    const [details,setDetails]  = useState({
        name : '',
        email : '',
        password : ''
    });

    const submitHandler = (e) =>
    {
        e.preventDefault();

        Login(details);
    }
    return(
        <div className='main_div' style={{backgroundImage : `url(${bg2})`, height : '100vh'}}>
        <div className='w-75 mx-auto'>
        <form onSubmit={submitHandler}>
            <div>
                <h2 className='text-center text-warning display-1'>LOGIN</h2>
                {(error != '') ? (<div className='text-center text-danger' style={{letterSpacing: '2px', fontSize : 'larger', fontWeight:'500'}}>{error}</div>) : ""}
                <div className='form-group'>
                    <label className='text-light' style={{letterSpacing: '2px', fontSize : 'larger', fontWeight:'500'}}>Name:</label>
                    <input className='form-control' style={{letterSpacing: '2px', fontSize : 'larger', fontWeight:'500'}} type='text' onChange={e=>setDetails({...details,name : e.target.value})} value={details.name}/>
                </div>

                <div className='form-group'>
                    <label className='text-light' style={{letterSpacing: '2px', fontSize : 'larger', fontWeight:'500'}}>Email:</label>
                    <input className='form-control' style={{letterSpacing: '2px', fontSize : 'larger', fontWeight:'500'}} type='email' onChange={e=>setDetails({...details,email : e.target.value})} value={details.email}/>
                </div>

                <div className='form-group'>
                    <label className='text-light' style={{letterSpacing: '2px', fontSize : 'larger', fontWeight:'500'}}>Password:</label>
                    <input className='form-control' style={{letterSpacing: '2px', fontSize : 'larger', fontWeight:'500'}} type='password' onChange={e=>setDetails({...details,password : e.target.value})} value={details.password}/>
                </div>

                <div className='d-flex justify-content-center mt-5'>
                <button className='add-to-cart w-50 py-3' style={{letterSpacing : '3px', fontSize : 'larger', fontWeight : '800'}} type='submit'>Submit</button>
                </div>

            </div>
        </form>
        </div>

        </div>
    )
}

export default LoginForm