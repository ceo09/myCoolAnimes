"use client"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import app from '@/app/firebaseconfig';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from 'react';

import { FcGoogle } from "react-icons/fc";





const Login = () => {
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const [data, setData] = useState({})
const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value};
    setData({ ...data, ...newInput})
}
const google = () => {
    signInWithPopup(auth, googleProvider)
}

const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    console.log(error)
    // ..
  });
}
    return (
        <div className="w-full h-screen bg-white rounded-md justify-center pt-32">
            <h1 className="text-center text-blue-600 text-xl font-bold px-3">Sign Up To Create Account</h1>
            <h2 className="text-center text-blue-600 text-sm pb-5">Already Have An Account? <Link to="/signIn" className='font-bold'>Sign In</Link></h2>
            <form action="" className="grid justify-center">
                
                <label htmlFor="email" className="text-blue-600 py-3 font-Poppins">
                    E-mail
                </label>
                <input type="email" name="email" id="email" onChange={(event) => handleInput(event)} className="w-[300px] h-[30px] rounded-sm p-3 outline outline-2 outline-gray-100" />
                <label htmlFor="password" className="text-blue-600 py-3 font-Poppins">
                    Password
                </label>
                <input type="password" name="password" onChange={(event) => handleInput(event)} id="password" className="w-[300px] h-[30px] rounded-sm p-3 outline outline-2 outline-gray-100" />
                <button type='submit' className="w-[300px] h-[50px] rounded-sm mt-3 bg-blue-600 text-md font-Poppins text-white" onClick={handleSubmit}>Create Account</button>
                <Link className='flex justify-center text-center text-blue-600 font-Poppins font-bold text-lg p-5'><p className='' onClick={google}><FcGoogle /> Sign In Google</p></Link>
            </form>
        </div>
    )
}
export default Login;
{/* <Link><p className='text-center text-blue-600 font-Poppins font-bold text-lg p-3'>Sign In Google</p></Link> */}