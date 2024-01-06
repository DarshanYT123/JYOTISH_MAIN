import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import TranslateIcon from '@mui/icons-material/Translate';
import VerifiedIcon from '@mui/icons-material/Verified';
import { usePoojaContext } from '../pooja_content';

const Pooja = () => {
    const { pooja } = usePoojaContext();

    return (
        <>
            {pooja.map(({ poojaName, img, info, date, astroImg, astroName }, index) => {
               return(
                <div key={index}>
                    <p className="text-amber-900 text-[26px] font-semibold font-['Lexend'] pt-[74px] lg:px-[70px] md:px-[45px]">{poojaName}</p>
                    <div className='container lg:flex lg:flex-row md:flex md:flex-col py-[20px] lg:px-[60px] '>
                        <div className='md:mx-auto py-[10px]'>
                            <img src={img} className='lg:w-[676px] lg:h-[430px] md:w-[676px] md:h-[430px] rounded-[5px] lg:object-cover md:object-cover' />
                        </div>
                        <div className='flex flex-col  md:mx-auto'>
                            <p className="lg:w-[674px] md:w-[674px]  text-amber-900 lg:text-[26px] md:text-[20px] lg:font-medium md:font-normal font-['Lexend']">{info} Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.</p>
                            <p className="lg:w-[158px]  text-amber-500 lg:text-[14px] md:text-[12px] py-[10px] lg:font-semibold md:font-medium font-['Poppins']">{date}</p>
                            <p className="lg:w-[672px] md:w-[672px]  text-neutral-700 lg:text-[16px] md:text-[14px] lg:py-[20px] md:py-[10px] lg:font-normal md:font-light font-['Lexend'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet. </p>
                            <p className="lg:w-[671px] md:w-[671px]  text-neutral-700 lg:text-[16px] md:text-[14px] lg:font-normal md:font-light font-['Lexend'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className="lg:w-[672px] md:w-[672px]  text-neutral-700 lg:text-[16px] md:text-[14px] py-[5px] lg:font-normal md:font-light font-['Lexend'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet elit, Lorem ipsum dolor sit amet, consectetur adipiscing .</p>
                            <div className='buttons flex lg:py-[14px] md:py-[10px]'>
                                <div className="w-[331px] h-[50px] px-[110px] py-[15px] bg-red-600 rounded-[40px]  border border-red-600 justify-center items-center gap-5 inline-flex mr-[15px]">
                                    <p className="text-white text-[16px] font-semibold font-['Lexend']">02  Days  Left</p>
                                </div>
                                <button className="w-[331px] h-[50px]  bg-amber-500 rounded-[40px] border border-amber-500  text-white text-[16px] font-semibold font-['Lexend']">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className=' lg:py-[60px] md:py-[40px]'>
                        <div className=" lg:w-[928px] lg:h-[277px] md:w-[676px] md:h-[200px] bg-white rounded-[5px] shadow mx-auto flex">
                            <div className='flex flex-col '>
                                <div className='lg:py-[13px] lg:px-[14px] md:py-[9px] md:px-[10px]'>
                                    <img src={astroImg} className='lg:w-[212px] lg:h-[212px] md:w-[140px] md:h-[140px] rounded-[5px] ' />
                                </div>
                                <div className='flex lg:px-[14px] md:px-[10px]'>
                                    <div className='text-amber-500 '>
                                        <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                        <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                        <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                        <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                        <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                    </div>
                                    <p className="text-neutral-700 lg:text-[14px] md:text-[12px] lg:font-normal md:font-light font-['Lexend'] lg:px-[12px] lg:py-[5px] md:px-[8px] md:py-[7px]">5 Rating</p>
                                </div>
                            </div>

                            <div className='lg:px-[5px] md:px-[3px] relative'>
                                <p className=" text-neutral-700 lg:text-[18px] lg:font-medium md:text-[16px] md:font-normal font-['Lexend'] lg:py-[10px] md:py-[6px]">{astroName}</p>
                                <VerifiedIcon className='lg:absolute md:absolute lg:top-[17px] lg:right-[26px] md:top-[12px] md:right-[0px] text-blue-400' />
                                <p className="w-[212px] h-6 text-neutral-700 lg:text-[16px] lg:font-normal md:text-[14px] md:font-light font-['Lexend'] leading-normal ">Accomplished Astrologer </p>
                                <div className='flex lg:py-[8px] md:py-[5px]'>
                                    <TranslateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '20px', }, }} className='text-neutral-700 ' />
                                    <p className=" text-neutral-700 lg:text-[14px] lg:font-normal md:text-[12px] md:font-light font-['Lexend'] lg:px-[14px] md:px-[7px]">English , Hindi , Gujarati</p>
                                </div>

                                <div className='flex lg:py-[6px] md:py-[3px]'>
                                    <p className=" text-neutral-700 lg:text-[16px] lg:font-medium md:text-[14px] md:font-normal font-['Lexend'] ">Exp : </p>
                                    <p className=" text-neutral-700 lg:text-[14px] lg:font-normal md:text-[12px] md:font-light font-['Lexend'] lg:py-[2.5px] lg:px-[4px] md:py-[2px] md:px-[2px]">12 Years</p>
                                </div>

                                <p className="lg:w-[669px] md:w-[450px]  text-neutral-700 lg:text-[16px] lg:font-normal md:text-[14px] md:font-light font-['Lexend'] leading-normal ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <p className="lg:w-[669px] md:w-[450px] lg:h-[60px] md:h-[20px]  text-neutral-700 lg:text-[16px] lg:font-normal md:text-[14px] md:font-light font-['Lexend'] leading-normal  md:overflow-hidden md:text-ellipsis md:truncate lg:py-[6px] md:py-[3px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.sit amet, consectetur adipiscing elit.</p>
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