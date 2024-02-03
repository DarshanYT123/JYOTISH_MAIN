import React, { useState } from "react";
// import { db } from "../../database/firebaseConfig";
// import { collection, addDoc } from "firebase/firestore";
import { RiTwitterXLine } from "react-icons/ri";
const FooterLinks = () => {
  const servicesData = [
    { title: "My Star Guide", link: "/underdevelopment" },
    { title: "Panchang", link: "/underdevelopment" },
    { title: "Festival Calendar", link: "/ui-ux" },
    { title: "Nifty Predictions", link: "/underdevelopment" },
    { title: "Daily Horoscopes", link: "/underdevelopment" },
    { title: "Weekly Horoscope", link: "/underdevelopment" },
    { title: "Monthly Horoscope", link: "/underdevelopment" },
    { title: "Yearly Horoscope", link: "/underdevelopment" },
    {
      title: "2023 Horoscope",
      link: "/underdevelopment",
    },
    { title: "Compatibility", link: "/underdevelopment" },
    { title: "Nakshatra", link: "/underdevelopment" },
    { title: "Chinese Horoscope", link: "/underdevelopment" },
    { title: "Tarot", link: "/underdevelopment" },
  ];
  const expertisData = [
    { title: "Horoscope 2023", link: "/web-development" },
    { title: "Today's Horoscope", link: "/underdevelopment" },
    { title: "Today's Love Horoscope", link: "/enterprise" },
    {
      title: "Yesterday's Horoscope",
      link: "/underdevelopment",
    },
    { title: "Tommorrow's Horoscope", link: "/underdevelopment" },
    { title: "Weekly Horoscope", link: "/underdevelopment" },
    { title: "Monthly Horoscope", link: "/underdevelopment" },
    { title: "Yearly Horoscope", link: "/underdevelopment" },
  ];
  const aboutUsData = [
    { title: "About us", link: "/aboutus" },
    { title: "Contact us", link: "/blogs" },
    { title: "Work with us", link: "/underdevelopment" },
    { title: "FAQ's", link: "/underdevelopment" },
    { title: "Privacy Policy", link: "/underdevelopment" },
    { title: "Terms of Service", link: "/underdevelopment" },
    { title: "Refund & Cancellation", link: "/underdevelopment" },
    { title: "Security", link: "/underdevelopment" },
    { title: "Disclaimer", link: "/underdevelopment" },
  ];
  const Products = [
    { title: "Rudraksha", link: "/aboutus" },
    { title: "Books", link: "/blogs" },
  ];
  const Astrologer = [
    { title: "Astrologer Login", link: "/aboutus" },
    { title: "Astrologer Registration", link: "/blogs" },
  ];

  const [mailSubscribe, setMailSubscribe] = useState("");

  function validate() {
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (mailSubscribe === "") {
      alert("Please enter your email");
      return false;
    } else if (!emailRegex.test(mailSubscribe)) {
      alert("Please enter valid email");
      return false;
    }

    return true;
  }

  const onSubscribe = (e) => {
    e.preventDefault();
    if (mailSubscribe !== "") {
      let gifContainer = document.getElementById("GIF");
      gifContainer.classList.remove("opacity-0");
      gifContainer.classList.remove("scale-0");
      gifContainer.classList.add("opacity-100");
      gifContainer.classList.add("scale-100");
      setTimeout(() => {
        gifContainer.classList.remove("opacity-100");
        gifContainer.classList.remove("scale-100");
        gifContainer.classList.add("opacity-0");
        gifContainer.classList.add("scale-0");
      }, 2000);
    }

    if (!validate()) {
      return;
    }

    // addDoc(collection(db, "subscribe"), {
    //   mailSubscribe: mailSubscribe,
    // })
    //   .then(() => {
    //     setMailSubscribe("");
    //   })
    //   .catch((err) => {
    //     console.log(err.messages);
    //   });
  };

  return (
    <div className="sm:px-0 px-0 py-10 grid  grid-cols-1 md:gap-0 gap-6">
      <div className="hidden lg:flex flex-col md:flex-row md:gap-x-12 justify-between">
        {/* SERVICES */}
        <div className=" flex flex-col gap-1.5">
          <div className="flex flex-col gap-y-3 justify-start items-start">
            <span className="text-[color:var(--Secondry-Color,#773101)] text-start text-[20px] font-Lexend not-italic font-bold leading-[normal]">
              Astrology Important Links
            </span>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="248" height="4" viewBox="0 0 248 4" fill="none">
  <path d="M1.5 2H246.5" stroke="#FFA300" stroke-width="3" stroke-linecap="round"/>
</svg>
            </div>
          </div>
          {/* separator line */}
          <div className="w-full h-[1px] bg-gradient-to-r dark:from-white dark:to-[#fff0]"></div>
          <div className="p-2">
            <ul className="list-disc justify-start items-start flex flex-col gap-1  pl-4">
              {servicesData.map((p, index) => {
                return (
                  <li
                    key={index}
                    className="text-[16px] font-Poppins  justify-start   not-italic font-normal leading-[203%]"
                  >
                    <a href={p.link}>{p.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* EXPERTISE */}
        <div className=" flex flex-col gap-1.5">
          <div className="flex flex-col gap-y-2.5 justify-start items-start">
            <span className="text-[color:var(--Secondry-Color,#773101)] text-start text-[20px] font-Lexend not-italic font-bold leading-[normal]">
              Horoscope  Reports
            </span>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="176" height="4" viewBox="0 0 176 4" fill="none">
  <path d="M1.5 2H174" stroke="#FFA300" stroke-width="3" stroke-linecap="round"/>
</svg>
            </div>
          </div>
          {/* separator line */}
          <div className="w-full h-[1px] bg-gradient-to-r from-white to-[#fff0]"></div>
          <div className="p-2">
            <ul className="list-disc justify-start items-start flex flex-col gap-1 pl-4">
              {expertisData.map((p, index) => {
                return (
                  <li
                    key={index}
                    className="text-[16px] font-Poppins  justify-start   not-italic font-normal leading-[203%]"
                  >
                    <a href={p.link}>{p.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* ABOUT US */}
        <div className="flex flex-col gap-y-4 justify-start items-start ">
        <div className=" flex flex-col  gap-1.5 mx-auto">
          <div className="flex flex-col gap-y-2.5 justify-start items-start">
            <span className="text-[color:var(--Secondry-Color,#773101)] text-start text-[20px] font-Lexend not-italic font-bold leading-[normal]">
              Corporate Informations
            </span>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="176" height="4" viewBox="0 0 176 4" fill="none">
  <path d="M1.5 2H174" stroke="#FFA300" stroke-width="3" stroke-linecap="round"/>
</svg>
            </div>
          </div>
          {/* separator line */}
          <div className="min-w-[170px] h-[1px] bg-gradient-to-r from-white to-[#fff0]"></div>
          <div className="p-2">
            <ul className="list-disc justify-start items-start flex flex-col gap-1 pl-4 ">
              {aboutUsData.map((p, index) => {
                return (
                  <li
                    key={index}
                    className="text-[16px] font-Poppins  justify-start   not-italic font-normal leading-[203%]"
                  >
                    <a href={p.link}>{p.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className=" flex flex-col gap-1.5 ">
          <div className="flex flex-col gap-y-2.5 justify-start items-start">
            <span className="text-[color:var(--Secondry-Color,#773101)] text-start text-[20px] font-Lexend not-italic font-bold leading-[normal]">
              Products
            </span>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="4" viewBox="0 0 70 4" fill="none">
  <path d="M1.5 2H68.5" stroke="#FFA300" stroke-width="3" stroke-linecap="round"/>
</svg>            </div>
          </div>
          {/* separator line */}
          <div className="min-w-[170px] h-[1px] bg-gradient-to-r from-white to-[#fff0]"></div>
          <div className="p-2">
            <ul className="list-disc justify-start items-start flex flex-col gap-1 pl-4 ">
              {Products.map((p, index) => {
                return (
                  <li
                    key={index}
                    className="text-[16px] font-Poppins  justify-start   not-italic font-normal leading-[203%]"
                  >
                    <a href={p.link}>{p.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        </div>
        <div className="flex flex-col gap-10 ">
        {/* container 1 heading*/}
        <div className="flex flex-col ">
        <div className=" flex flex-col gap-1.5 ">
          <div className="flex flex-col gap-y-2.5 justify-start items-start">
            <span className="text-[color:var(--Secondry-Color,#773101)] text-start text-[20px] font-Lexend not-italic font-bold leading-[normal]">
              Astrologer
            </span>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="94" height="4" viewBox="0 0 94 4" fill="none">
  <path d="M1.5 2H92.5" stroke="#FFA300" stroke-width="3" stroke-linecap="round"/>
</svg></div>
          </div>
          {/* separator line */}
          <div className="min-w-[170px] h-[1px] bg-gradient-to-r from-white to-[#fff0]"></div>
          <div className="p-2">
            <ul className="list-disc justify-start items-start flex flex-col gap-1 pl-4 ">
              {Astrologer.map((p, index) => {
                return (
                  <li
                    key={index}
                    className="text-[16px] font-Poppins  justify-start   not-italic font-normal leading-[203%]"
                  >
                    <a href={p.link}>{p.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="pt-7">
        <div className="flex flex-col gap-y-2.5 justify-start items-start">
            <span className="text-[color:var(--Secondry-Color,#773101)] text-start text-[20px] font-Lexend not-italic font-bold leading-[normal]">
              Contact Us
            </span>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="94" height="4" viewBox="0 0 94 4" fill="none">
  <path d="M1.5 2H92.5" stroke="#FFA300" stroke-width="3" stroke-linecap="round"/>
</svg></div>
          </div>
          <div className=" pt-4 flex flex-row gap-x-3 justify-start items-center">
            <div className="relative -top-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="30" viewBox="0 0 28 30" fill="none">
  <path d="M23.6564 10.0001C24.254 10.0001 24.827 10.2635 25.2495 10.7324C25.6721 11.2012 25.9094 11.8371 25.9094 12.5001V17.5001C25.9094 18.1632 25.6721 18.799 25.2495 19.2679C24.827 19.7367 24.254 20.0001 23.6564 20.0001H22.4601C22.1855 22.4167 21.1255 24.6391 19.4791 26.2501C17.8327 27.8611 15.7131 28.7501 13.518 28.7501V26.2501C15.3106 26.2501 17.0297 25.4599 18.2973 24.0534C19.5648 22.6469 20.2769 20.7392 20.2769 18.7501V11.2501C20.2769 9.261 19.5648 7.35334 18.2973 5.94682C17.0297 4.5403 15.3106 3.75012 13.518 3.75012C11.7254 3.75012 10.0062 4.5403 8.73864 5.94682C7.47108 7.35334 6.75898 9.261 6.75898 11.2501V20.0001H3.37949C2.78196 20.0001 2.2089 19.7367 1.78638 19.2679C1.36386 18.799 1.1265 18.1632 1.1265 17.5001V12.5001C1.1265 11.8371 1.36386 11.2012 1.78638 10.7324C2.2089 10.2635 2.78196 10.0001 3.37949 10.0001H4.57583C4.85073 7.58374 5.91082 5.36171 7.55718 3.75096C9.20355 2.14022 11.323 1.25146 13.518 1.25146C15.7129 1.25146 17.8324 2.14022 19.4787 3.75096C21.1251 5.36171 22.1852 7.58374 22.4601 10.0001H23.6564ZM8.74161 19.7314L9.9357 17.6114C11.0093 18.3577 12.2511 18.7524 13.518 18.7501C14.7849 18.7524 16.0266 18.3577 17.1002 17.6114L18.2943 19.7314C16.8628 20.7266 15.2072 21.253 13.518 21.2501C11.8287 21.253 10.1731 20.7266 8.74161 19.7314Z" fill="#FFA300"/>
</svg>
                </div> 
            <h2 className="text-[16px] font-Poppins  justify-start text-start  not-italic font-normal leading-[203%]">We are available 24x7 on chat <br/> support, click to start chat</h2>

            </div>
            <div className=" pt-3 flex flex-row gap-x-3 justify-start items-center">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M23.75 4.86963C25.8211 4.86963 27.5 6.50478 27.5 8.52184V20.6959C27.5 22.7129 25.8211 24.3481 23.75 24.3481H6.25C4.17893 24.3481 2.5 22.7129 2.5 20.6959V8.52184C2.5 6.50478 4.17893 4.86963 6.25 4.86963H23.75ZM25 8.92115L15.8231 16.7425C15.3911 17.1106 14.7638 17.1413 14.2993 16.8345L14.1769 16.7425L5 8.92237V20.6959C5 21.3682 5.55964 21.9133 6.25 21.9133H23.75C24.4404 21.9133 25 21.3682 25 20.6959V8.92115ZM23.1 7.30444H6.8975L15 14.2086L23.1 7.30444Z" fill="#FFA300"/>
</svg>                </div> 
            <span className="text-[16px] font-Poppins  justify-start   not-italic font-normal leading-[203%]">Contact@jyotishsastram.com</span>

            </div>
          </div>
        </div>
        {/* container 2 Follow on */}
        <div className="flex flex-col gap-5">
          {/* row 1 */}
          <div className="pt-2">
        <div className="flex flex-col gap-y-2.5 justify-start items-start">
            <span className="text-[color:var(--Secondry-Color,#773101)] text-start text-[20px] font-Lexend not-italic font-bold leading-[normal]">
              Follow Us
            </span>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="94" height="4" viewBox="0 0 94 4" fill="none">
  <path d="M1.5 2H92.5" stroke="#FFA300" stroke-width="3" stroke-linecap="round"/>
</svg></div>
          </div>
          {/* row 2 */}
          <div className="flex gap-x-8 pt-6 items-center justify-center lg:justify-start ">
            <div className="">
              <a href="https://www.instagram.com/" target="_blank">
              <div className="w-10">
                <img
                  src="/img/instagram.png"
                  alt="Instagram"
                  className=" hover:rotate-180 duration-300"
                />
</div>
              </a>
            </div>
            <div>
              <a
                href=""
                target="_blank"
                className="cursor-pointer"
              >
                <div className="">
        <RiTwitterXLine className="text-[35px] text-[#656565] hover:rotate-180 duration-300 "  />
</div>
              </a>
            </div>
            <div className="">
              <a
                href=""
                target="_blank"
              >
                <div className="w-10">
                <img
                  src="/img/facebook.png"
                  alt="Facebook"
                  className=" hover:rotate-180 duration-300"
                />
</div>
              </a>
            </div>
            <div className="">
              <a href="" target="_blank">
                <div className="w-10">
                <img
                  src="/img/linkedin.png"
                  alt="linkdin"
                  className=" hover:rotate-180 duration-300"
                />
                </div>
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
      

      <div className="lg:hidden flex flex-col ">
        <div className="flex flex-col md:flex-row md:gap-x-5">
        {/* SERVICES */}
        <div className=" flex flex-col ">
          <div className="flex flex-col gap-y-2 justify-start items-start">
            <span className="text-[color:var(--Secondry-Color,#773101)] text-start text-[18px] font-Lexend not-italic font-bold leading-[normal]">
              Astrology Important Links
            </span>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="198" height="4" viewBox="0 0 248 4" fill="none">
  <path d="M1.5 2H246.5" stroke="#FFA300" stroke-width="3" stroke-linecap="round"/>
</svg>
            </div>
          </div>
          {/* separator line */}
          <div className="w-full h-[1px] bg-gradient-to-r dark:from-white dark:to-[#fff0]"></div>
          <div className="p-2">
            <ul className="list-disc justify-start items-start flex flex-col gap-0.5  pl-4">
              {servicesData.map((p, index) => {
                return (
                  <li
                    key={index}
                    className="text-[16px] font-Poppins  justify-start text-start  not-italic font-normal leading-[203%]"
                  >
                    <a href={p.link}>{p.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* EXPERTISE */}
        <div className=" flex flex-col md:pt-0 pt-2">
          <div className="flex flex-col gap-y-2 justify-start items-start">
            <span className="text-[color:var(--Secondry-Color,#773101)] text-start text-[18px] font-Lexend not-italic font-bold leading-[normal]">
              Horoscope  Reports
            </span>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="126" height="4" viewBox="0 0 176 4" fill="none">
  <path d="M1.5 2H174" stroke="#FFA300" stroke-width="3" stroke-linecap="round"/>
</svg>
            </div>
          </div>
          {/* separator line */}
          <div className="w-full h-[1px] bg-gradient-to-r from-white to-[#fff0]"></div>
          <div className="p-2">
            <ul className="list-disc justify-start items-start flex flex-col gap-0.5 pl-4">
              {expertisData.map((p, index) => {
                return (
                  <li
                    key={index}
                    className="text-[16px] font-Poppins  justify-start text-start   not-italic font-normal leading-[203%]"
                  >
                    <a href={p.link}>{p.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* ABOUT US */}
        <div className="flex flex-col  justify-start items-start md:pt-0 pt-3">
        <div className=" flex flex-col   ">
          <div className="flex flex-col gap-y-2.5 justify-start items-start">
            <span className="text-[color:var(--Secondry-Color,#773101)] text-start text-[18px] font-Lexend not-italic font-bold leading-[normal]">
              Corporate Informations
            </span>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="126" height="4" viewBox="0 0 176 4" fill="none">
  <path d="M1.5 2H174" stroke="#FFA300" stroke-width="3" stroke-linecap="round"/>
</svg>
            </div>
          </div>
          {/* separator line */}
          <div className="min-w-[170px] h-[1px] bg-gradient-to-r from-white to-[#fff0]"></div>
          <div className="p-2">
            <ul className="list-disc justify-start items-start flex flex-col gap-0.5 pl-4 ">
              {aboutUsData.map((p, index) => {
                return (
                  <li
                    key={index}
                    className="text-[16px] font-Poppins  justify-start text-start  not-italic font-normal leading-[203%]"
                  >
                    <a href={p.link}>{p.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className=" flex flex-col  ">
          <div className="flex flex-col gap-y-2.5 justify-start items-start">
            <span className="text-[color:var(--Secondry-Color,#773101)] text-start text-[18px] font-Lexend not-italic font-bold leading-[normal]">
              Products
            </span>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="4" viewBox="0 0 70 4" fill="none">
  <path d="M1.5 2H68.5" stroke="#FFA300" stroke-width="3" stroke-linecap="round"/>
</svg>            </div>
          </div>
          {/* separator line */}
          <div className="min-w-[170px] h-[1px] bg-gradient-to-r from-white to-[#fff0]"></div>
          <div className="p-2">
            <ul className="list-disc justify-start items-start flex flex-col gap-0.5 pl-4 ">
              {Products.map((p, index) => {
                return (
                  <li
                    key={index}
                    className="text-[16px] font-Poppins  justify-start   not-italic font-normal leading-[203%]"
                  >
                    <a href={p.link}>{p.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
       
        </div>
        </div>
        <div className="flex flex-col md:flex-row">
        <div className="flex flex-col md:flex-row gap-10 ">

<div className="flex  flex-col ">
<div className=" flex flex-col  ">
  <div className="flex flex-col gap-y-2.5 justify-start items-start">
    <span className="text-[color:var(--Secondry-Color,#773101)] text-start text-[18px] font-Lexend not-italic font-bold leading-[normal]">
      Astrologer
    </span>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="94" height="4" viewBox="0 0 94 4" fill="none">
<path d="M1.5 2H92.5" stroke="#FFA300" stroke-width="3" stroke-linecap="round"/>
</svg></div>
  </div>
  {/* separator line */}
  <div className="min-w-[170px] h-[1px] bg-gradient-to-r from-white to-[#fff0]"></div>
  <div className="p-2">
    <ul className="list-disc justify-start items-start flex flex-col gap-0.5 pl-4 ">
      {Astrologer.map((p, index) => {
        return (
          <li
            key={index}
            className="text-[16px] font-Poppins  justify-start   not-italic font-normal leading-[203%]"
          >
            <a href={p.link}>{p.title}</a>
          </li>
        );
      })}
    </ul>
  </div>
</div>
<div className="pt-2">
<div className="flex flex-col gap-y-2.5 justify-start items-start">
    <span className="text-[color:var(--Secondry-Color,#773101)] text-start text-[18px] font-Lexend not-italic font-bold leading-[normal]">
      Contact Us
    </span>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="94" height="4" viewBox="0 0 94 4" fill="none">
<path d="M1.5 2H92.5" stroke="#FFA300" stroke-width="3" stroke-linecap="round"/>
</svg></div>
  </div>
  <div className=" pt-2 flex flex-row gap-x-3 justify-start items-center">
    <div className="relative -top-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="30" viewBox="0 0 28 30" fill="none">
<path d="M23.6564 10.0001C24.254 10.0001 24.827 10.2635 25.2495 10.7324C25.6721 11.2012 25.9094 11.8371 25.9094 12.5001V17.5001C25.9094 18.1632 25.6721 18.799 25.2495 19.2679C24.827 19.7367 24.254 20.0001 23.6564 20.0001H22.4601C22.1855 22.4167 21.1255 24.6391 19.4791 26.2501C17.8327 27.8611 15.7131 28.7501 13.518 28.7501V26.2501C15.3106 26.2501 17.0297 25.4599 18.2973 24.0534C19.5648 22.6469 20.2769 20.7392 20.2769 18.7501V11.2501C20.2769 9.261 19.5648 7.35334 18.2973 5.94682C17.0297 4.5403 15.3106 3.75012 13.518 3.75012C11.7254 3.75012 10.0062 4.5403 8.73864 5.94682C7.47108 7.35334 6.75898 9.261 6.75898 11.2501V20.0001H3.37949C2.78196 20.0001 2.2089 19.7367 1.78638 19.2679C1.36386 18.799 1.1265 18.1632 1.1265 17.5001V12.5001C1.1265 11.8371 1.36386 11.2012 1.78638 10.7324C2.2089 10.2635 2.78196 10.0001 3.37949 10.0001H4.57583C4.85073 7.58374 5.91082 5.36171 7.55718 3.75096C9.20355 2.14022 11.323 1.25146 13.518 1.25146C15.7129 1.25146 17.8324 2.14022 19.4787 3.75096C21.1251 5.36171 22.1852 7.58374 22.4601 10.0001H23.6564ZM8.74161 19.7314L9.9357 17.6114C11.0093 18.3577 12.2511 18.7524 13.518 18.7501C14.7849 18.7524 16.0266 18.3577 17.1002 17.6114L18.2943 19.7314C16.8628 20.7266 15.2072 21.253 13.518 21.2501C11.8287 21.253 10.1731 20.7266 8.74161 19.7314Z" fill="#FFA300"/>
</svg>
        </div> 
    <h2 className="text-[16px] font-Poppins  justify-start text-start  not-italic font-normal leading-[203%]">We are available 24x7 on chat <br/> support, click to start chat</h2>

    </div>
    <div className=" pt-2 flex flex-row gap-x-3 justify-start items-center">
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.75 4.86963C25.8211 4.86963 27.5 6.50478 27.5 8.52184V20.6959C27.5 22.7129 25.8211 24.3481 23.75 24.3481H6.25C4.17893 24.3481 2.5 22.7129 2.5 20.6959V8.52184C2.5 6.50478 4.17893 4.86963 6.25 4.86963H23.75ZM25 8.92115L15.8231 16.7425C15.3911 17.1106 14.7638 17.1413 14.2993 16.8345L14.1769 16.7425L5 8.92237V20.6959C5 21.3682 5.55964 21.9133 6.25 21.9133H23.75C24.4404 21.9133 25 21.3682 25 20.6959V8.92115ZM23.1 7.30444H6.8975L15 14.2086L23.1 7.30444Z" fill="#FFA300"/>
</svg>                </div> 
    <span className="text-[16px] font-Poppins  justify-start   not-italic font-normal leading-[203%]">Contact@jyotishsastram.com</span>

    </div>
  </div>
</div>

<div className="flex flex-col gap-3 ">
  {/* row 1 */}
  <div className="">
<div className="flex flex-col gap-y-2.5 justify-start items-start">
    <span className="text-[color:var(--Secondry-Color,#773101)] text-start text-[18px] font-Lexend not-italic font-bold leading-[normal]">
      Follow Us
    </span>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="94" height="4" viewBox="0 0 94 4" fill="none">
<path d="M1.5 2H92.5" stroke="#FFA300" stroke-width="3" stroke-linecap="round"/>
</svg></div>
  </div>
  {/* row 2 */}
  <div className="flex gap-x-8 pt-6 items-center justify-center lg:justify-start ">
    <div className="">
      <a href="https://www.instagram.com/" target="_blank">
      <div className="w-10">
        <img
          src="/img/instagram.png"
          alt="Instagram"
          className=" hover:rotate-180 duration-300"
        />
</div>
      </a>
    </div>
    <div>
      <a
        href=""
        target="_blank"
        className="cursor-pointer"
      >
        <div className="">
        <RiTwitterXLine className="text-[35px] text-[#656565] hover:rotate-180 duration-300 "  />
</div>
      </a>
    </div>
    <div className="">
      <a
        href=""
        target="_blank"
      >
        <div className="w-10">
        <img
          src="/img/facebook.png"
          alt="Facebook"
          className=" hover:rotate-180 duration-300"
        />
</div>
      </a>
    </div>
    <div className="">
      <a href="" target="_blank">
        <div className="w-10">
        <img
          src="/img/linkedin.png"
          alt="linkdin"
          className=" hover:rotate-180 duration-300"
        />
        </div>
      </a>
    </div>
  </div>
  </div>
</div>
</div>   
</div>
      </div>

     

    </div>
  );
};

export default FooterLinks;
