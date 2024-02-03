import React, { useState } from 'react'
import "./Blogs.css"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Pagination, A11y } from 'swiper/modules';
import {  Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import NavItem from "./NavItem";
import Content from "./Content";
// import Trusted from '../Footer/Trusted';

const data = [
  {
    image: "/img/image2.png",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    views: "2839",
    date: "May 17, 2019"
  },
  {
    image: "/img/image3.png",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    views: "2839",
    date: "May 17, 2019"
  },
  {
    image: "/img/image4.png",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    views: "2839",
    date: "May 17, 2019"
  },
  {
    image: "/img/image5.png",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    views: "2839",
    date: "May 17, 2019"
  },
  {
    image: "/img/image2.png",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    views: "2839",
    date: "May 17, 2019"
  },
  {
    image: "/img/image3.png",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    views: "2839",
    date: "May 17, 2019"
  },
  {
    image: "/img/image4.png",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    views: "2839",
    date: "May 17, 2019"
  },
  {
    image: "/img/image5.png",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    views: "2839",
    date: "May 17, 2019"
  },
  {
    image: "/img/image2.png",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    views: "2839",
    date: "May 17, 2019"
  },
  {
    image: "/img/image3.png",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    views: "2839",
    date: "May 17, 2019"
  },
  {
    image: "/img/image4.png",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    views: "2839",
    date: "May 17, 2019"
  },
  {
    image: "/img/image5.png",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    views: "2839",
    date: "May 17, 2019"
  },
]

const Blogs = () => {
  const [activeTab, setActiveTab] = useState("Latest Blogs");
  // const [toggleState, setToggleState] = useState("latest blogs");
  // const toggleTab = (index)=>{
  //   setToggleState(index);
  // }

  return (
    <>
      <p className="text-amber-900 text-[26px] font-semibold font-['Lexend'] md:px-16 px-10 text-start py-[20px]">Blogs</p>


      <div className='flex justify-center items-center'>
        <ul className="flex w-fit justify-center flex-row items-center  bg-[#F5F5F5] shadow-[0px_4px_12px_0px_rgba(157,157,157,0.18)_inset] rounded-full overflow-hidden ">
          <NavItem
            title="Latest Blogs"
            id="Latest Blogs"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavItem
            title="Astrology"
            id="Astrology"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavItem
            title="Politics"
            id="Politics"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavItem
            title="Festival"
            id="Festival"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavItem
            title="Business"
            id="Business"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavItem
            title="Sports"
            id="Sports"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavItem
            title="Entertainment"
            id="Entertainment"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavItem
            title="Nifty Products"
            id="Nifty Products"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </ul>
      </div>

      <Swiper modules={[Pagination, A11y,Autoplay]} slidesPerView={1} pagination={{ clickable: true }} onSwiper={(swiper) => console.log(swiper)}  
       autoplay={{
                        delay: 2500,
                    }} onSlideChange={() => console.log('slide change')}
                    >
        <SwiperSlide>
          <div className="contentBox lg:py-[60px] lg:px-16 md:py-[40px] mb-[40px] lg:mb-0 md:mb-0 md:px-[44px] px-10 lg:flex lg:flex-row md:flex-col md:flex ">
            <img src='/img/image1.png' className=' lg:w-[790px] lg:h-[560px] md:w-[700px] md:h-[400px]' />
            <div className="flex flex-col lg:px-[20px] md:px-[10px] text-start">
              <p className=" text-amber-900 lg:text-[26px] md:text-[20px] text-[16px] font-medium py-[14px] lg:py-0 md:py-0 font-['Lexend']">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.</p>
              <p className="text-amber-500 md:text-[14px] text-[12px] font-semibold font-['Poppins'] lg:py-[14px] md:py-[10px] py-[4px]">20 December 2023</p>
              <p className="  text-neutral-700 md:text-[16px] text-[14px] font-normal font-['Lexend'] lg:pt-[40px] md:pt-0 pt-[8px] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet. </p>
              <p className=" text-neutral-700 md:text-[16px] text-[14px] font-normal font-['Lexend'] leading-normal lg:py-[15px] md:py-[10px] py-[8px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className=" text-neutral-700 md:text-[16px] text-[14px] font-normal font-['Lexend'] leading-normal lg:py-[0px] md:py-[6px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet elit, Lorem ipsum dolor sit amet, consectetur adipiscing .</p>
              <div className='lg:pt-[36px] md:pt-[15px] pt-[12px]'>
                <button className="lg:w-[145px] lg:h-[45px]  md:w-[150px] md:h-[30px] w-[110px] h-[30px] bg-amber-500 rounded-[40px] border border-amber-500 text-white lg:text-[16px] lg:font-medium md:text-[14px] text-[14px] md:font-light font-extralight font-['Lexend'] ">Read More<ArrowForwardIosIcon sx={{ '@media (min-width:300px)': { fontSize: '14px', }, '@media (min-width:768px)': { fontSize: '14px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} /></button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="contentBox lg:py-[60px] lg:px-16 md:py-[40px] mb-[40px] lg:mb-0 md:mb-0 md:px-[44px] px-10 lg:flex lg:flex-row md:flex-col md:flex ">
            <img src='/img/image1.png' className=' lg:w-[790px] lg:h-[560px] md:w-[700px] md:h-[400px]' />
            <div className="flex flex-col lg:px-[20px] md:px-[10px] text-start">
              <p className=" text-amber-900 lg:text-[26px] md:text-[20px] text-[16px] font-medium py-[14px] lg:py-0 md:py-0 font-['Lexend']">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.</p>
              <p className="text-amber-500 md:text-[14px] text-[12px] font-semibold font-['Poppins'] lg:py-[14px] md:py-[10px] py-[4px]">20 December 2023</p>
              <p className="  text-neutral-700 md:text-[16px] text-[14px] font-normal font-['Lexend'] lg:pt-[40px] md:pt-0 pt-[8px] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet. </p>
              <p className=" text-neutral-700 md:text-[16px] text-[14px] font-normal font-['Lexend'] leading-normal lg:py-[15px] md:py-[10px] py-[8px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className=" text-neutral-700 md:text-[16px] text-[14px] font-normal font-['Lexend'] leading-normal lg:py-[0px] md:py-[6px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet elit, Lorem ipsum dolor sit amet, consectetur adipiscing .</p>
              <div className='lg:pt-[36px] md:pt-[15px] pt-[12px]'>
                <button className="lg:w-[145px] lg:h-[45px]  md:w-[150px] md:h-[30px] w-[110px] h-[30px] bg-amber-500 rounded-[40px] border border-amber-500 text-white lg:text-[16px] lg:font-medium md:text-[14px] text-[14px] md:font-light font-extralight font-['Lexend'] ">Read More<ArrowForwardIosIcon sx={{ '@media (min-width:300px)': { fontSize: '14px', }, '@media (min-width:768px)': { fontSize: '14px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} /></button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="contentBox lg:py-[60px] lg:px-16 md:py-[40px] mb-[40px] lg:mb-0 md:mb-0 md:px-[44px] px-10 lg:flex lg:flex-row md:flex-col md:flex ">
            <img src='/img/image1.png' className=' lg:w-[790px] lg:h-[560px] md:w-[700px] md:h-[400px]' />
            <div className="flex flex-col lg:px-[20px] md:px-[10px] text-start">
              <p className=" text-amber-900 lg:text-[26px] md:text-[20px] text-[16px] font-medium py-[14px] lg:py-0 md:py-0 font-['Lexend']">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.</p>
              <p className="text-amber-500 md:text-[14px] text-[12px] font-semibold font-['Poppins'] lg:py-[14px] md:py-[10px] py-[4px]">20 December 2023</p>
              <p className="  text-neutral-700 md:text-[16px] text-[14px] font-normal font-['Lexend'] lg:pt-[40px] md:pt-0 pt-[8px] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet. </p>
              <p className=" text-neutral-700 md:text-[16px] text-[14px] font-normal font-['Lexend'] leading-normal lg:py-[15px] md:py-[10px] py-[8px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className=" text-neutral-700 md:text-[16px] text-[14px] font-normal font-['Lexend'] leading-normal lg:py-[0px] md:py-[6px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet elit, Lorem ipsum dolor sit amet, consectetur adipiscing .</p>
              <div className='lg:pt-[36px] md:pt-[15px] pt-[12px]'>
                <button className="lg:w-[145px] lg:h-[45px]  md:w-[150px] md:h-[30px] w-[110px] h-[30px] bg-amber-500 rounded-[40px] border border-amber-500 text-white lg:text-[16px] lg:font-medium md:text-[14px] text-[14px] md:font-light font-extralight font-['Lexend'] ">Read More<ArrowForwardIosIcon sx={{ '@media (min-width:300px)': { fontSize: '14px', }, '@media (min-width:768px)': { fontSize: '14px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} /></button>
              </div>
            </div>
          </div>
        </SwiperSlide>



      </Swiper>


      <div className='content-tabs'>
        {/* latest blogs started */}
        <Content id="Latest Blogs" activeTab={activeTab}>
          <div className={activeTab === "Latest Blogs" ? "content active-content" : "content"}>
            <p className="text-amber-900 md:text-[26px] text-[20px] font-semibold font-['Lexend'] md:px-16  text-start pt-[20px]">Latest Blogs</p>
            <div className=" grid md:grid-cols-2 lg:grid-cols-4 lg:px-[70px] md:px-[44px] lg:py-[40px] md:py-[40px] py-[20px]">
              {
                data.map(({ image, line, views, date }, index) => {
                  return (
                    <div className='px-[10px] py-[10px]'>
                      <div className=' w-[300px] h-[269px]  relative '>
                        <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent'></div>
                        <img src={image} />
                        <div className='text absolute top-44 text-white px-[18px] '>
                          <p className="w-[288.93px] text-[20px] font-medium font-['Inter']">{line}</p>
                          <div className='flex py-[5px] justify-between'>
                            <p className="text-[14px] font-medium font-['Inter']"><VisibilityIcon />&nbsp;{views}</p>
                            <p className="text-[14px] font-medium font-['Inter'] px-6">{date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              } 
            </div>
            <div className='lg:py-[20px] md:px-16 px-3 flex justify-end  items-end  md:py-[20px]'>
                <button className="md:px-8 md:py-2 px-6 py-1 bg-amber-500 rounded-[40px] border border-amber-500 justify-center text-white md:text-[16px] text-[14px] md:font-medium font-base font-['Lexend']">Show More</button>
              </div>
          </div>
        </Content>
        {/* latest blogs ended */}

        {/* astrology started */}
        <Content id="Astrology" activeTab={activeTab}>

          <div className={activeTab === "Astrology" ? "content active-content" : "content"}>
            <p className="text-amber-900 text-[26px] font-semibold font-['Lexend'] px-16 text-start">Astrology</p>
            <div className=" grid md:grid-cols-2 lg:grid-cols-4 lg:px-[70px] md:px-[44px] lg:py-[40px] md:py-[40px]">
              {
                data.map(({ image, line, views, date }, index) => {
                  return (
                    <div className='px-[10px] py-[10px]'>
                      <div className=' w-[300px] h-[269px]  relative '>
                        <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent'></div>
                        <img src={image} />
                        <div className='text absolute top-44 text-white px-[18px] '>
                          <p className="w-[288.93px] text-[20px] font-medium font-['Inter']">{line}</p>
                          <div className='flex py-[5px] justify-between'>
                            <p className="text-[14px] font-medium font-['Inter']"><VisibilityIcon />&nbsp;{views}</p>
                            <p className="text-[14px] font-medium font-['Inter'] px-6">{date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              } 
            </div>
            <div className='lg:py-[20px] px-16 flex justify-end  items-end  md:py-[20px]'>
                <button className="px-8 py-2 bg-amber-500 rounded-[40px] border border-amber-500 justify-center text-white text-[16px] font-medium font-['Lexend']">Show More</button>
              </div>
          </div>
        </Content>
        {/* astrology ended */}

        {/* politics started */}
        <Content id="Politics" activeTab={activeTab}>
          <div className={activeTab === "Politics" ? "content active-content" : "content"}>
            <p className="text-amber-900 text-[26px] font-semibold font-['Lexend'] px-16 text-start">Politics</p>
            <div className=" grid md:grid-cols-2 lg:grid-cols-4 lg:px-[70px] md:px-[44px] lg:py-[40px] md:py-[40px]">
              {
                data.map(({ image, line, views, date }, index) => {
                  return (
                    <div className='px-[10px] py-[10px]'>
                      <div className=' w-[300px] h-[269px]  relative '>
                        <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent'></div>
                        <img src={image} />
                        <div className='text absolute top-44 text-white px-[18px] '>
                          <p className="w-[288.93px] text-[20px] font-medium font-['Inter']">{line}</p>
                          <div className='flex py-[5px] justify-between'>
                            <p className="text-[14px] font-medium font-['Inter']"><VisibilityIcon />&nbsp;{views}</p>
                            <p className="text-[14px] font-medium font-['Inter'] px-6">{date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              } 
            </div>
            <div className='lg:py-[20px] px-16 flex justify-end  items-end  md:py-[20px]'>
                <button className="px-8 py-2 bg-amber-500 rounded-[40px] border border-amber-500 justify-center text-white text-[16px] font-medium font-['Lexend']">Show More</button>
              </div>
          </div>
        </Content>
        {/* politics ended */}

        {/* Festival started */}
        <Content id="Festival" activeTab={activeTab}>
          <div className={activeTab === "Festival" ? "content active-content" : "content"}>
            <p className="text-amber-900 text-[26px] font-semibold font-['Lexend'] px-16 text-start">Festival</p>
            <div className=" grid md:grid-cols-2 lg:grid-cols-4 lg:px-[70px] md:px-[44px] lg:py-[40px] md:py-[40px]">
              {
                data.map(({ image, line, views, date }, index) => {
                  return (
                    <div className='px-[10px] py-[10px]'>
                      <div className=' w-[300px] h-[269px]  relative '>
                        <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent'></div>
                        <img src={image} />
                        <div className='text absolute top-44 text-white px-[18px] '>
                          <p className="w-[288.93px] text-[20px] font-medium font-['Inter']">{line}</p>
                          <div className='flex py-[5px] justify-between'>
                            <p className="text-[14px] font-medium font-['Inter']"><VisibilityIcon />&nbsp;{views}</p>
                            <p className="text-[14px] font-medium font-['Inter'] px-6">{date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              } 
            </div>
            <div className='lg:py-[20px] px-16 flex justify-end  items-end  md:py-[20px]'>
                <button className="px-8 py-2 bg-amber-500 rounded-[40px] border border-amber-500 justify-center text-white text-[16px] font-medium font-['Lexend']">Show More</button>
              </div>
          </div>
        </Content>
        {/* Festival ended */}

        {/* Business started */}
        <Content id="Business" activeTab={activeTab}>
          <div className={activeTab === "Business" ? "content active-content" : "content"}>
            <p className="text-amber-900 text-[26px] font-semibold font-['Lexend'] px-16 text-start">Business</p>
            <div className=" grid md:grid-cols-2 lg:grid-cols-4 lg:px-[70px] md:px-[44px] lg:py-[40px] md:py-[40px]">
              {
                data.map(({ image, line, views, date }, index) => {
                  return (
                    <div className='px-[10px] py-[10px]'>
                      <div className=' w-[300px] h-[269px]  relative '>
                        <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent'></div>
                        <img src={image} />
                        <div className='text absolute top-44 text-white px-[18px] '>
                          <p className="w-[288.93px] text-[20px] font-medium font-['Inter']">{line}</p>
                          <div className='flex py-[5px] justify-between'>
                            <p className="text-[14px] font-medium font-['Inter']"><VisibilityIcon />&nbsp;{views}</p>
                            <p className="text-[14px] font-medium font-['Inter'] px-6">{date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              } 
            </div>
            <div className='lg:py-[20px] px-16 flex justify-end  items-end  md:py-[20px]'>
                <button className="px-8 py-2 bg-amber-500 rounded-[40px] border border-amber-500 justify-center text-white text-[16px] font-medium font-['Lexend']">Show More</button>
              </div>
          </div>
        </Content>
        {/* Business ended */}

        {/* Sports started */}
        <Content id="Sports" activeTab={activeTab}>
          <div className={activeTab === "Sports" ? "content active-content" : "content"}>
            <p className="text-amber-900 text-[26px] font-semibold font-['Lexend'] px-16 text-start">Sports</p>
            <div className=" grid md:grid-cols-2 lg:grid-cols-4 lg:px-[70px] md:px-[44px] lg:py-[40px] md:py-[40px]">
              {
                data.map(({ image, line, views, date }, index) => {
                  return (
                    <div className='px-[10px] py-[10px]'>
                      <div className=' w-[300px] h-[269px]  relative '>
                        <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent'></div>
                        <img src={image} />
                        <div className='text absolute top-44 text-white px-[18px] '>
                          <p className="w-[288.93px] text-[20px] font-medium font-['Inter']">{line}</p>
                          <div className='flex py-[5px] justify-between'>
                            <p className="text-[14px] font-medium font-['Inter']"><VisibilityIcon />&nbsp;{views}</p>
                            <p className="text-[14px] font-medium font-['Inter'] px-6">{date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              } 
            </div>
            <div className='lg:py-[20px] px-16 flex justify-end  items-end  md:py-[20px]'>
                <button className="px-8 py-2 bg-amber-500 rounded-[40px] border border-amber-500 justify-center text-white text-[16px] font-medium font-['Lexend']">Show More</button>
              </div>
          </div>
        </Content>
        {/* Sports ended */}

        {/* Entertainment started */}
        <Content id="Entertainment" activeTab={activeTab}>
          <div className={activeTab === "Entertainment" ? "content active-content" : "content"}>
            <p className="text-amber-900 text-[26px] font-semibold font-['Lexend'] px-16 text-start">Entertainment</p>
            <div className=" grid md:grid-cols-2 lg:grid-cols-4 lg:px-[70px] md:px-[44px] lg:py-[40px] md:py-[40px]">
              {
                data.map(({ image, line, views, date }, index) => {
                  return (
                    <div className='px-[10px] py-[10px]'>
                      <div className=' w-[300px] h-[269px]  relative '>
                        <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent'></div>
                        <img src={image} />
                        <div className='text absolute top-44 text-white px-[18px] '>
                          <p className="w-[288.93px] text-[20px] font-medium font-['Inter']">{line}</p>
                          <div className='flex py-[5px] justify-between'>
                            <p className="text-[14px] font-medium font-['Inter']"><VisibilityIcon />&nbsp;{views}</p>
                            <p className="text-[14px] font-medium font-['Inter'] px-6">{date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              } 
            </div>
            <div className='lg:py-[20px] px-16 flex justify-end  items-end  md:py-[20px]'>
                <button className="px-8 py-2 bg-amber-500 rounded-[40px] border border-amber-500 justify-center text-white text-[16px] font-medium font-['Lexend']">Show More</button>
              </div>
          </div>
        </Content>
        {/* Entertainment ended */}

        {/* Nifty Products started */}
        <Content id="Nifty Products" activeTab={activeTab}>
          <div className={activeTab === "Nifty Products" ? "content active-content" : "content"}>
            <p className="text-amber-900 text-[26px] font-semibold font-['Lexend'] px-16 text-start"> Nifty Products</p>
            <div className=" grid md:grid-cols-2 lg:grid-cols-4 lg:px-[70px] md:px-[44px] lg:py-[40px] md:py-[40px]">
              {
                data.map(({ image, line, views, date }, index) => {
                  return (
                    <div className='px-[10px] py-[10px]'>
                      <div className=' w-[300px] h-[269px]  relative '>
                        <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent'></div>
                        <img src={image} />
                        <div className='text absolute top-44 text-white px-[18px] '>
                          <p className="w-[288.93px] text-[20px] font-medium font-['Inter']">{line}</p>
                          <div className='flex py-[5px] justify-between'>
                            <p className="text-[14px] font-medium font-['Inter']"><VisibilityIcon />&nbsp;{views}</p>
                            <p className="text-[14px] font-medium font-['Inter'] px-6">{date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              } 
            </div>
            <div className='lg:py-[20px] px-16 flex justify-end  items-end  md:py-[20px]'>
                <button className="px-8 py-2 bg-amber-500 rounded-[40px] border border-amber-500 justify-center text-white text-[16px] font-medium font-['Lexend']">Show More</button>
              </div>
          </div>
        </Content>
        {/*  Nifty Products ended */}

        {/* end of container */}
      </div>
      {/* <Trusted/> */}
    </>
  )
}

export default Blogs