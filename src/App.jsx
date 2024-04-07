
// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import { useGoogleLogin } from "@react-oauth/google";



// function App({insideRegister }) {
//   const [userInputs,setUserInputs] = useState({
//     username:"" ,email:"",password:""
//   })
//   console.log(userInputs);


//   return (
//     <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
//     <div className="container w-75">
//       <Link to={'/'} style={{textDecoration:'none'}} className='fw-bolder'>
//         {" "}
//         <i className='fa-solid fa-arrow-left'></i>Back to Home</Link>
//       <div className="card shadow p-5">
//         <div className="row align-items-center">
//           <div className="col-lg-6">
//             <img height={'300px'} src='https://static.vecteezy.com/system/resources/previews/002/437/945/large_2x/illustration-of-a-login-account-free-vector.jpg'  />

//           </div>
//           <div className="col-lg-6">
//           <h1 style={{ fontSize: '40px' }}><i class="fa-brands fa-pagelines"></i>Project Fair</h1>
//             <h5 className=' fw-bolder mt-2'>
//               Sign {insideRegister? 'up':'in'} to your acount
//             </h5>
          
//        <Form>
//         {insideRegister &&
//               <FloatingLabel
//         controlId="floatingInput"
//         label="username"
//         className="mb-3"
//       >  <Form.Control type="text" placeholder="username" />
     
//       </FloatingLabel>
// }
//               <FloatingLabel
//         controlId="floatingInput"
//         label="Email address"
//         className="mb-3"
//       >
//         <Form.Control    type="email" placeholder="name@example.com" />
//       </FloatingLabel>
//       <FloatingLabel controlId="floatingPassword" label="Password">
//         <Form.Control  type="password" placeholder="Password" />
//       </FloatingLabel>
//       {
//         insideRegister?
//         <div className="mt-3">
//           <button onClick={handleRegister} className='btn btn-primary mb-2'>Register</button>
//           <p>Already have an Acount?Click here to <Link className='text-info' to={'/login'}>login</Link></p>
//         </div>
//         :
//         <div className="mt-3">
//           <button  className='btn btn-primary mb-2'>Login</button>
//           <p>New User?Click here to  <Link className='text-info' to={'/register'}> Register</Link></p>
//         </div>

//       }
//        </Form>




//           </div>
//         </div>
//       </div>
//     </div>
//     <ToastContainer position='top-center' theme='colored' autoClose={3000} />
//     </div>
//   )
// }

// export default App
 
// import { GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";
// import { useGoogleLogin } from '@react-oauth/google';
import { Routes, Route, Navigate } from "react-router-dom";


import Auth from "./Pages/Auth";
function App(){
    return (
        <>
         <Routes>
        
         <Route path='/' element={<Auth/>}/>
         <Route path='/register' element={<Auth insideRegister/>} />
         <Route path='/*' element={<Navigate to={'/'}/>} />
         </Routes>
         </>
    )
}
//     return  <GoogleLogin
//   onSuccess={(credentialResponse) => {
//     const credentialResponseDecoded = jwtDecode(
//      credentialResponse.credential
//     );
//     console.log(credentialResponseDecoded);
//   }}
//   onError={() => {
//     console.log('Login Failed');
//   }}
// />;
// const login = useGoogleLogin({
//     onSuccess: (tokenResponse) => console.log(tokenResponse),
//   });
  
//  return <button onClick={() => login()}>Sign in with Google </button>;
    
// }

 export default App;