import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const navigate=useNavigate();

    const bodyType=[
        {name:"lean",image:"https://www.quizexpo.com/wp-content/uploads/2020/10/q3-3.jpg",desc:"lean body type,for toned body"},
        {name:"Bulky", image:"https://tse1.mm.bing.net/th/id/OIP.oP5tOKJR_kojARv4nUU26wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",desc:"for muscle mass gain"},
        {name:"fit", image:"https://tse2.mm.bing.net/th/id/OIP.YLspOD3ePI6qoeAleyWG_gHaGK?w=900&h=749&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"best metabolism"},
        {name:"Athlete", image:"https://th.bing.com/th/id/OIP.q6tXGCR8F2mdvhAxvD3LVgHaLz?w=115&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",desc:"for flexible body"},
        {name:"Shreded", image:"https://th.bing.com/th/id/OIP.JEcC1d0fZg78CLWyMA568QHaE8?w=266&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",desc:"for  muscular body agility"},
        {name:"Power", image:"https://www.sixpackabs.eu/wp-content/uploads/2023/11/young-bodybuilder-in-denim-jeans-1024x683.jpg",desc:"PowerLifting strength"},
        {name:"Fatloss", image:"",desc:"Ultra fatloss and fitness"},
    ];
    const handleSelect=(item)=>{
           navigate(`/target-setup?bodyType=${item}`)
    }
  return (
    <div className='bg-gray-200 min-h-screen p-6'>
  <h1 className='text-3xl text-center font-bold text-yellow-500 mb-8'>Choose your BodyType</h1>
  <div className='grid md:grid-cols-3 gap-4 max-w-6xl mx-auto'>
   { bodyType.map((item)=>(
    <div key={item.name} className='bg-white p-6 rounded-xl text-center shadow-lg  hover:scale-105 transition-all cursor-pointer'>

        <img src={item.image}  alt={item.name} className='h-40 w-40 rounded-full object-cover mx-auto mb-4'/>
        <h2 className='text-gray-700 font-semibold text-xl'>{item.name}</h2>
        <p className='text-md mb-4 text-gray-600'>{item.desc}</p>
        <button onClick={()=>handleSelect(item.name)} className='bg-indigo-600 px-4 py-2 rounded-xl hover:bg-indigo-700 text-white'>Select</button>
    </div>
   ))}

  </div>
    </div>
  )
}

export default Dashboard