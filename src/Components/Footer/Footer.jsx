import React from "react";
// import Map from "./Map";
// import Map from "./Map";
// import Map from "./Map";
import FooterLinks from "./FooterLinks";

const Footer = (props) => {
  // const yearSpan = document.querySelector('#currentYear')
  // const currentYear = new Date();
  // yearSpan.innerText = currentYear.getFullYear()
  const year = new Date().getFullYear()
  return (
    <>
    {/* <div className="pt-7 lg:px-16 px-10 ">
        <div className="flex flex-col lg:flex-row bg-white md:flex-row md:gap-y-0 gap-y-5 py-6 md:py-3 lg:py-6 border-[1.5px] border-[#FFA300] rounded-[6px] justify-between items-center md:px-10 lg:px-20">
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
            <div className="flex flex-col justify-center pt-2 items-center gap-y-3">
            <img src="/img/Trusted4.png" className="w-24 md:w-16 lg:w-28" alt="" />
                <h2 className="text-[color:var(--Secondry-Color,#773101)] md:text-[16px] lg:text-[20px] font-Lexend not-italic font-medium leading-[normal]">24/7 Services</h2>
            </div>
        </div>
        </div> */}
      <div className="flex flex-col items-center mt-10 ">
      <div className="lg:px-16 px-10">
      <div className="flex flex-col gap-y-2.5 justify-start items-start">
            <span className="text-[color:var(--Secondry-Color,#773101)]  text-start text-[18px] md:text-[20px] font-Lexend not-italic font-bold leading-[normal]">
            About Jyotishsastram
                        </span>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="190" height="4" viewBox="0 0 190 4" fill="none">
  <path d="M1.5 2H188.5" stroke="#FFA300" stroke-width="3" stroke-linecap="round"/>
</svg></div>
<p className="text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] text-start font-Poppins lg:text-start not-italic font-normal leading-7 tracking-[0.48px]">Jyotishsastram is the best astrology website for online Astrology predictions. Talk to Astrologer on call and get answers to all your worries by seeing the future life through Astrology Kundli Predictions from the best Astrologers from India. Get best future predictions related to Marriage, love life, Career or Health over call, chat, query or report.</p>
          </div>

        <FooterLinks />
      </div>
      <div className=" py-2 lg:px-[30rem] border-t-[#A1A1A1] border-t-[2px] ">
        <p id="currentYear" className="text-[color:var(--Black-text-color,#3A3A3A)] text-[12px] md:text-[14px] whitespace-nowrap font-Lexend not-italic font-semibold leading-[203%]">
        Copyright © {year} All Rights Reserved by Jyotishsastram  
               </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

const OurOffice = ({ theme }) => {
  return (
    <div className="flex flex-col lg:items-center justify-center w-full px-10 xl:hidden">
      <div className="mb-12 mx-auto">
        <p className="text-title uppercase">Our Offices</p>
      </div>
      {/* <div className="flex flex-col lg:flex-row items-center lg:gap-x-20 mx-auto gap-y-10"> */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 grid-cols-1 lg:flex-row items-center gap-20 mx-auto">
        {/* India */}
        <div className="flex flex-col items-start w-full">
          <div className="bg-gradient-to-r from-[#F05225] to-[#EEA820] rounded-full py-1.5 px-8 text-center text-white">
            <p className="uppercase font-semibold text-description">
              Head Office
            </p>
          </div>
          <div className="mt-5 lg:mt-10">
            <div className="flex items-start gap-x-4">
              <svg
                width="15"
                height="17"
                viewBox="0 0 15 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.185303 7.29212C0.185303 3.50517 3.34987 0.444336 7.17772 0.444336C11.0164 0.444336 14.1809 3.50517 14.1809 7.29212C14.1809 9.20041 13.4869 10.972 12.3446 12.4736C11.0844 14.13 9.53122 15.5732 7.78291 16.706C7.38277 16.9678 7.02166 16.9875 6.5825 16.706C4.82423 15.5732 3.271 14.13 2.02161 12.4736C0.878485 10.972 0.185303 9.20041 0.185303 7.29212ZM4.87329 7.50536C4.87329 8.77399 5.9085 9.77176 7.17781 9.77176C8.44796 9.77176 9.49312 8.77399 9.49312 7.50536C9.49312 6.24661 8.44796 5.20026 7.17781 5.20026C5.9085 5.20026 4.87329 6.24661 4.87329 7.50536Z"
                  fill={theme === "light" ? "black" : "white"}
                />
              </svg>
              <p className="text-description capitalize">
                G-10 Parasmant Flat, <br />
                Nr. Karmachari Nagar, Rannapark, <br />
                Ahmedabad - 380061
              </p>
            </div>
            <div className="flex items-center gap-x-4 mt-5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.45855 3.43123C9.10308 3.36557 8.77661 3.59242 8.70894 3.93941C8.64126 4.2864 8.86883 4.62518 9.21463 4.69309C10.2558 4.89606 11.0597 5.70197 11.2634 6.74667V6.74742C11.3214 7.04814 11.5862 7.26679 11.8911 7.26679C11.932 7.26679 11.9729 7.26305 12.0145 7.25559C12.3603 7.18619 12.5879 6.84816 12.5202 6.50042C12.2161 4.94008 11.0151 3.73494 9.45855 3.43123Z"
                  fill={theme === "light" ? "black" : "white"}
                />
                <path
                  d="M9.41196 0.831117C9.24538 0.807238 9.07805 0.856488 8.94494 0.962451C8.8081 1.06991 8.72258 1.22512 8.70399 1.39899C8.66457 1.75045 8.91817 2.06834 9.26918 2.10789C11.6898 2.37802 13.5713 4.26371 13.8435 6.6919C13.8799 7.01725 14.1528 7.26275 14.4786 7.26275C14.5031 7.26275 14.5269 7.26126 14.5515 7.25828C14.7218 7.23962 14.8735 7.1553 14.9805 7.02098C15.0869 6.88666 15.1352 6.71951 15.1159 6.54862C14.7768 3.51899 12.432 1.16766 9.41196 0.831117Z"
                  fill={theme === "light" ? "black" : "white"}
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.92956 8.64491C9.90832 11.6228 10.5841 8.1777 12.4807 10.073C14.3091 11.9009 15.36 12.2672 13.0434 14.5831C12.7532 14.8163 10.9095 17.622 4.43016 11.1444C-2.05001 4.66605 0.754 2.82047 0.987267 2.53037C3.30951 0.207965 3.66944 1.26499 5.4979 3.09294C7.39449 4.98901 3.9508 5.66697 6.92956 8.64491Z"
                  fill={theme === "light" ? "black" : "white"}
                />
              </svg>
              <p className="text-description capitalize">+91 9909918930</p>
            </div>
          </div>
        </div>
        {/* Toronto */}
        <div className="flex flex-col items-start w-full mt-5 lg:my-0">
          <div className="bg-gradient-to-r from-[#0038FF] to-[#3A86FF] rounded-full py-1.5 px-8 text-center text-white">
            <p className="uppercase font-semibold text-description">
              SALES & MARKETING
            </p>
          </div>
          <div className="mt-5 lg:mt-10">
            <div className="flex items-start gap-x-4">
              <svg
                width="15"
                height="17"
                viewBox="0 0 15 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.185303 7.29212C0.185303 3.50517 3.34987 0.444336 7.17772 0.444336C11.0164 0.444336 14.1809 3.50517 14.1809 7.29212C14.1809 9.20041 13.4869 10.972 12.3446 12.4736C11.0844 14.13 9.53122 15.5732 7.78291 16.706C7.38277 16.9678 7.02166 16.9875 6.5825 16.706C4.82423 15.5732 3.271 14.13 2.02161 12.4736C0.878485 10.972 0.185303 9.20041 0.185303 7.29212ZM4.87329 7.50536C4.87329 8.77399 5.9085 9.77176 7.17781 9.77176C8.44796 9.77176 9.49312 8.77399 9.49312 7.50536C9.49312 6.24661 8.44796 5.20026 7.17781 5.20026C5.9085 5.20026 4.87329 6.24661 4.87329 7.50536Z"
                  fill={theme === "light" ? "black" : "white"}
                />
              </svg>
              <p className="text-description capitalize">Ontario, Toronto</p>
            </div>
            <div className="flex items-center gap-x-4 mt-5 cursor-pointer">
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.1247 0.626953C12.0631 0.626953 12.9658 0.997837 13.6299 1.66333C14.2947 2.32742 14.6663 3.22314 14.6663 4.16084V9.68911C14.6663 11.6415 13.0778 13.223 11.1247 13.223H4.21154C2.25846 13.223 0.670654 11.6415 0.670654 9.68911V4.16084C0.670654 2.20846 2.25146 0.626953 4.21154 0.626953H11.1247ZM12.238 5.20358L12.2939 5.14759C12.4612 4.94466 12.4612 4.65075 12.2862 4.44781C12.189 4.34355 12.0553 4.27987 11.9161 4.26587C11.7691 4.25817 11.6292 4.30786 11.5235 4.40583L8.36818 6.92503C7.96231 7.26163 7.38079 7.26163 6.96862 6.92503L3.81961 4.40583C3.60198 4.24488 3.30107 4.26587 3.11983 4.45481C2.93089 4.64375 2.90989 4.94466 3.07014 5.15459L3.16181 5.24556L6.34581 7.72978C6.73769 8.03769 7.21284 8.20563 7.71039 8.20563C8.20653 8.20563 8.69008 8.03769 9.08125 7.72978L12.238 5.20358Z"
                  fill={theme === "light" ? "black" : "white"}
                />
              </svg>
              <a
                className="text-description capitalize"
                href="mailto:ca_sales@pruthatek.com"
              >
                Ca_sales@pruthatek.com
              </a>
            </div>
            <div className="flex items-center gap-x-4 mt-5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.45855 3.43123C9.10308 3.36557 8.77661 3.59242 8.70894 3.93941C8.64126 4.2864 8.86883 4.62518 9.21463 4.69309C10.2558 4.89606 11.0597 5.70197 11.2634 6.74667V6.74742C11.3214 7.04814 11.5862 7.26679 11.8911 7.26679C11.932 7.26679 11.9729 7.26305 12.0145 7.25559C12.3603 7.18619 12.5879 6.84816 12.5202 6.50042C12.2161 4.94008 11.0151 3.73494 9.45855 3.43123Z"
                  fill={theme === "light" ? "black" : "white"}
                />
                <path
                  d="M9.41196 0.831117C9.24538 0.807238 9.07805 0.856488 8.94494 0.962451C8.8081 1.06991 8.72258 1.22512 8.70399 1.39899C8.66457 1.75045 8.91817 2.06834 9.26918 2.10789C11.6898 2.37802 13.5713 4.26371 13.8435 6.6919C13.8799 7.01725 14.1528 7.26275 14.4786 7.26275C14.5031 7.26275 14.5269 7.26126 14.5515 7.25828C14.7218 7.23962 14.8735 7.1553 14.9805 7.02098C15.0869 6.88666 15.1352 6.71951 15.1159 6.54862C14.7768 3.51899 12.432 1.16766 9.41196 0.831117Z"
                  fill={theme === "light" ? "black" : "white"}
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.92956 8.64491C9.90832 11.6228 10.5841 8.1777 12.4807 10.073C14.3091 11.9009 15.36 12.2672 13.0434 14.5831C12.7532 14.8163 10.9095 17.622 4.43016 11.1444C-2.05001 4.66605 0.754 2.82047 0.987267 2.53037C3.30951 0.207965 3.66944 1.26499 5.4979 3.09294C7.39449 4.98901 3.9508 5.66697 6.92956 8.64491Z"
                  fill={theme === "light" ? "black" : "white"}
                />
              </svg>
              <p className="text-description capitalize">+1 (705) 772-2734</p>
            </div>
          </div>
        </div>
        {/* SEA */}
        <div className="flex flex-col items-start w-full mt-5 lg:my-0">
          <div className="bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E] rounded-full py-1.5 px-8 text-center text-white">
            <p className="uppercase font-semibold text-description">
              SALES & MARKETING
            </p>
          </div>
          <div className="mt-5 lg:mt-10">
            <div className="flex items-start gap-x-4">
              <svg
                width="15"
                height="17"
                viewBox="0 0 15 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.185303 7.29212C0.185303 3.50517 3.34987 0.444336 7.17772 0.444336C11.0164 0.444336 14.1809 3.50517 14.1809 7.29212C14.1809 9.20041 13.4869 10.972 12.3446 12.4736C11.0844 14.13 9.53122 15.5732 7.78291 16.706C7.38277 16.9678 7.02166 16.9875 6.5825 16.706C4.82423 15.5732 3.271 14.13 2.02161 12.4736C0.878485 10.972 0.185303 9.20041 0.185303 7.29212ZM4.87329 7.50536C4.87329 8.77399 5.9085 9.77176 7.17781 9.77176C8.44796 9.77176 9.49312 8.77399 9.49312 7.50536C9.49312 6.24661 8.44796 5.20026 7.17781 5.20026C5.9085 5.20026 4.87329 6.24661 4.87329 7.50536Z"
                  fill={theme === "light" ? "black" : "white"}
                />
              </svg>
              <p className="text-description capitalize">
                SEA, South East Asia
              </p>
            </div>
            <div className="flex items-center gap-x-4 mt-5 cursor-pointer">
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.1247 0.626953C12.0631 0.626953 12.9658 0.997837 13.6299 1.66333C14.2947 2.32742 14.6663 3.22314 14.6663 4.16084V9.68911C14.6663 11.6415 13.0778 13.223 11.1247 13.223H4.21154C2.25846 13.223 0.670654 11.6415 0.670654 9.68911V4.16084C0.670654 2.20846 2.25146 0.626953 4.21154 0.626953H11.1247ZM12.238 5.20358L12.2939 5.14759C12.4612 4.94466 12.4612 4.65075 12.2862 4.44781C12.189 4.34355 12.0553 4.27987 11.9161 4.26587C11.7691 4.25817 11.6292 4.30786 11.5235 4.40583L8.36818 6.92503C7.96231 7.26163 7.38079 7.26163 6.96862 6.92503L3.81961 4.40583C3.60198 4.24488 3.30107 4.26587 3.11983 4.45481C2.93089 4.64375 2.90989 4.94466 3.07014 5.15459L3.16181 5.24556L6.34581 7.72978C6.73769 8.03769 7.21284 8.20563 7.71039 8.20563C8.20653 8.20563 8.69008 8.03769 9.08125 7.72978L12.238 5.20358Z"
                  fill={theme === "light" ? "black" : "white"}
                />
              </svg>
              <a
                className="text-description capitalize"
                href="mailto:sea_sales@pruthatek.com"
              >
                Sea_sales@pruthatek.com
              </a>
            </div>
            <div className="flex items-center gap-x-4 mt-5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.45855 3.43123C9.10308 3.36557 8.77661 3.59242 8.70894 3.93941C8.64126 4.2864 8.86883 4.62518 9.21463 4.69309C10.2558 4.89606 11.0597 5.70197 11.2634 6.74667V6.74742C11.3214 7.04814 11.5862 7.26679 11.8911 7.26679C11.932 7.26679 11.9729 7.26305 12.0145 7.25559C12.3603 7.18619 12.5879 6.84816 12.5202 6.50042C12.2161 4.94008 11.0151 3.73494 9.45855 3.43123Z"
                  fill={theme === "light" ? "black" : "white"}
                />
                <path
                  d="M9.41196 0.831117C9.24538 0.807238 9.07805 0.856488 8.94494 0.962451C8.8081 1.06991 8.72258 1.22512 8.70399 1.39899C8.66457 1.75045 8.91817 2.06834 9.26918 2.10789C11.6898 2.37802 13.5713 4.26371 13.8435 6.6919C13.8799 7.01725 14.1528 7.26275 14.4786 7.26275C14.5031 7.26275 14.5269 7.26126 14.5515 7.25828C14.7218 7.23962 14.8735 7.1553 14.9805 7.02098C15.0869 6.88666 15.1352 6.71951 15.1159 6.54862C14.7768 3.51899 12.432 1.16766 9.41196 0.831117Z"
                  fill={theme === "light" ? "black" : "white"}
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.92956 8.64491C9.90832 11.6228 10.5841 8.1777 12.4807 10.073C14.3091 11.9009 15.36 12.2672 13.0434 14.5831C12.7532 14.8163 10.9095 17.622 4.43016 11.1444C-2.05001 4.66605 0.754 2.82047 0.987267 2.53037C3.30951 0.207965 3.66944 1.26499 5.4979 3.09294C7.39449 4.98901 3.9508 5.66697 6.92956 8.64491Z"
                  fill={theme === "light" ? "black" : "white"}
                />
              </svg>
              <p className="text-description capitalize">+1 (705) 772-2734</p>
            </div>
          </div>
        </div>
        {/* Australia */}
        <div className="flex flex-col items-start w-full mt-5 lg:my-0">
          <div className="bg-gradient-to-r from-[#E10E8C] to-[#520C43] rounded-full py-1.5 px-8 text-center text-white">
            <p className="uppercase font-semibold text-description">
              SALES & MARKETING
            </p>
          </div>
          <div className="mt-5 lg:mt-10">
            <div className="flex items-start gap-x-4">
              <svg
                width="15"
                height="17"
                viewBox="0 0 15 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.185303 7.29212C0.185303 3.50517 3.34987 0.444336 7.17772 0.444336C11.0164 0.444336 14.1809 3.50517 14.1809 7.29212C14.1809 9.20041 13.4869 10.972 12.3446 12.4736C11.0844 14.13 9.53122 15.5732 7.78291 16.706C7.38277 16.9678 7.02166 16.9875 6.5825 16.706C4.82423 15.5732 3.271 14.13 2.02161 12.4736C0.878485 10.972 0.185303 9.20041 0.185303 7.29212ZM4.87329 7.50536C4.87329 8.77399 5.9085 9.77176 7.17781 9.77176C8.44796 9.77176 9.49312 8.77399 9.49312 7.50536C9.49312 6.24661 8.44796 5.20026 7.17781 5.20026C5.9085 5.20026 4.87329 6.24661 4.87329 7.50536Z"
                  fill={theme === "light" ? "black" : "white"}
                />
              </svg>
              <p className="text-description capitalize">Australia</p>
            </div>
            <div className="flex items-center gap-x-4 mt-5 cursor-pointer">
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.1247 0.626953C12.0631 0.626953 12.9658 0.997837 13.6299 1.66333C14.2947 2.32742 14.6663 3.22314 14.6663 4.16084V9.68911C14.6663 11.6415 13.0778 13.223 11.1247 13.223H4.21154C2.25846 13.223 0.670654 11.6415 0.670654 9.68911V4.16084C0.670654 2.20846 2.25146 0.626953 4.21154 0.626953H11.1247ZM12.238 5.20358L12.2939 5.14759C12.4612 4.94466 12.4612 4.65075 12.2862 4.44781C12.189 4.34355 12.0553 4.27987 11.9161 4.26587C11.7691 4.25817 11.6292 4.30786 11.5235 4.40583L8.36818 6.92503C7.96231 7.26163 7.38079 7.26163 6.96862 6.92503L3.81961 4.40583C3.60198 4.24488 3.30107 4.26587 3.11983 4.45481C2.93089 4.64375 2.90989 4.94466 3.07014 5.15459L3.16181 5.24556L6.34581 7.72978C6.73769 8.03769 7.21284 8.20563 7.71039 8.20563C8.20653 8.20563 8.69008 8.03769 9.08125 7.72978L12.238 5.20358Z"
                  fill={theme === "light" ? "black" : "white"}
                />
              </svg>
              <a
                className="text-description capitalize"
                href="mailto:au_sales@pruthatek.com"
              >
                Au_sales@pruthatek.com
              </a>
            </div>
            <div className="flex items-center gap-x-4 mt-5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.45855 3.43123C9.10308 3.36557 8.77661 3.59242 8.70894 3.93941C8.64126 4.2864 8.86883 4.62518 9.21463 4.69309C10.2558 4.89606 11.0597 5.70197 11.2634 6.74667V6.74742C11.3214 7.04814 11.5862 7.26679 11.8911 7.26679C11.932 7.26679 11.9729 7.26305 12.0145 7.25559C12.3603 7.18619 12.5879 6.84816 12.5202 6.50042C12.2161 4.94008 11.0151 3.73494 9.45855 3.43123Z"
                  fill={theme === "light" ? "black" : "white"}
                />
                <path
                  d="M9.41196 0.831117C9.24538 0.807238 9.07805 0.856488 8.94494 0.962451C8.8081 1.06991 8.72258 1.22512 8.70399 1.39899C8.66457 1.75045 8.91817 2.06834 9.26918 2.10789C11.6898 2.37802 13.5713 4.26371 13.8435 6.6919C13.8799 7.01725 14.1528 7.26275 14.4786 7.26275C14.5031 7.26275 14.5269 7.26126 14.5515 7.25828C14.7218 7.23962 14.8735 7.1553 14.9805 7.02098C15.0869 6.88666 15.1352 6.71951 15.1159 6.54862C14.7768 3.51899 12.432 1.16766 9.41196 0.831117Z"
                  fill={theme === "light" ? "black" : "white"}
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.92956 8.64491C9.90832 11.6228 10.5841 8.1777 12.4807 10.073C14.3091 11.9009 15.36 12.2672 13.0434 14.5831C12.7532 14.8163 10.9095 17.622 4.43016 11.1444C-2.05001 4.66605 0.754 2.82047 0.987267 2.53037C3.30951 0.207965 3.66944 1.26499 5.4979 3.09294C7.39449 4.98901 3.9508 5.66697 6.92956 8.64491Z"
                  fill={theme === "light" ? "black" : "white"}
                />
              </svg>
              <p className="text-description capitalize">+1 (705) 772-2734</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
