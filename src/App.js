import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Main from './Main';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App()
{
  const adminUser = {
    email : 'admin@gmail.com',
    password : 'admin123'
  }

  const [user,setUser] = useState({
    name : '',
    email : ''
  });

  const [error,setError] = useState('');

  const Login = details =>
  {
    console.log(details);
    if(details.email == adminUser.email && details.password == adminUser.password)
    {
      console.log('Logged In');
      setUser({
        name : details.name,
        email : details.email
      })
    }else{
      console.log('Details do Not Match');
      setError('Details Do Not Match')
    }
  }

  const Logout = details =>
  {
    console.log('Logout');
    setUser({
      name : '',
      email : ''
    })
  } 

  return (
    <>
    <div>
      {(user.email != '' )? <div><Main/>
      <button className='btn btn-danger w-100' onClick={Logout}>Logout</button></div> : <LoginForm Login={Login} error={error}/>}
    </div>
    </>
  )
  }
export default App;



