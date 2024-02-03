import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaStar } from 'react-icons/fa'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
// Import Swiper styles
import 'swiper/css';



const Readers = (p) => {
    // const [rating,setRating] = useState(null);
    // const [hover,setHover] = useState(null);
    // const currentRating = index + 1;
    const Data = [
        {
            img1: "/img/Readersimg.png",
            img2:'/img/Star.svg',
            img3:'/img/tick.png',
            img4:"/img/Calling.png",
            img5:"/img/Chat.png",
            text1:"7899",
            text2:"Orders",
            name:"Acharya Aditya",
            lang:"English , Hindi , Gujarati",
            exp:"Exp :",
            year:"12 Years",
            free:"FREE",
            min:"50/Min",
            call:"Call",
            chat:"Chat",
            pimg1:"/img/guru2.svg",
            pname1:"Sanjay Ansari",
            porder:"7899 Orders",
            ptext1:"Accomplished Astrologer",
            ptext4:"Lorem ipsum consectetur adipisc amet, consectetur adipiscing consectetur ipsum dolor sit amet, consectetur adipiscing elit , consectetur adipiscing elit.",

        },
        {
            img1: "/img/Readersimg.png",
            img2:'/img/Star.svg',
            img3:'/img/tick.png',
            img4:"/img/Calling.png",
            img5:"/img/Chat.png",
            text1:"7899",
            text2:"Orders",
            name:"Acharya Aditya",
            lang:"English , Hindi , Gujarati",
            exp:"Exp :",
            year:"12 Years",
            free:"FREE",
            min:"50/Min",
            call:"Call",
            chat:"Chat",
            pimg1:"/img/guru2.svg",
            pname1:"Sanjay Ansari",
            porder:"7899 Orders",
            ptext1:"Accomplished Astrologer",
            ptext4:"Lorem ipsum consectetur adipisc amet, consectetur adipiscing consectetur ipsum dolor sit amet, consectetur adipiscing elit , consectetur adipiscing elit.",

        },
        {
            img1: "/img/Readersimg.png",
            img2:'/img/Star.svg',
            img3:'/img/tick.png',
            img4:"/img/Calling.png",
            img5:"/img/Chat.png",
            text1:"7899",
            text2:"Orders",
            name:"Acharya Aditya",
            lang:"English , Hindi , Gujarati",
            exp:"Exp :",
            year:"12 Years",
            free:"FREE",
            min:"50/Min",
            call:"Call",
            chat:"Chat",
            pimg1:"/img/guru2.svg",
            pname1:"Sanjay Ansari",
            porder:"7899 Orders",
            ptext1:"Accomplished Astrologer",
            ptext4:"Lorem ipsum consectetur adipisc amet, consectetur adipiscing consectetur ipsum dolor sit amet, consectetur adipiscing elit , consectetur adipiscing elit.",

        },
        {
            img1: "/img/Readersimg.png",
            img2:'/img/Star.svg',
            img3:'/img/tick.png',
            img4:"/img/Calling.png",
            img5:"/img/Chat.png",
            text1:"7899",
            text2:"Orders",
            name:"Acharya Aditya",
            lang:"English , Hindi , Gujarati",
            exp:"Exp :",
            year:"12 Years",
            free:"FREE",
            min:"50/Min",
            call:"Call",
            chat:"Chat",
            pimg1:"/img/guru2.svg",
            pname1:"Sanjay Ansari",
            porder:"7899 Orders",
            ptext1:"Accomplished Astrologer",
            ptext4:"Lorem ipsum consectetur adipisc amet, consectetur adipiscing consectetur ipsum dolor sit amet, consectetur adipiscing elit , consectetur adipiscing elit.",

        },
        {
            img1: "/img/Readersimg.png",
            img2:'/img/Star.svg',
            img3:'/img/tick.png',
            img4:"/img/Calling.png",
            img5:"/img/Chat.png",
            text1:"7899",
            text2:"Orders",
            name:"Acharya Aditya",
            lang:"English , Hindi , Gujarati",
            exp:"Exp :",
            year:"12 Years",
            free:"FREE",
            min:"50/Min",
            call:"Call",
            chat:"Chat",
            pimg1:"/img/guru2.svg",
            pname1:"Sanjay Ansari",
            porder:"7899 Orders",
            ptext1:"Accomplished Astrologer",
            ptext4:"Lorem ipsum consectetur adipisc amet, consectetur adipiscing consectetur ipsum dolor sit amet, consectetur adipiscing elit , consectetur adipiscing elit.",

        },
        {
            img1: "/img/Readersimg.png",
            img2:'/img/Star.svg',
            img3:'/img/tick.png',
            img4:"/img/Calling.png",
            img5:"/img/Chat.png",
            text1:"7899",
            text2:"Orders",
            name:"Acharya Aditya",
            lang:"English , Hindi , Gujarati",
            exp:"Exp :",
            year:"12 Years",
            free:"FREE",
            min:"50/Min",
            call:"Call",
            chat:"Chat",
            pimg1:"/img/guru2.svg",
            pname1:"Sanjay Ansari",
            porder:"7899 Orders",
            ptext1:"Accomplished Astrologer",
            ptext4:"Lorem ipsum consectetur adipisc amet, consectetur adipiscing consectetur ipsum dolor sit amet, consectetur adipiscing elit , consectetur adipiscing elit.",

        }, ]
        const [popUp, setPopUp] = useState([])
        const [activeTab, setActiveTab] = useState("tab1");
        const changeContent= (sign)=>{
             setPopUp([sign]);
             setPopUpToggle(!popUpToggle)
        }
        const [popUpToggle, setPopUpToggle] = useState(false);
    return (
        <div>
            <div className="py-5 md:py-7">
                <h1 className=" text-left text-[var(--Secondry-Color,#773101)] font-Lexend text-[18px] md:text-[26px] not-italic font-semibold leading-normal">
                    Astrologers & Tarot Readers
                </h1>
            </div>
            <div className='   '>
                <div className="grid grid-flow-cols grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full" >
                {
                    Data.map((sign, index)=>{
                        return(
                            <>
                             <div className='p-[1.5px] relative  md:w-[21.3rem] lg:w-[26rem]  hover:bg-[#FFA300]   shadow-[0px_4px_10px_0px_rgba(174,174,174,0.25)] overflow-x-hidden  rounded-[6px] ' key={sign.index}  onClick={()=> changeContent(sign)}>
                        <div className='flex flex-row  justify-stretch items-stretch   bg-white pt-2  rounded-[6px] '>
                            <div className='flex flex-col pt-3   '>
                                <div className='md:px-2 lg:px-3 px-3  '>
                                    <img src={sign.img1} className='w-[5.5rem] md:w-20 lg:w-32' alt='' />
                                </div>
                                <div className='flex flex-col justify-start items-center gap-x-2 px-2 md:px-4  py-2'>
                                <div className="flex flex-row   text-[#ffd23e] lg:gap-1">
                <i class="fa fa-star fa_custom " aria-hidden="true"></i>
                <i class="fa fa-star fa_custom " aria-hidden="true"></i>
                <i class="fa fa-star fa_custom " aria-hidden="true"></i>
                <i class="fa fa-star fa_custom " aria-hidden="true"></i>
                <i class="fa fa-star fa_custom " aria-hidden="true"></i>
                 
                </div>
                                    <h2 className="text-black text-[13px] font-Lexend not-italic font-semibold leading-[normal] tracking-[0.52px] py-2 ">{sign.text1}<span className="text-black text-[13px] px-1 font-Lexend not-italic font-normal leading-[normal] tracking-[0.52px]">{sign.text2}</span></h2>
                                </div>
                            </div>
                           
                            <div className='   '>
                            <img src={sign.img3} className='w-5 absolute top-2 right-2  ' alt='' />
                            </div>
                            
                            <div>
                                <div className='flex flex-col  px-0 md:px-0 lg:px-4  pt-3 '>
                                  <div className='flex flex-row  justify-between items-end '>
                                    <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[18px] md:text-[20px] font-Lexend not-italic font-medium leading-[normal]'>{sign.name}</h2>
                                </div>
                                    <div className='flex flex-row gap-x-2 md:gap-x-3 py-2' >
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M15.4166 8.33335L19.0833 17.5H17.2874L16.2866 15H12.8783L11.8791 17.5H10.0841L13.7499 8.33335H15.4166ZM8.33326 1.66669V3.33335H13.3333V5.00002H11.6933C11.0504 6.93508 10.0245 8.72087 8.6766 10.2509C9.27768 10.7872 9.92966 11.2636 10.6233 11.6734L9.99743 13.2384C9.10203 12.7305 8.26459 12.1267 7.49993 11.4375C6.01125 12.7848 4.2483 13.7935 2.33243 14.3942L1.88576 12.7867C3.52729 12.2633 5.03995 11.3995 6.32493 10.2517C5.37384 9.17497 4.58165 7.96774 3.97243 6.66669H5.8391C6.30355 7.52407 6.86048 8.32802 7.49993 9.06419C8.54168 7.86344 9.36268 6.48777 9.92493 5.00085L1.6666 5.00002V3.33335H6.6666V1.66669H8.33326ZM14.5833 10.7375L13.5441 13.3334H15.6208L14.5833 10.7375Z" fill="#3A3A3A" />
                                            </svg>
                                        </div>
                                        <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[12px] md:text-[14px] font-Poppins  not-italic font-normal leading-[normal]'>{sign.lang}</h2>
                                    </div>
                                    <div className='flex flex-col justify-start items-start '>
                                        <div className='flex flex-row gap-x-2 justify-center items-center  '>
                                            <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] font-Lexend not-italic font-medium leading-[normal]">{sign.exp}</h2>
                                            <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal]">{sign.year}</h2>
                                        </div>
                                        <div className='flex flex-row gap-x-2 py-2 md:pb-3 lg:pb-5'>
                                            <h2 className="text-[color:var(--red,#DB042A)] text-[16px] md:text-[18px] font-Lexend not-italic font-semibold leading-[normal]">{sign.free}</h2>
                                            <h2 className="line-through text-[color:var(--grey-1,#A1A1A1)] text-[16px] md:text-[18px] font-Lexend not-italic font-medium leading-[normal]">{sign.min}</h2>
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-start items-center  py-2 gap-x-1.5 md:gap-x-4 md:py-1.5  '>
                                        <div className='px-3 md:px-5 lg:px-7 gap-x-2 py-2 bg-[#FFA300] rounded-[45px] flex flex-row justify-center items-center '>
                                            <img src={sign.img4} className='w-4 md:w-5' alt='' />
                                            <button className=' text-white  text-[14px] md:text-[16px] font-Lexend  not-italic font-medium leading-[normal]' onClick={p.cut}>{sign.call}</button>
                                        </div>
                                        <div className='px-3 md:px-4 lg:px-7  py-2 gap-x-2 bg-[#04B4DB] rounded-[45px] flex flex-row justify-center items-center'>
                                            <img src={sign.img5} className='w-4 md:w-5 ' alt='' />
                                            <button className=' text-white  text-[14px] md:text-[16px] font-Lexend  not-italic font-medium leading-[normal]'>{sign.chat}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                           
                            </>
                        )
                    })
                }
                 

                </div>
                {popUpToggle && <> 
            {popUp.map((pop)=>{
                return(
                    <div className='lg:block hidden  fixed z-40  top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 '>
            <div className="blogCard  lg:w-[1041px] lg:h-[434px] md:w-[676px] md:h-[236px] w-[300px] h-[244px] bg-white md:rounded-[10px] rounded-[5px] shadow relative"  key={pop.index}>
            <div className="md:w-[45px] md:h-[45px] w-[30px] h-[30px] bg-gray-100 rounded-full flex justify-center items-center absolute md:-top-4 md:-right-[16px] -top-2 -right-[10px] bottom-0 " onClick={changeContent}>
               <CloseIcon  sx={{ '@media (min-width:300px)': { fontSize: '14px', }, '@media (min-width:768px)': { fontSize: '24px', }, }}/>
            </div>
            {/* <p className=" text-amber-900 lg:text-[20px] md:text-[16px] text-[14px] font-medium md:font-semibold font-['Lexend'] tracking-tight lg:px-[39px] lg:py-[30px] md:px-[24px] text-start md:py-[14px] px-[20px] py-[12px]">{pop.name}</p> */}
           <div className='flex flex-row  gap-x-5 '>
            <div className='md:flex md:flex-row flex flex-col justify-center items-center '>
                <div className=''>
                <div className=' flex justify-center items-center   rounded-md   '>
                   <img src={pop.pimg1} className='w-[76.2rem]   pl-6 pt-6'/>
                </div>
                </div>
            {/* <p className=" lg:w-[960px] lg:h-[248px] md:w-[450px] md:h-[140px] md:overflow-ellipsis md:overflow-hidden w-[250px] h-[76px] overflow-hidden overflow-ellipsis lg:pt-[6px] md:pt-0 pt-[18px] text-neutral-700 lg:text-[14px] md:text-[12px] text-[12px] text-start lg:font-medium  md:font-normal font-normal font-['Poppins'] lg:leading-[24.85px] tracking-tight">{pop.horoscope}</p> */}
            </div>
            <div className='pt-8 '>
                <div className='flex py-0.5 flex-row gap-x-3 '>
            <p className=" text-[color:var(--Secondry-Color,#773101)] text-center text-[24px] font-inter not-italic font-medium leading-[normal] ">{pop.pname1}</p>
                    <img src={pop.img3} className='w-8' />
                    </div>
                    <div className='flex flex-row gap-x-2 '>
                        <h1 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] font-Lexend not-italic font-semibold leading-[normal] tracking-[0.64px]'>{pop.text1}</h1>
                        <h1 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] font-Lexend not-italic font-normal leading-[normal] tracking-[0.64px]'>{pop.text2}</h1>
                    </div>
                    <div className='py-1'>
                        <h1 className='text-start text-[color:var(--Black-text-color,#3A3A3A)] text-[18px] font-Lexend not-italic font-normal leading-[normal]'>{pop.ptext1}</h1>
                    </div>
                    <div className='py-2 flex  flex-row justify-start items-center gap-x-2   '>
                                <div className="flex flex-row   text-[#ffd23e] lg:gap-1">
                <i class="fa fa-star fa_custom " aria-hidden="true"></i>
                <i class="fa fa-star fa_custom " aria-hidden="true"></i>
                <i class="fa fa-star fa_custom " aria-hidden="true"></i>
                <i class="fa fa-star fa_custom " aria-hidden="true"></i>
                <i class="fa fa-star fa_custom " aria-hidden="true"></i>
                 
                </div>
                                    <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] font-Lexend not-italic font-normal leading-[normal] ">5 Rating</h2>
                                </div>
                    <div className='py-1 flex flex-row gap-x-2 '>
                                            <h2 className="text-[color:var(--red,#DB042A)] text-[16px] md:text-[18px] font-Lexend not-italic font-semibold leading-[normal]">{pop.free}</h2>
                                            <h2 className="line-through text-[color:var(--grey-1,#A1A1A1)] text-[16px] md:text-[18px] font-Lexend not-italic font-medium leading-[normal]">{pop.min}</h2>
                                        </div>
                     <div className='py-1 flex flex-row justify-start items-center gap-x-2 md:gap-x-3 ' >
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none">
                                                <path d="M15.4166 8.33335L19.0833 17.5H17.2874L16.2866 15H12.8783L11.8791 17.5H10.0841L13.7499 8.33335H15.4166ZM8.33326 1.66669V3.33335H13.3333V5.00002H11.6933C11.0504 6.93508 10.0245 8.72087 8.6766 10.2509C9.27768 10.7872 9.92966 11.2636 10.6233 11.6734L9.99743 13.2384C9.10203 12.7305 8.26459 12.1267 7.49993 11.4375C6.01125 12.7848 4.2483 13.7935 2.33243 14.3942L1.88576 12.7867C3.52729 12.2633 5.03995 11.3995 6.32493 10.2517C5.37384 9.17497 4.58165 7.96774 3.97243 6.66669H5.8391C6.30355 7.52407 6.86048 8.32802 7.49993 9.06419C8.54168 7.86344 9.36268 6.48777 9.92493 5.00085L1.6666 5.00002V3.33335H6.6666V1.66669H8.33326ZM14.5833 10.7375L13.5441 13.3334H15.6208L14.5833 10.7375Z" fill="#3A3A3A" />
                                            </svg>
                                        </div>
                                        <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[12px] md:text-[18px] font-Poppins  not-italic font-normal leading-[normal]'>{pop.lang}</h2>
                                    </div>
                     <div className='py-1 flex flex-row gap-x-2 justify-start items-center  '>
                                            <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[20px] font-Lexend not-italic font-medium leading-[normal]">{pop.exp}</h2>
                                            <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[18px] font-Lexend not-italic font-normal leading-[normal]">{pop.year}</h2>
                                        </div>
                    <div className='py-4'>
                                            <p className='text-start text-[color:var(--Black-text-color,#3A3A3A)] text-[18px] font-Lexend not-italic font-normal leading-6'>{pop.ptext4}</p>
                                        </div>
                       <div className='py-2 flex flex-row justify-start items-center gap-x-3'>
                                        <div className='px-3 md:px-5 lg:px-[5.5rem] gap-x-2 py-2.5 bg-[#FFA300] rounded-[45px] flex flex-row justify-center items-center '>
                                            <img src={pop.img4} className='w-4 md:w-5' alt='' />
                                            <button className=' text-white  text-[14px] md:text-[16px] font-Lexend  not-italic font-medium leading-[normal]' onClick={p.cut}>{pop.call}</button>
                                        </div>
                                        <div className='px-3 md:px-4 lg:px-[5.5rem]  py-2.5 gap-x-2 bg-[#04B4DB] rounded-[45px] flex flex-row justify-center items-center'>
                                            <img src={pop.img5} className='w-4 md:w-5 ' alt='' />
                                            <button className=' text-white  text-[14px] md:text-[16px] font-Lexend  not-italic font-medium leading-[normal]'>{pop.chat}</button>
                                        </div>
                                    </div>
            </div>
            </div>
            </div>
           </div>
                )
            })}
       </>}

       {popUpToggle && <> 
            {popUp.map((pop)=>{
                return(
                    <div className='md:block lg:hidden  fixed z-40  top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 '>
            <div className="blogCard  lg:w-[1041px] lg:h-[434px] md:w-[476px] md:h-[376px] w-[300px] h-[300px] bg-white md:rounded-[10px] rounded-[5px] shadow relative"  key={pop.index}>
            <div className="md:w-[45px] md:h-[45px] w-[30px] h-[30px] bg-gray-100 rounded-full flex justify-center items-center absolute md:-top-4 md:-right-[16px] -top-2 -right-[10px] bottom-0 " onClick={changeContent}>
               <CloseIcon  sx={{ '@media (min-width:300px)': { fontSize: '14px', }, '@media (min-width:768px)': { fontSize: '24px', }, }}/>
            </div>
            {/* <p className=" text-amber-900 lg:text-[20px] md:text-[16px] text-[14px] font-medium md:font-semibold font-['Lexend'] tracking-tight lg:px-[39px] lg:py-[30px] md:px-[24px] text-start md:py-[14px] px-[20px] py-[12px]">{pop.name}</p> */}
                <div className='flex flex-row md:pt-3 pt-2 px-3 md:pl-2 space-x-2'>
                <div className=' flex flex-col justify-center items-center   rounded-md  md:px-2 '>
                   <img src={pop.pimg1} className=' w-[5rem] md:w-[11.2rem] '/>

                   <div className='py-2 flex  flex-col justify-start items-center gap-x-2   '>
                                <div className="flex flex-row  md:gap-x-1.5 py-0.5 text-[#ffd23e] lg:gap-1">
                <i class="fa fa-star fa_custom " aria-hidden="true"></i>
                <i class="fa fa-star fa_custom " aria-hidden="true"></i>
                <i class="fa fa-star fa_custom " aria-hidden="true"></i>
                <i class="fa fa-star fa_custom " aria-hidden="true"></i>
                <i class="fa fa-star fa_custom " aria-hidden="true"></i>
                 
                </div>
                                    <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[12px] md:text-[16px] font-Lexend not-italic font-normal leading-[normal] ">5 Rating</h2>
                                </div>
                </div>
                <div className='flex flex-col'>
                <div className='flex py-0.5 flex-row gap-x-0.5 md:gap-x-3 '>
            <p className=" text-[color:var(--Secondry-Color,#773101)] text-center text-[18px] md:text-[24px] font-inter not-italic font-medium leading-[normal] ">{pop.pname1}</p>
                    <img src={pop.img3} className='w-5 md:w-8' />
                    </div>
                    
                    <div className='flex flex-row gap-x-1.5 md:gap-x-2 '>
                        <h1 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[12px] md:text-[16px] font-Lexend not-italic font-semibold leading-[normal] tracking-[0.64px]'>{pop.text1}</h1>
                        <h1 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[12px] md:text-[16px] font-Lexend not-italic font-normal leading-[normal] tracking-[0.64px]'>{pop.text2}</h1>
                    </div>
                    <div className='py-1'>
                        <h1 className='text-start text-[color:var(--Black-text-color,#3A3A3A)] text-[12px] md:text-[18px] font-Lexend not-italic font-normal leading-[normal]'>{pop.ptext1}</h1>
                    </div>
                    <div className='py-1 flex flex-row gap-x-1.5 md:gap-x-2 '>
                                            <h2 className="text-[color:var(--red,#DB042A)] text-[12px]  md:text-[18px] font-Lexend not-italic font-semibold leading-[normal]">{pop.free}</h2>
                                            <h2 className="line-through text-[color:var(--grey-1,#A1A1A1)] text-[12px] md:text-[18px] font-Lexend not-italic font-medium leading-[normal]">{pop.min}</h2>
                                        </div>
                     <div className='py-0.5 flex flex-row justify-start items-center gap-x-2 md:gap-x-3 ' >
                                        <div className=''>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none">
                                                <path d="M15.4166 8.33335L19.0833 17.5H17.2874L16.2866 15H12.8783L11.8791 17.5H10.0841L13.7499 8.33335H15.4166ZM8.33326 1.66669V3.33335H13.3333V5.00002H11.6933C11.0504 6.93508 10.0245 8.72087 8.6766 10.2509C9.27768 10.7872 9.92966 11.2636 10.6233 11.6734L9.99743 13.2384C9.10203 12.7305 8.26459 12.1267 7.49993 11.4375C6.01125 12.7848 4.2483 13.7935 2.33243 14.3942L1.88576 12.7867C3.52729 12.2633 5.03995 11.3995 6.32493 10.2517C5.37384 9.17497 4.58165 7.96774 3.97243 6.66669H5.8391C6.30355 7.52407 6.86048 8.32802 7.49993 9.06419C8.54168 7.86344 9.36268 6.48777 9.92493 5.00085L1.6666 5.00002V3.33335H6.6666V1.66669H8.33326ZM14.5833 10.7375L13.5441 13.3334H15.6208L14.5833 10.7375Z" fill="#3A3A3A" />
                                            </svg>
                                        </div>
                                        <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[12px] md:text-[18px] font-Poppins  not-italic font-normal leading-[normal]'>{pop.lang}</h2>
                                    </div>
                     <div className='py-0.5 flex flex-row gap-x-2 justify-start items-center  '>
                                            <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] md:text-[20px] font-Lexend not-italic font-medium leading-[normal]">{pop.exp}</h2>
                                            <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[12px] md:text-[18px] font-Lexend not-italic font-normal leading-[normal]">{pop.year}</h2>
                                        </div>
                    </div>
                </div>
            {/* <p className=" lg:w-[960px] lg:h-[248px] md:w-[450px] md:h-[140px] md:overflow-ellipsis md:overflow-hidden w-[250px] h-[76px] overflow-hidden overflow-ellipsis lg:pt-[6px] md:pt-0 pt-[18px] text-neutral-700 lg:text-[14px] md:text-[12px] text-[12px] text-start lg:font-medium  md:font-normal font-normal font-['Poppins'] lg:leading-[24.85px] tracking-tight">{pop.horoscope}</p> */}

                    <div className='px-3'>
                                            <p className='text-left text-[color:var(--Black-text-color,#3A3A3A)] text-[12px] md:text-[18px] font-Lexend not-italic font-normal leading-6'>{pop.ptext4}</p>
                                        </div>
                       <div className='py-2 flex flex-row justify-center items-center gap-x-3'>
                                        <div className='px-7 md:px-12 lg:px-[5.5rem] gap-x-2 py-2.5 bg-[#FFA300] rounded-[45px] flex flex-row justify-center items-center '>
                                            <img src={pop.img4} className='w-4 md:w-5' alt='' />
                                            <button className=' text-white  text-[14px] md:text-[16px] font-Lexend  not-italic font-medium leading-[normal]' onClick={p.cut}>{pop.call}</button>
                                        </div>
                                        <div className='px-7 md:px-12 lg:px-[5.5rem]  py-2.5 gap-x-2 bg-[#04B4DB] rounded-[45px] flex flex-row justify-center items-center'>
                                            <img src={pop.img5} className='w-4 md:w-5 ' alt='' />
                                            <button className=' text-white  text-[14px] md:text-[16px] font-Lexend  not-italic font-medium leading-[normal]'>{pop.chat}</button>
                                        </div>
                                    </div>
          
            
            </div>
           </div>
                )
            })}
       </>}

            </div>
        </div>
    )
}

export default Readers


   {/* <div className=' p-[1.5px]  hover:bg-[#FFA300]   shadow-[0px_4px_10px_0px_rgba(174,174,174,0.25)] overflow-x-hidden  rounded-[6px] '>
                        <div className='flex flex-row  bg-white pt-2  rounded-[6px]'>
                            <div className='flex flex-col pt-3 '>
                                <div className='md:px-2 lg:px-3 px-3 '>
                                    <img src='/img/Readersimg.png' className='w-24 md:w-28 lg:w-40' alt='' />
                                </div>
                                <div className='flex flex-col justify-start items-center gap-x-2 px-4  py-2'>
                                    <img src='/img/Star.svg' className='w-20 md:w-28 lg:w-32' alt='' />

                                    <h2 className="text-black text-[13px] font-Lexend not-italic font-semibold leading-[normal] tracking-[0.52px] py-2 ">7899 <span className="text-black text-[13px]  font-Lexend not-italic font-normal leading-[normal] tracking-[0.52px]"> Orders</span></h2>
                                </div>
                            </div>
                            <div>
                                <div className='relative top-2 md:left-48 lg:left-56 left-40 '>
                                    <img src='/img/tick.png' className='w-5 md:w-6' alt='' />

                                </div>
                                <div className='flex flex-col justify-start items-start px-1 md:px-2 lg:px-4  gap-y-2 '>
                                    <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[18px] md:text-[20px] font-Lexend not-italic font-medium leading-[normal]'>Acharya Aditya</h2>
                                    <div className='flex flex-row gap-x-2 md:gap-x-3 pt-0 md:pt-3' >
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M15.4166 8.33335L19.0833 17.5H17.2874L16.2866 15H12.8783L11.8791 17.5H10.0841L13.7499 8.33335H15.4166ZM8.33326 1.66669V3.33335H13.3333V5.00002H11.6933C11.0504 6.93508 10.0245 8.72087 8.6766 10.2509C9.27768 10.7872 9.92966 11.2636 10.6233 11.6734L9.99743 13.2384C9.10203 12.7305 8.26459 12.1267 7.49993 11.4375C6.01125 12.7848 4.2483 13.7935 2.33243 14.3942L1.88576 12.7867C3.52729 12.2633 5.03995 11.3995 6.32493 10.2517C5.37384 9.17497 4.58165 7.96774 3.97243 6.66669H5.8391C6.30355 7.52407 6.86048 8.32802 7.49993 9.06419C8.54168 7.86344 9.36268 6.48777 9.92493 5.00085L1.6666 5.00002V3.33335H6.6666V1.66669H8.33326ZM14.5833 10.7375L13.5441 13.3334H15.6208L14.5833 10.7375Z" fill="#3A3A3A" />
                                            </svg>
                                        </div>
                                        <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[12px] md:text-[14px] font-Poppins  not-italic font-normal leading-[normal]'>English , Hindi , Gujarati</h2>
                                    </div>
                                    <div className='flex flex-col justify-start items-start '>
                                        <div className='flex flex-row gap-x-2 justify-center items-center  '>
                                            <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] font-Lexend not-italic font-medium leading-[normal]">Exp :</h2>
                                            <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal]">12 Years</h2>
                                        </div>
                                        <div className='flex flex-row gap-x-2 py-1 md:py-2'>
                                            <h2 className="text-[color:var(--red,#DB042A)] text-[18px] font-Lexend not-italic font-semibold leading-[normal]">FREE</h2>
                                            <h2 className="line-through text-[color:var(--grey-1,#A1A1A1)] text-[18px] font-Lexend not-italic font-medium leading-[normal]">50/Min</h2>
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-start items-center gap-x-1.5 md:gap-x-4 py-1.5'>
                                        <div className='px-5 md:px-7 gap-x-2 py-2 bg-[#FFA300] rounded-[45px] flex flex-row justify-center items-center '>
                                            <img src='/img/Calling.png' className='w-5' alt='' />
                                            <button className=' text-white  text-[16px] font-Lexend  not-italic font-medium leading-[normal]' onClick={p.cut}>Call</button>
                                        </div>
                                        <div className='px-5 md:px-7 py-2 gap-x-2 bg-[#04B4DB] rounded-[45px] flex flex-row justify-center items-center'>
                                            <img src='/img/Chat.png' className='w-5' alt='' />
                                            <button className=' text-white  text-[16px] font-Lexend  not-italic font-medium leading-[normal]'>Chat</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className=' p-[1.5px]  hover:bg-[#FFA300]   shadow-[0px_4px_10px_0px_rgba(174,174,174,0.25)] overflow-x-hidden  rounded-[6px] '>
                        <div className='flex flex-row  bg-white pt-2  rounded-[6px]'>
                            <div className='flex flex-col pt-3 '>
                                <div className='md:px-2 lg:px-3 px-3 '>
                                    <img src='/img/Readersimg.png' className='w-24 md:w-28 lg:w-40' alt='' />
                                </div>
                                <div className='flex flex-col justify-start items-center gap-x-2 px-4  py-2'>
                                    <img src='/img/Star.svg' className='w-20 md:w-28 lg:w-32' alt='' />

                                    <h2 className="text-black text-[13px] font-Lexend not-italic font-semibold leading-[normal] tracking-[0.52px] py-2 ">7899 <span className="text-black text-[13px]  font-Lexend not-italic font-normal leading-[normal] tracking-[0.52px]"> Orders</span></h2>
                                </div>
                            </div>
                            <div>
                                <div className='relative top-2 md:left-48 lg:left-56 left-40 '>
                                    <img src='/img/tick.png' className='w-5 md:w-6' alt='' />

                                </div>
                                <div className='flex flex-col justify-start items-start px-1 md:px-2 lg:px-4  gap-y-2 '>
                                    <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[18px] md:text-[20px] font-Lexend not-italic font-medium leading-[normal]'>Acharya Aditya</h2>
                                    <div className='flex flex-row gap-x-2 md:gap-x-3 pt-0 md:pt-3' >
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M15.4166 8.33335L19.0833 17.5H17.2874L16.2866 15H12.8783L11.8791 17.5H10.0841L13.7499 8.33335H15.4166ZM8.33326 1.66669V3.33335H13.3333V5.00002H11.6933C11.0504 6.93508 10.0245 8.72087 8.6766 10.2509C9.27768 10.7872 9.92966 11.2636 10.6233 11.6734L9.99743 13.2384C9.10203 12.7305 8.26459 12.1267 7.49993 11.4375C6.01125 12.7848 4.2483 13.7935 2.33243 14.3942L1.88576 12.7867C3.52729 12.2633 5.03995 11.3995 6.32493 10.2517C5.37384 9.17497 4.58165 7.96774 3.97243 6.66669H5.8391C6.30355 7.52407 6.86048 8.32802 7.49993 9.06419C8.54168 7.86344 9.36268 6.48777 9.92493 5.00085L1.6666 5.00002V3.33335H6.6666V1.66669H8.33326ZM14.5833 10.7375L13.5441 13.3334H15.6208L14.5833 10.7375Z" fill="#3A3A3A" />
                                            </svg>
                                        </div>
                                        <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[12px] md:text-[14px] font-Poppins  not-italic font-normal leading-[normal]'>English , Hindi , Gujarati</h2>
                                    </div>
                                    <div className='flex flex-col justify-start items-start '>
                                        <div className='flex flex-row gap-x-2 justify-center items-center  '>
                                            <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] font-Lexend not-italic font-medium leading-[normal]">Exp :</h2>
                                            <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal]">12 Years</h2>
                                        </div>
                                        <div className='flex flex-row gap-x-2 py-1 md:py-2'>
                                            <h2 className="text-[color:var(--red,#DB042A)] text-[18px] font-Lexend not-italic font-semibold leading-[normal]">FREE</h2>
                                            <h2 className="line-through text-[color:var(--grey-1,#A1A1A1)] text-[18px] font-Lexend not-italic font-medium leading-[normal]">50/Min</h2>
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-start items-center gap-x-1.5 md:gap-x-4 py-1.5'>
                                        <div className='px-5 md:px-7 gap-x-2 py-2 bg-[#FFA300] rounded-[45px] flex flex-row justify-center items-center '>
                                            <img src='/img/Calling.png' className='w-5' alt='' />
                                            <button className=' text-white  text-[16px] font-Lexend  not-italic font-medium leading-[normal]' onClick={p.cut}>Call</button>
                                        </div>
                                        <div className='px-5 md:px-7 py-2 gap-x-2 bg-[#04B4DB] rounded-[45px] flex flex-row justify-center items-center'>
                                            <img src='/img/Chat.png' className='w-5' alt='' />
                                            <button className=' text-white  text-[16px] font-Lexend  not-italic font-medium leading-[normal]'>Chat</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className=' p-[1.5px]  hover:bg-[#FFA300]   shadow-[0px_4px_10px_0px_rgba(174,174,174,0.25)] overflow-x-hidden  rounded-[6px] '>
                        <div className='flex flex-row  bg-white pt-2  rounded-[6px]'>
                            <div className='flex flex-col pt-3 '>
                                <div className='md:px-2 lg:px-3 px-3 '>
                                    <img src='/img/Readersimg.png' className='w-24 md:w-28 lg:w-40' alt='' />
                                </div>
                                <div className='flex flex-col justify-start items-center gap-x-2 px-4  py-2'>
                                    <img src='/img/Star.svg' className='w-20 md:w-28 lg:w-32' alt='' />

                                    <h2 className="text-black text-[13px] font-Lexend not-italic font-semibold leading-[normal] tracking-[0.52px] py-2 ">7899 <span className="text-black text-[13px]  font-Lexend not-italic font-normal leading-[normal] tracking-[0.52px]"> Orders</span></h2>
                                </div>
                            </div>
                            <div>
                                <div className='relative top-2 md:left-48 lg:left-56 left-40 '>
                                    <img src='/img/tick.png' className='w-5 md:w-6' alt='' />

                                </div>
                                <div className='flex flex-col justify-start items-start px-1 md:px-2 lg:px-4  gap-y-2 '>
                                    <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[18px] md:text-[20px] font-Lexend not-italic font-medium leading-[normal]'>Acharya Aditya</h2>
                                    <div className='flex flex-row gap-x-2 md:gap-x-3 pt-0 md:pt-3' >
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M15.4166 8.33335L19.0833 17.5H17.2874L16.2866 15H12.8783L11.8791 17.5H10.0841L13.7499 8.33335H15.4166ZM8.33326 1.66669V3.33335H13.3333V5.00002H11.6933C11.0504 6.93508 10.0245 8.72087 8.6766 10.2509C9.27768 10.7872 9.92966 11.2636 10.6233 11.6734L9.99743 13.2384C9.10203 12.7305 8.26459 12.1267 7.49993 11.4375C6.01125 12.7848 4.2483 13.7935 2.33243 14.3942L1.88576 12.7867C3.52729 12.2633 5.03995 11.3995 6.32493 10.2517C5.37384 9.17497 4.58165 7.96774 3.97243 6.66669H5.8391C6.30355 7.52407 6.86048 8.32802 7.49993 9.06419C8.54168 7.86344 9.36268 6.48777 9.92493 5.00085L1.6666 5.00002V3.33335H6.6666V1.66669H8.33326ZM14.5833 10.7375L13.5441 13.3334H15.6208L14.5833 10.7375Z" fill="#3A3A3A" />
                                            </svg>
                                        </div>
                                        <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[12px] md:text-[14px] font-Poppins  not-italic font-normal leading-[normal]'>English , Hindi , Gujarati</h2>
                                    </div>
                                    <div className='flex flex-col justify-start items-start '>
                                        <div className='flex flex-row gap-x-2 justify-center items-center  '>
                                            <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] font-Lexend not-italic font-medium leading-[normal]">Exp :</h2>
                                            <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal]">12 Years</h2>
                                        </div>
                                        <div className='flex flex-row gap-x-2 py-1 md:py-2'>
                                            <h2 className="text-[color:var(--red,#DB042A)] text-[18px] font-Lexend not-italic font-semibold leading-[normal]">FREE</h2>
                                            <h2 className="line-through text-[color:var(--grey-1,#A1A1A1)] text-[18px] font-Lexend not-italic font-medium leading-[normal]">50/Min</h2>
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-start items-center gap-x-1.5 md:gap-x-4 py-1.5'>
                                        <div className='px-5 md:px-7 gap-x-2 py-2 bg-[#FFA300] rounded-[45px] flex flex-row justify-center items-center '>
                                            <img src='/img/Calling.png' className='w-5' alt='' />
                                            <button className=' text-white  text-[16px] font-Lexend  not-italic font-medium leading-[normal]' onClick={p.cut}>Call</button>
                                        </div>
                                        <div className='px-5 md:px-7 py-2 gap-x-2 bg-[#04B4DB] rounded-[45px] flex flex-row justify-center items-center'>
                                            <img src='/img/Chat.png' className='w-5' alt='' />
                                            <button className=' text-white  text-[16px] font-Lexend  not-italic font-medium leading-[normal]'>Chat</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> */}
                        {/* <div className="flex flex-col md:flex-col lg:flex-row  justify-between items-center py-3 md:gap-x-4 md:gap-y-5  " >
                    <div className=' p-[1.5px]  hover:bg-[#FFA300]   shadow-[0px_4px_10px_0px_rgba(174,174,174,0.25)] overflow-x-hidden  rounded-[6px] '>
                        <div className='flex flex-row  bg-white pt-2  rounded-[6px]'>
                            <div className='flex flex-col pt-3 '>
                                <div className='md:px-2 lg:px-3 px-3 '>
                                    <img src='/img/Readersimg.png' className='w-24 md:w-28 lg:w-40' alt='' />
                                </div>
                                <div className='flex flex-col justify-start items-center gap-x-2 px-4  py-2'>
                                    <img src='/img/Star.svg' className='w-20 md:w-28 lg:w-32' alt='' />

                                    <h2 className="text-black text-[13px] font-Lexend not-italic font-semibold leading-[normal] tracking-[0.52px] py-2 ">7899 <span className="text-black text-[13px]  font-Lexend not-italic font-normal leading-[normal] tracking-[0.52px]"> Orders</span></h2>
                                </div>
                            </div>
                            <div>
                                <div className='relative top-2 md:left-48 lg:left-56 left-40 '>
                                    <img src='/img/tick.png' className='w-5 md:w-6' alt='' />

                                </div>
                                <div className='flex flex-col justify-start items-start px-1 md:px-2 lg:px-4  gap-y-2 '>
                                    <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[18px] md:text-[20px] font-Lexend not-italic font-medium leading-[normal]'>Acharya Aditya</h2>
                                    <div className='flex flex-row gap-x-2 md:gap-x-3 pt-0 md:pt-3' >
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M15.4166 8.33335L19.0833 17.5H17.2874L16.2866 15H12.8783L11.8791 17.5H10.0841L13.7499 8.33335H15.4166ZM8.33326 1.66669V3.33335H13.3333V5.00002H11.6933C11.0504 6.93508 10.0245 8.72087 8.6766 10.2509C9.27768 10.7872 9.92966 11.2636 10.6233 11.6734L9.99743 13.2384C9.10203 12.7305 8.26459 12.1267 7.49993 11.4375C6.01125 12.7848 4.2483 13.7935 2.33243 14.3942L1.88576 12.7867C3.52729 12.2633 5.03995 11.3995 6.32493 10.2517C5.37384 9.17497 4.58165 7.96774 3.97243 6.66669H5.8391C6.30355 7.52407 6.86048 8.32802 7.49993 9.06419C8.54168 7.86344 9.36268 6.48777 9.92493 5.00085L1.6666 5.00002V3.33335H6.6666V1.66669H8.33326ZM14.5833 10.7375L13.5441 13.3334H15.6208L14.5833 10.7375Z" fill="#3A3A3A" />
                                            </svg>
                                        </div>
                                        <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[12px] md:text-[14px] font-Poppins  not-italic font-normal leading-[normal]'>English , Hindi , Gujarati</h2>
                                    </div>
                                    <div className='flex flex-col justify-start items-start '>
                                        <div className='flex flex-row gap-x-2 justify-center items-center  '>
                                            <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] font-Lexend not-italic font-medium leading-[normal]">Exp :</h2>
                                            <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal]">12 Years</h2>
                                        </div>
                                        <div className='flex flex-row gap-x-2 py-1 md:py-2'>
                                            <h2 className="text-[color:var(--red,#DB042A)] text-[18px] font-Lexend not-italic font-semibold leading-[normal]">FREE</h2>
                                            <h2 className="line-through text-[color:var(--grey-1,#A1A1A1)] text-[18px] font-Lexend not-italic font-medium leading-[normal]">50/Min</h2>
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-start items-center gap-x-1.5 md:gap-x-4 py-1.5'>
                                        <div className='px-5 md:px-7 gap-x-2 py-2 bg-[#FFA300] rounded-[45px] flex flex-row justify-center items-center '>
                                            <img src='/img/Calling.png' className='w-5' alt='' />
                                            <button className=' text-white  text-[16px] font-Lexend  not-italic font-medium leading-[normal]' onClick={p.cut}>Call</button>
                                        </div>
                                        <div className='px-5 md:px-7 py-2 gap-x-2 bg-[#04B4DB] rounded-[45px] flex flex-row justify-center items-center'>
                                            <img src='/img/Chat.png' className='w-5' alt='' />
                                            <button className=' text-white  text-[16px] font-Lexend  not-italic font-medium leading-[normal]'>Chat</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className=' p-[1.5px]  hover:bg-[#FFA300]   shadow-[0px_4px_10px_0px_rgba(174,174,174,0.25)] overflow-x-hidden  rounded-[6px] '>
                        <div className='flex flex-row  bg-white pt-2  rounded-[6px]'>
                            <div className='flex flex-col pt-3 '>
                                <div className='md:px-2 lg:px-3 px-3 '>
                                    <img src='/img/Readersimg.png' className='w-24 md:w-28 lg:w-40' alt='' />
                                </div>
                                <div className='flex flex-col justify-start items-center gap-x-2 px-4  py-2'>
                                    <img src='/img/Star.svg' className='w-20 md:w-28 lg:w-32' alt='' />

                                    <h2 className="text-black text-[13px] font-Lexend not-italic font-semibold leading-[normal] tracking-[0.52px] py-2 ">7899 <span className="text-black text-[13px]  font-Lexend not-italic font-normal leading-[normal] tracking-[0.52px]"> Orders</span></h2>
                                </div>
                            </div>
                            <div>
                                <div className='relative top-2 md:left-48 lg:left-56 left-40 '>
                                    <img src='/img/tick.png' className='w-5 md:w-6' alt='' />

                                </div>
                                <div className='flex flex-col justify-start items-start px-1 md:px-2 lg:px-4  gap-y-2 '>
                                    <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[18px] md:text-[20px] font-Lexend not-italic font-medium leading-[normal]'>Acharya Aditya</h2>
                                    <div className='flex flex-row gap-x-2 md:gap-x-3 pt-0 md:pt-3' >
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M15.4166 8.33335L19.0833 17.5H17.2874L16.2866 15H12.8783L11.8791 17.5H10.0841L13.7499 8.33335H15.4166ZM8.33326 1.66669V3.33335H13.3333V5.00002H11.6933C11.0504 6.93508 10.0245 8.72087 8.6766 10.2509C9.27768 10.7872 9.92966 11.2636 10.6233 11.6734L9.99743 13.2384C9.10203 12.7305 8.26459 12.1267 7.49993 11.4375C6.01125 12.7848 4.2483 13.7935 2.33243 14.3942L1.88576 12.7867C3.52729 12.2633 5.03995 11.3995 6.32493 10.2517C5.37384 9.17497 4.58165 7.96774 3.97243 6.66669H5.8391C6.30355 7.52407 6.86048 8.32802 7.49993 9.06419C8.54168 7.86344 9.36268 6.48777 9.92493 5.00085L1.6666 5.00002V3.33335H6.6666V1.66669H8.33326ZM14.5833 10.7375L13.5441 13.3334H15.6208L14.5833 10.7375Z" fill="#3A3A3A" />
                                            </svg>
                                        </div>
                                        <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[12px] md:text-[14px] font-Poppins  not-italic font-normal leading-[normal]'>English , Hindi , Gujarati</h2>
                                    </div>
                                    <div className='flex flex-col justify-start items-start '>
                                        <div className='flex flex-row gap-x-2 justify-center items-center  '>
                                            <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] font-Lexend not-italic font-medium leading-[normal]">Exp :</h2>
                                            <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal]">12 Years</h2>
                                        </div>
                                        <div className='flex flex-row gap-x-2 py-1 md:py-2'>
                                            <h2 className="text-[color:var(--red,#DB042A)] text-[18px] font-Lexend not-italic font-semibold leading-[normal]">FREE</h2>
                                            <h2 className="line-through text-[color:var(--grey-1,#A1A1A1)] text-[18px] font-Lexend not-italic font-medium leading-[normal]">50/Min</h2>
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-start items-center gap-x-1.5 md:gap-x-4 py-1.5'>
                                        <div className='px-5 md:px-7 gap-x-2 py-2 bg-[#FFA300] rounded-[45px] flex flex-row justify-center items-center '>
                                            <img src='/img/Calling.png' className='w-5' alt='' />
                                            <button className=' text-white  text-[16px] font-Lexend  not-italic font-medium leading-[normal]' onClick={p.cut}>Call</button>
                                        </div>
                                        <div className='px-5 md:px-7 py-2 gap-x-2 bg-[#04B4DB] rounded-[45px] flex flex-row justify-center items-center'>
                                            <img src='/img/Chat.png' className='w-5' alt='' />
                                            <button className=' text-white  text-[16px] font-Lexend  not-italic font-medium leading-[normal]'>Chat</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className=' p-[1.5px]  hover:bg-[#FFA300]   shadow-[0px_4px_10px_0px_rgba(174,174,174,0.25)] overflow-x-hidden  rounded-[6px] '>
                        <div className='flex flex-row  bg-white pt-2  rounded-[6px]'>
                            <div className='flex flex-col pt-3 '>
                                <div className='md:px-2 lg:px-3 px-3 '>
                                    <img src='/img/Readersimg.png' className='w-24 md:w-28 lg:w-40' alt='' />
                                </div>
                                <div className='flex flex-col justify-start items-center gap-x-2 px-4  py-2'>
                                    <img src='/img/Star.svg' className='w-20 md:w-28 lg:w-32' alt='' />

                                    <h2 className="text-black text-[13px] font-Lexend not-italic font-semibold leading-[normal] tracking-[0.52px] py-2 ">7899 <span className="text-black text-[13px]  font-Lexend not-italic font-normal leading-[normal] tracking-[0.52px]"> Orders</span></h2>
                                </div>
                            </div>
                            <div>
                                <div className='relative top-2 md:left-48 lg:left-56 left-40 '>
                                    <img src='/img/tick.png' className='w-5 md:w-6' alt='' />

                                </div>
                                <div className='flex flex-col justify-start items-start px-1 md:px-2 lg:px-4  gap-y-2 '>
                                    <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[18px] md:text-[20px] font-Lexend not-italic font-medium leading-[normal]'>Acharya Aditya</h2>
                                    <div className='flex flex-row gap-x-2 md:gap-x-3 pt-0 md:pt-3' >
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M15.4166 8.33335L19.0833 17.5H17.2874L16.2866 15H12.8783L11.8791 17.5H10.0841L13.7499 8.33335H15.4166ZM8.33326 1.66669V3.33335H13.3333V5.00002H11.6933C11.0504 6.93508 10.0245 8.72087 8.6766 10.2509C9.27768 10.7872 9.92966 11.2636 10.6233 11.6734L9.99743 13.2384C9.10203 12.7305 8.26459 12.1267 7.49993 11.4375C6.01125 12.7848 4.2483 13.7935 2.33243 14.3942L1.88576 12.7867C3.52729 12.2633 5.03995 11.3995 6.32493 10.2517C5.37384 9.17497 4.58165 7.96774 3.97243 6.66669H5.8391C6.30355 7.52407 6.86048 8.32802 7.49993 9.06419C8.54168 7.86344 9.36268 6.48777 9.92493 5.00085L1.6666 5.00002V3.33335H6.6666V1.66669H8.33326ZM14.5833 10.7375L13.5441 13.3334H15.6208L14.5833 10.7375Z" fill="#3A3A3A" />
                                            </svg>
                                        </div>
                                        <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[12px] md:text-[14px] font-Poppins  not-italic font-normal leading-[normal]'>English , Hindi , Gujarati</h2>
                                    </div>
                                    <div className='flex flex-col justify-start items-start '>
                                        <div className='flex flex-row gap-x-2 justify-center items-center  '>
                                            <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] font-Lexend not-italic font-medium leading-[normal]">Exp :</h2>
                                            <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal]">12 Years</h2>
                                        </div>
                                        <div className='flex flex-row gap-x-2 py-1 md:py-2'>
                                            <h2 className="text-[color:var(--red,#DB042A)] text-[18px] font-Lexend not-italic font-semibold leading-[normal]">FREE</h2>
                                            <h2 className="line-through text-[color:var(--grey-1,#A1A1A1)] text-[18px] font-Lexend not-italic font-medium leading-[normal]">50/Min</h2>
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-start items-center gap-x-1.5 md:gap-x-4 py-1.5'>
                                        <div className='px-5 md:px-7 gap-x-2 py-2 bg-[#FFA300] rounded-[45px] flex flex-row justify-center items-center '>
                                            <img src='/img/Calling.png' className='w-5' alt='' />
                                            <button className=' text-white  text-[16px] font-Lexend  not-italic font-medium leading-[normal]' onClick={p.cut}>Call</button>
                                        </div>
                                        <div className='px-5 md:px-7 py-2 gap-x-2 bg-[#04B4DB] rounded-[45px] flex flex-row justify-center items-center'>
                                            <img src='/img/Chat.png' className='w-5' alt='' />
                                            <button className=' text-white  text-[16px] font-Lexend  not-italic font-medium leading-[normal]'>Chat</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div> */}