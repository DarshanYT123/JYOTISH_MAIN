import React, { useState } from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import EastIcon from '@mui/icons-material/East';
import "./Cart.css"
import { useCartContext } from '../cart_content';


const Cart = () => {
    const { cart } = useCartContext();
    console.log(cart)
    const stepArray= ["Your Cart", "Billing Details", "Checkout"];
    const [stepNo, setStepNo] = useState(1)
    const [qty, setQty] = useState(1)
    const next = () =>{
        setStepNo(stepNo+1)
    }

    const prev = () =>{
        setStepNo(stepNo-1)
    }

    const decrease = () =>{
        qty > 1 ? setQty(qty - 1) : setQty(1)
    }

    const increase = () =>{
        setQty(qty + 1)
    }
    return (
        <div className='px-16'>
            {/* STEPPER COMPONENT START*/}
            <div className='Stepper flex justify-center items-center py-[34px]'>
           {
           
            stepArray.map((v,i)=><>
            <div className=' flex'>
                  <div className='stepName flex flex-col justify-center items-center'>
                     <div className={`stepNum w-[30px] h-[30px] flex justify-center items-center text-white rounded-full ${ stepNo - 1 === i || stepNo - 1 === i+1 || stepNo === stepArray.length ? "bg-cyan-500" : "bg-zinc-300" }`}>
                      {i+1}
                     </div>
                     <div className={` flex mt-[8px] ${ stepNo - 1 === i || stepNo - 1 === i+1 || stepNo === stepArray.length ? "text-cyan-500" : "text-zinc-300" }`}>
                      {v}
                     </div>
                  </div>
                  {
                    i !== stepArray.length - 1 && <div className={` w-[174px] h-[2px] mt-[14px] ${stepNo === i+2 || stepNo == stepArray.length ? "bg-cyan-500" : "bg-zinc-300 "} `}>
                    </div>
                  }
                 
            </div>
                
                
                </>)
           }
           </div>
             {/* STEPPER COMPONENT END*/}
            {stepNo === 1 && <div className='flex flex-row flex-wrap justify-between items-center'>
            <p className="text-amber-900 text-[26px] font-medium  lg:pt-[74px] md:py-[10px] font-Lexend">Your Cart</p>
            <div className="lg:flex md:flex md:flex-col lg:flex-row ">
                <div className=' flex flex-col'>
                    {cart.map(({ image, title, customers, tagline, price }, index)=>{
                        return (
                            <div className=" lg:w-[908px] lg:h-[181px] md:w-[676px] md:h-[124px] bg-white rounded-[10px] shadow border border-gray-100 lg:mt-[21px]  md:mt-[21px]  relative flex" key={index}>
                      
                            <ShareOutlinedIcon className='absolute top-[14px] right-[12px]' sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }}  />
                           
                            <img className="lg:w-[139px] lg:h-[143px] md:w-[98px] md:h-[102px] rounded-[3px] border border-neutral-400 border-opacity-50 object-contain lg:mt-[21px] lg:ml-[20px] md:mt-[10px] md:ml-[10px]" src={image} />
                            <div className=" lg:w-[118px] lg:h-[26px] md:w-[66px] md:h-[14px] bg-red-600 -rotate-45 lg:top-5 md:top-3  rounded-tl-[100px] rounded-tr-[100px]  border-transparent lg:-left-6 md:-left-3 shadow-md absolute text-center lg:pt-[4px] md:pt-[2px] text-white lg:text-sm lg:font-semibold md:text-[8px] md:font-base font-Lexend">10% off</div>
                            <div className='flex flex-col lg:ml-[51px] md:ml-[31px]'>
                                <p className="text-neutral-700 lg:text-xl lg:font-medium md:text-base md:font-normal font-Lexend lg:mt-[21px] md:mt-[6px]">{title}</p>
                                <div className='flex'>
                                    <div className='text-amber-500 lg:mt-[6px] md:mt-[0px]  '>
                                        <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                        <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                        <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                        <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                        <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                    </div>
                                    <p className="text-neutral-700 lg:text-sm md:text-xs lg:font-normal md:font-light font-Lexend lg:ml-[8px] lg:mt-[14px] md:ml-[10px] md:mt-[8px]">5 Rating</p>
                                    <p className="text-cyan-500 text-[10px] font-normal font-Lexend lg:mt-[18px] lg:ml-[8px] md:ml-[6px] md:mt-[9px]">{customers}</p>
                                </div>
    
                                <p className="lg:w-[300px] md:w-[240px] text-neutral-400 lg:text-sm md:text-xs font-normal font-['Poppins'] leading-snug lg:mt-[13px] md:mt-[7px]">{tagline}</p>
                                <div className='flex lg:mt-[12px] md:mt-[4px]'>
                                    <p className="opacity-80 text-neutral-700 lg:text-base md:text-sm lg:font-medium md:font-normal font-['Poppins'] leading-normal">Price :</p>
                                    <p className="text-neutral-700 lg:text-base md:text-sm lg:font-semibold md:font-medium font-['Inter'] leading-normal lg:ml-[14px] md:ml-[8px]">&#8377;{price}</p>
                                    <p className="opacity-50 text-neutral-700 lg:text-base md:text-sm lg:font-normal md:font-light font-['Inter'] line-through leading-normal lg:ml-[11px] md:ml-[8px]">&#8377; 9999</p>
                                    <p className="text-red-600 lg:text-base lg:font-semibold md:text-sm md:font-bold font-Lexend lg:ml-[28px] md:ml-[18px]">10 % Off</p>
                                </div>
                            </div>
    
    
                            <div className='flex flex-col'>
                                <p className=" text-neutral-700 lg:text-xl md:text-base lg:font-semibold md:font-medium font-['Poppins'] lg:mt-[60px] lg:ml-[114px] md:ml-[58px] md:mt-[36px]">Qty</p>
                                <div className='flex lg:mt-[19px] md:mt-[9px]'>
                                    <button className='lg:w-10 lg:h-10 md:w-6 md:h-6 bg-amber-900 rounded-[26px] shadow text-white lg:ml-[54px] md:ml-[30px]' onClick={decrease}><RemoveIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} /></button>
                                    <p className=" text-neutral-700 lg:text-[22px] md:text-[16px] lg:font-semibold md:font-medium font-['Poppins'] lg:ml-[27px] md:ml-[15px]">{qty}</p>
                                    <button className="lg:w-10 lg:h-10 md:w-6 md:h-6 bg-amber-500 rounded-[42px] shadow text-white lg:ml-[27px] md:ml-[15px]" onClick={increase}><AddIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }}/></button>
                                </div>
                            </div>
    
                            <div>
                                <p className="text-center text-neutral-700 lg:text-xl lg:font-semibold md:text-base md:font-medium font-['Poppins'] lg:mt-[60px] lg:ml-[62px] md:mt-[36px] md:ml-[32px]">Total</p>
                                <p className="text-neutral-700 lg:text-lg lg:font-semibold md:text-base md:font-medium font-['Inter'] leading-7 lg:mt-[20px] lg:ml-[64px] md:mt-[10px] md:ml-[34px]">&#8377;{ qty * price}</p>
                            </div>
    
                            <form>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="lg:w-5 lg:h-5 md:w-3 md:h-3 lg:top-[150px] md:top-[100px] right-[12px] cursor-pointer absolute rounded border border-zinc-400" />
                            </form>
                        </div>
                        )
                    })}
                   
                </div>

                <div className='flex flex-col lg:pt-[21px] md:pt-[54px] lg:ml-[20px] md:mx-auto'>

                    <div className="Promo w-[444px] h-[68px] bg-neutral-50 rounded-[10px] border border-stone-300 border-opacity-80 py-[12px] px-[10px]">
                        <div className="w-[419px] h-[45px] relative">
                            <input placeholder='Promo Code' class="w-[419px] h-[45px] pl-[28px] left-0 top-0 absolute bg-white rounded-md shadow text-neutral-400 text-[16px] font-normal font-Lexend tracking-wide"></input>
                            <div className="w-[104px] h-[45px] left-[315px] top-0 absolute bg-cyan-500 rounded-tr-md rounded-br-md"></div>
                            <button className="left-[341px] top-[10px] absolute text-white text-[16px] font-semibold font-['Poppins'] tracking-wide">Apply</button>
                        </div>
                    </div>


                    <div className='py-[15px]'>
                    <div className="Order w-[444px] h-[355px]  bg-neutral-50 rounded-[10px] border border-stone-300 border-opacity-80">
                        <p className="py-[22px] px-[21px] text-neutral-700 text-[20px] font-semibold font-Lexend">Order Summary</p>
                        <div className='px-[10px]'>
                        <div className="Box  w-[419px] h-[206px] bg-white rounded-[10px]">
                            <div className='Info flex px-[10px]'>
                                <div className='QTY flex flex-col py-[10px]'>
                                    <p className=" text-neutral-700 text-[18px] font-medium font-['Poppins'] px-[20px]">Qty</p>
                                    <p className=" text-neutral-700 text-[16px] font-medium font-['Poppins'] py-[16px] px-[30px]">1</p>
                                </div>
                                <div className='Product flex flex-col py-[10px]'>
                                    <p className=" text-neutral-700  text-[18px] font-medium font-['Poppins'] px-[30px]">Product</p>
                                    <p className=" text-neutral-400 text-[16px] font-normal font-['Poppins'] tracking-tight px-[30px] py-[16px] ">1 Mukhi Rudraksha</p>
                                </div>
                                <div className='Price flex flex-col py-[10px] '>
                                    <p className=" text-neutral-700  text-[18px] font-medium font-['Poppins'] px-[40px]">Price</p>
                                    <p className=" text-neutral-400 text-[16px] font-normal font-['Poppins'] tracking-tight py-[16px] pl-[38px]">8999 INR</p>
                                </div>
                            </div>
                            <p className=" text-neutral-700 text-[18px] font-semibold font-['Inter'] py-[12px] pl-[338px]">1 Item</p>
                            <hr className='mx-[20px] py-[2px]'></hr>
                             <div className='Total flex'>
                               <p className="px-[21px] py-[8px] text-neutral-700 text-[20px] font-semibold font-['Poppins']">Total</p>
                               <p className="pl-[215px] py-[8px] text-neutral-700 text-[18px] font-semibold font-['Inter']">8999 INR</p>
                            </div>
                        </div>
                        </div>
                        <div className=' py-[12px] px-[24px]'>
                        <button className="w-[395px] h-[50px] pl-[120px] pr-28 py-[15px] bg-cyan-500 rounded-[9px] shadow text-white text-[16px] font-semibold font-Lexend" onClick={next}>
                           Go To Billing <EastIcon/>
                        </button>
                        </div>
                    </div>
                    </div>

                    <div className="Payment w-[443px] h-[188px]  bg-neutral-50 rounded-[10px] border border-stone-300 border-opacity-80">
                        <p className=" text-neutral-700 text-[20px] font-semibold font-Lexend py-[12px] px-[20px]">Accepted Payment Methods</p>
                        <div className='flex flex-wrap gap-[30px] py-[10px]'>
                            <img src='/img/visa.svg' className='pl-[20px]'/>
                            <img src='/img/mastercard.svg'/>
                            <img src='/img/maestro.svg'/>
                            <img src='/img/discover.svg'/>
                            <img src='/img/cirrus.svg'/>
                            <img src='/img/jcb.svg' className='pl-[20px]'/>
                            <img src='/img/paypal.svg'/>
                        </div>
                    </div>
                </div>

            </div> 
            </div>}

            {/* {stepNo === 2 && <div className='Billing'>
            <p className="text-amber-900 text-[26px] font-medium lg:ml-[70px] md:ml-[40px] lg:mt-[74px] md:mt-[40px] font-Lexend">Billing</p>
            <div className="flex container">
                <div className='cardsContainer flex flex-col'>
                    <div className="card w-[908px] h-[181px] bg-white rounded-[10px] shadow border border-gray-100 lg:mt-[21px] lg:ml-[70px] relative flex">
                        <ShareOutlinedIcon className='absolute top-[14px] right-[12px]' />
                        <img className="w-[139px] h-[143px] rounded-[3px] border border-neutral-400 border-opacity-50 object-contain lg:mt-[21px] lg:ml-[20px]" src="/img/Rudraksh.png" />
                        <div className='flex flex-col lg:ml-[51px]'>
                            <p className="text-neutral-700 text-xl font-medium font-Lexend lg:mt-[21px]">1 Mukhi Rudraksha</p>
                            <div className='flex'>
                                <div className='text-amber-500 lg:mt-[6px] md:mt-[6px] '>
                                    <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                    <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                    <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                    <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                    <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                </div>
                                <p className="text-neutral-700 lg:text-sm md:text-xs lg:font-normal md:font-light font-Lexend lg:ml-[8px] lg:mt-[14px] md:ml-[10px] md:mt-[12px]">5 Rating</p>
                                <p className="text-cyan-500 text-[10px] font-normal font-Lexend lg:mt-[18px] lg:ml-[8px]">Trusted by 4467 Customers</p>
                            </div>

                            <p className="w-[300px] text-neutral-400 text-sm font-normal font-['Poppins'] leading-snug lg:mt-[13px]">Invite Peace and Power with One Mukhi Rudraksh!</p>
                            <div className='flex lg:mt-[12px]'>
                                <p className="opacity-80 text-neutral-700 text-base font-medium font-['Poppins'] leading-normal">Price :</p>
                                <p className="text-neutral-700 text-base font-semibold font-['Inter'] leading-normal lg:ml-[14px]">&#8377;8999</p>
                                <p className="opacity-50 text-neutral-700 text-base font-normal font-['Inter'] line-through leading-normal lg:ml-[11px]">&#8377; 9999</p>
                                <p className="text-red-600 text-base font-semibold font-Lexend lg:ml-[28px]">10 % Off</p>
                            </div>
                        </div>


                        <div className='flex flex-col'>
                            <p className="text-center text-neutral-700 text-xl font-semibold font-['Poppins'] lg:mt-[60px] lg:ml-[62px]">Qty</p>
                            <div className='flex  lg:mt-[19px]'>
                                <button className='w-10 h-10 bg-amber-900 rounded-[26px] shadow text-white lg:ml-[54px]'><RemoveIcon /></button>
                                <p className="text-center text-neutral-700 text-[22px] font-semibold font-['Poppins'] lg:ml-[27px]">1</p>
                                <button className="w-10 h-10 bg-amber-500 rounded-[42px] shadow text-white lg:ml-[27px]"><AddIcon /></button>
                            </div>
                        </div>

                        <div>
                            <p className="text-center text-neutral-700 text-xl font-semibold font-['Poppins'] lg:mt-[60px] lg:ml-[62px]">Total</p>
                            <p className="text-neutral-700 text-lg font-semibold font-['Inter'] leading-7 lg:mt-[20px] lg:ml-[64px]">&#8377;8999</p>
                        </div>

                        <form>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="w-5 h-5 top-[150px] right-[12px] cursor-pointer absolute rounded border border-zinc-400" />
                        </form>
                    </div>
                    <div className="card w-[908px] h-[181px] bg-white rounded-[10px] shadow border border-gray-100 lg:mt-[21px] lg:ml-[70px] relative flex">
                        <ShareOutlinedIcon className='absolute top-[14px] right-[12px]' />
                        <img className="w-[139px] h-[143px] rounded-[3px] border border-neutral-400 border-opacity-50 object-contain lg:mt-[21px] lg:ml-[20px]" src="/img/Rudraksh.png" />

                        <div className='flex flex-col lg:ml-[51px]'>
                            <p className="text-neutral-700 text-xl font-medium font-Lexend lg:mt-[21px]">1 Mukhi Rudraksha</p>
                            <div className='flex'>
                                <div className='text-amber-500 lg:mt-[6px] md:mt-[6px] '>
                                    <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                    <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                    <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                    <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                    <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                </div>
                                <p className="text-neutral-700 lg:text-sm md:text-xs lg:font-normal md:font-light font-Lexend lg:ml-[8px] lg:mt-[14px] md:ml-[10px] md:mt-[12px]">5 Rating</p>
                                <p className="text-cyan-500 text-[10px] font-normal font-Lexend lg:mt-[18px] lg:ml-[8px]">Trusted by 4467 Customers</p>
                            </div>

                            <p className="w-[300px] text-neutral-400 text-sm font-normal font-['Poppins'] leading-snug lg:mt-[13px]">Invite Peace and Power with One Mukhi Rudraksh!</p>
                            <div className='flex lg:mt-[12px]'>
                                <p className="opacity-80 text-neutral-700 text-base font-medium font-['Poppins'] leading-normal">Price :</p>
                                <p className="text-neutral-700 text-base font-semibold font-['Inter'] leading-normal lg:ml-[14px]">&#8377;8999</p>
                                <p className="opacity-50 text-neutral-700 text-base font-normal font-['Inter'] line-through leading-normal lg:ml-[11px]">&#8377; 9999</p>
                                <p className="text-red-600 text-base font-semibold font-Lexend lg:ml-[28px]">10 % Off</p>
                            </div>
                        </div>


                        <div className='flex flex-col'>
                            <p className="text-center text-neutral-700 text-xl font-semibold font-['Poppins'] lg:mt-[60px] lg:ml-[62px]">Qty</p>
                            <div className='flex  lg:mt-[19px]'>
                                <button className='w-10 h-10 bg-amber-900 rounded-[26px] shadow text-white lg:ml-[54px]'><RemoveIcon /></button>
                                <p className="text-center text-neutral-700 text-[22px] font-semibold font-['Poppins'] lg:ml-[27px]">1</p>
                                <button className="w-10 h-10 bg-amber-500 rounded-[42px] shadow text-white lg:ml-[27px]"><AddIcon /></button>
                            </div>
                        </div>

                        <div>
                            <p className="text-center text-neutral-700 text-xl font-semibold font-['Poppins'] lg:mt-[60px] lg:ml-[62px]">Total</p>
                            <p className="text-neutral-700 text-lg font-semibold font-['Inter'] leading-7 lg:mt-[20px] lg:ml-[64px]">&#8377;8999</p>
                        </div>

                        <form>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="w-5 h-5 top-[150px] right-[12px] cursor-pointer absolute rounded border border-zinc-400" />
                        </form>
                    </div>
                    <div className="card w-[908px] h-[181px] bg-white rounded-[10px] shadow border border-gray-100 lg:mt-[21px] lg:ml-[70px] relative flex">
                        <ShareOutlinedIcon className='absolute top-[14px] right-[12px]' />
                        <img className="w-[139px] h-[143px] rounded-[3px] border border-neutral-400 border-opacity-50 object-contain lg:mt-[21px] lg:ml-[20px]" src="/img/Rudraksh.png" />

                        <div className='flex flex-col lg:ml-[51px]'>
                            <p className="text-neutral-700 text-xl font-medium font-Lexend lg:mt-[21px]">1 Mukhi Rudraksha</p>
                            <div className='flex'>
                                <div className='text-amber-500 lg:mt-[6px] md:mt-[6px] '>
                                    <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                    <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                    <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                    <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                    <StarRateIcon sx={{ '@media (min-width:600px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                </div>
                                <p className="text-neutral-700 lg:text-sm md:text-xs lg:font-normal md:font-light font-Lexend lg:ml-[8px] lg:mt-[14px] md:ml-[10px] md:mt-[12px]">5 Rating</p>
                                <p className="text-cyan-500 text-[10px] font-normal font-Lexend lg:mt-[18px] lg:ml-[8px]">Trusted by 4467 Customers</p>
                            </div>

                            <p className="w-[300px] text-neutral-400 text-sm font-normal font-['Poppins'] leading-snug lg:mt-[13px]">Invite Peace and Power with One Mukhi Rudraksh!</p>
                            <div className='flex lg:mt-[12px]'>
                                <p className="opacity-80 text-neutral-700 text-base font-medium font-['Poppins'] leading-normal">Price :</p>
                                <p className="text-neutral-700 text-base font-semibold font-['Inter'] leading-normal lg:ml-[14px]">&#8377;8999</p>
                                <p className="opacity-50 text-neutral-700 text-base font-normal font-['Inter'] line-through leading-normal lg:ml-[11px]">&#8377; 9999</p>
                                <p className="text-red-600 text-base font-semibold font-Lexend lg:ml-[28px]">10 % Off</p>
                            </div>
                        </div>


                        <div className='flex flex-col'>
                            <p className="text-center text-neutral-700 text-xl font-semibold font-['Poppins'] lg:mt-[60px] lg:ml-[62px]">Qty</p>
                            <div className='flex  lg:mt-[19px]'>
                                <button className='w-10 h-10 bg-amber-900 rounded-[26px] shadow text-white lg:ml-[54px]'><RemoveIcon /></button>
                                <p className="text-center text-neutral-700 text-[22px] font-semibold font-['Poppins'] lg:ml-[27px]">1</p>
                                <button className="w-10 h-10 bg-amber-500 rounded-[42px] shadow text-white lg:ml-[27px]"><AddIcon /></button>
                            </div>
                        </div>

                        <div>
                            <p className="text-center text-neutral-700 text-xl font-semibold font-['Poppins'] lg:mt-[60px] lg:ml-[62px]">Total</p>
                            <p className="text-neutral-700 text-lg font-semibold font-['Inter'] leading-7 lg:mt-[20px] lg:ml-[64px]">&#8377;8999</p>
                        </div>

                        <form>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="w-5 h-5 top-[150px] right-[12px] cursor-pointer absolute rounded border border-zinc-400" />
                        </form>
                    </div>
                </div>

                <div className='flex flex-col lg:mt-[21px] lg:ml-[20px]'>

                    <div class="Promo w-[444px] h-[68px] bg-neutral-50 rounded-[10px] border border-stone-300 border-opacity-80">
                        <div class="w-[419px] h-[45px] relative lg:mt-[12px] lg:ml-[13px]">
                            <input placeholder='Promo Code' class="w-[419px] h-[45px] pl-[28px] left-0 top-0 absolute bg-white rounded-md shadow text-neutral-400 text-base font-normal font-Lexend tracking-wide"></input>
                            <div class="w-[104px] h-[45px] left-[315px] top-0 absolute bg-cyan-500 rounded-tr-md rounded-br-md"></div>
                            <button class="left-[341px] top-[10px] absolute text-white text-base font-semibold font-['Poppins'] tracking-wide">Apply</button>
                        </div>
                    </div>

                    <div className="Order w-[444px] h-[355px] lg:mt-[15px] bg-neutral-50 rounded-[10px] border border-stone-300 border-opacity-80">
                        <p className="lg:mt-[22px] lg:ml-[21px] text-neutral-700 text-xl font-semibold font-Lexend">Order Summary</p>
                        <div class="Box lg:mt-[27px] lg:ml-[13px] w-[419px] h-[206px] bg-white rounded-[10px]">
                            <div className='Info flex'>
                                <div className='QTY flex flex-col lg:mt-[22px]'>
                                    <p class=" text-neutral-700 text-lg font-medium font-['Poppins'] ml-[21px]">Qty</p>
                                    <p class=" text-neutral-700 text-base font-medium font-['Poppins'] ml-[35px] mt-[28px]">1</p>
                                </div>
                                <div className='Product flex flex-col lg:mt-[22px]'>
                                    <p class=" text-neutral-700 text-lg font-medium font-['Poppins'] ml-[40px]">Product</p>
                                    <p class=" text-neutral-400 text-base font-normal font-['Poppins'] tracking-tight ml-[40px] mt-[28px]">1 Mukhi Rudraksha</p>
                                </div>
                                <div className='Price flex flex-col lg:mt-[22px]'>
                                    <p class=" text-neutral-700 text-lg font-medium font-['Poppins'] ml-[96px]">Price</p>
                                    <p class=" text-neutral-400 text-base font-normal font-['Poppins'] tracking-tight ml-[96px] mt-[28px]">8999 INR</p>
                                </div>
                            </div>
                            <p class=" text-neutral-700 text-lg font-semibold font-['Inter'] mt-[28px] ml-[338px]">1 Item</p>
                            <hr></hr>
                             <div className='Total flex'>
                               <p class="ml-[21px] mt-[12px] text-neutral-700 text-xl font-semibold font-['Poppins']">Total</p>
                               <p class="ml-[230px] mt-[12px] text-neutral-700 text-xl font-semibold font-['Inter']">8999 INR</p>
                            </div>
                        </div>
                        <button class="w-[395px] h-[50px] mt-[10px] ml-[24.5px] pl-[120px] pr-28 py-[15px] bg-cyan-500 rounded-[9px] shadow text-white text-base font-semibold font-Lexend" onClick={next}>
                           Go To Billing <EastIcon/>
                        </button>
                    </div>

                    <div class="Payment w-[443px] h-[188px] lg:mt-[18px] bg-neutral-50 rounded-[10px] border border-stone-300 border-opacity-80">
                        <p class=" text-neutral-700 text-xl font-semibold font-Lexend lg:mt-[22px] lg:ml-[20px]">Accepted Payment Methods</p>
                        <div className='flex flex-wrap gap-[30px] lg:mt-[40px]'>
                            <img src='/img/visa.svg' className='ml-[20px]'/>
                            <img src='/img/mastercard.svg'/>
                            <img src='/img/maestro.svg'/>
                            <img src='/img/discover.svg'/>
                            <img src='/img/cirrus.svg'/>
                            <img src='/img/jcb.svg' className='ml-[20px]'/>
                            <img src='/img/paypal.svg'/>
                        </div>
                    </div>
                </div>

            </div> 
            </div>}  */}
           
        </div>
    )
}

export default Cart
