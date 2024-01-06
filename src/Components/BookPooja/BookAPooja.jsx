import React, { useState } from 'react'
import Select from 'react-select';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { usePoojaContext } from '../pooja_content';
import { NavLink } from 'react-router-dom';

const BookAPooja = () => {
  const data=[
    {
      img: "/img/pooja1.jpg",
      poojaName: "Manokamna Pooja",
      info: "Lorem  sit  ipsum dolor sit amet, consectetur",
      date: "November 10, 2023",
      astroImg: "/img/astro1.jpg",
      astroName: "Pandit Anand",
     
    },
    {
      img: "/img/pooja1.jpg",
      poojaName: "Manokamna Pooja",
      info: "Lorem  sit  ipsum dolor sit amet, consectetur",
      date: "January 21, 2011",
      astroImg: "/img/astro1.jpg",
      astroName: "Pandit Anand",
     
    },
    {
      img: "/img/pooja1.jpg",
      poojaName: "Manokamna Pooja",
      info: "Lorem  sit  ipsum dolor sit amet, consectetur",
      date: "October 7, 2012",
      astroImg: "/img/astro1.jpg",
      astroName: "Pandit Anand",
     
    },
    {
      img: "/img/pooja1.jpg",
      poojaName: "Manokamna Pooja",
      info: "Lorem  sit  ipsum dolor sit amet, consectetur",
      date: "April 22, 2015",
      astroImg: "/img/astro1.jpg",
      astroName: "Pandit Anand",
      
    },
    {
      img: "/img/pooja1.jpg",
      poojaName: "Manokamna Pooja",
      info: "Lorem  sit  ipsum dolor sit amet, consectetur",
      date: "January 9, 2009",
      astroImg: "/img/astro1.jpg",
      astroName: "Pandit Anand"
    },
    {
      img: "/img/pooja1.jpg",
      poojaName: "Manokamna Pooja",
      info: "Lorem  sit  ipsum dolor sit amet, consectetur",
      date: "January 9, 2009",
      astroImg: "/img/astro1.jpg",
      astroName: "Pandit Anand"
    },
    {
      img: "/img/pooja1.jpg",
      poojaName: "Manokamna Pooja",
      info: "Lorem  sit  ipsum dolor sit amet, consectetur",
      date: "January 9, 2009",
      astroImg: "/img/astro1.jpg",
      astroName: "Pandit Anand"
    },
    {
      img: "/img/pooja1.jpg",
      poojaName: "Manokamna Pooja",
      info: "Lorem  sit  ipsum dolor sit amet, consectetur",
      date: "January 9, 2009",
      astroImg: "/img/astro1.jpg",
      astroName: "Pandit Anand"
    },
    {
      img: "/img/pooja1.jpg",
      poojaName: "Manokamna Pooja",
      info: "Lorem  sit  ipsum dolor sit amet, consectetur",
      date: "January 9, 2009",
      astroImg: "/img/astro1.jpg",
      astroName: "Pandit Anand"
    },
  ]

  const { poojaProduct } = usePoojaContext();
  const [selectedPooja, setSelectedPooja] = useState(null)

  const options = [ 
   {value: "November 10, 2023", label: "November 10, 2023"},
   {value: "January 21, 2011", label: "January 21, 2011"},
   {value: "October 7, 2012", label: "October 7, 2012"},
   {value: "April 22, 2015", label: "April 22, 2015"},
   {value: "September 23, 2019", label: "September 23, 2019"},
   {value: "January 9, 2009", label: "January 9, 2009"},
   {value: "April 10, 2016", label: "April 10, 2016"},
  ]

 

  const filteredPooja = selectedPooja ? data.filter((data)=>data.date === selectedPooja.value) : data;
  return (
    <div className='px-16'>
      {/* HEADING & SEARCH BAR */}
      <div className='flex justify-between'>
      <p className="text-amber-900 text-[26px] font-medium font-['Lexend'] pt-[74px] ">Book A Pooja</p>
     {/* SEARCH BAR START*/}
      <div className="lg:w-[500px] lg:h-[65px] md:w-[370px] md:h-[55px] bg-amber-500 rounded-md  lg:justify-end lg:mt-[58px] md:mt-[68px] mr-[60px] flex">
        <input placeholder='Search Astrologer' className="lg:w-[328px] lg:h-[45px] lg:ml-[15px] lg:mt-[10px] lg:pl-[22px] md:w-[200px] md:h-[38px] md:ml-[10px] md:mt-[8px] md:pl-[16px] bg-white rounded-md text-neutral-400 lg:text-sm md:text-xs lg:font-normal md:font-light font-['Lexend'] "/>
        <Select options={options} defaultValue={selectedPooja} isClearable placeholder="Sort" onChange={setSelectedPooja} className="lg:w-[180px] lg:ml-[20px] lg:mt-[14px] lg:mr-[10px] md:w-[140px] md:ml-[12px] md:mt-[9px] md:mr-[6px] text-black lg:text-sm lg:font-normal md:text-xs md:font-light font-['Poppins']"/>
      </div>
     {/* SEARCH BAR ENDED */}
      </div>
      {/* HEADING & SEARCH BAR END*/}

      {/* POOJA CARDS START*/}
      <div className='grid lg:grid-rows-3 lg:grid-cols-3 md:grid md:grid-cols-2  gap-10  md:grid-rows-5 lg:mt-[76px] md:mt-[56px]'>
      {filteredPooja.map(({ img, poojaName, info, date, astroImg, astroName}, index)=>{
      return(
        
        <div className=" lg:w-[444px] lg:h-[220px] md:w-[344px] md:h-[176px] pr-[10px] bg-white border hover:border-[#ffa300] duration-700 rounded-md shadow mb-[20px]" key={index}>
         <div className='details flex'> 

          <div className=' md:flex md:items-center'>
           <img src={img} className='lg:w-[157px] lg:h-[157px] md:w-[122px] md:h-[122px] lg:rounded-md md:rounded border-4 border-stone-300 border-opacity-80 lg:ml-[21px] md:ml-[16px]'/>
          </div>
           
           <div className=' flex flex-col'>
            <div>
             <p className="text-start text-neutral-700 lg:text-lg md:text-base lg:font-medium md:font-normal font-['Lexend'] lg:pl-[25px] lg:pt-[19px] md:pl-[19.5px] md:pt-[15px]">{poojaName}</p>
             <p className="text-start lg:w-[231px] md:w-[180px] text-neutral-700 lg:text-sm md:text-xs lg:font-normal md:font-light font-['Poppins'] leading-[18px] lg:pl-[25px] lg:pt-[8px] md:pl-[19.5px] md:pt-[6px]">{info}</p>
             <p className="text-start lg:pl-[25px] lg:pt-[8px] md:pl-[19.5px] md:pt-[4px]"><span className="text-neutral-700 lg:text-[13px] md:text-[10px] lg:font-semibold md:font-medium font-['Lexend'] tracking-wide">Date : </span><span className="text-black lg:text-[13px] md:text-[10px] lg:font-normal md:font-light font-['Poppins'] tracking-wide">{date}</span></p>
            </div>

            <div className=' flex'>
              <img src={astroImg} className="lg:w-[35px] lg:h-[35px] md:w-[27px] md:h-[27px] relative lg:rounded-[30px] md:rounded-[23px] lg:ml-[25px] lg:mt-[8px] md:ml-[19.5px] md:mt-[4px]"/>
              <p className="text-neutral-700 lg:text-sm md:text-xs lg:font-normal md:font-light font-['Poppins'] leading-[18px] lg:pt-[16px] lg:pl-[12px] md:pt-[12.5px] md:pl-[9px]">{astroName}</p>
            </div> 

            <NavLink to="/poojaDetail" onClick={() => poojaProduct(poojaName, img, info, date, astroImg, astroName, index )}>
            <button className="lg:w-[135px] lg:h-[35px] md:w-[105px] md:h-[27px] lg:pl-5 md:pl-4 lg:ml-[112px] md:ml-[87px] lg:pr-4  md:mt-[5px] lg:mt-[4px] py-1.5 bg-amber-500 rounded-[45px] shadow-inner text-white lg:text-sm md:text-xs lg:font-medium md:font-normal font-['Lexend']">Book Now <ArrowForwardIcon  sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }}/></button>
           </NavLink>
           </div>

         </div>
        </div>
       
      )
     })
     }
      </div>
      {/* POOJA CARDS END */}

      {/* CONTENT STARTS */}
      <div className='pt-[24px]'>
      <p className="text-start lg:w-[1372px] md:w-[688px] text-neutral-700 text-base font-normal font-['Poppins'] leading-7 tracking-wide">Puja is an ancient Hindu ritual, 
      a sacred act of worshiping the divine. It is a medium through which we connect with the divine energies to seek blessings, express gratitude, and make our wishes and prayers heard. We help you to experience divine blessings and spiritual harmony with our exclusive online puja services, conducted by learned pandits and astrologers. Whether you seek remedial measures, enhanced relationships, luck, 
      financial prosperity, or a blissful marriage, our pujas cater to various aspects of life for your overall well-being..</p>
      <p className="text-start lg:w-[1372px] md:w-[688px] text-neutral-700 text-base font-normal font-['Poppins'] leading-7 tracking-wide mt-[10px]">The credit for astrology and the predictions we make here being so accurate goes to the 100s of learned and astrologically-versed astrologers we have on board. And to answer what makes astrology so accurate, then it is the pure knowledge of our astrologers about the planets, planetary 
      configurations, constellations and learning of how they influence human life and behaviour as they move, shift or even stay still. </p>
      <p className="text-start lg:w-[1372px] md:w-[688px] text-neutral-700 text-base font-normal font-['Poppins'] leading-7 tracking-wide mt-[10px]">Astrologically-versed astrologers we have on board, 
      And to answer what makes astrology so accurate.</p>
      <p className="text-start lg:w-[1372px] md:w-[688px]  text-neutral-700 text-base font-normal font-['Poppins'] leading-7 tracking-wide mt-[10px]">The credit for astrology and the predictions we 
      make here being so accurate goes to the 100s of learned and astrologically-versed astrologers we have on board.
      And to answer what makes astrology so accurate.</p>
      <p className="text-start lg:w-[1372px] md:w-[688px]  text-neutral-700 text-base font-normal font-['Poppins'] leading-7 tracking-wide mt-[10px]">The credit for astrology and the predictions we make here being so accurate goes to the 100s of learned and astrologically-versed astrologers we have on board. And to answer what makes astrology so accurate, then it is the pure knowledge of our astrologers about the planets, planetary
      configurations, constellations and learning of how they influence human life and behaviour as they move, shift or even stay still.</p> 
      </div>
      {/* CONTENT END */}
    </div>
  )
}

export default BookAPooja