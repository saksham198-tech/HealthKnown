import React from 'react'
import { motion } from 'framer-motion'
import { Plus,Dumbbell, Facebook, Instagram, Linkedin, Phone, Mail, Map, Locate, LocateIcon, MapIcon, PlusIcon, ArrowBigDown, ArrowBigDownDash, ArrowDownCircle, ArrowUpCircleIcon, ArrowRightFromLine, ArrowUpRightFromCircle, ArrowUpRightFromCircleIcon} from 'lucide-react'
import CountUp from '../components/CountUp'






const About = () => {



  return (
    <div className=' bg-gray-100 font-sans'>

      <div className=' h-160 w-screen '>
        <h1 className='font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-br to-slate-500 from-slate-700  text-6xl m-2 ml-4 rounded-md '><u>ABOUT US</u></h1>

        <div className='flex'>
          <div className='relative  m-2 h-133 w-190 '>
            <div className='absolute p-4 top-5  w-170 h-130'>
              <img className='rounded-2xl shadow-lg' src="https://th.bing.com/th/id/OIP.AQDvSr9opDFolYeJJJ7cAwHaE8?w=284&h=190&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
            </div>
            <div className='bg-blue-100  absolute ml-65  w-100 top-45 rounded-xl'>
              <img className='rounded-2xl shadow-lg p-1' src="https://th.bing.com/th/id/OIP.Yaqs6zJ1CerWmX6uGLmMEQHaEO?w=327&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
            </div>
          </div>
          <div className=' pt-15  p-4 m-2 bg-white shadow-lg mr-10 rounded-xl w-190 h-133'>
            <h2 className='font-bold text-5xl  text-black'><u>Smarter Nutrition for Stronger Results</u></h2>
            <p className=' pt-20 text-center font-semibold text-2xl text-black'>At Eat Healthy, we blend artificial intelligence with fitness science to help bodybuilders achieve their goals smarter and faster. Our platform is designed to analyze your body type, health stats, and training intensity to create a personalized diet plan that fuels your performance.</p>
          </div>
        </div>

      </div>
      <div className='flex  pt-4 m-2  w-screen  h-137'>
        <div className=' p-10 ml-20 bg-white shadow-lg rounded-xl h-133 w-150'>
          <h2 className='font-bold text-6xl text-black'><u>Our Mission</u></h2>
          <p className=' pt-10 font-semibold text-1xl text-black'>At Eat Healthy, our mission is to harness the power of artificial intelligence to simplify and elevate the bodybuilding journey.  <br /><br />
            <u> We aim to:</u> <br />
            <ul type='circle'>
              <li>Deliver personalized diet and nutrition plans tailored to each individual’s body type and goals.</li>
              <li>Integrate real-time health monitoring to ensure performance, safety, and recovery are always in balance.</li>
              <li>Provide AI-guided insights and ingredient generation for smarter, more efficient meal preparation.</li>
              <li>Create an interactive platform that motivates, educates, and supports athletes through every phase of their transformation.</li>
            </ul>
            Our commitment is to make intelligent fitness not just accessible — but essential.

          </p>
        </div>
        <div className='relative mr-30 h-133 w-190'>
          <div className='absolute p-4 ml-80  '><img className='rounded-2xl  w-130 shadow-lg  h-80' src="aboutimage.png" alt="" /></div>
          <div className='absolute bg-white ml-55 top-50 rounded-xl'><img className='rounded-2xl shadow-lg w-60 p-1' src="https://tse4.mm.bing.net/th/id/OIP.rM9QPw3FGfV2yoboGohhoQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" /></div>
        </div>

      </div>
      <div className='flex  p-4 pt-6 m-2 w-screen  h-137'>
        <div className='relative m-1 h-133 w-190 '>
          <div className='absolute p-1 top-5 w-110 h-130'><img className='rounded-xl shadow-lg  w-130  h-80' src="https://www.wtfgyms.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FmemberGoal2.463e9531.webp&w=1920&q=75" alt="" /></div>
          <div className='bg-white  absolute ml-65 top-55 rounded-xl'><img className='rounded-2xl shadow-lg w-100 h-70 p-1' src="https://www.wtfgyms.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FmemberGoal1.b94cab17.webp&w=1920&q=75" alt="" /></div>
        </div>
        <div className='  p-10 pt-20 bg-white shadow-lg mr-10 rounded-xl h-133 w-190'>
          <h2 className='font-bold text-6xl text-black'><u>Our Vision</u></h2>
          <p className=' pt-15 font-semibold text-2xl text-black'>To revolutionize bodybuilding and fitness through intelligent nutrition — empowering every athlete to reach their peak potential with the perfect blend of science, technology, and self-awareness.
            We envision a future where AI-driven health management transforms how people fuel, train, and understand their bodies — making optimal fitness a personalized, data-smart experience for everyone.

          </p>
        </div>
      </div>

      <div className='pt-3 p-4 mt-13 bg-white w-screen h-100'>

        <p className='text-center m-auto  mt-8 font-semibold text-lg w-300'>Using AI-powered insights, we monitor vital signs such as heart rate, calorie burn, and nutrient balance, ensuring your fitness journey remains safe, efficient, and data-driven. Whether you aim to bulk up, cut down, or maintain peak condition, our system adapts to your body’s changing needs in real time. </p>

        <div className='flex p-7 justify-center pt-10  gap-30'>
          <div className='w-50 h-35 shadow-lg rounded-lg bg-transparent flex flex-col justify-center items-center gap-5 '>
           <div className='flex'> <CountUp
              from={0}
              to={100}
              separator=","
              direction="up"
              duration={2}
              className="count-up-text font-semibold text-4xl text-center"
            /><PlusIcon size={30} className='mt-2' /></div>
            <h3 className='text-center text-lg '><u>Team Members</u></h3>
          </div>
          <div className='w-50 h-35 bg-transparent shadow-lg rounded-lg flex flex-col justify-center items-center gap-5 '>
          <div className='flex'> <CountUp
              from={0}
              to={100}
              separator=","
              direction="up"
              duration={2}
              className="count-up-text font-semibold text-4xl text-center"
            /><PlusIcon size={30} className='mt-2' /></div>

            <h3 className='text-center text-lg '><u>Customers</u></h3>
          </div>
          <div className='w-50 h-35 bg-transparent shadow-lg rounded-lg flex flex-col justify-center items-center gap-5 '>
            <div className='flex'> <CountUp
              from={0}
              to={100}
              separator=","
              direction="up"
              duration={2}
              className="count-up-text font-semibold text-4xl text-center"
            /><PlusIcon size={30} className='mt-2' /></div>
            <h3 className='text-center text-lg '><u>People Likes</u></h3>
          </div>
          <div className='w-50 h-35 bg-transparent shadow-lg rounded-lgs flex flex-col justify-center items-center gap-5 '>
           <div className='flex'> <CountUp
              from={0}
              to={100}
              separator=","
              direction="up"
              duration={2}
              className="count-up-text font-semibold text-4xl text-center"
            /><PlusIcon size={30} className='mt-2' /></div>
            <h3 className='text-center text-xl '><u>Reviews</u></h3>
          </div>
        </div>

      </div>
      <div className=''>
        <h1 className='font-bold text-6xl text-center p-4 pt-4'><u>Our Team Members</u></h1>
        <div className='flex justify-center gap-8 p-8 '>
          <div className='flex flex-col w-60 h-75 items-center  bg-white shadow-lg rounded-lg hover:scale-110 duration-400'>
            <img className='w-45 h-45 rounded-lg m-6 ' src="https://as2.ftcdn.net/v2/jpg/05/89/93/27/1000_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.jpg" alt="loading" />
            <h3 className='text-center text-2xl pt-2 font-semibold'>ABC</h3>
            <p className='text-gray-600'>CEO& CO-founder</p>
          </div>
          <div className='flex flex-col w-60 h-75 items-center  bg-white shadow-lg rounded-lg hover:scale-110 duration-400'>
            <img className='w-45 h-45 rounded-lg  m-6' src="https://as2.ftcdn.net/v2/jpg/05/89/93/27/1000_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.jpg" alt="loading" />
            <h3 className='text-center text-2xl pt-2 font-semibold'>PQR</h3>
            <p className='text-gray-600'>CEO& CO-founder</p>
          </div>
          <div className='flex flex-col w-60 h-75 items-center  bg-white shadow-lg rounded-lg hover:scale-110 duration-400'>
            <img className='w-45 h-45 rounded-lg  m-6 ' src="https://as2.ftcdn.net/v2/jpg/05/89/93/27/1000_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.jpg" alt="loading" />
            <h3 className='text-center text-2xl pt-2 font-semibold'>XYZ</h3>
            <p className='text-gray-600'>CEO& CO-founder</p>
          </div>

        </div>
        <div className='w-300 h-30 bg-white m-auto pl-8 pr-8 flex justify-between items-center rounded-2xl shadow-lg'>
          <h2 className='text-3xl font-bold'>Have any questions?</h2>
          <button className='font-bold flex flex-row max-wd-md:flex-col gap-0.5 pl-6 items-center text-2xl text-center rounded-lg w-50 h-14 text-white bg-red-700'>Contact us<ArrowUpRightFromCircleIcon className='mt-2'/></button>
        </div>
      </div>
      <div className='w-screen h-110 flex items-center gap-60 justify-center bg-black text-white mt-15'>
        <div className='w-60 h-75 flex flex-col justify-around gap-45 text-4xl  '>
         <div className='text-3xl p-2 shadow-lg rounded-lg bg-gray-950/10 text-green-600 flex gap-5 '>
          <Dumbbell size={40} /> <span className='text-yellow-600  font-bold'>Eat
            <span className='text-green-600'>Healthy</span>
         </span></div>
         <div className='flex  text-green-600 justify-around'>
         <a href=""><Facebook/></a>
         <a href=""><Instagram/></a>
         <a href=""><Linkedin/></a>
         </div>

        </div>
        <div className='w-60 h-75   flex-col'>
          <h2 className='font-bold text-2xl '>Quick links</h2>
          <p></p>
          <p></p>
          <p></p>

        </div>
        <div className='w-60 h-75 flex flex-col gap-3'> <h2 className='font-bold p-2 pb-9 text-2xl '>Contact</h2>
        <p className='flex gap-2 pl-2'><Phone/>+9682256943</p>
        <p className='flex gap-2 pl-2'><Mail/>XYZ@gmail.com</p>
        <p className='flex gap-2 pl-2'><MapIcon/>MM D1 474,LDA <br /> colony, kanpur <br /> road,Lko-226012</p>
        </div>
       
      </div>



    </div>

  )
}

export default About
