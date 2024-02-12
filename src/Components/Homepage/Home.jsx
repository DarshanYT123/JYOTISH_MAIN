import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ChatWithAstrologer from './ChatWithAstrologer';
import AstrologerServices from './AstrologerServices';
import PersonalisedHoroscope from './PersonalisedHoroscope';
import Panchang from "./Panchang";
import LatestReports from './LatestReports'

// Import Swiper styles
import 'swiper/css';
import Readers from './Readers';
import Blogs from './Blogs';
import Products from './Products';
import About from './About';
import Footer from '../Footer/Footer';
import Trusted from '../Footer/Trusted';


const Home = ({ cut }) => {
  const Data = [
    {
      imgSrc: "/img/Homeimg1.png",
    },
    {
      imgSrc: "/img/Homeimg1.png",
    },
  ];
  function Cads(prop) {
    return (
      <>
        <div className='bg-pink-800 h-auto overflow-hidden  rounded-lg'>
          <img className=' w-full  ' src={prop.img} alt="heroimage" />
        </div>

      </>
    )
  }




  return (
    <>
    <div className='lg:px-16 md:px-10 px-10  '>

      <div className='md:w-[90vw] lg:w-[100vw] md:py-7 '>
        <div>
          {/* HEROSECTION start */}

          <div className='w-[100%] md:w-[90vw] lg:w-[80vw] xl:w-[90vw]  h-max  md:gap-7  flex flex-col xl:flex-row  justify-center items-center xl:items-stretch xl:gap-5 p-0.5  md:p-2    md:justify-between '>
            {/* HEROSECTION -->> SWIPER */}
            <div className='w-[100%] lg:w-[66%] lg:h-[30%] md:flex hidden   h-[30vmin]  box-border  '>
              {

                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                   el:'.swiper-pagination', clickable: true,
                  }}
                  navigation={false}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide><Cads img="/img/Homeimg1.png" /></SwiperSlide>
                  <SwiperSlide><Cads img="/img/Homeimg1.png" /></SwiperSlide>
                  <SwiperSlide><Cads img="/img/Homeimg1.png" /></SwiperSlide>
                  <SwiperSlide><Cads img="/img/Homeimg1.png" /></SwiperSlide>
                  
          <div className="swiper-pagination"></div>
  
                </Swiper>
              }

            </div>


            {/* HEROSECTION --> ADDVERTISMENT */}
            <div className=' w-full  md:h-[30vmin]  relative lg:h-auto  box-border'>

              <div className=' md:w-full   lg:h-full md:h-full md:pt-2 lg:pt-4    md:p-2 lg:p-3 lg:px-2  p-1  box-border rounded-[6px]    border-[1px] bg-white    relative border-[#ffa300] overflow-hidden  flex flex-col justify-between  '>

                {/* 10% off section */}
                <div className=' absolute top-5 -left-7 w-[7.5rem] md:w-32'>
                <div className=" bg-red-600  p-[2px] md:p-[3px] whitespace-nowrap  shadow-[0_3px_4px_rgba(0,0,0,0.25)]  font-[600] font-[lexend] text-[12px] md:text-[12px] lg:text-[14px] text-white      text-center rotate-[-45deg]  ">
                  10% off
                </div>
                </div>
                {/* comp1 */}
                <div className='flex    w-full flex-col md:flex-row gap-2 h-full xl:h-auto    justify-center items-center   md:justify-between'>


                  {/* semi comp 1 */}

                  <div className=' w-[45%]   lg:w-[64%] md:w-[24%]   p-2'>
                    <img src='/img/Rudraksh1.png' alt="product img" className=' ' />
                  </div>



                  {/* semi comp 2 */}

                  <div className="w-[100%] font-[lexend] px-2 md:px-0  justify-start gap-1 md:gap-4 flex flex-col items-start  font-lexend  h-full">

                    <div className="flex  flex-col justify-start item-start">
                      <h1 className="text-[color:var(--Black-text-color,#3A3A3A)] text-center text-[20px] md:text-[22px] md:pt-2 font-Lexend not-italic font-medium leading-[normal]">1 Mukhi Rudraksha</h1>
                      <div className="flex flex-row gap-3  items-center ">
                        <div className="flex flex-row  text-[#ffd23e] gap-1">
                          <i class="fa fa-star fa_custom text-[0.8em] md:text-[0.7em] " aria-hidden="true"></i>
                          <i class="fa fa-star fa_custom text-[0.8em] md:text-[0.7em] " aria-hidden="true"></i>
                          <i class="fa fa-star fa_custom text-[0.8em] md:text-[0.7em] " aria-hidden="true"></i>
                          <i class="fa fa-star fa_custom text-[0.8em] md:text-[0.7em] " aria-hidden="true"></i>
                          <i class="fa fa-star fa_custom text-[0.8em] md:text-[0.7em] " aria-hidden="true"></i>

                        </div>
                        <span className="text-[color:var(--Black-text-color,#3A3A3A)] text-start text-[14px] font-Lexend not-italic font-normal leading-[normal]">5 Rating</span>
                      </div>

                      <p className=" text-[color:var(--Sky-Blue,#04B4DB)] text-[10px] text-start font-Lexend not-italic font-normal leading-[normal]">Trusted by 4467 Customers</p>

                    </div>


                    <p className=" text-start text-[color:var(--grey-1,#A1A1A1)] text-[14px] md:text-[16px] font-Lexend not-italic font-normal leading-[151.5%]">
                    Invite Peace and Power with One Mukhi Rudraksh!
                    </p>
                  </div>

                </div>


                {/* comp2 */}
                <div className="flex font-[lexend] px-2 lg:py-0 md:px-0 lg:px-2 flex-row gap-5  text-[10px] md:text-[18px] w-[100%] font-[500]">
                  <div className="flex flex-row gap-2 md:py-2  lg:py-0">

                    <h1 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] md:text-[18px] font-Lexend not-italic font-medium leading-[151.5%]" >Price:</h1>
                    <h1 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] md:text-[18px] font-Lexend not-italic font-semibold leading-[151.5%]'>₹ 8700</h1>
                    <span className=" text-[color:var(--Black-text-color,#3A3A3A)] text-gray-400 line-through text-[16px] md:text-[18px] font-Lexend not-italic font-normal leading-[151.5%]">₹9700</span>

                  </div>
                  <span className="text-[color:var(--red,#DB042A)] lg:py-0 md:py-2 text-[14px] md:text-[16px] font-Lexend not-italic font-semibold leading-[normal]">10% off</span>
                </div>
                {/* comp3 */} 
                <div className="w-[100%] px-2 lg:px-2 py-1 md:py-0  md:h-auto lg:h-auto flex flex-row justify-between items-center   ">
                  <button className="bg-[#ffa300] px-6 md:px-16 py-2  text-center  md:text-[20px] text-[16px]  not-italic  leading-[normal] rounded-[8px] text-white  font-Lexend">Buy Now</button>
                  <button className=" text-[color:var(--Main-Color,#FFA300)] text-[14px] md:text-[16px] px-4 font-Lexend not-italic font-semibold leading-[normal] underline"><a href='#'>View Product</a></button>
                </div>


              </div>
            </div>
          </div>
          {/* HEROSECTION end */}




          {/* BUTTONS SECTION end */}

        </div>
        {/* <ChatWithAstrologer/> */}
      

      </div>
      <ChatWithAstrologer/>
      <Readers cut={cut} />
        <AstrologerServices />
        <PersonalisedHoroscope />
      <Blogs />
      <Products />
      <LatestReports/>
      <Panchang />
      <About />
      
    </div>
<Trusted/>
  
    </>
  )
}

export default Home