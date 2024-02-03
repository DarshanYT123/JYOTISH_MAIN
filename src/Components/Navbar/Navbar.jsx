import React, { useState,useRef } from "react";
import { navLinks } from "../NavlinkData/Data";
import { FiMenu } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { useCartContext } from "../cart_content";
import Login from "./Login";
import { FaCaretDown } from "react-icons/fa6";

const Navbar = ({ balance }) => {

  const { total_item } = useCartContext();
   const [navbar, setNavbar] = useState(false);
   const [data,setData] = useState({});
  //  const [isScrolled, setIsScrolled] = useState();
	// const [selectedLanguage, setSelectedLanguage] = useState("EN");

	// const [targetVisibility, setTargetVisibility] = useState(false);
	// const [SelectedLinks, setSelectedLinks] = useState("");
	// let selectedLinkIndex = useRef([]);
	// let HeadersInLinks = useRef([]);
  //  window.onload = function () {
	// 	// Google translate
	// 	const googleTranslateElementInit = () => {
	// 		new window.google.translate.TranslateElement(
	// 			{
	// 				pageLanguage: "en",
	// 				autoDisplay: true,
	// 			},
	// 			"google_translate_element"
	// 		);
	// 	};
	// 	var addScript = document.createElement("script");
	// 	addScript.setAttribute("src", "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");
	// 	document.body.appendChild(addScript);
	// 	window.googleTranslateElementInit = googleTranslateElementInit;
	// 	setInterval(() => {
	// 		try {

	// 			document.getElementById(":1.container").style.transform = "scale(0)";
	// 			document.getElementById(":1.container").parentElement.style.transform = "scale(0)";
	// 			document.getElementsByTagName("body")[0].style.top = "0px";
	// 			document.getElementById("google_translate_element").style.transform = "scale(0)";
	// 		} catch (e) { }
	// 	}, 500);
	// };
   const options = [
     "Hindi","Gujarati"
   ];
   const options2 = [
    "Help","Help"
  ];
   const onOptionChangeHandler = (event) => {
     setData(event.target.value);
     console.log(
         "User Selected Value - ",
         event.target.value
     );
 };

   const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
   
 
  return (
    <>
      {/* =================Desktop view===================== */}
      <div className="hidden lg:block">
        {/*=========================== Navbar1 =====================*/}
        <nav className="lg:px-10 bg-[#F8F8F8]">
          <div className="flex flex-row items-center justify-between  p-4">
            <a href="/">
              <div className="">
                <img
                  src="img/Logo.png"
                  className="w-[270px] h-[71px]   object-cover"
                  alt="logo"
                />
              </div>
            </a>
            <div class=" w-full md:block md:w-auto" id="navbar-default">
              <div class=" flex space-x-4 mx-auto items-center p-4    ">
                <div className="">
                  <h1 className="text-[14px] font-Lexend font-normal not-italic leading-normal text-[var(--Main-Color,#3A3A3A)]">
                    Balance :{" "}
                    <span class="text-[14px] font-Lexend font-semibold not-italic leading-normal text-[var(--Main-Color,#FFA300)]">
                      {balance}
                    </span>
                  </h1>
                </div>
                <div>
                  <button className="px-5 py-2 text-[#FFA300]   text-[14px] font-Lexend font-normal rounded-[25px] border-[1px] border-[#FFA300] ">Recharge</button>
                </div>

                <div className="flex items-center justify-center">
                  <button class="flex rounded-[34px] border bg-[var(--Main-Color,#FFA300)] px-4 py-2">
                    <div className="svg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.125 7.91526C8.19093 7.91526 9.84697 6.23779 9.84697 4.14513C9.84697 2.05247 8.19093 0.375 6.125 0.375C4.05907 0.375 2.40303 2.05247 2.40303 4.14513C2.40303 6.23779 4.05907 7.91526 6.125 7.91526ZM6.125 9.76139C3.09067 9.76139 0.5 10.2465 0.5 12.1848C0.5 14.1224 3.0749 14.625 6.125 14.625C9.15858 14.625 11.75 14.1399 11.75 12.2016C11.75 10.2633 9.1751 9.76139 6.125 9.76139ZM13.9235 5.6909H14.8258C15.1972 5.6909 15.5 5.99798 15.5 6.37461C15.5 6.75124 15.1972 7.05832 14.8258 7.05832H13.9235V7.94129C13.9235 8.31792 13.6214 8.625 13.2492 8.625C12.8778 8.625 12.575 8.31792 12.575 7.94129V7.05832H11.6742C11.3021 7.05832 11 6.75124 11 6.37461C11 5.99798 11.3021 5.6909 11.6742 5.6909H12.575V4.80871C12.575 4.43208 12.8778 4.125 13.2492 4.125C13.6214 4.125 13.9235 4.43208 13.9235 4.80871V5.6909Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="px-2">
                      {/* <Login trigger={true}> */}
                      <h5 onClick={openPopup} className="text-[12px] font-Lexend font-semibold not-italic leading-normal text-[var(--Pure-White,#fff)]">
                        Log in / Sign Up
                      </h5>
                      
                      {isPopupOpen && (
        <div className="popup  relative ">
          <div className="popup-content z-30 ">
            {/* <span className="close absolute top-10 right-0 " onClick={closePopup}>&times;</span> */}
           <Login/>
          </div>
        </div>
      )}
      
                      {/* </Login> */}
                    </div>
                  </button>
                </div>

{/* Language selector */}
{/* <div className="absolute top-0 left-0 scale-0 -translate-y-[400%] w-0 h-0">
				<div id="google_translate_element"></div>
			</div>

			<div className="flex items-center gap-1 relative cursor-pointer">
			
				<div
					className="flex items-center gap-1"
					onClick={() => {
						document.getElementById("languageOverlay").classList.toggle("scale-y-0");
						document.getElementById("languageOverlay").classList.toggle("opacity-0");

					}}
					onBlur={() => {
						document.getElementById("languageOverlay").classList.add("scale-y-0");
						document.getElementById("languageOverlay").classList.add("opacity-0");
					}}
				>


					<svg width="22" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M8.9375 14.4556C9.39558 17.6218 10.4931 19.8517 11.7742 19.8517C13.0553 19.8517 14.1528 17.6218 14.6108 14.4556C13.7119 14.3439 12.7601 14.283 11.7742 14.283C10.7882 14.283 9.83642 14.3439 8.9375 14.4556Z" fill="#004B95" />
						<path d="M8.78352 9.23462C8.73446 9.85182 8.70801 10.4923 8.70801 11.151C8.70801 11.8096 8.73446 12.4501 8.78352 13.0673C9.73112 12.9524 10.7324 12.8915 11.7747 12.8915C12.817 12.8915 13.8182 12.9524 14.7658 13.0673C14.8149 12.4501 14.8413 11.8096 14.8413 11.151C14.8413 10.4923 14.8149 9.85182 14.7658 9.23462C13.8182 9.3495 12.817 9.41041 11.7747 9.41041C10.7324 9.41041 9.73112 9.3495 8.78352 9.23462Z" fill="#004B95" />
						<path d="M14.5586 19.4781C16.711 18.8852 18.5422 17.6244 19.7597 15.9604C18.8094 15.4281 17.5632 14.994 16.1234 14.7009C15.8451 16.586 15.3302 18.284 14.5586 19.4781Z" fill="#004B95" />
						<path d="M8.99013 19.4782C8.2181 18.2841 7.70366 16.5861 7.42536 14.7007C5.98556 14.9938 4.73896 15.4279 3.78906 15.9602C5.00691 17.6245 6.83771 18.8857 8.99013 19.4782Z" fill="#004B95" />
						<path d="M8.99013 2.82397C6.83771 3.41681 5.00653 4.67767 3.78906 6.34164C4.73935 6.8739 5.98556 7.308 7.42536 7.60111C7.70366 5.71609 8.21848 4.018 8.99013 2.82397Z" fill="#004B95" />
						<path d="M3.05237 14.7539C4.18512 14.1236 5.61687 13.6262 7.26482 13.305C7.20541 12.5957 7.17474 11.8728 7.17474 11.1506C7.17474 10.4284 7.20541 9.7055 7.26482 8.99653C5.61687 8.67528 4.18512 8.17757 3.05237 7.54761C2.50114 8.64569 2.19141 9.8649 2.19141 11.1506C2.19141 12.4363 2.50114 13.6555 3.05237 14.7539Z" fill="#004B95" />
						<path d="M11.7742 2.44946C10.4931 2.44946 9.39558 4.6794 8.9375 7.84557C9.83642 7.9573 10.7882 8.0182 11.7742 8.0182C12.7601 8.0182 13.7119 7.9573 14.6108 7.84557C14.1528 4.6794 13.0553 2.44946 11.7742 2.44946Z" fill="#004B95" />
						<path d="M20.4966 7.54736C19.3639 8.17768 17.9321 8.67503 16.2842 8.99628C16.3436 9.7056 16.3743 10.4285 16.3743 11.1507C16.3743 11.8729 16.3436 12.5958 16.2842 13.3047C17.9321 13.626 19.3639 14.1237 20.4966 14.7537C21.0479 13.6556 21.3576 12.4364 21.3576 11.1507C21.3576 9.86501 21.0479 8.6458 20.4966 7.54736Z" fill="#004B95" />
						<path d="M14.5586 2.82397C15.3306 4.018 15.8451 5.71609 16.1234 7.60146C17.5632 7.30835 18.8098 6.87426 19.7597 6.34199C18.5418 4.67767 16.711 3.41646 14.5586 2.82397Z" fill="#004B95" />
					</svg>




					<p className="text-kijeka-blue  hidden md:block" >{selectedLanguage}</p>


					<svg width="10" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block">
						<path d="M5.55998 8.76855L10.5087 0.986159H0.61127L5.55998 8.76855Z" fill="#004B95" />
					</svg>


				</div>
				<div
					className="bg-white/70 backdrop-blur absolute top-10 md:-left-[50%] -left-[170%] scale-y-0 opacity-0 origin-top transition-all duration-300 w-max min-w-[100px] rounded-lg"
					id="languageOverlay"
					onMouseLeave={() => {
						document.getElementById("languageOverlay").classList.add("scale-y-0");
						document.getElementById("languageOverlay").classList.add("opacity-0");
					}}
				>
					<p
						onClick={() => {
							let language = "en";
							let elementGoogle = document.getElementById("google_translate_element");
							elementGoogle.getElementsByTagName("select")[0].value = language;
							elementGoogle.getElementsByTagName("select")[0].dispatchEvent(new Event("change"));
							document.getElementById(":1.container").style.transform = "scale(0)";
							document.getElementById("google_translate_element").style.transform = "scale(0)";
							setSelectedLanguage("EN");
						}}
						className="px-4 py-2 border-b border-[rgba(166,166,166,0.3)] hover:tracking-[1px] text-kijeka-blue cursor-pointer text-sm font-medium"
					>
						English
					</p>
					<p
						onClick={() => {
							let language = "fr";
							let elementGoogle = document.getElementById("google_translate_element");
							elementGoogle.getElementsByTagName("select")[0].value = language;
							elementGoogle.getElementsByTagName("select")[0].dispatchEvent(new Event("change"));
							document.getElementById(":1.container").style.transform = "scale(0)";
							document.getElementById("google_translate_element").style.transform = "scale(0)";
							setSelectedLanguage("FR");
						}}
						className="px-4 py-2 border-b border-[rgba(166,166,166,0.3)] hover:tracking-[1px] text-kijeka-blue cursor-pointer text-sm font-medium"
					>
						French
					</p>

					<p
						onClick={() => {
							let language = "zh-CN";
							let elementGoogle = document.getElementById("google_translate_element");
							elementGoogle.getElementsByTagName("select")[0].value = language;
							elementGoogle.getElementsByTagName("select")[0].dispatchEvent(new Event("change"));
							document.getElementById(":1.container").style.transform = "scale(0)";
							document.getElementById("google_translate_element").style.transform = "scale(0)";
							setSelectedLanguage("CH");
						}}
						className="px-4 py-2 border-b border-[rgba(166,166,166,0.3)] hover:tracking-[1px] text-kijeka-blue cursor-pointer text-sm font-medium"
					>
						Chinese
					</p>
					<p
						onClick={() => {
							let language = "ar";
							let elementGoogle = document.getElementById("google_translate_element");
							elementGoogle.getElementsByTagName("select")[0].value = language;
							elementGoogle.getElementsByTagName("select")[0].dispatchEvent(new Event("change"));
							document.getElementById(":1.container").style.transform = "scale(0)";
							document.getElementById("google_translate_element").style.transform = "scale(0)";
							setSelectedLanguage("AR");
						}}
						className="px-4 py-2 border-b border-[rgba(166,166,166,0.3)] hover:tracking-[1px] text-kijeka-blue cursor-pointer text-sm font-medium"
					>
						Arabic
					</p>
				</div>
			</div> */}
                <div className="dropdown ">
                <div className="flex justify-center relative   h-[40px]">
               <select  onChange={onOptionChangeHandler} className="  focus:outline-none  border-none appearance-none font-Lexend p-2 w-[100%]  text-[14px]  font-normal not-italic leading-normal text-[#3A3A3A] bg-[#F8F8F8] "
               >
               <option className="">English</option>
               {options.map((option, index) => {
                return (
                    <option key={index}>
                        {option}
                    </option>
                );
               })}
               </select>
               <div  className="icon-container pointer-events-none w-[50px] h-[100%] absolute top-0 -right-[1.6rem] flex items-center justify-center ">
                <span  className="text-[20px] text-black  "><FaCaretDown /></span>
               </div>
               </div>
              
                </div>
                <div className="flex justify-center relative   h-[40px]">
               <select  onChange={onOptionChangeHandler} className="  focus:outline-none  border-none appearance-none font-Lexend p-2 w-[100%]  text-[14px]  font-normal not-italic leading-normal text-[#3A3A3A] bg-[#F8F8F8] "
               >
               <option className="">Help</option>
               {options2.map((option, index) => {
                return (
                    <option key={index}>
                        {option}
                    </option>
                );
               })}
               </select>
               <div  className="icon-container pointer-events-none w-[50px] h-[100%] absolute top-0 -right-[1.7rem] flex items-center justify-center ">
                <span  className="text-[20px] text-black  "><FaCaretDown /></span>
               </div>
               </div>
                <div className="svg pl-2">
                  <a href="/cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M5.17762 5L7.51141 20.1696C7.52839 20.2948 7.56392 20.4141 7.61513 20.5247C7.76928 20.8576 8.06557 21.1112 8.4261 21.2076C8.53624 21.2372 8.65167 21.252 8.76972 21.25H22.5C23.052 21.25 23.5387 20.8879 23.6973 20.3592L27.4473 7.85919C27.5608 7.48072 27.4887 7.07085 27.2529 6.75384C27.017 6.43683 26.6451 6.25 26.25 6.25H7.89934L7.48823 3.57774C7.47283 3.46602 7.44266 3.359 7.39976 3.25873C7.32189 3.07613 7.20266 2.91797 7.05537 2.79399C6.91871 2.67875 6.75701 2.59228 6.57959 2.54391C6.46792 2.51333 6.35075 2.49802 6.23087 2.5H3.75C3.05964 2.5 2.5 3.05965 2.5 3.75C2.5 4.44036 3.05964 5 3.75 5H5.17762ZM9.82242 18.75L8.28396 8.75001H24.57L21.57 18.75H9.82242Z"
                      fill="#3A3A3A"
                    />
                    <path
                      d="M12.5 25C12.5 26.3807 11.3807 27.5 10 27.5C8.61929 27.5 7.5 26.3807 7.5 25C7.5 23.6193 8.61929 22.5 10 22.5C11.3807 22.5 12.5 23.6193 12.5 25Z"
                      fill="#3A3A3A"
                    />
                    <path
                      d="M23.75 25C23.75 26.3807 22.6307 27.5 21.25 27.5C19.8693 27.5 18.75 26.3807 18.75 25C18.75 23.6193 19.8693 22.5 21.25 22.5C22.6307 22.5 23.75 23.6193 23.75 25Z"
                      fill="#3A3A3A"
                    />
                  </svg>
                  </a>
                </div>
                <div class="relative">
                  <div class="absolute bottom-0 right-[0.5rem] border bg-[#DB042A] rounded-full w-[15px] h-[15px]">
                    <span className="block  text-center text-[10px] not-italic font-normal leading-normal text-[var(--Pure-White,#FFF)]">
                      {total_item}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* ===========================end=========================== */}

        {/* ========================Main Navbar======================= */}

        {/* =========================End=============================== */}

        <div className=" py-4 bg-[var(--Main-Color,#FFA300)]">
          <div className="flex space-x-6 items-center justify-center ">
            {navLinks.map((link, index) => {

              return (
                <ul className="" key={index}>
                  <li className="font-Lexend text-[15px] text-[#FFF] not-italic ] font-medium leading-normal">
                    <a href={link.path} className="">
                      {link.name}
                    </a>
                  </li>

                </ul>
              );
            })}
          </div>
        </div>
      </div>

      {/* ========================================End Desktop viwe============== */}



      {/* =========================================Small View ================== */}

      <div className="block lg:hidden">
        {/*=========================== Navbar1 =====================*/}
        <div className="flex flex-row items-center justify-around gap-x-3 md:gap-x-[25rem] ">
          <a href="/">
            <div className="px-2 p-4  md:px-3 md:p-3">
              <img
                src="img/Logo.png"
                className="w-[200px] h-[50px]   object-cover"
                alt="logo"
              />
            </div>
          </a>
          <div className="">
            <button
              className="text-gray-700 rounded-md outline-none "
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <IoIosClose size={25} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
            }`}
        >



          <nav className="px-5 bg-[#F8F8F8]  ">
   

             
                <div class=" flex flex-row md:justify-center  md:gap-x-20 justify-between  items-center 
                     ">
                  <div className="">
                    <h1 className="text-[14px] font-Lexend font-normal not-italic leading-normal text-[var(--Main-Color,#3A3A3A)]">
                      Balance :{" "}
                      <span class="text-[14px] font-semibold font-Lexend not-italic leading-normal text-[var(--Main-Color,#FFA300)]">
                        {" "}
                        {balance}
                      </span>
                    </h1>
                  </div>

                  <div className="flex justify-center relative  h-[40px]">
               <select  onChange={onOptionChangeHandler} className="  focus:outline-none  border-none appearance-none font-Lexend p-2 w-[100%]  text-[14px]  font-normal not-italic leading-normal text-[#3A3A3A] bg-[#F8F8F8] "
               >
               <option className="">English</option>
               {options.map((option, index) => {
                return (
                    <option key={index}>
                        {option}
                    </option>
                );
               })}
               </select>
               <div  className="icon-container pointer-events-none w-[50px] h-[100%] absolute top-0 -right-[1.3rem] flex items-center justify-center ">
                <span  className="text-[20px] text-black  "><FaCaretDown /></span>
               </div>
               </div>
                  <div className="flex justify-center relative   h-[40px]">
               <select  onChange={onOptionChangeHandler} className="  focus:outline-none  border-none appearance-none font-Lexend p-2 w-[100%]  text-[14px]  font-normal not-italic leading-normal text-[#3A3A3A] bg-[#F8F8F8] "
               >
               <option className="">Help</option>
               {options2.map((option, index) => {
                return (
                    <option key={index}>
                        {option}
                    </option>
                );
               })}
               </select>
               <div  className="icon-container pointer-events-none w-[50px] h-[100%] absolute top-0 -right-[1.7rem] flex items-center justify-center ">
                <span  className="text-[20px] text-black  "><FaCaretDown /></span>
               </div>
               </div>
                  <div className="svg py-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M5.17762 5L7.51141 20.1696C7.52839 20.2948 7.56392 20.4141 7.61513 20.5247C7.76928 20.8576 8.06557 21.1112 8.4261 21.2076C8.53624 21.2372 8.65167 21.252 8.76972 21.25H22.5C23.052 21.25 23.5387 20.8879 23.6973 20.3592L27.4473 7.85919C27.5608 7.48072 27.4887 7.07085 27.2529 6.75384C27.017 6.43683 26.6451 6.25 26.25 6.25H7.89934L7.48823 3.57774C7.47283 3.46602 7.44266 3.359 7.39976 3.25873C7.32189 3.07613 7.20266 2.91797 7.05537 2.79399C6.91871 2.67875 6.75701 2.59228 6.57959 2.54391C6.46792 2.51333 6.35075 2.49802 6.23087 2.5H3.75C3.05964 2.5 2.5 3.05965 2.5 3.75C2.5 4.44036 3.05964 5 3.75 5H5.17762ZM9.82242 18.75L8.28396 8.75001H24.57L21.57 18.75H9.82242Z"
                        fill="#3A3A3A"
                      />
                      <path
                        d="M12.5 25C12.5 26.3807 11.3807 27.5 10 27.5C8.61929 27.5 7.5 26.3807 7.5 25C7.5 23.6193 8.61929 22.5 10 22.5C11.3807 22.5 12.5 23.6193 12.5 25Z"
                        fill="#3A3A3A"
                      />
                      <path
                        d="M23.75 25C23.75 26.3807 22.6307 27.5 21.25 27.5C19.8693 27.5 18.75 26.3807 18.75 25C18.75 23.6193 19.8693 22.5 21.25 22.5C22.6307 22.5 23.75 23.6193 23.75 25Z"
                        fill="#3A3A3A"
                      />
                    </svg>
                  </div>
                  <div class="relative  pt-4">
                    <div class="absolute md:-top-2.5 md:-left-[5.5rem] -top-2.5 -left-[1.9rem] border bg-[#DB042A] rounded-full w-[15px] h-[15px]">
                      <span className="block top-2 text-[10px] not-italic font-normal leading-normal text-[var(--Pure-White,#FFF)]">
                        1
                      </span>
                    </div>
                  </div>
               
                </div>
              
          
          </nav>

          {/* ========================Main Navbar======================= */}

          {/* =========================End=============================== */}

          <div className=" py-4 bg-[var(--Main-Color,#FFA300)] flex flex-col justify-start  items-start px-10 ">
            <div className="flex flex-col gap-6 items-start justify-start ">
              {navLinks.map((link, index) => {

                return (
                  <ul className="" key={index}>
                    <li className="font-Lexend text-[15px] text-[#FFF] not-italic ] font-medium leading-normal">
                      <a href={link.path} className="">
                        {link.name}
                      </a>
                    </li>

                  </ul>
                );
              })}
            </div>
            <div className=" py-5 flex items-center justify-center">
                    <button class="flex rounded-[34px] border bg-[var(--Main-Color,#FFA300)] px-4 py-2">
                      <div className="svg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="15"
                          viewBox="0 0 16 15"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.125 7.91526C8.19093 7.91526 9.84697 6.23779 9.84697 4.14513C9.84697 2.05247 8.19093 0.375 6.125 0.375C4.05907 0.375 2.40303 2.05247 2.40303 4.14513C2.40303 6.23779 4.05907 7.91526 6.125 7.91526ZM6.125 9.76139C3.09067 9.76139 0.5 10.2465 0.5 12.1848C0.5 14.1224 3.0749 14.625 6.125 14.625C9.15858 14.625 11.75 14.1399 11.75 12.2016C11.75 10.2633 9.1751 9.76139 6.125 9.76139ZM13.9235 5.6909H14.8258C15.1972 5.6909 15.5 5.99798 15.5 6.37461C15.5 6.75124 15.1972 7.05832 14.8258 7.05832H13.9235V7.94129C13.9235 8.31792 13.6214 8.625 13.2492 8.625C12.8778 8.625 12.575 8.31792 12.575 7.94129V7.05832H11.6742C11.3021 7.05832 11 6.75124 11 6.37461C11 5.99798 11.3021 5.6909 11.6742 5.6909H12.575V4.80871C12.575 4.43208 12.8778 4.125 13.2492 4.125C13.6214 4.125 13.9235 4.43208 13.9235 4.80871V5.6909Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="px-2">
                        <h5 onClick={openPopup} className="text-[12px] font-semibold not-italic leading-normal text-[var(--Pure-White,#fff)]">
                          Log in / Sign Up
                        </h5>
                        {isPopupOpen && (
        <div className="popup  relative ">
          <div className="popup-content z-30 ">
            {/* <span className="close absolute top-10 right-0 " onClick={closePopup}>&times;</span> */}
           <Login/>
          </div>
        </div>
      )}
                      </div>
                    </button>
                  </div>
          </div>



        </div>
        {/* <nav className="lg:px-10 bg-[#FFF]">
        <div className=" flex flex-col items-center justify-between mx-auto p-4">
          <div className="">
            <img
              src="img/Logo.png"
              className="w-[270px] h-[71px]   object-cover"
              alt="logo"
            />
          </div>
          e.stopPropagation()
          <div class=" w-full md:block md:w-auto" id="navbar-default">
            <div class=" flex flex-col gap-6 mx-auto items-center p-4    ">
              <div className="">
                <h1 className="text-[14px] font-normal not-italic leading-normal text-[var(--Main-Color,#3A3A3A)]">
                  Balance :{" "}
                  <span class="text-[14px] font-semibold not-italic leading-normal text-[var(--Main-Color,#FFA300)]">
                    {" "}
                    ₹ 1000
                  </span>
                </h1>
              </div>

              <div className="flex items-center justify-center">
                <button class="flex rounded-[34px] border bg-[var(--Main-Color,#FFA300)] px-4 py-2">
                  <div className="svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.125 7.91526C8.19093 7.91526 9.84697 6.23779 9.84697 4.14513C9.84697 2.05247 8.19093 0.375 6.125 0.375C4.05907 0.375 2.40303 2.05247 2.40303 4.14513C2.40303 6.23779 4.05907 7.91526 6.125 7.91526ZM6.125 9.76139C3.09067 9.76139 0.5 10.2465 0.5 12.1848C0.5 14.1224 3.0749 14.625 6.125 14.625C9.15858 14.625 11.75 14.1399 11.75 12.2016C11.75 10.2633 9.1751 9.76139 6.125 9.76139ZM13.9235 5.6909H14.8258C15.1972 5.6909 15.5 5.99798 15.5 6.37461C15.5 6.75124 15.1972 7.05832 14.8258 7.05832H13.9235V7.94129C13.9235 8.31792 13.6214 8.625 13.2492 8.625C12.8778 8.625 12.575 8.31792 12.575 7.94129V7.05832H11.6742C11.3021 7.05832 11 6.75124 11 6.37461C11 5.99798 11.3021 5.6909 11.6742 5.6909H12.575V4.80871C12.575 4.43208 12.8778 4.125 13.2492 4.125C13.6214 4.125 13.9235 4.43208 13.9235 4.80871V5.6909Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="px-2">
                    <h5 className="text-[12px] font-semibold not-italic leading-normal text-[var(--Pure-White,#fff)]">
                      Log in / Sign Up
                    </h5>
                  </div>
                </button>
              </div>

              <div className="dropdown">
                <select className="text-[14px] font-normal not-italic leading-normal text-[#3A3A3A]">
                  <option>English</option>
                  <option>English</option>
                </select>
              </div>
              <div>
                <select className="text-[14px] font-normal not-italic leading-normal text-[#3A3A3A]">
                  <option>Help</option>
                  <option>Help</option>
                </select>
              </div>
              <div className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M5.17762 5L7.51141 20.1696C7.52839 20.2948 7.56392 20.4141 7.61513 20.5247C7.76928 20.8576 8.06557 21.1112 8.4261 21.2076C8.53624 21.2372 8.65167 21.252 8.76972 21.25H22.5C23.052 21.25 23.5387 20.8879 23.6973 20.3592L27.4473 7.85919C27.5608 7.48072 27.4887 7.07085 27.2529 6.75384C27.017 6.43683 26.6451 6.25 26.25 6.25H7.89934L7.48823 3.57774C7.47283 3.46602 7.44266 3.359 7.39976 3.25873C7.32189 3.07613 7.20266 2.91797 7.05537 2.79399C6.91871 2.67875 6.75701 2.59228 6.57959 2.54391C6.46792 2.51333 6.35075 2.49802 6.23087 2.5H3.75C3.05964 2.5 2.5 3.05965 2.5 3.75C2.5 4.44036 3.05964 5 3.75 5H5.17762ZM9.82242 18.75L8.28396 8.75001H24.57L21.57 18.75H9.82242Z"
                    fill="#3A3A3A"
                  />
                  <path
                    d="M12.5 25C12.5 26.3807 11.3807 27.5 10 27.5C8.61929 27.5 7.5 26.3807 7.5 25C7.5 23.6193 8.61929 22.5 10 22.5C11.3807 22.5 12.5 23.6193 12.5 25Z"
                    fill="#3A3A3A"
                  />
                  <path
                    d="M23.75 25C23.75 26.3807 22.6307 27.5 21.25 27.5C19.8693 27.5 18.75 26.3807 18.75 25C18.75 23.6193 19.8693 22.5 21.25 22.5C22.6307 22.5 23.75 23.6193 23.75 25Z"
                    fill="#3A3A3A"
                  />
                </svg>
              </div>
              <div class="relative">
                <div class="absolute bottom-[2.5rem] left-[0.5rem] border bg-[#DB042A] rounded-full w-[15px] h-[15px]">
                  <span className="block top-2 text-[10px] not-italic font-normal leading-normal text-[var(--Pure-White,#FFF)]">
                    1
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav> */}

        {/* ===========================end=========================== */}

        {/* ========================Main Navbar======================= */}

        {/* =========================End=============================== */}

        {/* <div className=" py-4 bg-[var(--Main-Color,#FFA300)]">
        <div className="flex flex-col gap-6 items-center justify-center ">
          {navLinks.map((link, index) => {

            return (
              <ul className="" key={index}>
                <li className="font-Lexend text-[15px] text-[#FFF] not-italic ] font-medium leading-normal">
                  <a href={link.path} className="">
                    {link.name}
                  </a>
                </li>
               
              </ul>
            );
          })}
        </div>
      </div> */}

      </div>
      {/* =========================================End small view ================ */}
    </>
  );
};

export default Navbar;
