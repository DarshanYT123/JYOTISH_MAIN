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







const Report = () => {

  const product = [
    {
      image: "/img/report1.png",
      title: "2024 Highlights",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report2.png",
      title: "2024 Yearly Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report3.png",
      title: "2024 Career Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report4.png",
      title: "2024 Monthwise Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report5.png",
      title: "Love Life Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report6.png",
      title: "Married Life Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report1.png",
      title: "2024 Highlights",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report2.png",
      title: "2024 Yearly Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report3.png",
      title: "2024 Career Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report4.png",
      title: "2024 Monthwise Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report5.png",
      title: "Love Life Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report6.png",
      title: "Married Life Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    }

  ]

  const data2 = [
    {
      image: "/img/report7.png",
      title: "2023 Yearly Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report8.png",
      title: "Birth Horoscope",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report9.png",
      title: "Love Horoscope",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report10.png",
      title: "Friendship Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report11.png",
      title: "Moon Sign",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report12.png",
      title: "Sun Sign",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report7.png",
      title: "2023 Yearly Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report8.png",
      title: "Birth Horoscope",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report9.png",
      title: "Love Horoscope",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report10.png",
      title: "Friendship Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report11.png",
      title: "Moon Sign",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report12.png",
      title: "Sun Sign",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    }

  ]

  
  const { addToCart } = useCartContext();
  const [activeTab, setActiveTab] = useState("tab1");
  const { dwnldProduct } = useDownloadContext();

  const [qty, setQty] = useState(0)
  const onAdd = () => {
    setQty(qty + 1)
  }
  return (

    <>
     <div className='px-16 py-10'>
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
            <div className=' flex flex-row flex-wrap justify-between items-center'>
              {product.map(({ image, title, customers, tagline, price }, index) => {
                return (
                  
                  <div className='md:py-[10px] '>
                    <div className="w-[470px] h-[250px] bg-neutral-50 rounded-[10px] shadow  lg:mx-auto md:mx-auto md:flex relative" key={index}>
                      <ShareOutlinedIcon className='absolute top-[14px] right-[12px]' />
                      <img src={image} className='w-[205px] h-[240px] md:px-[10px] md:pt-[15px] object-cover rounded-[5px]' />
                      <div className='md:pl-[15px] flex flex-col justify-center items-start'>
                        <p className=" text-amber-900 text-[20px] font-medium font-['Lexend'] md:pt-[15px]">{title}</p>
                        <div className='flex flex-row justify-center  items-center'>
                        <span className="text-[18px] text-amber-500"><StarRateIcon />  <StarRateIcon />  <StarRateIcon />  <StarRateIcon />  <StarRateIcon /></span> 
                        <span className="text-neutral-700 text-[12px] font-normal font-['Lexend'] pt-2 px-[5px]">5 Rating</span>
                        </div>
                        <p className="text-cyan-500 text-[12px] text-start font-normal font-['Lexend'] md:pt-[6px]">{customers}</p>
                        <p className="w-[207px] text-neutral-400 text-[14px] text-start font-normal font-['Poppins'] leading-normal md:pt-[21px] ">{tagline}</p>
                        <p className="opacity-80 text-neutral-700 text-[16px] font-medium font-['Lexend'] leading-7 md:pt-[16px]">Price: &#8377;<span className="text-neutral-700 text-base font-medium font-['Lexend'] leading-7">{price}</span></p>
                        <div className='flex py-[4px] justify-center items-center '>
                          <button className="w-[131px] h-[32px] bg-amber-500 rounded-lg border border-amber-500 text-center text-white text-base font-medium font-['Lexend']">Buy Now</button>
                          <NavLink to="/cart" 
                          onClick={() => addToCart(image, title, customers, tagline, price, index)}>
                            <div className='pt-[4px] px-[8px]'>
                              <button className=' w-[58px] h-[33px] rounded-lg border border-cyan-500 hover:bg-cyan-500  hover:border-white'><img src='/img/cart.svg' className='mx-4 hover:bg-white '/></button>
                            </div>
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
            <div className='container flex flex-row flex-wrap justify-between items-center'>
              {data2.map(({ image, title, customers, tagline, price }, index) => {
                return (
                  <div className='md:py-[10px] '>
                    <div className="w-[470px] h-[250px] bg-neutral-50 rounded-[10px] shadow  lg:mx-auto md:mx-auto md:flex relative" key={index}>
                      <ShareOutlinedIcon className='absolute top-[14px] right-[12px]' />
                      <img src={image} className='w-[205px] h-[240px] md:px-[10px] md:pt-[15px] object-cover rounded-[5px]' />
                      <div className='md:pl-[15px]'>
                        <p className=" text-amber-900 text-[20px] font-medium font-['Lexend'] md:pt-[15px]">{title}</p>
                        <span className="text-[18px] text-amber-500"><StarRateIcon />  <StarRateIcon />  <StarRateIcon />  <StarRateIcon />  <StarRateIcon /></span> <span className="text-neutral-700 text-[12px] font-normal font-['Lexend'] px-[5px]">5 Rating</span>
                        <p className="text-cyan-500 text-[12px] font-normal font-['Lexend'] md:pt-[6px]">{customers}</p>
                        <p className="w-[207px] text-neutral-400 text-[14px] font-normal font-['Poppins'] leading-normal md:pt-[21px] ">{tagline}</p>
                        {/* <p className="opacity-80 text-neutral-700 text-[16px] font-medium font-['Lexend'] leading-7 md:pt-[16px]">Price: &#8377;<span className="text-neutral-700 text-base font-medium font-['Lexend'] leading-7">{price}</span></p> */}
                        <NavLink to="/report24" onClick={() => dwnldProduct(image, title, tagline, index)}>
                        <div className='flex py-[50px]'>
                          <button className="w-[200px] h-[32px] bg-amber-500 rounded-lg border border-amber-500 text-center text-white text-base font-medium font-['Lexend']">Download Now</button>
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