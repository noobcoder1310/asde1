import React from 'react'

import Home from'./home/Home'
import Courses from'./courses/Course'
import { Route,Routes,Navigate} from "react-router-dom"
import SignUp from './components/SignUp'
import Contact from './components/Contact'
import {Toaster} from "react-hot-toast"
import { useAuth } from './context/AuthProvider'

function App() {
  const [authUser,setAuthUser]=useAuth();
   {
    console.log(authUser);
    console.log(setAuthUser);
  }

  return (
    <>
    
   {/* <Home/>
   <Course/>*/
  }
   <div className="dark:bg-slate-900 dark:text-white">
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup"/>}/>
    <Route path="/signup" element={<SignUp />}/>
    <Route path="/contact" element={< Contact />}/>
    


    
   </Routes>
   <Toaster/>
   </div>
   </>
   
  )
};
   

export default App

