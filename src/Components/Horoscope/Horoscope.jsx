import React,{useState} from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import TabNav from "../TabNavItem/TabNav";
import TabItem from "../TabContent/TabItem";
import Daily from "./Daily/Daily";
import Weekly from "./Weekly/Weekly";
import Monthly from "./Monthly/Monthly";
import Yearly from "./Yearly/Yearly";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import "./Horoscope.css"
import PersonalisedHoroscope from "../Homepage/PersonalisedHoroscope";
import Products from "../Homepage/Products";
import LatestReports from "../Homepage/LatestReports";
import Trusted from "../Footer/Trusted";


const signs= [
    {
        sign: "/img/sign1.svg",
        signName: "Aries",
        time: "March 21 - April 20",
        name: "Aries Horoscope March 21 - April 20",
        horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
        link: "Know More",
        img2: "/img/sign1.svg",
        
    },
    {
        sign: "/img/sign2.svg",
        signName: "Tauras",
        time: "April 21 - May 20",
        name: "Tauras Horoscope April 21 - May 20",
        horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
        link: "Know More",
        img2: "/img/sign2.svg",
    },
    {
        sign: "/img/sign3.svg",
        signName: "Gemini",
        time: "May 21 - June 20",
        name: "Gemini Horoscope May 21 - June 20",
        horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
        link: "Know More",
        img2: "/img/sign3.svg",
    },
    {
        sign: "/img/sign4.svg",
        signName: "Cancer",
        time: "June 21 - July 20",
        name: "Cancer Horoscope June 21 - July 20",
        horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
        link: "Know More",
        img2: "/img/sign4.svg",
    },
    {
        sign: "/img/sign5.svg",
        signName: "Leo",
        time: "July 21 - August 20",
        name: "Leo Horoscope June 21 - July 20",
        horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
        link: "Know More",
        img2: "/img/sign5.svg",
    },
    {
        sign: "/img/sign6.svg",
        signName: "Virgo",
        time: "July 21 - August 20",
        name: "Virgo Horoscope June 21 - July 20",
        horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
        link: "Know More",
        img2: "/img/sign6.svg",
    },
    {
        sign: "/img/sign7.svg",
        signName: "Libra",
        time: "July 21 - August 20",
        name: "Libra Horoscope June 21 - July 20",
        horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
        link: "Know More",
        img2: "/img/sign7.svg",
    },
    {
        sign: "/img/sign8.svg",
        signName: "Scorpio",
        time: "July 21 - August 20",
        name: "Scorpio Horoscope June 21 - July 20",
        horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
        link: "Know More",
        img2: "/img/sign8.svg",
    },
    {
        sign: "/img/sign9.svg",
        signName: "Sagittarius",
        time: "July 21 - August 20",
        name: "Saggitarius Horoscope June 21 - July 20",
        horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
        link: "Know More",
        img2: "/img/sign9.svg",
    },
    {
        sign: "/img/sign10.svg",
        signName: "Capricorn",
        time: "July 21 - August 20",
        name: "Capricorn Horoscope June 21 - July 20",
        horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
        link: "Know More",
        img2: "/img/sign10.svg",
    },
    {
        sign: "/img/sign11.svg",
        signName: "Aquarius",
        time: "July 21 - August 20",
        name: "Aquarius Horoscope June 21 - July 20",
        horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
        link: "Know More",
        img2: "/img/sign11.svg",
    },
    {
        sign: "/img/sign12.svg",
        signName: "Pisces",
        time: "July 21 - August 20",
        name: "Pisces Horoscope June 21 - July 20",
        horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
        link: "Know More",
        img2: "/img/sign12.svg",
    },
 ]

const Horoscope = () => {
    const [popUp, setPopUp] = useState([])
    const [activeTab, setActiveTab] = useState("tab1");
    const changeContent= (sign)=>{
         setPopUp([sign]);
         setPopUpToggle(!popUpToggle)
    }
    const [popUpToggle, setPopUpToggle] = useState(false);
  return (
    <>
      <div className="lg:px-16 px-10">
      <div className="pt-2 md:pt-14">
            <h2 className="flex flex-row justify-start items-center text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Lexend not-italic font-medium leading-[normal] ">Home 
            <span className="px-3"> <FaArrowRightLong /></span> <span className="text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-inter not-italic font-medium leading-[normal]">Horoscopes</span><span className="px-3"> <FaArrowRightLong /></span>
             <span className="text-[color:var(--Black-text-color,#3A3A3A)] text-[14px]  font-inter not-italic font-medium leading-[normal]">Daily</span></h2>
        </div>


        <div className=" py-5">
            <div className="flex justify-center items-center">
      <ul className="bgtab bg-[#F8F8F8] px-1 w-fit h-[50px] border-[#A1A1A1]   flex items-center justify-center   overflow-hidden shadow-[0px_4px_10px_0px_rgba(174,174,174,0.25)] rounded-[41px] border-[0.5px] border-solid ">
        <TabNav
          title="Daily"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNav
          title="Weekly"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNav
          title="Monthly"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNav
          title="Yearly"
          id="tab4"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>
      </div>
      <div>
        <TabItem id="tab1" activeTab={activeTab}>
          <Daily/>
        </TabItem>
        <TabItem id="tab2" activeTab={activeTab}>
          <Weekly/>
        </TabItem>
        <TabItem id="tab3" activeTab={activeTab}>
          <Monthly/>
        </TabItem>
        <TabItem id="tab4" activeTab={activeTab}>
          <Yearly/>
        </TabItem>
      </div>
    </div>



</div>   
<div className=' lg:py-[30px] md:px-16 px-10 '>
           <p className= "text-amber-900 md:text-[26px] text-[20px] font-medium text-start font-['Lexend'] heading">View your Horoscope</p>
            <div className='md:pt-[39px] pt-[20px]'>
                <div className='flex flex-row flex-wrap justify-between items-center'>
                {
                    signs.map((sign, index)=>{
                        return(
                            <>
                            
                            <div className='py-[10px]'>
                            <div className='signCard md:w-[212px] md:h-[212px] w-[140px] h-[140px] bg-white rounded-[5px] shadow-inner border hover:border-[#ffa300] duration-700 border-neutral-400 border-opacity-50 
                            flex flex-col justify-center items-center '  key={sign.index}  onClick={()=> changeContent(sign)} >
                              <img src={sign.sign} className="sign md:py-[5px] py-[3px] w-[55px] h-[55px] md:w-auto md:h-auto"/>
                              <p className="signName text-black md:text-[16px] text-[12px] text-font-normal font-['Poppins'] tracking-tight py-[8px] md:py-[12px]">{sign.signName}</p>
                              <p className="time text-black md:text-[16px] text-[12px] font-bold font-['Lexend'] tracking-tight">{sign.time}</p>
                            </div>
                            </div>
                           
                            </>
                        )
                    })
                }
                </div>
            </div>
            {popUpToggle && <> 
            {popUp.map((pop)=>{
                return(
                    <div className='blogContainer fixed z-40  top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 '>
            <div className="blogCard lg:w-[1341px] lg:h-[434px] md:w-[676px] md:h-[236px] w-[300px] h-[244px] bg-white md:rounded-[10px] rounded-[5px] shadow relative"  key={pop.index}>
            <div className="md:w-[45px] md:h-[45px] w-[30px] h-[30px] bg-gray-100 rounded-full flex justify-center items-center absolute md:-top-4 md:-right-[16px] -top-2 -right-[10px] bottom-0 " onClick={changeContent}>
               <CloseIcon  sx={{ '@media (min-width:300px)': { fontSize: '14px', }, '@media (min-width:768px)': { fontSize: '24px', }, }}/>
            </div>
            <p className=" text-amber-900 lg:text-[20px] md:text-[16px] text-[14px] font-medium md:font-semibold font-['Lexend'] tracking-tight lg:px-[39px] lg:py-[30px] md:px-[24px] text-start md:py-[14px] px-[20px] py-[12px]">{pop.name}</p>
            <div className='md:flex md:flex-row flex flex-col justify-center items-center '>
                <div className='lg:pr-[40px] md:pr-[20px] pr-[14px]'>
                <div className='img flex justify-center items-center lg:w-[225px] lg:h-[225px] md:w-[140px] md:h-[140px] w-[90px] h-[90px] bg-gray-100 rounded-md border border-neutral-400 '>
                   <img src={pop.img2} className='md:w-4/5 md:h-3/5  w-[70px] h-[70px]'/>
                </div>
                </div>
            <p className=" lg:w-[960px] lg:h-[248px] md:w-[450px] md:h-[140px] md:overflow-ellipsis md:overflow-hidden w-[250px] h-[76px] overflow-hidden overflow-ellipsis lg:pt-[6px] md:pt-0 pt-[18px] text-neutral-700 lg:text-[14px] md:text-[12px] text-[12px] text-start lg:font-medium  md:font-normal font-normal font-['Poppins'] lg:leading-[24.85px] tracking-tight">{pop.horoscope}</p>
            </div>
            <p className="link text-amber-500 lg:text-[18px] text-start md:text-[14px] lg:font-semibold md:font-medium text-[12px] font-normal font-['Lexend'] underline lg:px-[320px] md:px-[194px] px-[26px] lg:py-0 md:py-[10px] py-[6px]">{pop.link}<ArrowForwardIcon sx={{ '@media (min-width:300px)': { fontSize: '14px', }, '@media (min-width:768px)': { fontSize: '22px', }, }} className="text-amber-500"/></p>
            </div>
           </div>
                )
            })}
       </>}
            
    </div>
    <div className="md:px-10 lg:px-16 px-10">
    <PersonalisedHoroscope />
    <Products/>
    <LatestReports/>
    </div>
    <Trusted/>
    </>
  )
}

export default Horoscope

// import React, { useState } from 'react'
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import CloseIcon from '@mui/icons-material/Close';
// import "./Horoscope.css"
// const signs= [
//     {
//         sign: "/img/sign1.svg",
//         signName: "Aries",
//         time: "March 21 - April 20",
//         name: "Aries Horoscope March 21 - April 20",
//         horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
//         link: "Know More",
//         img2: "/img/sign1.svg",
        
//     },
//     {
//         sign: "/img/sign2.svg",
//         signName: "Tauras",
//         time: "April 21 - May 20",
//         name: "Tauras Horoscope April 21 - May 20",
//         horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
//         link: "Know More",
//         img2: "/img/sign2.svg",
//     },
//     {
//         sign: "/img/sign3.svg",
//         signName: "Gemini",
//         time: "May 21 - June 20",
//         name: "Gemini Horoscope May 21 - June 20",
//         horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
//         link: "Know More",
//         img2: "/img/sign3.svg",
//     },
//     {
//         sign: "/img/sign4.svg",
//         signName: "Cancer",
//         time: "June 21 - July 20",
//         name: "Cancer Horoscope June 21 - July 20",
//         horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
//         link: "Know More",
//         img2: "/img/sign4.svg",
//     },
//     {
//         sign: "/img/sign5.svg",
//         signName: "Leo",
//         time: "July 21 - August 20",
//         name: "Leo Horoscope June 21 - July 20",
//         horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
//         link: "Know More",
//         img2: "/img/sign5.svg",
//     },
//     {
//         sign: "/img/sign6.svg",
//         signName: "Virgo",
//         time: "July 21 - August 20",
//         name: "Virgo Horoscope June 21 - July 20",
//         horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
//         link: "Know More",
//         img2: "/img/sign6.svg",
//     },
//     {
//         sign: "/img/sign7.svg",
//         signName: "Libra",
//         time: "July 21 - August 20",
//         name: "Libra Horoscope June 21 - July 20",
//         horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
//         link: "Know More",
//         img2: "/img/sign7.svg",
//     },
//     {
//         sign: "/img/sign8.svg",
//         signName: "Scorpio",
//         time: "July 21 - August 20",
//         name: "Scorpio Horoscope June 21 - July 20",
//         horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
//         link: "Know More",
//         img2: "/img/sign8.svg",
//     },
//     {
//         sign: "/img/sign9.svg",
//         signName: "Sagittarius",
//         time: "July 21 - August 20",
//         name: "Saggitarius Horoscope June 21 - July 20",
//         horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
//         link: "Know More",
//         img2: "/img/sign9.svg",
//     },
//     {
//         sign: "/img/sign10.svg",
//         signName: "Capricorn",
//         time: "July 21 - August 20",
//         name: "Capricorn Horoscope June 21 - July 20",
//         horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
//         link: "Know More",
//         img2: "/img/sign10.svg",
//     },
//     {
//         sign: "/img/sign11.svg",
//         signName: "Aquarius",
//         time: "July 21 - August 20",
//         name: "Aquarius Horoscope June 21 - July 20",
//         horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
//         link: "Know More",
//         img2: "/img/sign11.svg",
//     },
//     {
//         sign: "/img/sign12.svg",
//         signName: "Pisces",
//         time: "July 21 - August 20",
//         name: "Pisces Horoscope June 21 - July 20",
//         horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
//         link: "Know More",
//         img2: "/img/sign12.svg",
//     },
//  ]

// const Horoscope = () => {
//     const [popUp, setPopUp] = useState([])
//     const changeContent= (sign)=>{
//          setPopUp([sign]);
//          setPopUpToggle(!popUpToggle)
//     }
//     const [popUpToggle, setPopUpToggle] = useState(false);
//   return (
//     <>
  
//     </>
//   )
// }

// export default Horoscope