import React, { useState } from 'react';

// const Registration = () =>
// {   
//     const [reg,setreg] = useState({
//         email : '',
//         password : ''
//     })
//     return (
//         <form>
//             <div>
//                 <label>Email : </label>
//                 <input type='email'/>
//             </div>

//             <div>
//                 <label>Password : </label>
//                 <input type='password'/>
//             </div>
//         </form>
//     )
// }   

// export default Registration;


// import React, { useState } from 'react';

const Registration = () =>
{   
    const [list,newList] = useState();
    const [nlist,newNlist] = useState([]);

    const Insert = (e) =>
    {
        e.preventDefault();
        const itemName = e.target.value;
        newList(itemName);
    }

    const saveList = (e) =>
    {   e.preventDefault();
        console.log(e);

        newNlist((preVal)=>
        {
            return [...preVal,list];
        }) 
        newList("");
    }
    

    return(
        <>
        <div>
            <h1>Enter Your Lists</h1>
            <br/>
            <form>
            <input type='text' name='help' value={list} onChange={Insert}/><button type='submit' onClick={saveList}>+</button>
            </form>
            <ul>
            {nlist.map((currVal)=>
            {
                return <li style={{listStyle:'none'}}>{currVal}</li>
            })}
            </ul>
        </div>
        </>
    )
}

export default Registration; 