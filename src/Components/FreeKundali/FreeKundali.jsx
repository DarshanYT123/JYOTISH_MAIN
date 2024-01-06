import React,{useState} from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import KundaliDob from './KundaliDob'
import FuturePrediction from './FuturePrediction'

const FreeKundali = () => {
  return (
    <div className="px-16">
        <div className="pt-14">
            <h2 className="flex flex-row justify-start items-center text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Lexend not-italic font-medium leading-[normal] ">Home <span className="px-3"> <FaArrowRightLong /></span> <span className="text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-inter not-italic font-medium leading-[normal]"> Talk With Astrologer</span></h2>
        </div>
    <div className="py-5 md:py-5">
    <h1 className=" text-left text-[var(--Secondry-Color,#773101)] font-Lexend text-[18px] md:text-[26px] not-italic font-semibold leading-normal">
    Free Kundali
        </h1>
  </div>

    <div className="">
        <h2 className=" text-start text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] font-Lexend not-italic font-medium leading-[normal] tracking-[0.24px]">Kundli is the term used for Birth Chart in Vedic Astrology. Twelve houses of Kundli show ascendant and planet position in various zodiac signs at the time of birth seen from the place of birth.</h2>
        <h2 className="py-3 text-start text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] font-Lexend not-italic font-medium leading-[normal] tracking-[0.24px]">Talking about future predictions, the kundali catered by Astrotalk to you is such that it considers the movement of all the planets in the native's life from the beginning of his or her life till as far as 100 years. Doing so helps you understand the reasons behind not only the ongoing circumstances but also what's to come for you in the future. So if in any way you are confused about life, the online kundli can be your saviour. Having said that, make sure you try the free online kundli, and let us know what you feel about it.</h2>
    </div>
    
        <KundaliDob />
        <FuturePrediction/>
</div>   
  );
};

export default FreeKundali
