import React,{useState} from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import KundaliDob from './KundaliDob'
import FuturePrediction from './FuturePrediction'
import Trusted from "../Footer/Trusted";

const FreeKundali = () => {
  return (
    <>
    <div className=" md:px-10 px-10 lg:px-16">
        <div className="pt-14">
            <h2 className="flex flex-row justify-start items-center text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Lexend not-italic font-medium leading-[normal] ">Home <span className="px-3"> <FaArrowRightLong /></span> <span className="text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-inter not-italic font-medium leading-[normal]"> Talk With Astrologer</span></h2>
        </div>
    <div className="py-5 md:py-5">
    <h1 className=" text-left text-[var(--Secondry-Color,#773101)] font-Lexend text-[18px] md:text-[26px] not-italic font-semibold leading-normal">
    Free Kundali
        </h1>
  </div>
<div className="flex flex-col md:flex-col lg:flex-row justify-between items-center gap-x-6 ">
  <div className="md:p-8 lg:p-0">
    <img src="/img/dhyan.svg" className="md:w-[25rem] lg:w-[100rem]" />
  </div>
    <div className=" space-y-6  py-5 md:py-0 ">
<h2 className="text-start md:text-justify lg:text-start  text-[color:var(--Black-text-color,#3A3A3A)] text-[18px] not-italic font-Lexend font-medium leading-[normal] tracking-[0.36px]">Get instant & accurate, Janam Kundli</h2>
<h2 className="text-start  text-[color:var(--Black-text-color,#3A3A3A)] text-base not-italic font-medium leading-[25px] tracking-[0.32px]">Kundli is the term used for Birth Chart in Vedic Astrology. Twelve houses of Kundli show ascendant and planet position in various zodiac signs at the time of birth seen from the place of birth.</h2>
<h2 className="text-start  text-[color:var(--Black-text-color,#3A3A3A)] text-base not-italic font-medium leading-[25px] tracking-[0.32px]">Kundli is the term used for Birth Chart in Vedic Astrology. Twelve houses of Kundli show ascendant and planet position in various zodiac signs at the time of birth seen from the place of birth, in various zodiac signs at their various zodiac signs at the time.</h2>
<h2 className="text-start  text-[color:var(--Black-text-color,#3A3A3A)] text-[18px] not-italic font-Lexend font-medium leading-[normal] tracking-[0.36px]">Kundli is the term used for Birth Chart in Vedic Astrology.</h2>
<h2 className="text-start  text-[color:var(--Black-text-color,#3A3A3A)]  font-Poppins text-base not-italic font-medium leading-[30px] tracking-[0.24px]">Talking about future predictions, the kundali catered by Astrotalk to you is such that it considers the movement .</h2>
<h2 className="text-start  text-[color:var(--Black-text-color,#3A3A3A)] font-Poppins text-base not-italic font-medium leading-[25px] tracking-[0.24px]">Talking about future predictions, the kundali catered by Astrotalk to you is such that it considers the movement of all the planets in the native's life from the beginning of his or her life till as far as 100 years. </h2>
    </div>
    </div>
    
        <KundaliDob />
        <FuturePrediction/>
        
</div>
<Trusted/>
</>   
  );
};

export default FreeKundali
