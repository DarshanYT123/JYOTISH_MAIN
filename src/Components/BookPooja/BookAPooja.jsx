import React, { useState } from 'react'
import Select from 'react-select';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { usePoojaContext } from '../pooja_content';
import { NavLink } from 'react-router-dom';
import Trusted from '../Footer/Trusted';

const BookAPooja = () => {

  const [search, setSearch] = useState('')
  console.log(search)
  const data=[
    {
      img: "/img/pooja1.jpg",
      poojaName: "Manokamna Pooja",
      info: "Lorem  sit  ipsum dolor sit amet, consectetur",
      date: "November 10, 2023",
      astroImg: "/img/astro1.jpg",
      astroName: "Pandit Anand",
      id: 1
    },
    {
      img: "/img/pooja1.jpg",
      poojaName: "Manokamna Pooja",
      info: "Lorem  sit  ipsum dolor sit amet, consectetur",
      date: "January 21, 2011",
      astroImg: "/img/astro1.jpg",
      astroName: "Pandit Prem",
      id: 2
    },
    {
      img: "/img/pooja1.jpg",
      poojaName: "Manokamna Pooja",
      info: "Lorem  sit  ipsum dolor sit amet, consectetur",
      date: "October 7, 2012",
      astroImg: "/img/astro1.jpg",
      astroName: "Pandit Anand",
      id: 3
    },
    {
      img: "/img/pooja1.jpg",
      poojaName: "Manokamna Pooja",
      info: "Lorem  sit  ipsum dolor sit amet, consectetur",
      date: "April 22, 2015",
      astroImg: "/img/astro1.jpg",
      astroName: "Pandit Anand",
      id: 4
    },
    {
      img: "/img/pooja1.jpg",
      poojaName: "Manokamna Pooja",
      info: "Lorem  sit  ipsum dolor sit amet, consectetur",
      date: "January 9, 2009",
      astroImg: "/img/astro1.jpg",
      astroName: "Pandit Anand",
      id: 5
    },
    {
      img: "/img/pooja1.jpg",
      poojaName: "Manokamna Pooja",
      info: "Lorem  sit  ipsum dolor sit amet, consectetur",
      date: "January 9, 2009",
      astroImg: "/img/astro1.jpg",
      astroName: "Pandit Anand",
      id: 6
    },
    {
      img: "/img/pooja1.jpg",
      poojaName: "Manokamna Pooja",
      info: "Lorem  sit  ipsum dolor sit amet, consectetur",
      date: "January 9, 2009",
      astroImg: "/img/astro1.jpg",
      astroName: "Pandit Anand",
      id: 7
    },
    {
      img: "/img/pooja1.jpg",
      poojaName: "Manokamna Pooja",
      info: "Lorem  sit  ipsum dolor sit amet, consectetur",
      date: "January 9, 2009",
      astroImg: "/img/astro1.jpg",
      astroName: "Pandit Anand",
      id: 8
    },
    {
      img: "/img/pooja1.jpg",
      poojaName: "Manokamna Pooja",
      info: "Lorem  sit  ipsum dolor sit amet, consectetur",
      date: "January 9, 2009",
      astroImg: "/img/astro1.jpg",
      astroName: "Pandit Anand",
      id: 9
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
    <>
    <div className='lg:px-16 md:px-10 px-10'>
      {/* HEADING & SEARCH BAR */}
      <div className='flex flex-col md:flex-row justify-between md:py-10  gap-y-6 md:gap-y-0 '>
        <div className='flex justify-start items-start'>
      <p className="text-amber-900 md:text-[26px] text-[20px] font-medium font-['Lexend']">Book A Pooja</p>
      </div>
     {/* SEARCH BAR START*/}
      <div className=" bg-amber-500 p-1.5 gap-x-2  md:rounded-md rounded-sm lg:justify-end  flex">
        <form className=' '>
        <input onChange={(e)=> setSearch(e.target.value)} placeholder='Search Astrologer' className=" px-2 flex justify-center items-centr py-2 bg-white md:rounded-md rounded-sm text-neutral-400 text-[14px] lg:font-normal md:font-light font-['Lexend']"/>
        </form>
        <Select options={options} defaultValue={selectedPooja} isClearable placeholder="Sort" onChange={setSelectedPooja} className="  flex justify-center items-center text-black  lg:font-normal text-[14px] md:font-light font-['Poppins']  "/>
      </div>
     {/* SEARCH BAR ENDED */}
      </div>
      {/* HEADING & SEARCH BAR END*/}

      {/* POOJA CARDS START*/}
      <div className='grid lg:grid-rows-3 lg:grid-cols-3 md:grid md:grid-cols-2 grid-cols-1 py-5 md:py-0 md:gap-10 gap-5 md:grid-rows-5 '>
      {filteredPooja.filter(( filteredPooja )=>{return search.toLowerCase() === '' ? filteredPooja : filteredPooja.astroName.toLowerCase().includes(search)}).map((filteredPooja)=>{
      return(
        
        <div className=" mx-auto md:mx-0 lg:mx-0 lg:w-[410px] lg:h-[220px] md:w-[324px] md:h-[184px] pr-[10px] w-[290px] h-[140px] bg-white border hover:border-[#ffa300] duration-700 rounded-md shadow md:mb-[20px] " key={filteredPooja.id}>
         <div className='details flex'> 

          <div className='flex items-center'>
           <img src={filteredPooja.img} className='lg:w-[167px] lg:h-[157px] md:w-[122px] md:h-[122px] w-[100px] h-[100px] lg:rounded-md md:rounded rounded-sm md:border-4 border-2 border-stone-300 border-opacity-80 lg:ml-[21px] md:ml-[16px] ml-[12px]'/>
          </div>
           
           <div className=' flex flex-col'>
            <div className='lg:pl-[30px] md:pl-[34px] pl-[24px]'>
             <p className="text-start text-neutral-700 lg:text-[18px] md:text-[16px] text-[12px] lg:font-medium md:font-normal font-['Lexend']  lg:pt-[19px]  md:pt-[15px]  pt-[10px]">{filteredPooja.poojaName}</p>
             <p className="text-start  text-neutral-700 lg:text-[14px] md:text-[12px] text-[10px] lg:font-normal md:font-light font-['Poppins'] md:leading-[18px] leading-[14px] lg:pt-[8px] md:pt-[6px] pt-[3px]">{filteredPooja.info}</p>
             <p className="text-start lg:pt-[8px] md:pt-[4px]"><span className="text-neutral-700 lg:text-[13px] md:text-[10px] text-[8px] lg:font-semibold md:font-medium font-['Lexend'] tracking-wide">Date : </span><span className="text-black lg:text-[13px] md:text-[10px] text-[8px] lg:font-normal md:font-light font-['Poppins'] tracking-wide">{filteredPooja.date}</span></p>
            </div>

            <div className=' flex'>
              <img src={filteredPooja.astroImg} className="lg:w-[35px] lg:h-[35px] md:w-[27px] md:h-[27px] w-[20px] h-[20px] relative lg:rounded-[30px] md:rounded-[23px] rounded-full lg:ml-[40px] lg:mt-[8px] md:ml-[34px] md:mt-[4px] ml-[24px]"/>
              <p className="text-neutral-700 lg:text-[14px] md:text-[12px] text-[10px] lg:font-normal md:font-light font-['Poppins'] leading-[18px] lg:pt-[16px] lg:pl-[12px] md:pt-[10px] md:pl-[9px] pl-[6px] pt-[2px]">{filteredPooja.astroName}</p>
            </div> 

            <NavLink to="/manokamnapooja" onClick={() => poojaProduct( filteredPooja )}>
            <button className="lg:w-[135px] lg:h-[35px] md:w-[105px] md:h-[27px] w-[80px] h-[20px] lg:pl-5 md:pl-4 lg:ml-[116px] md:ml-[96px] ml-[100px] lg:pr-4 md:mt-[3px] lg:mt-[4px] mt-[8px] md:py-[4px] py-0.7 bg-amber-500 rounded-[45px] shadow-inner text-white lg:text-[14px] md:text-[12px] text-[10px] lg:font-medium md:font-normal font-['Lexend']">Book Now <ArrowForwardIcon  sx={{ '@media (min-width:300px)': { fontSize: '12px', }, '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }}/></button>
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
      <p className="text-start  text-neutral-700 md:text-base text-sm font-normal font-['Poppins'] leading-7 tracking-wide">Puja is an ancient Hindu ritual, 
      a sacred act of worshiping the divine. It is a medium through which we connect with the divine energies to seek blessings, express gratitude, and make our wishes and prayers heard. We help you to experience divine blessings and spiritual harmony with our exclusive online puja services, conducted by learned pandits and astrologers. Whether you seek remedial measures, enhanced relationships, luck, 
      financial prosperity, or a blissful marriage, our pujas cater to various aspects of life for your overall well-being..</p>
      <p className="text-start  text-neutral-700 md:text-base text-sm font-normal font-['Poppins'] leading-7 tracking-wide mt-[10px]">The credit for astrology and the predictions we make here being so accurate goes to the 100s of learned and astrologically-versed astrologers we have on board. And to answer what makes astrology so accurate, then it is the pure knowledge of our astrologers about the planets, planetary 
      configurations, constellations and learning of how they influence human life and behaviour as they move, shift or even stay still. </p>
      <p className="text-start  text-neutral-700 md:text-base text-sm font-normal font-['Poppins'] leading-7 tracking-wide mt-[10px]">Astrologically-versed astrologers we have on board, 
      And to answer what makes astrology so accurate.</p>
      <p className="text-start  text-neutral-700 md:text-base text-sm font-normal font-['Poppins'] leading-7 tracking-wide mt-[10px]">The credit for astrology and the predictions we 
      make here being so accurate goes to the 100s of learned and astrologically-versed astrologers we have on board.
      And to answer what makes astrology so accurate.</p>
      <p className="text-start  text-neutral-700 md:text-base text-sm font-normal font-['Poppins'] leading-7 tracking-wide mt-[10px]">The credit for astrology and the predictions we make here being so accurate goes to the 100s of learned and astrologically-versed astrologers we have on board. And to answer what makes astrology so accurate, then it is the pure knowledge of our astrologers about the planets, planetary
      configurations, constellations and learning of how they influence human life and behaviour as they move, shift or even stay still.</p> 
      </div>
      {/* CONTENT END */}
    </div>
    {/* <Trusted/> */}
    </>
  )
}

export default BookAPooja