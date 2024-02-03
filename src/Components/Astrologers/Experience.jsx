import React ,{useState}  from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
// import ProgressBar from './ProgressBar'
import '../../index.css'
 
const Experience = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };
  return (
    <>
    <div class="group relative inline-block text-left"  >
       <div>
         <button
           // onClick={handleClick}
           type="button"
           id="menu-button"
           aria-expanded="true"
           aria-haspopup="true"
         >
           <div className=''>
             <section className="inline-flex gap-1 items-center text-left cursor-pointer">
               <h3 className=" lg:text-[18px] md:text-[16px] text-[#FFFF]">Experience
               <IoMdArrowDropdown size={15} className='text-white absolute lg:bottom-[0.1rem] lg:left-[5.5rem] md:bottom-[0.1rem] md:left-[5rem] h-5 w-5'/>
               </h3>
             </section>
           </div>
         </button>
       </div>
 
       
         
         <div class=" absolute top-[40px] -right-[80] z-10 mt-2 w-56 h-56 border border-[#0000] origin-top-right rounded-md bg-white shadow-lg pt-10 py-10 invisible   transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
           <div className="flex items-center justify-center">
             <span className='font-Lexend text-[1rem] not-italic font-medium leading-[199%] capitalize text-[#3A3A3A]'> Experience In Years</span>
           </div>
          <div className='w-50 mt-4 px-3'>
             {/* <ProgressBar progressPercentage={50} /> */}
             <input
         type="range"
         min="0"
         max="100"
         value={sliderValue}
         onChange={handleSliderChange}
         className='    rounded-full ' 
       />
       {/* <p>Selected Value: {sliderValue}</p> */}
           </div>
           <div className="flex gap-28 text-right px-3 pt-1">
                 <span>{sliderValue}</span>
                 <span>Above 20</span>
 
 
             </div>
           <div className="pt-8 text-[#FFA300] flex items-center justify-center">
                 <span>{sliderValue} years</span>
 
             </div>
       </div>
 
      
     </div>
 
  
    </>
  )
}

export default Experience