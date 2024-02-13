import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import TranslateIcon from '@mui/icons-material/Translate';
import VerifiedIcon from '@mui/icons-material/Verified';
import { usePoojaContext } from '../pooja_content';

const Pooja = () => {
    const { pooja } = usePoojaContext();

    return (
        <>
            {pooja.map(( filteredPooja ) => {
               return(
                <div key={filteredPooja.id} className='lg:px-16 md:px-10 px-10' >
                    <p className="text-amber-900 md:text-[26px] text-[20px] font-semibold font-['Lexend'] md:pt-[74px]  pt-[50px] text-start">{filteredPooja.poojaName}</p>
                    <div className='flex md:flex-row gap-x-10 justify-between py-[20px]  w-full '>
                        <div className='  w-[65rem] '>
                            <img src={filteredPooja.img} className=' w-full rounded-[5px] object-cover ' />
                        </div>
                        <div className='flex flex-col  text-left'>
                            <p className="  text-amber-900 lg:text-[26px] md:text-[20px] text-[16px] font-normal lg:font-medium md:font-normal font-['Lexend']">{filteredPooja.info} Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.</p>
                            <p className="text-amber-500 lg:text-[14px] md:text-[12px] text-[12px] font-medium py-[10px] lg:font-semibold md:font-medium font-['Poppins']">{filteredPooja.date}</p>
                            <p className="  text-neutral-700 lg:text-[16px] md:text-[14px] text-[12px] lg:py-[20px] md:py-[10px] lg:font-normal md:font-light font-['Lexend'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet. </p>
                            <p className=" text-neutral-700 lg:text-[16px] md:text-[14px] text-[12px] lg:font-normal md:font-light font-['Lexend'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className="  text-neutral-700 lg:text-[16px] md:text-[14px] text-[12px] py-[5px] lg:font-normal md:font-light font-['Lexend'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet elit, Lorem ipsum dolor sit amet, consectetur adipiscing .</p>
                            <div className='buttons flex lg:py-[14px] md:py-[10px] py-[8px]'>
                                <div className="md:w-[331px] md:h-[50px] md:px-[110px] md:py-[15px] w-[140px] h-[30px] bg-red-600 rounded-[40px]  border border-red-600 justify-center items-center gap-5 inline-flex mr-[15px]">
                                    <p className="text-white md:text-[16px] text-[12px] font-semibold font-['Lexend']">02  Days  Left</p>
                                </div>
                                <button className="md:w-[331px] md:h-[50px] w-[140px] h-[30px]  bg-amber-500 rounded-[40px] border border-amber-500  text-white md:text-[16px] text-[12px] font-semibold font-['Lexend']">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className=' lg:py-[60px] md:py-[40px] py-[20px]'>
                        <div className=" lg:w-[928px] lg:h-[277px] md:w-[676px] md:h-[200px] w-[358px] h-[454px] bg-white rounded-[5px] shadow mx-auto flex">
                            <div className='flex flex-col '>
                                <div className='lg:py-[13px] lg:px-[14px] md:py-[9px] md:px-[10px] pt-[13px] pl-[14px]'>
                                    <img src={filteredPooja.astroImg} className='lg:w-[212px] lg:h-[212px] md:w-[140px] md:h-[140px] w-[118px] h-[119px] rounded-[5px]' />
                                </div>
                                <div className='md:flex md:flex-row flex flex-col lg:px-[14px] md:px-[10px] px-[5px]'>
                                    <div className='text-amber-500 '>
                                        <StarRateIcon sx={{ '@media (min-width:300px)': { fontSize: '14px', },'@media (min-width:768px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                        <StarRateIcon sx={{ '@media (min-width:300px)': { fontSize: '14px', },'@media (min-width:768px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                        <StarRateIcon sx={{ '@media (min-width:300px)': { fontSize: '14px', },'@media (min-width:768px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                        <StarRateIcon sx={{ '@media (min-width:300px)': { fontSize: '14px', },'@media (min-width:768px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                        <StarRateIcon sx={{ '@media (min-width:300px)': { fontSize: '14px', },'@media (min-width:768px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                    </div>
                                    <p className="text-neutral-700 lg:text-[14px] text-start md:text-[12px] text-[12px] lg:font-normal md:font-light font-['Lexend'] lg:px-[12px] lg:py-[5px] md:px-[8px] md:py-[7px] px-[4px] py-[2px]">5 Rating</p>
                                </div>
                            </div>

                            <div className='lg:px-[5px] md:px-[3px] px-[8px] text-start relative'>
                                <p className=" text-neutral-700 lg:text-[18px] lg:font-medium md:text-[16px] md:font-normal text-[18px] font-semibold font-['Lexend'] lg:py-[10px] md:py-[6px] pt-[8px]">{filteredPooja.astroName}</p>
                                <VerifiedIcon className='lg:top-[17px] lg:right-[26px] md:top-[12px] md:-right-[26px] top-[8px] -right-[6px] absolute text-blue-400'  sx={{ '@media (min-width:300px)': { fontSize: '14px', },'@media (min-width:768px)': { fontSize: '24px', },'@media (min-width:960px)': { fontSize: '24px', }, }}/>
                                <p className="w-[212px] h-6 text-neutral-700 lg:text-[16px] lg:font-normal md:text-[14px] md:font-light text-[12px] font-['Lexend'] leading-normal ">Accomplished Astrologer </p>
                                <div className='flex lg:py-[8px] md:py-[5px]'>
                                    <TranslateIcon sx={{ '@media (min-width:300px)': { fontSize: '14px', }, '@media (min-width:768px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '20px', }, }} className='text-neutral-700 ' />
                                    <p className=" text-neutral-700 lg:text-[14px] lg:font-normal md:text-[12px] md:font-light text-[14px] font-['Lexend'] lg:px-[14px] md:px-[7px] px-[4px]">English , Hindi , Gujarati</p>
                                </div>

                                <div className='flex lg:py-[6px] md:py-[3px] py-[5px]'>
                                    <p className=" text-neutral-700 lg:text-[16px] lg:font-medium md:text-[14px] md:font-normal text-[16px] font-['Lexend'] ">Exp : </p>
                                    <p className=" text-neutral-700 lg:text-[14px] lg:font-normal md:text-[12px] md:font-light text-[14px] font-['Lexend'] lg:py-[2.5px] lg:px-[4px] md:py-[2px] md:px-[2px] py-[3px] px-[3px]">12 Years</p>
                                </div>
                                
                                <div>
                                <p className="lg:w-[669px] md:w-[450px] w-[200px]  md:pt-0 lg:pt-0  md:overflow-hidden md:text-ellipsis md:truncate text-neutral-700 lg:text-[16px] lg:font-normal md:text-[14px] md:font-light text-[16px] font-['Lexend'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <p className="lg:w-[669px] md:w-[450px] w-[200px]   md:pt-0 lg:pt-0  lg:h-[60px] md:h-[20px]  text-neutral-700 lg:text-[16px] lg:font-normal md:text-[14px] text-[16px] md:font-light font-['Lexend'] leading-normal  md:overflow-hidden md:text-ellipsis md:truncate lg:py-[6px] md:py-[3px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               )
            })}
        </>

    )



}

export default Pooja