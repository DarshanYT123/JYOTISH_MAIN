import React from "react";
// import Map from "./Map";
// import Map from "./Map";
// import Map from "./Map";
import FooterLinks from "./FooterLinks";

const Trusted2 = (props) => {
  return (
    <>
    <div className="pt-7 lg:px-16 px-10 ">
        <div className="py-8 flex flex-col bg-white border-[1.5px] border-[#FFA300] rounded-[6px]   px-20  ">
        <div className="flex flex-col md:flex-row  justify-between items-center py-4">
            <div className="flex flex-col justify-center items-center gap-y-2">
                <img src="/img/trusted.svg" className="w-24 md:w-16 lg:w-32" alt="" />
                <h2 className="text-[color:var(--Secondry-Color,#773101)] md:text-[16px] lg:text-[20px] font-Lexend not-italic font-medium leading-[normal]">Trusted Since 2020</h2>
            </div>
            <div className="flex flex-col justify-center items-center pt-2 gap-y-3">
            <img src="/img/happy.svg" className="w-24 md:w-16 lg:w-32" alt="" />
                <h2 className="text-[color:var(--Secondry-Color,#773101)] md:text-[16px] lg:text-[20px] font-Lexend not-italic font-medium leading-[normal]">2000 Happy Customer's</h2>
            </div>
            <div className="flex flex-col justify-center items-center pt-3 gap-y-3">
            <img src="/img/Trusted3.png" className="w-24 md:w-16 lg:w-32" alt="" />
                <h2 className="text-[color:var(--Secondry-Color,#773101)] md:text-[16px] lg:text-[20px] font-Lexend not-italic font-medium leading-[normal]">100% Money Back Gugrantee</h2>
            </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center py-4">
            <div className="flex flex-col justify-center pt-2 items-center gap-y-3 md:pl-4 lg:pl-5">
            <img src="/img/Trusted4.png" className="w-24 md:w-16 lg:w-28" alt="" />
                <h2 className="text-[color:var(--Secondry-Color,#773101)] md:text-[16px] lg:text-[20px] font-Lexend not-italic font-medium leading-[normal]">24/7 Services</h2>
            </div>
            <div className="flex flex-col justify-center pt-2 items-center gap-y-3 md:pr-4 lg:pr-10">
            <img src="/img/Trustedbg1.svg" className="w-24 md:w-16 lg:w-28" alt="" />
                <h2 className="text-[color:var(--Secondry-Color,#773101)] md:text-[16px] lg:text-[20px] font-Lexend not-italic font-medium leading-[normal]">Privacy</h2>
            </div>
            <div className="flex flex-col justify-center pt-2 items-center gap-y-3 md:pr-12 lg:pr-16">
            <img src="/img/filters-2.svg" className="w-24 md:w-16 lg:w-28" alt="" />
                <h2 className="text-[color:var(--Secondry-Color,#773101)] md:text-[16px] lg:text-[20px] font-Lexend not-italic font-medium leading-[normal]">Filter Astrologer</h2>
            </div>
            </div>
        </div>
        </div>
   
    </>
  );
};

export default Trusted2;

