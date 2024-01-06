import React, { useState, useEffect } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import "./Horoscope.css"
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
    const changeContent= (sign)=>{
         setPopUp([sign]);
         setPopUpToggle(!popUpToggle)
    }
    const [popUpToggle, setPopUpToggle] = useState(false);
  return (
    <>
    <div className=' lg:py-[30px] px-16 '>
           <h2 className= "text-amber-900 text-[26px] font-medium text-start font-['Lexend'] heading">View your Horoscope</h2>
            <div className=' pt-[39px]'>
                <div className='flex flex-row flex-wrap justify-between items-center'>
                {
                    signs.map((sign, index)=>{
                        return(
                            <>
                            
                            <div className='py-[10px] '>
                            <div className='signCard w-[212px] h-[212px] bg-white rounded-[5px] shadow-inner border hover:border-[#ffa300] duration-700 border-neutral-400 border-opacity-50 
                            flex flex-col justify-center items-center '  key={sign.index}  onClick={()=> changeContent(sign)} >
                              <img src={sign.sign} className="sign py-[5px]"/>
                              <p className="signName text-black text-[16px] font-normal font-['Poppins'] tracking-tight py-[12px]">{sign.signName}</p>
                              <p className="time text-black text-[16px] font-bold font-['Lexend'] tracking-tight">{sign.time}</p>
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
            <div className="blogCard lg:w-[1341px] lg:h-[434px] md:w-[676px] md:h-[217px] bg-white rounded-[10px] shadow relative"  key={pop.index}>
            <div className="w-[45px] h-[45px] bg-gray-100 rounded-full flex justify-center items-center absolute -top-4 -right-[16px] bottom-0 " onClick={changeContent}>
               <CloseIcon className='w-6 h-6'/>
            </div>
            <p className="nameDate text-amber-900 lg:text-[20px] md:text-[16px] font-semibold font-['Lexend'] tracking-tight lg:px-[39px] lg:py-[30px] md:px-[24px] text-start md:py-[9px]">{pop.name}</p>
            <div className='signDetails flex lg:py-[16px] md:pt-[8px] lg:px-[70px] md:px-[35px]'>
                <div className='lg:pr-[40px] md:pr-[20px]'>
                <div className='img flex justify-center items-center lg:w-[225px] lg:h-[225px] md:w-[140px] md:h-[140px]  bg-gray-100 rounded-md border border-neutral-400 '>
                   <img src={pop.img2} className='lg:w-4/5 lg:h-3/5  md:w-[2/5] md:h-[1/5]'/>
                </div>
                </div>
            <p className=" lg:w-[960px] lg:h-[248px] md:w-[450px] md:h-[110px] md:overflow-ellipsis md:overflow-hidden text-neutral-700 lg:text-[14px] md:text-[12px] text-start   lg:font-medium  md:font-normal font-['Poppins'] lg:leading-[24.85px] tracking-tight">{pop.horoscope}</p>
            </div>
            <p className="link text-amber-500 lg:text-[18px] text-start md:text-[14px] lg:font-semibold md:font-medium font-['Lexend'] underline lg:px-[336px] md:px-[194px]">{pop.link}<ArrowForwardIcon className="text-amber-500 lg:text-lg md:text-base lg:font-semibold md:font-medium font-['Inter'] underline"/></p>
            </div>
           </div>
                )
            })}
       </>}
            
    </div>
    </>
  )
}

export default Horoscope