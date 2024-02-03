
import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { CartProvider, useCartContext } from '../cart_content';
import Trusted from '../Footer/Trusted';



function Card2() {
    const products2 = [
        {
          image:"/img/rectangle100.png" ,
          title: "Gemstone",
          customers: "Trusted by 4467 customers",
          price:"8999",
          qty: 1,
          id: 1
        }, 
        {
            image:"/img/rectangle100.png" ,
            title: "Gemstone",
            customers: "Trusted by 4467 customers",
            price:"8999",
            qty: 1,
            id: 1
          }, 
          {
            image:"/img/rectangle100.png" ,
            title: "Gemstone",
            customers: "Trusted by 4467 customers",
            price:"8999",
            qty: 1,
            id: 1
          }, 
          {
            image:"/img/rectangle100.png" ,
            title: "Gemstone",
            customers: "Trusted by 4467 customers",
            price:"8999",
            qty: 1,
            id: 1
          }, 
    ]
    const { addToCartproductpage2 } = useCartContext();
    return (
        <>
        {products2.map(({ image, title,  price, qty,   id }, index) => {
                return (
            <div className=" lg:pt-[11px]  shadow-[0px_0px_10px_1px_rgb(174,174,174,0.5)] bg-white  w-full p-[11px]  box-border  rounded-[10px] lg:gap-6 md:gap-4 gap-4 flex flex-col items-center">
                {/* component 1 start */}
                <div className="w-full ">

                    {/* GEMSTONE AND SHARE ICON DIV */}
                    <div className="flex py-[4px] flex-row lg:pl-[22px]  items-end justify-between   ">
                        <div className="text-[20px] font-[500] text-[#3a3a3a]   items-self-center font-Lexend">{title}</div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M13.12 17.023L8.921 14.733C8.3728 15.319 7.66098 15.7266 6.87807 15.9028C6.09516 16.0791 5.27735 16.0157 4.53092 15.721C3.78449 15.4263 3.14396 14.9139 2.69257 14.2504C2.24118 13.5869 1.99979 12.803 1.99979 12.0005C1.99979 11.198 2.24118 10.414 2.69257 9.75051C3.14396 9.08701 3.78449 8.57461 4.53092 8.27992C5.27735 7.98523 6.09516 7.92187 6.87807 8.09807C7.66098 8.27428 8.3728 8.6819 8.921 9.26796L13.121 6.97796C12.8826 6.03403 12.9966 5.03555 13.4416 4.16966C13.8867 3.30378 14.6323 2.62994 15.5387 2.27446C16.445 1.91898 17.4499 1.90626 18.365 2.23869C19.28 2.57112 20.0425 3.22588 20.5093 4.08022C20.9762 4.93457 21.1154 5.92985 20.9009 6.8795C20.6864 7.82916 20.1329 8.668 19.3442 9.23877C18.5555 9.80954 17.5857 10.0731 16.6166 9.97995C15.6475 9.88684 14.7456 9.44347 14.08 8.73296L9.88 11.023C10.0412 11.6643 10.0412 12.3356 9.88 12.977L14.079 15.267C14.7446 14.5564 15.6465 14.1131 16.6156 14.02C17.5847 13.9268 18.5545 14.1904 19.3432 14.7611C20.1319 15.3319 20.6854 16.1708 20.8999 17.1204C21.1144 18.0701 20.9752 19.0654 20.5083 19.9197C20.0415 20.774 19.279 21.4288 18.364 21.7612C17.4489 22.0937 16.444 22.0809 15.5377 21.7255C14.6313 21.37 13.8857 20.6961 13.4406 19.8303C12.9956 18.9644 12.8816 17.9659 13.12 17.022V17.023ZM6 14C6.53043 14 7.03914 13.7892 7.41421 13.4142C7.78929 13.0391 8 12.5304 8 12C8 11.4695 7.78929 10.9608 7.41421 10.5857C7.03914 10.2107 6.53043 9.99996 6 9.99996C5.46957 9.99996 4.96086 10.2107 4.58579 10.5857C4.21071 10.9608 4 11.4695 4 12C4 12.5304 4.21071 13.0391 4.58579 13.4142C4.96086 13.7892 5.46957 14 6 14ZM17 7.99996C17.5304 7.99996 18.0391 7.78925 18.4142 7.41417C18.7893 7.0391 19 6.53039 19 5.99996C19 5.46953 18.7893 4.96082 18.4142 4.58575C18.0391 4.21067 17.5304 3.99996 17 3.99996C16.4696 3.99996 15.9609 4.21067 15.5858 4.58575C15.2107 4.96082 15 5.46953 15 5.99996C15 6.53039 15.2107 7.0391 15.5858 7.41417C15.9609 7.78925 16.4696 7.99996 17 7.99996ZM17 20C17.5304 20 18.0391 19.7892 18.4142 19.4142C18.7893 19.0391 19 18.5304 19 18C19 17.4695 18.7893 16.9608 18.4142 16.5857C18.0391 16.2107 17.5304 16 17 16C16.4696 16 15.9609 16.2107 15.5858 16.5857C15.2107 16.9608 15 17.4695 15 18C15 18.5304 15.2107 19.0391 15.5858 19.4142C15.9609 19.7892 16.4696 20 17 20Z" fill="#3A3A3A" />
                        </svg>
                    </div>


                    {/* RATEING DIV */}
                    <div className="lg:pl-[22px] flex flex-row w-full justify-start gap-3 items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="19" viewBox="0 0 122px 23px" fill="none">
                                <path d="M9.12769 0L11.177 6.52981H17.8086L12.4435 10.5655L14.4928 17.0953L9.12769 13.0596L3.76257 17.0953L5.81186 10.5655L0.446741 6.52981H7.07839L9.12769 0Z" fill="#FFA300" />
                                <path d="M29.5638 0L31.6131 6.52981H38.2448L32.8797 10.5655L34.929 17.0953L29.5638 13.0596L24.1987 17.0953L26.248 10.5655L20.8829 6.52981H27.5146L29.5638 0Z" fill="#FFA300" />
                                <path d="M50 0L52.0493 6.52981H58.6809L53.3158 10.5655L55.3651 17.0953L50 13.0596L44.6349 17.0953L46.6842 10.5655L41.3191 6.52981H47.9507L50 0Z" fill="#FFA300" />
                                <path d="M70.4362 0L72.4855 6.52981H79.1171L73.752 10.5655L75.8013 17.0953L70.4362 13.0596L65.071 17.0953L67.1203 10.5655L61.7552 6.52981H68.3869L70.4362 0Z" fill="#FFA300" />
                                <path d="M90.8723 0L92.9216 6.52981H99.5533L94.1881 10.5655L96.2374 17.0953L90.8723 13.0596L85.5072 17.0953L87.5565 10.5655L82.1914 6.52981H88.823L90.8723 0Z" fill="#FFA300" />
                            </svg>
                        </div>
                        <h1 className="lg:text-[12px] font-[400] font-Lexend">5 Rating</h1>
                    </div>
                </div>
                {/* component 1 end */}




                {/* component 2 start */}
                <div className="w-full space-y-[9px]">

                    {/* IMAGE SECTION */}
                    <div className="      flex  w-full items-center justify-center">
                        <div className="lg:w-[214px] border-[1px] border-[rgba(161, 161, 161, 0.50)] rounded-[3px] lg:h-[185px]">
                            <img src={image} alt="sdf" />
                        </div>
                    </div>


                    {/* PRICEING SECTION */}
                    <div className="w-full font-Lexend lg:text-[18px]   flex justify-center items-center gap-[2px]">
                        <h1 className="font-[500] text-[#3a3a3a]">Price :</h1>
                        <h1 className="font-semibold font-Lexend">{" "}₹ {price}</h1>

                    </div>

                    <div className='flex flex-row justify-start items-center gap-[24px]'>
                        <button className='lg:px-[38px] lg:py-[12px] md:py-[12px] py-[12px] w-full font-[500] bg-[#FFA300] text-[color:var(--Pure-White,#FFF)] text-center text-[20px] font-Lexend rounded-[8px] not-italic  leading-[normal]'>Buy Now</button>
                        <NavLink to="/cart" 
                          onClick={() => addToCartproductpage2(image, title,  price, qty,   id)}>
                        <button className='lg:px-[30px] lg:py-[11px] hover:duration-1000 md:px-[20px] group hover:bg-[#04B4DB] px-[15px]  md:py-[12px] py-[12px] border border-[#04B4DB] rounded-[8px]  '>
                        <svg className="  group-hover:fill-white" xmlns="http://www.w3.org/2000/svg"   width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path className="  group-hover:fill-white" d="M6.30576 16.1358L4.36958 4.00014H3.18518C2.61244 4.00014 2.14815 3.55242 2.14815 3.00014C2.14815 2.44785 2.61244 2.00014 3.18518 2.00014H5.24339C5.34285 1.99855 5.44005 2.0108 5.53269 2.03526C5.67989 2.07396 5.81404 2.14314 5.92742 2.23533C6.04961 2.33451 6.14853 2.46104 6.21314 2.60712C6.24873 2.68733 6.27375 2.77295 6.28653 2.86233L6.6276 5.00014H14.5926V7.00014H6.94669L8.22305 15.0001H17.9692L19.5247 10.0001H21.6901L19.734 16.2875C19.6024 16.7105 19.1987 17.0001 18.7407 17.0001H7.3497C7.25175 17.0017 7.15599 16.9899 7.06461 16.9662C6.90892 16.9261 6.76766 16.8518 6.64997 16.7523C6.54218 16.6614 6.45347 16.5487 6.39181 16.4199C6.34932 16.3314 6.31985 16.236 6.30576 16.1358Z" fill="#04B4DB" />
                                    <path className="  group-hover:fill-white" d="M10.4444 20.0001C10.4444 21.1047 9.51585 22.0001 8.37037 22.0001C7.22489 22.0001 6.2963 21.1047 6.2963 20.0001C6.2963 18.8956 7.22489 18.0001 8.37037 18.0001C9.51585 18.0001 10.4444 18.8956 10.4444 20.0001Z" fill="#04B4DB" />
                                    <path className="  group-hover:fill-white" d="M19.7778 20.0001C19.7778 21.1047 18.8492 22.0001 17.7037 22.0001C16.5582 22.0001 15.6296 21.1047 15.6296 20.0001C15.6296 18.8956 16.5582 18.0001 17.7037 18.0001C18.8492 18.0001 19.7778 18.8956 19.7778 20.0001Z" fill="#04B4DB" />
                                    <path className="  group-hover:fill-white" d="M19.7778 2.00014C20.3505 2.00014 20.8148 2.44785 20.8148 3.00014V4.00014H21.8519C22.4246 4.00014 22.8889 4.44785 22.8889 5.00014C22.8889 5.55242 22.4246 6.00014 21.8519 6.00014H20.8148V7.00014C20.8148 7.55242 20.3505 8.00014 19.7778 8.00014C19.205 8.00014 18.7407 7.55242 18.7407 7.00014V6.00014H17.7037C17.131 6.00014 16.6667 5.55242 16.6667 5.00014C16.6667 4.44785 17.131 4.00014 17.7037 4.00014H18.7407V3.00014C18.7407 2.44785 19.205 2.00014 19.7778 2.00014Z" fill="#04B4DB" />
                                </svg>
                        </button>
                        </NavLink>
                    </div>
                </div>
                {/* component 2 end */}






            </div>
                )
            })}

        </>
    )
}




function Card3() {
    const products2 = [
        {
          image:"/img/rectangle100.png" ,
          title: "Gemstone",
          customers: "Trusted by 4467 customers",
          price:"8999",
          qty: 1,
          id: 1
        }, 
        {
            image:"/img/rectangle100.png" ,
            title: "Gemstone",
            customers: "Trusted by 4467 customers",
            price:"8999",
            qty: 1,
            id: 1
          }, 
          {
            image:"/img/rectangle100.png" ,
            title: "Gemstone",
            customers: "Trusted by 4467 customers",
            price:"8999",
            qty: 1,
            id: 1
          }, 
    ]
        const { addToCartproductpage2 } = useCartContext();
    return (
        <>
        {products2.map(({ image, title,  price, qty,   id }, index) => {
                return (
            <div className=" lg:pt-[11px]  shadow-[0px_0px_10px_1px_rgb(174,174,174,0.5)] bg-white  w-full p-[11px]  box-border  rounded-[10px] lg:gap-6 md:gap-4 gap-4 flex flex-col items-center">
                {/* component 1 start */}
                <div className="w-full ">

                    {/* GEMSTONE AND SHARE ICON DIV */}
                    <div className="flex py-[4px] flex-row lg:pl-[22px]  items-end justify-between   ">
                        <h1 className="text-[20px] font-[500] text-[#3a3a3a]   items-self-center font-Lexend">{title}</h1>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M13.12 17.023L8.921 14.733C8.3728 15.319 7.66098 15.7266 6.87807 15.9028C6.09516 16.0791 5.27735 16.0157 4.53092 15.721C3.78449 15.4263 3.14396 14.9139 2.69257 14.2504C2.24118 13.5869 1.99979 12.803 1.99979 12.0005C1.99979 11.198 2.24118 10.414 2.69257 9.75051C3.14396 9.08701 3.78449 8.57461 4.53092 8.27992C5.27735 7.98523 6.09516 7.92187 6.87807 8.09807C7.66098 8.27428 8.3728 8.6819 8.921 9.26796L13.121 6.97796C12.8826 6.03403 12.9966 5.03555 13.4416 4.16966C13.8867 3.30378 14.6323 2.62994 15.5387 2.27446C16.445 1.91898 17.4499 1.90626 18.365 2.23869C19.28 2.57112 20.0425 3.22588 20.5093 4.08022C20.9762 4.93457 21.1154 5.92985 20.9009 6.8795C20.6864 7.82916 20.1329 8.668 19.3442 9.23877C18.5555 9.80954 17.5857 10.0731 16.6166 9.97995C15.6475 9.88684 14.7456 9.44347 14.08 8.73296L9.88 11.023C10.0412 11.6643 10.0412 12.3356 9.88 12.977L14.079 15.267C14.7446 14.5564 15.6465 14.1131 16.6156 14.02C17.5847 13.9268 18.5545 14.1904 19.3432 14.7611C20.1319 15.3319 20.6854 16.1708 20.8999 17.1204C21.1144 18.0701 20.9752 19.0654 20.5083 19.9197C20.0415 20.774 19.279 21.4288 18.364 21.7612C17.4489 22.0937 16.444 22.0809 15.5377 21.7255C14.6313 21.37 13.8857 20.6961 13.4406 19.8303C12.9956 18.9644 12.8816 17.9659 13.12 17.022V17.023ZM6 14C6.53043 14 7.03914 13.7892 7.41421 13.4142C7.78929 13.0391 8 12.5304 8 12C8 11.4695 7.78929 10.9608 7.41421 10.5857C7.03914 10.2107 6.53043 9.99996 6 9.99996C5.46957 9.99996 4.96086 10.2107 4.58579 10.5857C4.21071 10.9608 4 11.4695 4 12C4 12.5304 4.21071 13.0391 4.58579 13.4142C4.96086 13.7892 5.46957 14 6 14ZM17 7.99996C17.5304 7.99996 18.0391 7.78925 18.4142 7.41417C18.7893 7.0391 19 6.53039 19 5.99996C19 5.46953 18.7893 4.96082 18.4142 4.58575C18.0391 4.21067 17.5304 3.99996 17 3.99996C16.4696 3.99996 15.9609 4.21067 15.5858 4.58575C15.2107 4.96082 15 5.46953 15 5.99996C15 6.53039 15.2107 7.0391 15.5858 7.41417C15.9609 7.78925 16.4696 7.99996 17 7.99996ZM17 20C17.5304 20 18.0391 19.7892 18.4142 19.4142C18.7893 19.0391 19 18.5304 19 18C19 17.4695 18.7893 16.9608 18.4142 16.5857C18.0391 16.2107 17.5304 16 17 16C16.4696 16 15.9609 16.2107 15.5858 16.5857C15.2107 16.9608 15 17.4695 15 18C15 18.5304 15.2107 19.0391 15.5858 19.4142C15.9609 19.7892 16.4696 20 17 20Z" fill="#3A3A3A" />
                        </svg>
                    </div>


                    {/* RATEING DIV */}
                    <div className="lg:pl-[22px] flex flex-row w-full justify-start gap-3 items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="19" viewBox="0 0 122px 23px" fill="none">
                                <path d="M9.12769 0L11.177 6.52981H17.8086L12.4435 10.5655L14.4928 17.0953L9.12769 13.0596L3.76257 17.0953L5.81186 10.5655L0.446741 6.52981H7.07839L9.12769 0Z" fill="#FFA300" />
                                <path d="M29.5638 0L31.6131 6.52981H38.2448L32.8797 10.5655L34.929 17.0953L29.5638 13.0596L24.1987 17.0953L26.248 10.5655L20.8829 6.52981H27.5146L29.5638 0Z" fill="#FFA300" />
                                <path d="M50 0L52.0493 6.52981H58.6809L53.3158 10.5655L55.3651 17.0953L50 13.0596L44.6349 17.0953L46.6842 10.5655L41.3191 6.52981H47.9507L50 0Z" fill="#FFA300" />
                                <path d="M70.4362 0L72.4855 6.52981H79.1171L73.752 10.5655L75.8013 17.0953L70.4362 13.0596L65.071 17.0953L67.1203 10.5655L61.7552 6.52981H68.3869L70.4362 0Z" fill="#FFA300" />
                                <path d="M90.8723 0L92.9216 6.52981H99.5533L94.1881 10.5655L96.2374 17.0953L90.8723 13.0596L85.5072 17.0953L87.5565 10.5655L82.1914 6.52981H88.823L90.8723 0Z" fill="#FFA300" />
                            </svg>
                        </div>
                        <h1 className="lg:text-[12px] font-[400] font-Lexend">5 Rating</h1>
                    </div>
                </div>
                {/* component 1 end */}




                {/* component 2 start */}
                <div className="w-full space-y-[9px]">

                    {/* IMAGE SECTION */}
                    <div className="      flex  w-full items-center justify-center">
                        <div className="lg:w-[214px] border-[1px] border-[rgba(161, 161, 161, 0.50)] rounded-[3px] lg:h-[185px]">
                            <img src={image} alt="sdf" />
                        </div>
                    </div>


                    {/* PRICEING SECTION */}
                    <div className="w-full font-Lexend lg:text-[18px]   flex justify-center items-center gap-[2px]">
                        <h1 className="font-[500] text-[#3a3a3a]">Price :</h1>
                        <h1 className="font-semibold font-Lexend">{" "}₹ {price}</h1>

                    </div>

                    <div className='flex flex-row justify-start items-center gap-[24px]'>
                        <button className='lg:px-[38px] lg:py-[12px] md:py-[12px] py-[12px] w-full font-[500] bg-[#FFA300] text-[color:var(--Pure-White,#FFF)] text-center text-[20px] font-Lexend rounded-[8px] not-italic  leading-[normal]'>Buy Now</button>
                        <NavLink to="/cart" 
                          onClick={() => addToCartproductpage2(image, title,  price, qty,   id)}>
                        <button className='lg:px-[30px] lg:py-[11px] hover:duration-1000 group hover:bg-[#04B4DB] md:px-[20px] px-[15px]  md:py-[12px] py-[12px] border border-[#04B4DB] rounded-[8px]  '>
                        <svg className="  group-hover:fill-white" xmlns="http://www.w3.org/2000/svg"   width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path className="  group-hover:fill-white" d="M6.30576 16.1358L4.36958 4.00014H3.18518C2.61244 4.00014 2.14815 3.55242 2.14815 3.00014C2.14815 2.44785 2.61244 2.00014 3.18518 2.00014H5.24339C5.34285 1.99855 5.44005 2.0108 5.53269 2.03526C5.67989 2.07396 5.81404 2.14314 5.92742 2.23533C6.04961 2.33451 6.14853 2.46104 6.21314 2.60712C6.24873 2.68733 6.27375 2.77295 6.28653 2.86233L6.6276 5.00014H14.5926V7.00014H6.94669L8.22305 15.0001H17.9692L19.5247 10.0001H21.6901L19.734 16.2875C19.6024 16.7105 19.1987 17.0001 18.7407 17.0001H7.3497C7.25175 17.0017 7.15599 16.9899 7.06461 16.9662C6.90892 16.9261 6.76766 16.8518 6.64997 16.7523C6.54218 16.6614 6.45347 16.5487 6.39181 16.4199C6.34932 16.3314 6.31985 16.236 6.30576 16.1358Z" fill="#04B4DB" />
                                    <path className="  group-hover:fill-white" d="M10.4444 20.0001C10.4444 21.1047 9.51585 22.0001 8.37037 22.0001C7.22489 22.0001 6.2963 21.1047 6.2963 20.0001C6.2963 18.8956 7.22489 18.0001 8.37037 18.0001C9.51585 18.0001 10.4444 18.8956 10.4444 20.0001Z" fill="#04B4DB" />
                                    <path className="  group-hover:fill-white" d="M19.7778 20.0001C19.7778 21.1047 18.8492 22.0001 17.7037 22.0001C16.5582 22.0001 15.6296 21.1047 15.6296 20.0001C15.6296 18.8956 16.5582 18.0001 17.7037 18.0001C18.8492 18.0001 19.7778 18.8956 19.7778 20.0001Z" fill="#04B4DB" />
                                    <path className="  group-hover:fill-white" d="M19.7778 2.00014C20.3505 2.00014 20.8148 2.44785 20.8148 3.00014V4.00014H21.8519C22.4246 4.00014 22.8889 4.44785 22.8889 5.00014C22.8889 5.55242 22.4246 6.00014 21.8519 6.00014H20.8148V7.00014C20.8148 7.55242 20.3505 8.00014 19.7778 8.00014C19.205 8.00014 18.7407 7.55242 18.7407 7.00014V6.00014H17.7037C17.131 6.00014 16.6667 5.55242 16.6667 5.00014C16.6667 4.44785 17.131 4.00014 17.7037 4.00014H18.7407V3.00014C18.7407 2.44785 19.205 2.00014 19.7778 2.00014Z" fill="#04B4DB" />
                                </svg>
                        </button>
                        </NavLink>
                    </div>
                </div>
                {/* component 2 end */}






            </div>
                )
            })}

        </>
    )
}




function Card4() {

    const products = [
        {
          image:"./img/rectangle100.png" ,
          title: "Gemstone Lorem ipsum dolor sit amet.",
          price: "8900",
          qty: 1,
          id: 1
        },    
      ]
      const { addToCartproductpage } = useCartContext();
    return (
        <>
{products.map(({ image, title,  price, qty,   id }, index) => {
                return (
            <div className="  lg:pt-[16px] h-full  shadow-[0px_0px_10px_1px_rgb(174,174,174,0.5)]  w-full p-[11px]  bg-white  box-border  rounded-[10px] lg:gap-[23px] md:gap-4 gap-4 flex flex-col items-center">
                {/* component 1 start */}

                {/* IMAGE SECTION */}
                <div className="   flex  w-full items-center justify-center">
                    <div className="lg:w-[214px] border-[1px] border-[rgba(161, 161, 161, 0.50)] rounded-[3px] lg:h-[185px]">
                        <img src={image} alt="sdf" />
                    </div>
                </div>
                {/* component 1 end */}






                {/* component 2 start */}

                <div className='  w-full'>

                    <div className="space-y-[6px] w-full ">
                        {/* GEMSTONE AND SHARE ICON DIV */}
                        <div className="flex flex-row lg:pl-[16px]  items-end justify-between   ">
                            <h1 className="text-[16px] font-semibold text-[#3a3a3a]  text-left  leading-[17px]  items-self-center font-Lexend">{title}</h1>

                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M13.12 17.023L8.921 14.733C8.3728 15.319 7.66098 15.7266 6.87807 15.9028C6.09516 16.0791 5.27735 16.0157 4.53092 15.721C3.78449 15.4263 3.14396 14.9139 2.69257 14.2504C2.24118 13.5869 1.99979 12.803 1.99979 12.0005C1.99979 11.198 2.24118 10.414 2.69257 9.75051C3.14396 9.08701 3.78449 8.57461 4.53092 8.27992C5.27735 7.98523 6.09516 7.92187 6.87807 8.09807C7.66098 8.27428 8.3728 8.6819 8.921 9.26796L13.121 6.97796C12.8826 6.03403 12.9966 5.03555 13.4416 4.16966C13.8867 3.30378 14.6323 2.62994 15.5387 2.27446C16.445 1.91898 17.4499 1.90626 18.365 2.23869C19.28 2.57112 20.0425 3.22588 20.5093 4.08022C20.9762 4.93457 21.1154 5.92985 20.9009 6.8795C20.6864 7.82916 20.1329 8.668 19.3442 9.23877C18.5555 9.80954 17.5857 10.0731 16.6166 9.97995C15.6475 9.88684 14.7456 9.44347 14.08 8.73296L9.88 11.023C10.0412 11.6643 10.0412 12.3356 9.88 12.977L14.079 15.267C14.7446 14.5564 15.6465 14.1131 16.6156 14.02C17.5847 13.9268 18.5545 14.1904 19.3432 14.7611C20.1319 15.3319 20.6854 16.1708 20.8999 17.1204C21.1144 18.0701 20.9752 19.0654 20.5083 19.9197C20.0415 20.774 19.279 21.4288 18.364 21.7612C17.4489 22.0937 16.444 22.0809 15.5377 21.7255C14.6313 21.37 13.8857 20.6961 13.4406 19.8303C12.9956 18.9644 12.8816 17.9659 13.12 17.022V17.023ZM6 14C6.53043 14 7.03914 13.7892 7.41421 13.4142C7.78929 13.0391 8 12.5304 8 12C8 11.4695 7.78929 10.9608 7.41421 10.5857C7.03914 10.2107 6.53043 9.99996 6 9.99996C5.46957 9.99996 4.96086 10.2107 4.58579 10.5857C4.21071 10.9608 4 11.4695 4 12C4 12.5304 4.21071 13.0391 4.58579 13.4142C4.96086 13.7892 5.46957 14 6 14ZM17 7.99996C17.5304 7.99996 18.0391 7.78925 18.4142 7.41417C18.7893 7.0391 19 6.53039 19 5.99996C19 5.46953 18.7893 4.96082 18.4142 4.58575C18.0391 4.21067 17.5304 3.99996 17 3.99996C16.4696 3.99996 15.9609 4.21067 15.5858 4.58575C15.2107 4.96082 15 5.46953 15 5.99996C15 6.53039 15.2107 7.0391 15.5858 7.41417C15.9609 7.78925 16.4696 7.99996 17 7.99996ZM17 20C17.5304 20 18.0391 19.7892 18.4142 19.4142C18.7893 19.0391 19 18.5304 19 18C19 17.4695 18.7893 16.9608 18.4142 16.5857C18.0391 16.2107 17.5304 16 17 16C16.4696 16 15.9609 16.2107 15.5858 16.5857C15.2107 16.9608 15 17.4695 15 18C15 18.5304 15.2107 19.0391 15.5858 19.4142C15.9609 19.7892 16.4696 20 17 20Z" fill="#3A3A3A" />
                            </svg> */}
                        </div>




                        {/* RATEING DIV */}
                        <div className="lg:pl-[16px] flex flex-row w-full justify-start gap-3 items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="18" viewBox="0 0 122px 18px" fill="none">
                                    <path d="M9.12769 0L11.177 6.52981H17.8086L12.4435 10.5655L14.4928 17.0953L9.12769 13.0596L3.76257 17.0953L5.81186 10.5655L0.446741 6.52981H7.07839L9.12769 0Z" fill="#FFA300" />
                                    <path d="M29.5638 0L31.6131 6.52981H38.2448L32.8797 10.5655L34.929 17.0953L29.5638 13.0596L24.1987 17.0953L26.248 10.5655L20.8829 6.52981H27.5146L29.5638 0Z" fill="#FFA300" />
                                    <path d="M50 0L52.0493 6.52981H58.6809L53.3158 10.5655L55.3651 17.0953L50 13.0596L44.6349 17.0953L46.6842 10.5655L41.3191 6.52981H47.9507L50 0Z" fill="#FFA300" />
                                    <path d="M70.4362 0L72.4855 6.52981H79.1171L73.752 10.5655L75.8013 17.0953L70.4362 13.0596L65.071 17.0953L67.1203 10.5655L61.7552 6.52981H68.3869L70.4362 0Z" fill="#FFA300" />
                                    <path d="M90.8723 0L92.9216 6.52981H99.5533L94.1881 10.5655L96.2374 17.0953L90.8723 13.0596L85.5072 17.0953L87.5565 10.5655L82.1914 6.52981H88.823L90.8723 0Z" fill="#FFA300" />
                                </svg>
                            </div>
                            <h1 className="lg:text-[12px] font-[400] font-Lexend">5 Rating</h1>
                        </div>

                    </div>



                    <div className="w-full  space-y-[8px]  lg:pt-[8px]">

                        {/* PRICEING SECTION */}
                        <div className="w-full font-Lexend lg:text-[16px]  lg:pl-[16px]  flex justify-start items-center gap-[13px]">
                            <h1 className="font-[500] text-[#773101]">Price :</h1>
                            <h1 className="font-semibold text-[#DB042A] lg:text-[15px] font-Lexend">₹{price}</h1>

                        </div>

                        <div className='flex flex-row justify-start items-center gap-[24px]'>
                            <button className='lg:px-[38px] lg:py-[12px] md:py-[12px] py-[12px] w-full font-[500] bg-[#FFA300] text-[color:var(--Pure-White,#FFF)] text-center text-[20px] font-Lexend rounded-[8px] not-italic  leading-[normal]'>Buy Now</button>
                            <NavLink to="/cart" 
                          onClick={() => addToCartproductpage(image, title,  price, qty,   id)}>
                            <button className='lg:px-[30px] lg:py-[11px]hover:duration-1000 group hover:bg-[#04B4DB] md:px-[20px] px-[15px]  md:py-[12px] py-[12px] border border-[#04B4DB] rounded-[8px]  '>
                            <svg className="  group-hover:fill-white" xmlns="http://www.w3.org/2000/svg"   width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path className="  group-hover:fill-white" d="M6.30576 16.1358L4.36958 4.00014H3.18518C2.61244 4.00014 2.14815 3.55242 2.14815 3.00014C2.14815 2.44785 2.61244 2.00014 3.18518 2.00014H5.24339C5.34285 1.99855 5.44005 2.0108 5.53269 2.03526C5.67989 2.07396 5.81404 2.14314 5.92742 2.23533C6.04961 2.33451 6.14853 2.46104 6.21314 2.60712C6.24873 2.68733 6.27375 2.77295 6.28653 2.86233L6.6276 5.00014H14.5926V7.00014H6.94669L8.22305 15.0001H17.9692L19.5247 10.0001H21.6901L19.734 16.2875C19.6024 16.7105 19.1987 17.0001 18.7407 17.0001H7.3497C7.25175 17.0017 7.15599 16.9899 7.06461 16.9662C6.90892 16.9261 6.76766 16.8518 6.64997 16.7523C6.54218 16.6614 6.45347 16.5487 6.39181 16.4199C6.34932 16.3314 6.31985 16.236 6.30576 16.1358Z" fill="#04B4DB" />
                                    <path className="  group-hover:fill-white" d="M10.4444 20.0001C10.4444 21.1047 9.51585 22.0001 8.37037 22.0001C7.22489 22.0001 6.2963 21.1047 6.2963 20.0001C6.2963 18.8956 7.22489 18.0001 8.37037 18.0001C9.51585 18.0001 10.4444 18.8956 10.4444 20.0001Z" fill="#04B4DB" />
                                    <path className="  group-hover:fill-white" d="M19.7778 20.0001C19.7778 21.1047 18.8492 22.0001 17.7037 22.0001C16.5582 22.0001 15.6296 21.1047 15.6296 20.0001C15.6296 18.8956 16.5582 18.0001 17.7037 18.0001C18.8492 18.0001 19.7778 18.8956 19.7778 20.0001Z" fill="#04B4DB" />
                                    <path className="  group-hover:fill-white" d="M19.7778 2.00014C20.3505 2.00014 20.8148 2.44785 20.8148 3.00014V4.00014H21.8519C22.4246 4.00014 22.8889 4.44785 22.8889 5.00014C22.8889 5.55242 22.4246 6.00014 21.8519 6.00014H20.8148V7.00014C20.8148 7.55242 20.3505 8.00014 19.7778 8.00014C19.205 8.00014 18.7407 7.55242 18.7407 7.00014V6.00014H17.7037C17.131 6.00014 16.6667 5.55242 16.6667 5.00014C16.6667 4.44785 17.131 4.00014 17.7037 4.00014H18.7407V3.00014C18.7407 2.44785 19.205 2.00014 19.7778 2.00014Z" fill="#04B4DB" />
                                </svg>
                            </button>
                            </NavLink>
                        </div>
                    </div>
                    {/* component 2 end */}



                </div>


            </div>
                )
  })}

        </>
    )
}




const navi = [
    {
        image: "./img/report6.png",
        name: "Rudraksha",
    },
    {
        image: "./img/report1.png",
        name: "Shivling",
    },
    {
        image: "./img/report2.png",
        name: "Rudraksha",
    },
    {
        image: "./img/report3.png",
        name: "Rudraksha",
    },
    {
        image: "./img/report4.png",
        name: "Rudraksha",
    },
    {
        image: "./img/report5.png",
        name: "Rudraksha",
    },

]


function Slides() {
    return (
        <>
            <div className='  px-[70px]'>
                <div className='w-full flex flex-col md:flex-row justify-center items-center md:pb-0 pb-[20px]  md:gap-10   '>

                    {/* componetn 1 */}
                    <div className='  pt-[50px] box-border pb-[14px]  lg:pr-[50px]  space-y-[17px]'>

                        <div className='lg:w-[372px] w-[200px] h-[150px] md:w-[250px]  md:h-[250px] lg:h-[372px] border-[1px]  overflow-hidden rounded-[3px] border-[#ffa300]'>
                            <img src="./img/Rudraksh.png" alt="asf" className='' />
                        </div>
                        <div className=' h-[16px] font-Poppins text-[10px] font-[400] flex flex-row justify-center items-center'>
                            <h1>*</h1>Terms and Conditions applied
                        </div>
                    </div>



                    {/* componetn 2 */}
                    <div className='  pb-[10px]   lg:pb-[80px] pt-[20px] '>

                        <div className='flex flex-col items-center md:items-end justify-center md:gap2 lg:gap-[50px] '>

                            {/* semi contaner 1  start*/}
                            <div className='flex  justify-start items-start h-fit   flex-col md:space-y-[10px]  lg:space-y-[28px] '  >

                                <h1 className=' font-Poppins leading-none text-[#DB042A] md:text-[20px] lg:text-[26px]  font-semibold'>Get Flat 10% off On</h1>
                                <h1 className='    leading-none   font-inter  md:text-[25px] lg:text-[42px] font-bold text-[#ffa300]'>1 Mukhi Rudraksha</h1>
                                <div className=' font-Poppins  flex flex-row  items-center  '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="19" viewBox="0 0 122px 23px" fill="none">
                                        <path d="M9.12769 0L11.177 6.52981H17.8086L12.4435 10.5655L14.4928 17.0953L9.12769 13.0596L3.76257 17.0953L5.81186 10.5655L0.446741 6.52981H7.07839L9.12769 0Z" fill="#DB042A" />
                                        <path d="M29.5638 0L31.6131 6.52981H38.2448L32.8797 10.5655L34.929 17.0953L29.5638 13.0596L24.1987 17.0953L26.248 10.5655L20.8829 6.52981H27.5146L29.5638 0Z" fill="#DB042A" />
                                        <path d="M50 0L52.0493 6.52981H58.6809L53.3158 10.5655L55.3651 17.0953L50 13.0596L44.6349 17.0953L46.6842 10.5655L41.3191 6.52981H47.9507L50 0Z" fill="#DB042A" />
                                        <path d="M70.4362 0L72.4855 6.52981H79.1171L73.752 10.5655L75.8013 17.0953L70.4362 13.0596L65.071 17.0953L67.1203 10.5655L61.7552 6.52981H68.3869L70.4362 0Z" fill="#DB042A" />
                                        <path d="M90.8723 0L92.9216 6.52981H99.5533L94.1881 10.5655L96.2374 17.0953L90.8723 13.0596L85.5072 17.0953L87.5565 10.5655L82.1914 6.52981H88.823L90.8723 0Z" fill="#DB042A" />
                                    </svg>


                                    <h1 className='text-[12px] text-[#04B4DB] font-[400] font-Lexend'>Trusted By 4474 Customers</h1>



                                </div>
                                <div className=' font-inter md:text-[18px] space-x-2 lg:text-[24px] font-semibold'>
                                    <h1 className='  line-through  text-[#a1a1a1]'>₹ 8999</h1>
                                    <h1 className='text-[26px] md:text-[19px] lg:text-[26px] text-[#DB042A] font-semibold'>₹ 7099</h1>
                                </div>


                                <h1 className='  text-left  font-Poppins  md:text-[16px] lg:text-[18px] font-normal leading-[150%]'>Invite Peace and Power with One Mukhi Rudraksha !</h1>

                            </div>
                            {/* semi contaner 1  end*/}


                            <button className=' py-[9px] lg:py-[15px] w-[212px]   bg-[#db042a] rounded-[9px] font-Lexend text-[16px] text-white font-semibold '>Buy Now</button>

                        </div>
                    </div>

                    {/* componetn 3 */}
                    <div className='hidden  lg:block  h-[470px]  box-border pt-16 relative  w-fit'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="375" height="360" viewBox="0 0 375 360" fill="none">
                            <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M293.315 7.75753C345.572 37.9579 303.222 121.474 316.175 180.422C328.367 235.903 398.24 290.232 365.6 336.721C332.461 383.922 257.054 343.648 199.457 346.664C160.469 348.705 121.565 369.248 86.8846 351.315C50.659 332.583 33.3166 292.849 20.5078 254.132C6.32066 211.249 -11.9299 162.569 11.7084 124.081C35.2596 85.7349 89.7788 90.8023 131.372 73.6214C187.364 50.4928 240.861 -22.5561 293.315 7.75753Z" fill="#DB042A" />
                        </svg>
                        <img src="./img/Reac.png" alt="asf" className=' top-0 w-fit absolute h-full  right-10  ' />
                    </div>


                </div>
            </div>
        </>
    )
}

function ProductsPage() {
    const products = [
        {
          image:"/img/Rudraksh.png" ,
          title: "1 Mukhi Rudraksha",
          price: "8900",
          qty: 1,
          id: 1
        },    
      ]
      const { addToCartproductpage } = useCartContext();
    return (
        <>



            {/* MAIN SLIDER  start */}
            <div className=" w-full py-16  ">
<div className='bg-white'>
                <Swiper
                    cssMode={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation,  Mousewheel, Keyboard]}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                      }}
                    className="swiper_container"
                >
                    <SwiperSlide>
                        <Slides />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slides />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slides />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slides />
                    </SwiperSlide>
                    <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <img src='/img/Arrowleft.svg' name="arrow-back-outline"/>
          </div>
          <div className="swiper-button-next slider-arrow">
            <img src='/img/Arrowright.svg' name="arrow-forward-outline"/>
          </div>
      
        </div>
                </Swiper>
                </div>
            </div>
            {/* MAIN SLIDER  end */}







            {/* NAVIGATION SECTION START */}

            <div className="w-full px-[100px] md:px-[144px]  grid-cols-2 grid md:grid-cols-3  gap-y-[20px]  lg:grid-cols-6 gap-[125px] lg:pt-[34px] pb-[40px]   ">

                {
                    navi.map((e) => {
                        return (
                            <>

                                {/* component 1 */}
                                <div className="flex flex-col justify-center items-center gap-[15px]">
                                    <div className="w-[100px] h-[100px] rounded-full  overflow-hidden flex justify-center items-center border-[2px] border-[#a1a1a1] ">
                                        <img src={e.image} alt="asdf" className="w-[150%] h-[150%]  " />
                                    </div>
                                    <h1 className=" font-Lexend text-[16px] font-[500]">{e.name}</h1>
                                </div>


                            </>

                        )
                    })
                }





            </div>

            {/* NAVIGATION SECTION END */}






            {/* TOP SELLING FOR YOU SECITON */}
            <div className=" lg:px-16 px-10  lg:pb-[66px] flex  flex-col">

                {/* HEADING */}
                <div className="  pb-[24px]     w-full text-[#773101] text-left flex  md:flex-row flex-col justify-between text-[26px] font-[500] font-['lexend']">
                    <h1 className="pt-[2px]">
                        Top Selling Products
                    </h1>




                    {/* select section */}
                    <div className="md:w-[445px]  h-[55px]  md:h-[65px] p-1  w-full box-border flex justify-center items-center  flex-row rounded-[6px] bg-[#ffa300] px-[15px]  py-1 pb-1 md:py-[10px] gap-[12px] md:gap-[24px]" >


                        <div className="w-full h-full">
                            <input type="text" name="search" id="search" placeholder="Search Astrologer" className=" text-[14px] font-[400]  h-full px-[14px] w-full rounded-[6px]" />

                        </div>

                        <div className=" flex flex-row justify-center items-center  space-x-[5px]">
                            <h1 className="text-white text-[16px] font-Lexend font-semibold">Short</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                <path d="M0.183013 1.51323C-0.0094375 1.17989 0.231125 0.763228 0.616025 0.763228L8.41025 0.763228C8.79515 0.763228 9.03572 1.17989 8.84327 1.51323L4.94615 8.26323C4.7537 8.59656 4.27258 8.59656 4.08013 8.26323L0.183013 1.51323Z" fill="white" />
                            </svg>
                        </div>
                    </div>



                </div>


                {/* top selling products start */}
                <div className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-[20px]   w-full">

                    <Card4 />
                    <Card3 />
                

                </div>
                {/* top selling products end */}


            </div>







            {/* RECOMMEDED FOR YOU SECITON */}
            <div className=" lg:px-16 px-10   flex flex-col">

                {/* HEADING */}
                <h1 className="  lg:pb-[50px] w-full text-[#773101] text-left text-[26px] font-[500] font-['lexend']">
                    Recommended for you
                </h1>
                {/* CARDS DIV */}

                <div className=" grid  md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-[20px]   w-full">

                    <Card2 />
  

                </div>


            </div>


<Trusted/>
        </>
    )

}


export default ProductsPage;