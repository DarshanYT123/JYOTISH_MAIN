import React,{ useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Expertise from "./Experience"
import Skills from './Skills'
import Language from './Language'
import Experience from "./Experience";
import Price from "./Price"
import Short from './Short'
import AstrologersReaders from './AstrologersReaders'
import ExpertAstrologer from './ExpertAstrologer'
import SimpleSteps from './SimpleSteps'
import Testimonial from "../Testimonials/Testimonial";

const Astrologers = () => {
  // const [selected, setSelected] = useState("Expertise")
  // const [selected1, setSelected1] = useState("Skils")
  // const [selected2, setSelected2] = useState("Language")
  // const [selected3, setSelected3] = useState("Short")
  return (
    <>
      <div className=" px-6 md:px-10 lg:px-16 pt-10">
        <div className="flex gap-1 items-left justify-left font-Lexend text-[#3A3A3A] text-[14px]  not-italic font-medium leading-normal ">
          Home <AiOutlineArrowRight size={20} /> Chat with astrologer
        </div>

        <div className="py-5  ">
          <h1 className="text-left  text-[var(--Secondry-Color,#773101)] font-Lexend text-[26px] not-italic font-semibold leading-normal">
          Astrologers 
          </h1>
        </div>
        <div className="border bg-[#04B4DB] rounded-[5px] w-[1372] h-[65px]">
            <div className="flex flex-row  gap-10   py-4 ">
                <div className="  ">
                    <h1 className="text-[#FFF] px-2 ">FilterBy: </h1> 
                 
                </div>
               <div>
                {/* <Expertise selected={selected} setSelected={setSelected}/> */}
                <Expertise/>
                </div>
               <div>
                {/* <Skills selected1={selected1} setSelected1={setSelected1}/> */}
                <Skills/>
                </div>
                <div className="">
                <Experience/>
                </div>
                <div className="">
                {/* <Language selected2={selected2} setSelected2={setSelected2}/> */}
                <Language/>
                </div>
                <div className="">
                <Price progresspricePercentage={50}/>
                </div>
                <div className="">
                {/* <Short selected3={selected3} setSelected3={setSelected3}/> */}
                <Short/>
                </div>
                <div className=" relative">
            <form className="flex items-center  ">   
    <label for="simple-search" className="sr-only">Search</label>
    <div className=" w-full">
       
        <input type="text" id="simple-search" className="rounded-[6px] bg-[#FFF] p-10 pt-2 py-2 text-[14px] not-italic  font-normal leading-normal focus:ring-blue-500 focus:border-blue-500 block" placeholder="Search Astrologer" required/>


        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" className="absolute  top-[6px] bottom-0 right-0 left-[200px]">
<path d="M11 2.69998C15.968 2.69998 20 6.73198 20 11.7C20 16.668 15.968 20.7 11 20.7C6.032 20.7 2 16.668 2 11.7C2 6.73198 6.032 2.69998 11 2.69998ZM11 18.7C14.867 18.7 18 15.567 18 11.7C18 7.83198 14.867 4.69998 11 4.69998C7.132 4.69998 4 7.83198 4 11.7C4 15.567 7.132 18.7 11 18.7ZM19.485 18.771L22.314 21.599L20.899 23.014L18.071 20.185L19.485 18.771Z" fill="#A2A2A2"/>
</svg>
    </div>
  
</form>  
</div> 
               

                
            </div>
           
        </div>

        <AstrologersReaders/>
        <ExpertAstrologer/>
        <SimpleSteps/>
        <Testimonial/>
      </div>
    </>
  );
};

export default Astrologers;
