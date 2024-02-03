import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Expertise from "../Astrologers/Expertise"
import Skills from '../Astrologers/Skills'
import Language from '../Astrologers/Language'
import Experience from "../../Components/Astrologers/Experience";
import Price from "./Price"
import Short from './Short'
import AstrologersReaders from './AstrologersReaders'
import ExpertAstrologer from './ExpertAstrologer'
import SimpleSteps from './SimpleSteps'
import Testimonial from "../Testimonials/Testimonial";
import Faq from "../FreeKundali/Faq";
import { FaArrowRightLong } from "react-icons/fa6";
import Trusted2 from "../Footer/Trusted2";

const Astrologers = () => {
  // const [selected, setSelected] = useState("Expertise")
  // const [selected1, setSelected1] = useState("Skils")
  // const [selected2, setSelected2] = useState("Language")
  // const [selected3, setSelected3] = useState("Short")
  return (
    <>
      <div className="  md:px-10 lg:px-16 px-10 pt-3 md:pt-10">
      <div className="">
            <h2 className="flex flex-row justify-start items-center text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Lexend not-italic font-medium leading-[normal] ">Home <span className="px-3"> <FaArrowRightLong /></span> <span className="text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-inter not-italic font-medium leading-[normal]"> Talk With Astrologer</span></h2>
        </div>

        <div className="py-5  ">
          <h1 className="text-left  text-[var(--Secondry-Color,#773101)] font-Lexend text-[26px] not-italic font-semibold leading-normal">
            Astrologers
          </h1>
        </div>
       
        <AstrologersReaders />
        <ExpertAstrologer />
        <SimpleSteps />
        <Testimonial/>
        <Faq/>
      

      </div>
      <Trusted2/>
    </>
  );
};

export default Astrologers;
