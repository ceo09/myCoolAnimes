"use client"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './signup'


const SignIn = () => {
    return (
            <div className="w-full h-screen bg-white rounded-md justify-center pt-32">
            <h1 className="text-center text-blue-600 text-xl font-bold px-3">Sign In To Your Account</h1>
            <h2 className="text-center text-blue-600 text-sm pb-5">Don't Have An Account? <Link to="/login" className='font-bold'>Sign Up</Link></h2>
            <form action="" className="grid justify-center">
                <label htmlFor="email" className="text-blue-600 py-3 font-Poppins">
                    E-mail
                </label>
                <input type="email" name="email" id=""className="w-[300px] h-[30px] rounded-sm p-3 mb-3 outline outline-2 outline-gray-100" />
                <label htmlFor="password" className="text-blue-600 py-3 font-Poppins">
                    Password
                </label>
                <input type="password" name="password" id="" className="w-[300px] h-[30px] rounded-sm p-3 mb-3 outline outline-2 outline-gray-100" />
                <button className="w-[300px] h-[50px] rounded-sm bg-blue-600 text-md font-Poppins text-white">Sign In</button>
                <Link><p className='text-center text-blue-600 font-Poppins text-lg p-5'>Continue with <span className='font-bold '>Google</span></p></Link>
            </form>
        </div> 
    )
}
export default SignIn;