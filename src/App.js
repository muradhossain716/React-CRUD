import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


function App() {
const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [data,setData]=useState([]);
const [state,setState]=useState(true);
const [editPos,setEditPos]=useState(0);

const handleNameChange=(e)=>{
   setName(e.target.value)
  
};
const handleEmailChange=(e)=>{
  setEmail(e.target.value)
};
const handlePasswordChange=(e)=>{
  setPassword(e.target.value)
};
const handleSubmit=(e)=>{
 e.preventDefault()
 if(name===''){
  toast("Please insert name")
 }else if(email===''){
  toast ("Please insert email")
 }
 else if(password===''){
  toast("Please insert password")
 }else{
    const tempData=[...data];
    const user={
      name:name,email:email,password:password
    };
    
    tempData.push(user)
    setData(tempData);
    setName('');
    setEmail('')
    setPassword('')
 }
  

};

const handleDelete=(ind)=>{
  let tempData=[...data];
  console.log(tempData)
 const remainingData=tempData.filter((el,i)=>i!==ind);
 setData(remainingData)
}
const handleEdit=(el,ind)=>{
  setName(el.name)
  setEmail(el.email)
  setPassword(el.password)
  setState(false)
  setEditPos(ind)

}
const editSave=(e)=>{
  e.preventDefault();
  let tempData=[...data];
  tempData[editPos]={name:name,email:email,password:password}

  setData(tempData)
  setState(true)
  setName('');
  setEmail('')
  setPassword('')

}
  return (
    <div className="App">
     <form>
      <input placeholder="name" name="name" type="text"  value={name} onChange={handleNameChange} required></input>
      <input type="email" name="email" placeholder='email' onChange={handleEmailChange} value={email}required></input>
      <input type="password" name="password" placeholder='password' onChange={handlePasswordChange} value={password} required></input>
      {state?<button type='submit' onClick={handleSubmit}>Submit</button>:<button type='button' onClick={editSave}>Edit</button>}
      <ToastContainer />
      </form>
      
      <table>
        <tbody>
        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Password</th>
                          <th>update</th>
                        </tr>
              {

                data.map((el,ind)=>{
                    return(
                    
                    <tr key={ind}>
                          <td>{el.name}</td>
                          <td>{el.email}</td>
                          <td>{el.password}</td>
                         <td> <button type='button' onClick={()=>handleEdit(el,ind)} >Edit</button>/<button type='button' onClick={()=>handleDelete(ind)}>Delete</button></td>

                        </tr>
                  )
                  
                })
              }
        </tbody>
      </table>
      
    </div>
  );
}

export default App;





// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [name,setName] =  useState('');
//   const [email,setEmail] =  useState('');
//   const [password,setPassword] = useState([]);
// const [data,setData]=useState([]);
// const handleNameChange=(e)=>{
//   setName(e.target.value)
// };
// const handlePasswordChange=(e)=>{
//   setPassword(e.target.value)
// };
// const handleEmailChange=(e)=>{
//   setEmail(e.target.value)
// };
// const handleSubmit=(e)=>{
//   e.preventDefault();
//  const user={
//    name:name,
//    email:email,
//    password:password
//  };
//  let userup=[...data];
//  userup.push(user)
// setData(userup);
// setName('');
// setEmail('')
// setPassword('')
// };

//   return (
//     <div className="App">
//       <form action="" onSubmit={handleSubmit}>
//       <input type="text" name="name" placeholder='name' onChange={handleNameChange} value={name}></input>
//       <input type="email" name="email" placeholder='email' onChange={handleEmailChange} value={email}></input>
//       <input type="password" name="password" placeholder='password' onChange={handlePasswordChange}  value={password}></input>
//       <button type='submit' >Submit</button>
//       </form>

//       <table>
//         <tbody>
//         <tr>
//                           <th>Name</th>
//                           <th>Email</th>
//                           <th>Password</th>
//                         </tr>
//               {
//                 data.map((el,ind)=>{

//                     return(
                    
//                         <tr key={ind}>
//                           <td>{el.name}</td>
//                           <td>{el.email}</td>
//                           <td>{el.password}</td>
//                         </tr>
                    
//                     )
                  
                  
//                 })
//               }
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;
