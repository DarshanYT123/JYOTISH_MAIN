import React from 'react'
import { BsFillEyeFill } from "react-icons/bs"
import { Swiper, SwiperSlide } from "swiper/react";
// import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Blogs = () => {
  const Data = [
    {
      imgSrc: "/img/blog1.png",
      width:" md:w-[19rem] w-[20rem] md:p-1.5 p-2   ",
    },
    {
      imgSrc: "/img/blog2.png",
    },
    {
      imgSrc: "/img/blog3.png",
    },
    {
      imgSrc: "/img/blog4.png",
    },
    {
      imgSrc: "/img/blog5.png",
    },
  ];
  
    
  return (
    <div className=' py-7 '>
     <div className="py-3">
    <h1 className=" text-left text-[var(--Secondry-Color,#773101)] font-Lexend text-[18px] md:text-[26px] not-italic font-semibold leading-normal">
    Latest Blogs
        </h1>
  </div>
    <div className=" lg:flex  justify-center gap-x-4 hidden ">
      <div className="card ">
        <img src="/img/blog1.png" className="  " alt="" />
        <div className="info flex flex-col justify-start items-start px-5 ">
          <p className="font-bold text-start text-[26px] text-white font-Lexend  ">
            Lorem ipsum dolor sit amet,elit consectetur adipisicing elit.{" "}
          </p>
          <p className=" text-[24px] font-light text-start text-white font-inter ">
            Lorem ipsum dolor sit amet,elit consectetur adipisicing elit.{" "}
          </p>
          <div className='flex flex-row justify-start items-center gap-x-2 text-white'>
          <BsFillEyeFill size={20} />
          <p className=" text-[20px] text-start text-white font-inter ">
            2839
          </p>
          </div>        
        </div>
        <div className="dateinfo">
          <p className=" text-[14px] text-white  font-inter  ">
            October 7,2022
          </p>
        </div>{" "}
      </div>
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-row gap-x-5">
          <div className="card1 ">
            <img src="./img/blog2.png" className="  " alt="" />
            <div className="info  ">
              <p className="font-normal text-start text-[18px] text-white font-Lexend ">
                Lorem ipsum dolor sit amet,elit consectetur adipisicing elit.{" "}
              </p>
              <div className='flex flex-row justify-start items-center gap-x-2 text-white'>
          <BsFillEyeFill size={18} />
          <p className=" text-[12px] text-start text-white font-inter ">
            2839
          </p>
          </div>        
            </div>
            <div className="dateinfo">
              <p className=" text-[10px] text-white   font-inter ">
              May 17,2022
              </p>
            </div>
          </div>
          <div className="card1 ">
            <img src="./img/blog3.png" className="  " alt="" />
            <div className="info  ">
              <p className="font-normal text-start text-[18px] text-white font-Lexend ">
                Lorem ipsum dolor sit amet,elit consectetur adipisicing elit.{" "}
              </p>
              <div className='flex flex-row justify-start items-center gap-x-2 text-white'>
          <BsFillEyeFill size={18} />
          <p className=" text-[12px] text-start text-white font-inter ">
            2839
          </p>
          </div>        
            </div>
            <div className="dateinfo">
              <p className=" text-[10px] text-white  font-inter">
              May 17,2022
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-x-5">
          <div className="card1 ">
            <img src="./img/blog4.png" className="  " alt="" />
            <div className="info  ">
              <p className="font-normal text-start text-[18px] text-white font-Lexend ">
                Lorem ipsum dolor sit amet,elit consectetur adipisicing elit.{" "}
              </p>
              <div className='flex flex-row justify-start items-center gap-x-2 text-white'>
          <BsFillEyeFill size={18} />
          <p className=" text-[12px] text-start text-white font-inter ">
            2839
          </p>
          </div>        
            </div>
            <div className="dateinfo">
              <p className=" text-[10px] text-white  font-inter  ">
              May 17,2022
              </p>
            </div>
          </div>
          <div className="card1 ">
            <img src="./img/blog5.png" className="  " alt="" />
            <div className="info  ">
              <p className="font-normal text-start text-[18px] text-white font-Lexend ">
                Lorem ipsum dolor sit amet,elit consectetur adipisicing elit.{" "}
              </p>
              <div className='flex flex-row justify-start items-center gap-x-2 text-white'>
          <BsFillEyeFill size={18} />
          <p className=" text-[12px] text-start text-white font-inter ">
            2839
          </p>
          </div>        
            </div>
            <div className="dateinfo">
              <p className=" text-[10px] text-white  font-inter  ">
                May 17,2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className=" lg:py-10 px-7 lg:pt-10 scroll-smooth overflow-x-auto lg:hidden block   group  ">
        <Swiper
          spaceBetween={10}
          slidesPerView={
            window.innerWidth > 1024
              ? 4
              : window.innerWidth > 820
              ? 3
              : window.innerWidth > 640
              ? 2
              : window.innerWidth > 640
              ? 1
              : 1
          }
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
          }}
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ el: ".swiper-paginationauto", clickable: true }}
        >
          {Data.map((item, index) => (
            <div key={index} className=" flex justify-center items-center ">
              <SwiperSlide>
              <div className=" relative ">
        <img src={item.imgSrc} className={"  " + item.width } alt="" />
        <div className="  flex flex-col justify-start items-start md:px-8 px-5 ">
          <p className=" absolute md:bottom-[4.5rem] bottom-16 w-40 font-bold text-start text-[10px] text-white font-Lexend  ">
            Lorem ipsum dolor sit amet,elit consectetur adipisicing elit.{" "}
          </p>
          <p className="absolute md:bottom-12 bottom-10 w-36 text-[7px] font-light text-start text-white font-inter ">
            Lorem ipsum dolor sit amet,elit consectetur adipisicing elit.{" "}
          </p>
          <div className=' absolute md:bottom-7 bottom-5  flex flex-row justify-start items-center gap-x-2 text-white'>
          <BsFillEyeFill size={14} />
          <p className=" text-[10px] text-start text-white font-inter ">
            2839
          </p>
          </div>        
        </div>
        <div className=" absolute md:bottom-7 md:right-8 bottom-5  right-5">
          <p className=" text-[8px] text-white  font-inter  ">
            October 7,2022
          </p>
        </div>{" "}
      </div>
              </SwiperSlide>
            </div>
          ))}
          <div className=" flex justify-center lg:pr-16 py-5 ">
            <div className=" flex flex-row absolute gap-x-28 md:gap-x-40">
              <div className="button-prev-slide  rounded-full  border-[2px] border-[#FFA300]   text-[#FFA300] cursor-pointer   ">
                <BsChevronLeft
                  size={40}
                  className=" rounded-full text-[#FFA300] hover:bg-[#FFA300] hover:text-[#fff]  p-2  "
                />
              </div>
              <div className="button-next-slide   rounded-full  border-[2px] border-[#FFA300] text-[#FFA300] cursor-pointer">
                <BsChevronRight
                  size={40}
                  className=" rounded-full text-[#FFA300] hover:bg-[#FFA300] hover:text-[#fff] p-2 "
                />
              </div>
            </div>
            <div className="flex swiper-paginationauto  justify-center pt-4 py-1  text-[#FFA800] "></div>
          </div>
        </Swiper>
      </div>

    </div>
)
}

export default Blogs