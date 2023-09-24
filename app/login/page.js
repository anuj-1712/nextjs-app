"use client"
import Link from "next/link";
import React, { useContext, useState } from "react";
import { where,getDocs,query } from "firebase/firestore";
import { usersRef } from "@/firebase/firebase";
import {useRouter} from "next/navigation"
import bcrypt from "bcryptjs";
import { Context } from "@/contextApi/contextapi";
import swal from "sweetalert";

const Login = () => {
  const [form,setForm] = useState({
    mobile_no:"",password:""
  })
  const [loading,setLoading] = useState(false)
  const {setLoggedIn,setUserName} = useContext(Context)
  const router = useRouter()

  const handleLogin = async(e) =>{
    e.preventDefault()
    try {
      setLoading(true)
      const q = query(usersRef,where("mobile_no","==",form.mobile_no))
      const querySnapShot = await getDocs(q)
      querySnapShot.forEach((doc)=>{
        const data = doc.data()
        const isform = bcrypt.compareSync(form.password,data.password)
        if(isform){
          setLoggedIn(true)
          swal({
            title:"Logged In Successfully",
            icon:"success",
            buttons:false,
            timer:3000
          })
          router.push("/")
          setLoading(false)
          setUserName(data.first_name)
        }else{
          swal({
            title:"Invalid Credentials",
            icon:"error",
            buttons:false,
            timer:3000
          })
          setLoading(false)
        }
      })
    } catch (error) {
      swal({
        title:error,
        icon:"error",
        buttons:false,
        timer:3000
      })
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-[760px]">
      <form className="flex flex-col gap-6 py-4 px-8 w-10/12 sm:w-[35%] sm:min-w-[350px] max-w-[450px] shadow-md border-2">
        <h2 className="text-2xl text-blue-600 text-center font-bold">Log In</h2>
        <input
          type="text"
          placeholder="Mobile No"
          className="outline-none w-full p-2 border-b-2"
          onChange={(e)=>setForm({...form,mobile_no:e.target.value})}
        />
        <input
          type="password"
          placeholder="Password"
          className="outline-none w-full p-2 border-b-2"
          onChange={(e)=>setForm({...form,password:e.target.value})}
        />
        <p className="self-end text-blue-500 text-sm">Forgot password?</p>
        <button className="bg-blue-500 text-white font-medium self-center rounded-md p-2 w-24" onClick={(e)=>handleLogin(e)}>
          {loading ? "checking.." :"Log in"}
        </button>
        <div className="self-center flex gap-2">
          <p className="text-red-500 text-sm">{`Don't have an account?`}</p>
          <Link href="/signin" className="text-blue-500 text-sm">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
