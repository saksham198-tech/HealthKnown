import { Key, Mail, User } from "lucide-react";
import React, { useState } from "react";
import {createUserWithEmailAndPassword, signInWithPopup} from "firebase/auth"
import {db,auth,googleProvider} from "../FireBase";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import {Link} from "react-router-dom";

const Signup = () => {

  const [form,setForm] = useState(
    {
    name:"",
    email:"",
    password:""
  }
  )


  const handleChange = (e)=>{
    console.log("here");
    
    setForm({...form,[e.target.name]:e.target.value});
  }

  const handleSubmit = async(e) =>{
    
    e.preventDefault();

   try{
     const userData = await createUserWithEmailAndPassword(auth, form.email, form.password);
     const user = userData.user; 

     await setDoc(doc(db,"user",user.uid),{
        name:form.name,
        email:form.email,
        uid: user.uid,
        createdAt: serverTimestamp()
     });

     alert("Signup Successful")
   }
   catch(err)
   {
    console.error("Error Happened: ",err.message);
    alert("Error Happened, Please try after some time")
    
   }
  }

  const  handleGoogle = async()=>{
    try{
      const data = await signInWithPopup(auth,googleProvider);
      console.log(data);
      const user=data.user;
      const ref=doc(db,"user",user.uid);
      const already= await getDoc(ref);
      if(!already.exists){
        await setDoc(ref,{name:user.displayName,
          email:user.email,
          uid:user.uid,
          createdAt:serverTimestamp()
        })
      }
      alert("Google signup Successful");

    }
    catch(err){
      console.error("error happened",err.message);
    }
  }

  return (
    <div className="bg-gradient-to-br from-yellow-200 to-white min-h-screen px-6 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h2 className="text-4xl md:text-2xl text-gray-700 mb-6 font-bold text-center">
          Create Account
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="">
            <label className="text-md md:text-md font-semibold ">
              Name:
            </label>
            <div className="flex gap-2 items-center mt-2 border rounded-md">
              <User size={26} className="m-2" />
              <input
                type="text"
                className=" py-2 bg-gray-50 outline-none w-full"
                placeholder="Enter your name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
          </div>

           <div className="">
            <label className="text-md md:text-md font-semibold ">
              Email:
            </label>
            <div className="flex gap-2 items-center mt-2 border rounded-md">
              <Mail size={26} className="m-2" />
              <input
                type="email"
                className=" py-2 bg-gray-50 outline-none w-full"
                placeholder="Enter your email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>

           <div className="">
            <label className="text-md md:text-md font-semibold  ">
              Password:
            </label>
            <div className="flex gap-2 items-center mt-2 border rounded-md">
              <Key size={26} className="m-2" />
              <input
                type="password"
                className=" py-2 bg-gray-50 outline-none w-full"
                placeholder="Enter your password"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" 
          className="px-4 py-2 bg-yellow-500 rounded-lg font-semibold text-lg shadow-lg w-full mt-6 hover:bg-yellow-400">Signup</button>
        </form>

          <button
          className="px-4 py-2 bg-blue-500 rounded-lg font-semibold text-lg shadow-lg w-full mt-6 hover:bg-blue-400" onClick={handleGoogle}>Signup with Google</button>
      
         <p className="text-center text-md mt-8">
        Already have an account?{" "}
       <Link to="/login"
       className="text-blue-500 text-semibold hover:text-blue-500">
        Login
       </Link>
      </p>
      </div>
         
    </div>
  );
};

export default Signup;