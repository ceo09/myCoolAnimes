// Import necessary modules and components
"use client"
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { RiAccountCircleFill } from 'react-icons/ri';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import Image from 'next/image';
import AnimeGrid from '@/components/moviesGrid';
import Login from '@/components/authentication/signup';
import SignIn from '@/components/authentication/signIn';
import Posts from '@/components/posts';
import MoviePage from '@/components/moviePage';
import Footer from '@/components/footer';
import { app } from './firebaseconfig';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [menu, toggleMenu] = useState(false);

  const handleMenu = () => {
    toggleMenu(!menu);
  };

  const handleToggleDropdown = () => {
    setOpen(!open);
  };

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const googleAuth = async () => {
    try {
      const authen = await signInWithPopup(auth, googleProvider);
      const user = authen.user;
      console.log(user);
    } catch (error) {
      console.error('Google Sign In Error:', error);
    }
  };

  const logOut = () => {
    signOut(auth);
  };

  // Replace 'photoURL' with the actual field from your user object
  const userPhotoURL = auth.currentUser ? auth.currentUser.photoURL : ''; 

  return (
    <Router>
      <div className="shadow-md w-full fixed top-0 left-0">
        {/* Header Section */}
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div className="text-black text-2xl cursor-pointer flex-items-center font-Poppins pl-2">
            <Link to="/">
              <p className="text-xl text-blue-600 font-Poppins font-bold">AnimeBox</p>
            </Link>
          </div>
          <div
            onClick={handleToggleDropdown}
            className="text-xl text-blue-600 absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <GiHamburgerMenu />
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto 2-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? 'top-19' : 'top-[-490px]'
            }`}
          >
            {/* Notifications */}
            <div className="p-3 text-xl relative md:mx-5">
              <IoNotificationsOutline />
              <span className="bg-red-600 text-white font-Poppins text-center w-5 h-5 rounded-full text-sm absolute md:top-1 md:right-1 sm: -top-1 sm:-right-1">
                2
              </span>
            </div>

            {/* User Dropdown */}
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-white px-3 py-2 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  onClick={handleMenu}
                >
                  <Image src={userPhotoURL} width={40} height={40} className="w-7 h-7 rounded-full" alt="User Profile" />
                </button>
              </div>
              {menu && (
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Link className="text-gray-700 block px-4 py-2 text-sm" to="/account-settings">
                      Account Settings
                    </Link>

                    <Link className="text-gray-700 block px-4 py-2 text-sm" to="/posts">
                      Posts
                    </Link>
                    
                    <Link className="text-gray-700 block px-4 py-2 text-sm" to="/create">
                      Create
                    </Link>

                    <button
                      type="submit"
                      className="signin text-gray-700 block w-full px-4 py-2 text-left text-sm"
                      onClick={googleAuth}
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<AnimeGrid />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/anime/:id" element={<MoviePage />} />
      </Routes>
    </Router>
  );
}
