import { Github, Linkedin, Mail, MailIcon, Map, Phone } from 'lucide-react'
import React, { useState } from 'react'
import emailjs from "emailjs-com";

const Contact = () => {

  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [contact, SetContact] = useState();
  const [message, SetMessage] = useState("");

  const handleSubmit=(e)=>{
e.preventDefault();

    emailjs.send(
    "service_edx47zo",//service id 
    "template_5rn9nzd",//template id 
  {
      name: name,
      email: email,
      Contact: contact,
      message: message
    },
    "eHhQDl9sPct-wk3I6"//public key
  )
  }

  return (
    <div className='bg-yellow-50'>
      <div className='m-auto w-272 p-2 mt-4 h-40 font-serif bg-white rounded-lg  shadow-lg '>
        <h1 className='text-5xl  font-bold text-center '>Get In Touch</h1>
        <p className='text-center text-lg p-2 pt-5 font-serif'>If you have any questions,feel free to get in touch with us via phone,text,email, <br /> the form below,or even on social media!!</p>
      </div>
      <div className='flex flex-row justify-center gap-5 p-8 w-screen h-200 m-auto'>
        <div className='flex flex-col p-4 w-130 bg-gray-200 rounded-xl shadow-lg h-150'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d56986.96407100279!2d80.92629290000004!3d26.786301099999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1762865330239!5m2!1sen!2sin" width="screen" height="300" className='rounded-lg ' ></iframe>
          <div className='flex flex-col gap-4  pt-4'>
            <span className='w-120 rounded-lg flex flex-row gap-4 bg-white p-1 pl-4 p h-15 '><Phone /><b> PHONE:</b> +919682256943</span>
            <span className='w-120 rounded-lg flex flex-row gap-4 bg-white p-1 pl-4 h-15'><MailIcon /> <b>EMAIL:</b> srivastavasaksham198@gmail.com</span>
            <span className='w-120 rounded-lg flex flex-row gap-4 bg-white p-1 pl-4 h-15'><Map /> <b>ADDRESS:</b> MM D1 750,LDA Colony,Kanpur road,lko-226012.</span>
          </div>

          <div className='flex flex-row justify-between  pt-4'>
            <a className='flex flex-row text-blue-900 font-bold' href="https://www.linkedin.com/in/charak-srivastava-a8a113278/"><Linkedin /> &nbsp; Linked in</a>
            <a className='flex flex-row text-blue-900 font-bold' href=""><Github />&nbsp;&nbsp;Github</a>
            <a className='flex flex-row text-blue-900 font-bold' href="https://mail.google.com/mail/u/0/#inbox"><Mail />&nbsp;&nbsp;Email</a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className='p-4 rounded-xl shadow-lg flex flex-col gap-4 bg-gray-200 w-130 h-150'>
          <div className='w-120 rounded-lg bg-white p-1 pl-4 p h-15 flex flex-col '>
            <label className='font-bold '>Name:</label>
            <input type="text" value={name} onChange={(e)=>SetName(e.target.value)} className='p-0.5' placeholder='Enter your name.' />
          </div>
          <div className='w-120 rounded-lg bg-white p-1 pl-4 p h-15 flex flex-col '>
            <label className='font-bold ' >Email:</label>
            <input type="email" value={email} onChange={(e)=>SetEmail(e.target.value)} className='p-0.5' placeholder='Enter your Email.' />
          </div >
          <div className='w-120 rounded-lg bg-white p-1 pl-4 p h-15 flex flex-col' >
            <label className='font-bold ' >Contact number:</label>
            <input type="number" value={contact} onChange={(e)=>SetContact(e.target.value)}  className='p-0.5' placeholder='Enter your Contact number.' />
          </div>
          <div className='w-120 rounded-lg bg-white p-1 pl-4 p h-65 flex flex-col'>
            <label className='font-bold '>Message:</label>
            <textarea className='h-65  p-2' value={message} onChange={(e)=>SetMessage(e.target.value)} placeholder='Please leave us your message.'></textarea>
          </div>

          <button className=' text-white border h-15  rounded-xl text-2xl font-bold mt-5 bg-red-800'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact