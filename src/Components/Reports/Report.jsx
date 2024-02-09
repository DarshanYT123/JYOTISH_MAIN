import React from 'react'
import { useState } from 'react';
import "./Report.css"
import StarRateIcon from '@mui/icons-material/StarRate';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import Navbar from '../Navbar/Nav';
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import { NavLink } from 'react-router-dom';
import { CartProvider, useCartContext } from '../cart_content';
import { useDownloadContext } from '../download_content';
import { useBuyContext } from '../buy_context';
import { useStepContext } from '../Cart/StepContext';



const Report = ({setAction, action}) => {

  const { stepNo, setStepNo } = useStepContext();
 

  const product = [
    {
      image: "/img/report1.png",
      title: "2024 Highlights",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
      qty: 1,
      id: 1
    },
    {
      image: "/img/report2.png",
      title: "2024 Yearly Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
      qty: 1,
      id: 2
    },
    {
      image: "/img/report3.png",
      title: "2024 Career Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
      qty: 1,
      id: 3
    },
    {
      image: "/img/report4.png",
      title: "2024 Monthwise Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
      qty: 1,
      id: 4
    },
    {
      image: "/img/report5.png",
      title: "Love Life Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
      qty: 1,
      id: 5
    },
    {
      image: "/img/report6.png",
      title: "Married Life Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
      qty: 1,
      id: 6
    },
    {
      image: "/img/report1.png",
      title: "2024 Highlights",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
      qty: 1,
      id: 7
    },
    {
      image: "/img/report2.png",
      title: "2024 Yearly Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
      qty: 1,
      id: 8
    },
    {
      image: "/img/report3.png",
      title: "2024 Career Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
      qty: 1,
      id: 9
    },
    {
      image: "/img/report4.png",
      title: "2024 Monthwise Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
      qty: 1,
      id: 10
    },
    {
      image: "/img/report5.png",
      title: "Love Life Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
      qty: 1,
      id: 11
    },
    {
      image: "/img/report6.png",
      title: "Married Life Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
      qty: 1,
      id: 12
    }

  ]

  const data2 = [
    {
      image: "/img/report7.png",
      title: "2023 Yearly Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
      id: 1
    },
    {
      image: "/img/report8.png",
      title: "Birth Horoscope",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
      id: 2
    },
    {
      image: "/img/report9.png",
      title: "Love Horoscope",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
      id: 3
    },
    {
      image: "/img/report10.png",
      title: "Friendship Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
      id: 4
    },
    {
      image: "/img/report11.png",
      title: "Moon Sign",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
      id: 5
    },
    {
      image: "/img/report12.png",
      title: "Sun Sign",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
      id: 6
    },
    {
      image: "/img/report7.png",
      title: "2023 Yearly Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
      id: 7
    },
    {
      image: "/img/report8.png",
      title: "Birth Horoscope",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
      id: 8
    },
    {
      image: "/img/report9.png",
      title: "Love Horoscope",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
      id: 9
    },
    {
      image: "/img/report10.png",
      title: "Friendship Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
      id: 10
    },
    {
      image: "/img/report11.png",
      title: "Moon Sign",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
      id: 11
    },
    {
      image: "/img/report12.png",
      title: "Sun Sign",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
      id: 12
    }

  ]

  const { buyNow } = useBuyContext();
  const { addToCart } = useCartContext();
  const [activeTab, setActiveTab] = useState("tab1");
  const { dwnldProduct } = useDownloadContext();

  
  return (

    <>
     <div className=' md:px-10 lg:px-16 md:py-10 px-10'>
      <div className='flex justify-center items-center py-5'>
        <ul className="flex w-fit justify-center flex-row items-center  bg-[#F5F5F5] shadow-[0px_4px_12px_0px_rgba(157,157,157,0.18)_inset] rounded-full overflow-hidden ">
          <TabNavItem
            title="2024 Reports"
            id="tab1"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="Free Reports"
            id="tab2"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </ul>
      </div>
      <div className='content-tabs  flex flex-row flex-wrap justify-between items-center'>
        <TabContent id="tab1" activeTab={activeTab}>
          <div className={activeTab === "tab1" ? "content active-content" : "content "}>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 justify-between items-center'>
              {product.map(({ image, title, customers, tagline, qty, price, id }, index) => {
                return (
                  
                  <div className=' md:mx-auto lg:mx-0'>
                    <div className="md:w-[415px] md:h-[250px] w-[290px] h-[200px] bg-neutral-50 rounded-[10px] shadow lg:mx-auto md:mx-auto md:flex flex relative" key={id}>
                      <ShareOutlinedIcon className='absolute top-[14px] right-[14px]' sx={{ '@media (min-width:300px)': { fontSize: '14px', },'@media (min-width:768px)': { fontSize: '24px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                      <img src={image} className='md:w-[195px] md:h-[240px] w-[130px] h-[190px]  md:pt-[15px] px-[6px] pt-[10px] object-cover md:rounded-[5px] rounded-[2.5px]' />
                      <div className='md:pl-[5px] pl-1 flex flex-col justify-center items-start text-start '>
                        <p className=" truncate text-amber-900 md:text-[20px] text-[16px] font-medium font-['Lexend'] md:pt-[15px]">{title}</p>
                        <div className='flex flex-row'>
                                    <div className='text-amber-500 '>
                                        <StarRateIcon sx={{ '@media (min-width:300px)': { fontSize: '14px', },'@media (min-width:768px)': { fontSize: '24px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                        <StarRateIcon sx={{ '@media (min-width:300px)': { fontSize: '14px', },'@media (min-width:768px)': { fontSize: '24px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                        <StarRateIcon sx={{ '@media (min-width:300px)': { fontSize: '14px', },'@media (min-width:768px)': { fontSize: '24px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                        <StarRateIcon sx={{ '@media (min-width:300px)': { fontSize: '14px', },'@media (min-width:768px)': { fontSize: '24px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                        <StarRateIcon sx={{ '@media (min-width:300px)': { fontSize: '14px', },'@media (min-width:768px)': { fontSize: '24px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                    </div>
                                    <p className="text-neutral-700 md:text-[14px] text-[10px] lg:font-normal md:font-light font-['Lexend'] lg:px-[12px] lg:py-[5px] md:px-[8px] md:py-[7px] px-[4px] pt-[8px]">5 Rating</p>
                                </div>
                        <p className="text-cyan-500 md:text-[12px] text-[10px] text-start font-normal font-['Lexend']">{customers}</p>
                        <p className="md:w-[207px] w-[160px] text-neutral-400 md:text-[14px] text-[12px] text-start font-normal font-['Poppins'] leading-normal md:pt-[21px] pt-[14px] ">{tagline}</p>
                        <p className="opacity-80 text-neutral-700 md:text-[16px] text-[12px] font-medium font-['Lexend'] leading-7 md:pt-[12px] pt-[6px]">Price: &#8377;<span className="text-neutral-700 md:text-base text-xs font-medium font-['Lexend'] leading-7">{price}</span></p>
                        <div className='flex  justify-center items-center gap-x-1 md:gap-x-2.5 '>
                          <NavLink to="/cart"  onClick={() => { setStepNo(2); setAction("buy"); buyNow(image, title, customers, tagline, price, qty, id); }}>
                          <button  className="px-3 md:px-8 py-1.5 bg-amber-500 md:rounded-lg rounded-md border border-amber-500 text-center text-white md:text-base text-xs font-medium font-['Lexend']">Buy Now</button>
                          </NavLink>
                          
                          <NavLink to="/cart" 
                           onClick={() => { setStepNo(1); setAction("cart"); addToCart(image, title, customers, tagline, price, qty, id); }}>
                           <button className='px-3 md:px-5 lg:px-4 hover:duration-1000 hover:bg-[#04B4DB] group py-1.5 border border-[#04B4DB] rounded-[8px]  '>
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
                    </div>
                  </div>
                 
                )
              })}
            </div>
          </div>
        </TabContent>

        <TabContent id="tab2" activeTab={activeTab}>
          <div className={activeTab === "tab2" ? "content active-content" : "content "}>
            <div className=' grid lg:grid-cols-3 grid-cols-1 gap-5 justify-between items-center'>
              {data2.map(({ image, title, customers, tagline, id }, index) => {
                return (
                  
                  <div className='md:py-[10px] md:mx-auto lg:mx-0 py-[5px]'>
                    <div className="md:w-[405px] md:h-[250px] w-[300px] h-[200px] bg-neutral-50 rounded-[10px] shadow lg:mx-auto md:mx-auto md:flex flex relative" key={id}>
                      <ShareOutlinedIcon className='absolute top-[14px] right-[14px]' sx={{ '@media (min-width:300px)': { fontSize: '14px', },'@media (min-width:768px)': { fontSize: '24px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                      <img src={image} className='md:w-[195px] md:h-[240px] w-[140px] h-[190px] md:px-[10px] md:pt-[15px] px-[6px] pt-[10px] object-cover md:rounded-[5px] rounded-[2.5px]' />
                      <div className='md:pl-[5px] pl-[5px]  flex flex-col justify-center items-start  '>
                      <p className="  truncate md:py-1  text-amber-900 text-start md:text-[20px] text-[14px] font-medium font-['Lexend'] ">{title}</p>
                        <div className='flex flex-row md:py-1'>
                                    <div className='text-amber-500 '>
                                        <StarRateIcon sx={{ '@media (min-width:300px)': { fontSize: '14px', },'@media (min-width:768px)': { fontSize: '24px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                        <StarRateIcon sx={{ '@media (min-width:300px)': { fontSize: '14px', },'@media (min-width:768px)': { fontSize: '24px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                        <StarRateIcon sx={{ '@media (min-width:300px)': { fontSize: '14px', },'@media (min-width:768px)': { fontSize: '24px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                        <StarRateIcon sx={{ '@media (min-width:300px)': { fontSize: '14px', },'@media (min-width:768px)': { fontSize: '24px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                        <StarRateIcon sx={{ '@media (min-width:300px)': { fontSize: '14px', },'@media (min-width:768px)': { fontSize: '24px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                    </div>
                                    <p className="text-neutral-700 md:text-[14px] text-[10px] lg:font-normal md:font-light font-['Lexend'] lg:px-[12px] lg:py-[5px] md:px-[8px] md:py-[7px] px-[4px] pt-[8px]">5 Rating</p>
                                </div>
                        <p className="text-cyan-500 md:text-[12px]  text-[10px] text-start font-normal font-['Lexend']">{customers}</p>
                        <p className=" text-neutral-400 md:text-[14px] text-[12px] text-start font-normal font-['Poppins'] leading-normal md:pt-[21px] pt-[14px] ">{tagline}</p>
                        <NavLink to="/dwnld" onClick={() => dwnldProduct(image, title, tagline, id)}>
                        <div className='flex pt-7 md:pt-5  '>
                          <button className="px-3 md:px-10 py-2 bg-amber-500 md:rounded-lg rounded-md border border-amber-500 text-center text-white md:text-base text-xs font-medium font-['Lexend']">Download Now</button>
                        </div>
                        </NavLink> 
                      </div>
                    </div>
                  </div>
                 
                )
              })}
            </div>
          </div>
        </TabContent>

      
      </div>
      </div>
    </>
  )
}

export default Report