import { useGoogleLogin } from "@react-oauth/google";
import { Link, useNavigate } from 'react-router-dom'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import React, { useState }  from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../services/allAPI';
import axios from "axios";


function Auth({insideRegister}){

    //google login
// const login = useGoogleLogin({
    // onSuccess: (tokenResponse) => console.log(tokenResponse),
//     onSuccess:async (response) =>{
//         try{
//             const res = await axios.get(
//               "https://www.googleapis.com/oauth2/v3/userinfo",
//               {
//                 headers:{
//                     Authorization:`Baerer ${response.access_token}`,
//                 },
//               }
//             );
//             console.log(res);
//         }catch(err){
//             console.log(err);
//         }
//     },
//   });


const handleGoogleLoginSuccess = async (response) => {
    try {
      const res = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${response.access_token}`,
          },
        }
      );
      console.log(res);
      toast.success(`Welcome ${res.data.name}...`);
    } catch (err) {
      console.log(err);
    }
  };

  const login = useGoogleLogin({
    onSuccess: handleGoogleLoginSuccess,
  });






  const navigate = useNavigate()
  const [userInputs,setUserInputs] = useState({
    username:"" ,email:"",password:""
  })
  console.log(userInputs);

  const handleRegister= async(e) =>{
    e.preventDefault()
    if(userInputs.username && userInputs.email && userInputs.password){
      //api call
      // const {username,email,password}=userInputs
      try{
       const result = await registerAPI(userInputs)
       console.log(result);
       if(result.status==200){
        toast.success(`Welcome ${result.data.username}... please Login to explore our website!!!`)
        setUserInputs({username:"",email:"",password:""})
        setTimeout(()=>{
          navigate('/login')
        },2000);

       }else{
        toast.error(result.response.data)
        setTimeout(()=>{
          setUserInputs({username:"",email:"",password:""})
        },2000);
       }
      }catch(err){
      console.log(err);
      }

    }else{
       toast.warning("please fill the form competely")
    }
  }




  //login

  const handleLogin =async (e)=>{
    e.preventDefault()
    if(userInputs.email && userInputs.password){
      //api call

      try{
        const result = await loginAPI(userInputs)
        
        if(result.status==200){
          //store existing user and token

          sessionStorage.setItem("exstingUser",JSON.stringify(result.data.existingUser))
          sessionStorage.setItem("token",result.data.token)
         toast.warning(`Welcome ${result.data.existingUser.username}...`)
         setUserInputs({username:"",email:"",password:""})
         setTimeout(()=>{
           navigate('/')
         },2000);
 
        }else{
         toast.error(result.response.data)
        
        }
       }catch(err){
       console.log(err);
       }
 
     }else{
        toast.warning("please fill the form competely")
     }
   }
  
 //return  <button onClick={() => login()}>Sign in with Google 🚀</button>;
return(
 <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
      <div className="container w-75">
       {/* <Link to={'/'} style={{textDecoration:'none'}} className='fw-bolder'>
          {" "}
          <i className='fa-solid fa-arrow-left'></i>Back to Home</Link> */}
        <div className="card shadow p-5">
         <div className="row align-items-center">
            <div className="col-lg-6">
             <img height={'300px'} src='https://static.vecteezy.com/system/resources/previews/002/437/945/large_2x/illustration-of-a-login-account-free-vector.jpg'  />
 
            </div>
            <div className="col-lg-6">
           {/* <h1 style={{ fontSize: '40px' }}><i class="fa-brands fa-pagelines"></i>Project Fair</h1> */}
             <h5 className=' fw-bolder mt-2'>
               Sign {insideRegister? 'up':'in'} to your acount
             </h5>
           
        <Form>
         {insideRegister &&
               <FloatingLabel
         controlId="floatingInput"
         label="username"
         className="mb-3"
       >  <Form.Control   value={userInputs.username} onChange={e=>setUserInputs({...userInputs,username:e.target.value})} type="text" placeholder="username" />
      
       </FloatingLabel>
 }
               <FloatingLabel
         controlId="floatingInput"
         label="Email address"
         className="mb-3"
       >
         <Form.Control value={userInputs.email} onChange={e=>setUserInputs({...userInputs,email:e.target.value})}    type="email" placeholder="name@example.com" />
       </FloatingLabel>
       <FloatingLabel controlId="floatingPassword" label="Password">
         <Form.Control value={userInputs.password} onChange={e=>setUserInputs({...userInputs,password:e.target.value})} type="password" placeholder="Password" />
       </FloatingLabel>
       {
         insideRegister?
         <div className="mt-3">
           <button onClick={handleRegister}  className='btn btn-primary mb-2'>Register</button>
           <p>Already have an Acount?Click here to <Link className='text-info' to={'/login'}>login</Link></p>
         </div>
         :
         <div className="mt-3">
           <button onClick={handleLogin}  className='btn btn-primary mb-2'>Login</button>
          <div className="mt-3"> <button className="btn btn-primary mb-2" onClick={() => login()}>Sign in with Google 🚀</button></div>
           <p>New User?Click here to  <Link className='text-info' to={'/register'}> Register</Link></p>
         </div>
 
       }
        </Form>
 
 
 
 
           </div>
         </div>
       </div>
     </div>
     <ToastContainer position='top-center' theme='colored' autoClose={3000} />
     </div>
)
 
}
export default Auth;