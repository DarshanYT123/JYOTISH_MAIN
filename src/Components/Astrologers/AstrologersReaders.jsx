import React,{useState} from "react";
import { FaStar } from "react-icons/fa";
const AstrologersReaders = (p) => {
  // const [seeMore, setSeemore] = useState(false);
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
    }, ]
    const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)
  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    stars: {
      display: "flex",
      flexDirection: "row",
    },

  
  };
  
  return (
    <>
   <div className='  py-10 '>
                <div className="grid grid-flow-cols grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 " >
                {
                    Data.map((item, index)=>{
                        return(
                            <>
                             <div className={` p-[1.5px]  hover:bg-[#FFA300]   shadow-[0px_4px_10px_0px_rgba(174,174,174,0.25)] overflow-x-hidden  rounded-[6px] `}>
                        <div className='flex flex-row  bg-white pt-2  rounded-[6px]'>
                            <div className='flex flex-col pt-3 '>
                                <div className='md:px-2 lg:px-3 px-3 '>
                                    <img src={item.img1} className='w-24 md:w-28 lg:w-40' alt='' />
                                </div>
                                <div className='flex flex-col justify-start items-center gap-x-2 px-4  py-2'>
                                <div className={item.id} style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={14}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? "#FFA300" : "grey"}
              style={{
                marginRight: 1,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>

                                    <h2 className="text-black text-[13px] font-Lexend not-italic font-semibold leading-[normal] tracking-[0.52px] py-2 ">{item.text1}<span className="text-black text-[13px]  font-Lexend not-italic font-normal leading-[normal] tracking-[0.52px]">{item.text2}</span></h2>
                                </div>
                            </div>
                            <div>
                                <div className='relative top-2 md:left-48 lg:left-56 left-40 '>
                                    <img src={item.img3} className='w-5 md:w-6' alt='' />

                                </div>
                                <div className='flex flex-col justify-start items-start px-1 md:px-2 lg:px-4  gap-y-2 '>
                                    <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[18px] md:text-[20px] font-Lexend not-italic font-medium leading-[normal]'>{item.name}</h2>
                                    <div className='flex flex-row gap-x-2 md:gap-x-3 pt-0 md:pt-3' >
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M15.4166 8.33335L19.0833 17.5H17.2874L16.2866 15H12.8783L11.8791 17.5H10.0841L13.7499 8.33335H15.4166ZM8.33326 1.66669V3.33335H13.3333V5.00002H11.6933C11.0504 6.93508 10.0245 8.72087 8.6766 10.2509C9.27768 10.7872 9.92966 11.2636 10.6233 11.6734L9.99743 13.2384C9.10203 12.7305 8.26459 12.1267 7.49993 11.4375C6.01125 12.7848 4.2483 13.7935 2.33243 14.3942L1.88576 12.7867C3.52729 12.2633 5.03995 11.3995 6.32493 10.2517C5.37384 9.17497 4.58165 7.96774 3.97243 6.66669H5.8391C6.30355 7.52407 6.86048 8.32802 7.49993 9.06419C8.54168 7.86344 9.36268 6.48777 9.92493 5.00085L1.6666 5.00002V3.33335H6.6666V1.66669H8.33326ZM14.5833 10.7375L13.5441 13.3334H15.6208L14.5833 10.7375Z" fill="#3A3A3A" />
                                            </svg>
                                        </div>
                                        <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[12px] md:text-[14px] font-Poppins  not-italic font-normal leading-[normal]'>{item.lang}</h2>
                                    </div>
                                    <div className='flex flex-col justify-start items-start '>
                                        <div className='flex flex-row gap-x-2 justify-center items-center  '>
                                            <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] font-Lexend not-italic font-medium leading-[normal]">{item.exp}</h2>
                                            <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal]">{item.year}</h2>
                                        </div>
                                        <div className='flex flex-row gap-x-2 py-1 md:py-2'>
                                            <h2 className="text-[color:var(--red,#DB042A)] text-[18px] font-Lexend not-italic font-semibold leading-[normal]">{item.free}</h2>
                                            <h2 className="line-through text-[color:var(--grey-1,#A1A1A1)] text-[18px] font-Lexend not-italic font-medium leading-[normal]">{item.min}</h2>
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-start items-center gap-x-1.5 md:gap-x-4 py-1.5'>
                                        <div className='px-5 md:px-7 gap-x-2 py-2 bg-[#FFA300] rounded-[45px] flex flex-row justify-center items-center '>
                                            <img src={item.img4} className='w-5' alt='' />
                                            <button className=' text-white  text-[16px] font-Lexend  not-italic font-medium leading-[normal]' onClick={p.cut}>{item.call}</button>
                                        </div>
                                        <div className='px-5 md:px-7 py-2 gap-x-2 bg-[#04B4DB] rounded-[45px] flex flex-row justify-center items-center'>
                                            <img src={item.img5} className='w-5' alt='' />
                                            <button className=' text-white  text-[16px] font-Lexend  not-italic font-medium leading-[normal]'>{item.chat}</button>
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
            


            </div>
     
    </>
  );
};

export default AstrologersReaders;
