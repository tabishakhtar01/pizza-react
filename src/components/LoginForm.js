import React,{useState} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/app.css';



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
        <div className='w-75 mx-auto'>
        <form onSubmit={submitHandler}>
            <div>
                <h2 className='text-center display-1'>LogIn</h2>
                {(error != '') ? (<div>{error}</div>) : ""}
                <div className='form-group'>
                    <label>Name:</label>
                    <input className='form-control' type='text' onChange={e=>setDetails({...details,name : e.target.value})} value={details.name}/>
                </div>

                <div className='form-group'>
                    <label>Email:</label>
                    <input className='form-control' type='email' onChange={e=>setDetails({...details,email : e.target.value})} value={details.email}/>
                </div>

                <div className='form-group'>
                    <label>Password:</label>
                    <input className='form-control' type='password' onChange={e=>setDetails({...details,password : e.target.value})} value={details.password}/>
                </div>

                <div className='d-flex justify-content-center mt-5'>
                <button className='add-to-cart w-50 py-3 ' type='submit'>Submit</button>
                </div>

            </div>
        </form>
        </div>
    )
}

export default LoginForm