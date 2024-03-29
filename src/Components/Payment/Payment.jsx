import React from 'react'
import EastIcon from '@mui/icons-material/East';
import Trusted from '../Footer/Trusted';

const Payment = () => {
    return (
        <>
        <div className='flex flex-col'>
        <div className=' lg:flex-row flex md:flex-col justify-between items-center '>
            <div className='flex flex-col'>
                <p className="text-start text-amber-900 lg:text-[26px] md:text-[22px] font-medium font-Lexend py-[40px]">Payment Options</p>
                <div className="lg:w-[907px] lg:h-[153px] md:w-[676px] md:h-[105px] bg-neutral-50 rounded-[5px] shadow border border-amber-500">
                    <div className='flex flex-row justify-between px-[24px] lg:pt-[14px] md:pt-[10px]'>
                        <div className='flex flex-col'>
                            <p className="text-start text-amber-900 lg:text-[18px] md:text-[14px] font-bold font-Inter">Order Details</p>
                            <p className="text-start lg:pt-[22px] md:pt-[10px] text-neutral-700 lg:text-[18px] md:text-[14px] font-semibold font-Poppins">Arjun Singh</p>
                            <p className="text-start lg:pt-[8px] md:pt-[4px] text-neutral-700 lg:text-[12px] md:text-[8px] font-normal font-Poppins">9999999999</p>
                            <p className="text-start text-neutral-700 lg:text-[12px] md:text-[8px] font-medium font-Poppins">arjunsingh_16@gmail.com</p>
                        </div>

                        <div className='flex flex-col '>
                            <p class="text-start text-amber-900 lg:text-[18px] md:text-[14px] font-bold font-Inter">Shipping Address</p>
                            <p class="lg:pt-[22px] md:pt-[10px] text-start text-neutral-700 lg:lg:text-[16px]  md:text-[12px] font-medium font-Poppins">Sector 15 , Gandhinagar,<br></br>382016, Gandhinagar,<br></br> Gujarat</p>
                        </div>

                        <div className='flex flex-col '>
                            <p class="text-start text-amber-900 lg:text-[18px] md:text-[14px] font-bold font-Inter">Get Your Order By</p>
                            <p className="text-start lg:pt-[22px] md:pt-[10px] text-neutral-700 lg:lg:text-[16px]  md:text-[12px] font-medium font-Poppins"><b>Thursday</b>, 28 Dec 2023</p>
                        </div>
                    </div>
                </div>

                <div className='lg:pt-[25px] md:pt-[15px]'>
                    <div className="lg:w-[907px] lg:h-[170px] md:w-[676px] md:h-[125px] bg-neutral-50 rounded-[5px] border border-neutral-400">
                        <div className='lg:p-[19px] md:p-[10px] flex flex-col'>
                            <div className='flex flex-row justify-between'>
                                <img src='/img/UPI.png' className='lg:w-[100px] lg:h-[37px] md:w-[50px] md:h-[15px]' />
                                <input placeholder='Paste Your UPI Id' className="px-[36px] lg:w-[534px] lg:h-[45px] md:w-[400px] md:h-[30px] bg-white lg:text-[14px] md:text-[10px] font-normal font-Lexend rounded-md border border-neutral-400 border-opacity-30" />
                                <button className="lg:w-[187px] lg:h-[45px] md:w-[100px] md:h-[30px] text-white lg:text-[16px] md:text-[12px] font-semibold font-Lexend bg-amber-500 rounded-[9px] shadow ">
                                    Verify
                                </button>
                            </div>
                            <hr className='lg:my-[16.5px] md:my-[10px]'></hr>
                            <div className='flex flex-row justify-between lg:px-[30px] md:px-[15px]'>
                                <div>
                                    <input type='radio' name='bank' className='text-start border-zinc-400 lg:w-5 lg:h-5  md:w-3.5 md:h-3.5' />
                                    <label htmlFor='hdfc' className="lg:pl-[30px] md:pl-[15px] text-start text-neutral-700  lg:text-[18px] md:text-[14px] font-semibold font-Poppins">Arjun Singh</label>
                                    <div className="flex lg:pl-[45px] lg:pt-[10px] md:pl-[27px] md:pt-[5px]">
                                        <img src='/img/hdfc.svg' className='lg:w-[20px] lg:h-[20px] md:w-[12px] md:h-[12px]' />
                                        <p className="text-start text-neutral-700 lg:text-[14px] md:text-[10px] font-semibold font-Poppins tracking-wide">&nbsp;HDFC **1234</p>
                                    </div>
                                </div>

                                <div>
                                    <input type='radio' name='bank' className='text-start border-zinc-400 lg:w-5 lg:h-5  md:w-3.5 md:h-3.5' />
                                    <label htmlFor='icici' className="lg:pl-[30px] md:pl-[15px] text-start text-neutral-700  lg:text-[18px] md:text-[14px] font-semibold font-Poppins">Mayank Gupta</label>
                                    <div className="flex lg:pl-[45px] lg:pt-[10px] md:pl-[27px] md:pt-[5px]">
                                        <img src='/img/icici.svg' className='lg:w-[20px] lg:h-[20px] md:w-[12px] md:h-[12px]' />
                                        <p className="text-start text-neutral-700 lg:text-[14px] md:text-[10px] font-semibold font-Poppins tracking-wide">&nbsp;ICICI **1234</p>
                                    </div>
                                </div>

                                <div>
                                    <input type='radio' name='bank' className='text-start border-zinc-400 lg:w-5 lg:h-5  md:w-3.5 md:h-3.5' />
                                    <label htmlFor='bob' className="lg:pl-[30px] md:pl-[15px] text-start text-neutral-700  lg:text-[18px] md:text-[14px] font-semibold font-Poppins">Ishita Mandal</label>
                                    <div className="flex lg:pl-[45px] lg:pt-[10px] md:pl-[27px] md:pt-[5px]">
                                        <img src='/img/bob.svg' className='lg:w-[20px] lg:h-[20px] md:w-[12px] md:h-[12px]' />
                                        <p className="text-start text-neutral-700 lg:text-[14px] md:text-[10px] font-semibold font-Poppins tracking-wide">&nbsp;Bank Of Baroda **1234</p>
                                    </div>
                                </div>

                                <div>
                                    <input type='radio' name='bank' className='text-start border-zinc-400 lg:w-5 lg:h-5  md:w-3.5 md:h-3.5' />
                                    <label htmlFor='sbi' className="lg:pl-[30px] md:pl-[15px] text-start text-neutral-700 lg:text-[18px] md:text-[14px] font-semibold font-Poppins">Ajeet Das</label>
                                    <div className="flex lg:pl-[45px] lg:pt-[10px] md:pl-[27px] md:pt-[5px]">
                                        <img src='/img/sbi.svg' className='lg:w-[20px] lg:h-[20px] md:w-[12px] md:h-[12px]' />
                                        <p className="text-start text-neutral-700 lg:text-[14px] md:text-[10px] font-semibold font-Poppins tracking-wide">&nbsp;SBI **1234</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

             <div className='flex lg:flex-col  md:flex-row md:flex-wrap md:gap-[8px] lg:gap-[0px]'>
                <div className='py-[10px]'>
                    <div className="lg:w-[906px] lg:h-[60px] md:w-[334px] md:h-[40px] bg-neutral-50 rounded-[5px] border border-neutral-400">
                        <div className='lg:px-[44px] flex flex-row justify-start items-center md:px-[24px] lg:py-[16px] md:py-[8px]'>
                            <input type='radio' name='payOpt' className='text-start border-zinc-400 lg:w-5 lg:h-5  md:w-3.5 md:h-3.5' />
                            <label className="lg:pl-[30px] md:pl-[15px] text-start text-neutral-700 lg:text-[18px] md:text-[14px] font-semibold font-Poppins">Cash On Delivery</label>
                        </div>
                    </div>
                </div>

                <div className='lg:py-[0px] md:py-[10px]'>
                <div className="lg:w-[906px] lg:h-[60px] md:w-[334px] md:h-[40px] bg-neutral-50 rounded-[5px] border border-neutral-400">
                    <div className='lg:px-[44px] flex flex-row justify-start items-center md:px-[24px] lg:py-[16px] md:py-[8px]'>
                        <input type='radio' name='payOpt' className='text-start border-zinc-400 lg:w-5 lg:h-5  md:w-3.5 md:h-3.5' />
                        <label className="lg:pl-[30px] md:pl-[15px] text-start text-neutral-700 lg:text-[18px] md:text-[14px] font-semibold font-Poppins">UPI Apps</label>
                    </div>
                </div>
                </div>

                <div className='lg:py-[10px]'>
                    <div className="lg:w-[906px] lg:h-[60px] md:w-[334px] md:h-[40px] bg-neutral-50 rounded-[5px] border border-neutral-400">
                        <div className='lg:px-[44px] flex flex-row justify-start items-center md:px-[24px] lg:py-[16px] md:py-[8px]'>
                            <input type='radio' name='payOpt' className='text-start border-zinc-400 lg:w-5 lg:h-5  md:w-3.5 md:h-3.5' />
                            <label className="lg:pl-[30px] md:pl-[15px] text-start text-neutral-700 lg:text-[18px] md:text-[14px] font-semibold font-Poppins">Net Banking</label>
                        </div>
                    </div>
                </div>

                <div className="lg:w-[906px] lg:h-[60px] md:w-[334px] md:h-[40px] bg-neutral-50 rounded-[5px] border border-neutral-400">
                    <div className='lg:px-[44px] flex flex-row justify-start items-center md:px-[24px] lg:py-[16px] md:py-[8px]'>
                        <input type='radio' name='payOpt' className='text-start border-zinc-400 lg:w-5 lg:h-5  md:w-3.5 md:h-3.5' />
                        <label className="lg:pl-[30px] md:pl-[15px] text-start text-neutral-700 lg:text-[18px] md:text-[14px] font-semibold font-Poppins">Credit or Debit Card</label>
                    </div>
                </div>

                <div className='py-[10px]'>
                    <div className="lg:w-[906px] lg:h-[60px] md:w-[334px] md:h-[40px] bg-neutral-50 rounded-[5px] border border-neutral-400">
                        <div className='lg:px-[44px] flex flex-row justify-start items-center md:px-[24px] lg:py-[16px] md:py-[8px]'>
                            <input type='radio' name='payOpt' className='text-start border-zinc-400 lg:w-5 lg:h-5  md:w-3.5 md:h-3.5' />
                            <label className="lg:pl-[30px] md:pl-[15px] text-start text-neutral-700 lg:text-[18px] md:text-[14px] font-semibold font-Poppins">EMI</label>
                        </div>
                    </div>
                </div>

                </div>
            </div>

          
        </div>
    
        </div>
        </>
    )
}

export default Payment