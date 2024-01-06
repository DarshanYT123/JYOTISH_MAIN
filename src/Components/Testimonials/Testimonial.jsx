import React from 'react'
import "./Testimonial.css"
import StarRateIcon from '@mui/icons-material/StarRate';

import {  A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


//Data of reviews//
const data = [
    {
        review: "Found very near to happening with me, hope whatever predicted in future is in my favour, Very near to Happening hope whatever.",
        rate: "5/5",
        image: "/img/review.png",
        name: "Prateek Patel",
        date: "21 May 2023"
    },
    {
        review: "Found very near to happening with me, hope whatever predicted in future is in my favour, Very near to Happening hope whatever.",
        rate: "5/5",
        image: "/img/review2.png",
        name: "Priyanka Yadav",
        date: "21 May 2023"
    },
    {
        review: "Found very near to happening with me, hope whatever predicted in future is in my favour, Very near to Happening hope whatever.",
        rate: "5/5",
        image: "/img/review3.png",
        name: "Rohit Choudhary",
        date: "21 May 2023"
    },
    {
        review: "Found very near to happening with me, hope whatever predicted in future is in my favour, Very near to Happening hope whatever.",
        rate: "5/5",
        image: "/img/review4.png",
        name: "Isha Patel",
        date: "21 May 2023"
    },
    {
        review: "Found very near to happening with me, hope whatever predicted in future is in my favour, Very near to Happening hope whatever.",
        rate: "5/5",
        image: "/img/review.png",
        name: "Prateek Patel",
        date: "21 May 2023"
    },
    {
        review: "Found very near to happening with me, hope whatever predicted in future is in my favour, Very near to Happening hope whatever.",
        rate: "5/5",
        image: "/img/review2.png",
        name: "Priyanka Yadav",
        date: "21 May 2023"
    },
    {
        review: "Found very near to happening with me, hope whatever predicted in future is in my favour, Very near to Happening hope whatever.",
        rate: "5/5",
        image: "/img/review3.png",
        name: "Rohit Choudhary",
        date: "21 May 2023"
    },
    {
        review: "Found very near to happening with me, hope whatever predicted in future is in my favour, Very near to Happening hope whatever.",
        rate: "5/5",
        image: "/img/review4.png",
        name: "Isha Patel",
        date: "21 May 2023"
    }

]

//Testimonial component//
const Testimonial = () => {
    return (
        <div className='py-10'>
            <h2 className="text-amber-900 text-[26px] font-medium text-start font-Lexend heading">Testimonials</h2>
            <div className='flex flex-row flex-wrap justify-between items-center pt-[30px]'>
                <Swiper
                    modules={[A11y, Autoplay]}
                    
                    autoplay={{
                        delay: 2500,
                    }}
                    breakpoints={{
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 50,
                        },
                        1024: {
                          slidesPerView: 4,
                          spaceBetween: 50,
                        },
                      }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                >
                    {
                        data.map(({ review, rate, image, name, date }, index) => {
                            return (


                                <SwiperSlide>
                                    <div className="flex flex-col w-[328px] h-[200px] mb-[50px] bg-white rounded-md shadow border border-stone-300 border-opacity-80 ml-5 boxShadow: 0px 4px 10px rgba(174.25, 174.25, 174.25, 0.25)" key={index}>
                                        <p className="text-neutral-700 text-[14px] font-normal font-Poppins text-start pt-4 px-5">{review}</p>
                                        <div className='flex flex-row pt-2 px-5 text-start'>

                                            <div className='text-amber-500 '>
                                                <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                                <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                                <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                                <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                                <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                            </div>
                                            <p className=" text-neutral-700 text-[11px] font-light font-Lexend px-2 pt-[8px] text-start">{rate}</p>
                                        </div>

                                        <div className='flex flex-row'>
                                            <div className='px-5 py-3'>
                                            <img src={image} className="w-[50px] h-[50px] rounded-full" />
                                            </div>
                                            <p className=" text-neutral-700 text-[14px] font-semibold font-Lexend py-7 text-start">{name}</p>
                                            <p className=" text-neutral-400 text-[12px] font-medium font-Lexend py-8 pl-6">{date}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )

}

export default Testimonial