import React, { useState } from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import EastIcon from '@mui/icons-material/East';
import "./Cart.css"
import { useCartContext } from '../cart_content';
import BillingInfo from '../BillingInfo/BillingInfo';
import Payment from '../Payment/Payment';
import { useStepContext } from '../Cart/StepContext';
import { useBuyContext } from '../buy_context';
import Trusted from '../Footer/Trusted';


const Cart = ({ setAction, action }) => {
    const { cart, increment, decrement, total_price, total_item } = useCartContext();
    const { buy, buy_total_item, buy_total_price } = useBuyContext();
    const { stepNo, setStepNo } = useStepContext();
    const [code, setCode] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(code)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCode({ ...code, [name]: value });
        console.log(code)

    }


    const stepArray = ["Your Cart", "Billing Details", "Checkout"];
    // const [stepNo, setStepNo] = useState(1)
    const next = () => {
        setStepNo(stepNo + 1)
    }

    const prev = () => {
        setStepNo(stepNo - 1)
    }

    return (
        <>
        <div className=' lg:px-16 md:px-10 px-10'>
            {/* STEPPER COMPONENT START*/}
            <div className='Stepper flex justify-center items-center py-[34px]'>
                {

                    stepArray.map((v, i) => <>
                        <div className=' flex'>
                            <div className='stepName flex flex-col justify-center items-center'>

                                <div className={`stepNum md:w-[30px] md:h-[30px] w-[24px] h-[24px] md:text-[16px] text-[12px] flex justify-center items-center text-white rounded-full ${stepNo - 1 === i || stepNo - 1 === i + 1 || stepNo === stepArray.length ? "bg-cyan-500" : "bg-zinc-300"}`}>
                                    {i + 1}
                                </div>

                                <div className={` flex mt-[8px] md:text-[16px] text-[10px]  ${stepNo - 1 === i || stepNo - 1 === i + 1 || stepNo === stepArray.length ? "text-cyan-500" : "text-zinc-300"}`}>
                                    {v}
                                </div>
                            </div>
                            {
                                i !== stepArray.length - 1 && <div className={` md:w-[174px] md:h-[2px] md:mt-[14px] w-[94px] h-[2px] mt-[8px] ${stepNo === i + 2 || stepNo == stepArray.length ? "bg-cyan-500" : "bg-zinc-300 "} `}>
                                </div>
                            }

                        </div>


                    </>)
                }
            </div>
            {/* STEPPER COMPONENT END*/}
            <div className='lg:flex md:flex md:flex-col lg:flex-row justify-between  container'>
                {stepNo === 1 && <div className='md:px-0 lg:px-0'>
                    <p className="text-amber-900 md:text-[26px] text-[20px] font-medium  font-Lexend">Your Cart</p>

                    <div className='flex flex-col'>
                        {cart.map(({ image, title, customers, tagline, price, qty, id }, index) => {
                            return (
                                <div className=" lg:w-[908px]  overflow-hidden lg:h-[181px] md:w-[676px] md:h-[124px] w-[340px] h-[160px] bg-white md:rounded-[10px] rounded-[5px] shadow border border-gray-100 lg:mt-[21px]  md:mt-[21px] mt-[14px] relative md:flex md:flex-row flex flex-col" key={id}>

                                    <ShareOutlinedIcon className='absolute md:top-[14px] right-[12px] top-[8px]' sx={{ '@media (min-width:300px)': { fontSize: '12px', }, '@media (min-width:768px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                    <div className='flex '>
                                        <img className="lg:w-[139px] lg:h-[143px] md:w-[98px] md:h-[102px] w-[70px] h-[74px] rounded-[3px] border border-neutral-400 border-opacity-50 object-cover lg:mt-[21px] lg:ml-[20px] md:mt-[10px] md:ml-[10px] mt-[6px] ml-[6px]" src={image} />
                                        {/* <div className=" lg:w-[118px] lg:h-[26px] md:w-[66px] md:h-[14px] w-[42px] h-[10px] bg-red-600 -rotate-45 lg:top-5 md:top-3 top-1  rounded-tl-[100px] rounded-tr-[100px]  border-transparent lg:-left-6 md:-left-3 -left-1.5 shadow-md absolute text-center lg:pt-[4px] md:pt-[2px] pt-[2px] text-white lg:text-sm lg:font-semibold md:text-[8px] text-[6px] md:font-base font-Lexend">10% off</div> */}
                                        <div className=" bg-red-600  p-[2px] md:p-[3px]  shadow-[0_3px_4px_rgba(0,0,0,0.25)]  font-[600] font-[lexend] text-[12px] md:text-[12px] lg:text-[14px] text-white w-[50%] lg:w-[130px] md:top-6  md:left-[-18vmin] xl:top-4 xl:left-[-6vmin] left-[-10.5vmin] lg:left-[-20vmin] lg:top-10 top-5  text-center rotate-[-45deg] absolute">
                                            10% off
                                        </div>

                                        <div className='flex flex-col lg:ml-[51px] md:ml-[31px] ml-[12px]'>
                                            <p className="text-neutral-700 lg:text-xl lg:font-medium md:text-base md:font-normal text-sm text-start font-Lexend lg:mt-[21px] md:mt-[6px] mt-[4px]">{title}</p>
                                            <div className='flex'>
                                                <div className='text-amber-500 lg:mt-[6px] md:mt-[0px]'>
                                                    <StarRateIcon sx={{ '@media (min-width:300px)': { fontSize: '12px', }, '@media (min-width:768px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                                    <StarRateIcon sx={{ '@media (min-width:300px)': { fontSize: '12px', }, '@media (min-width:768px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                                    <StarRateIcon sx={{ '@media (min-width:300px)': { fontSize: '12px', }, '@media (min-width:768px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                                    <StarRateIcon sx={{ '@media (min-width:300px)': { fontSize: '12px', }, '@media (min-width:768px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                                    <StarRateIcon sx={{ '@media (min-width:300px)': { fontSize: '12px', }, '@media (min-width:768px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} />
                                                </div>
                                                <p className="text-neutral-700 lg:text-sm md:text-xs text-[8px] lg:font-normal md:font-light font-Lexend text-start lg:ml-[8px] lg:mt-[14px] md:ml-[10px] md:mt-[8px] ml-[6px] mt-[8px]">5 Rating</p>
                                                <p className="text-cyan-500 md:text-[10px] text-[8px] font-normal font-Lexend text-start lg:mt-[18px] lg:ml-[8px] md:ml-[6px] md:mt-[9px] ml-[4px] mt-[8px]">{customers}</p>
                                            </div>

                                            <p className="lg:w-[300px] md:w-[240px] text-neutral-400 lg:text-sm md:text-xs text-[10px] font-normal text-start font-['Poppins'] leading-snug lg:mt-[13px] md:mt-[7px] mt-[6px]">{tagline}</p>
                                            <div className='flex lg:mt-[12px] md:mt-[4px] mt-[4px]'>
                                                <p className="opacity-80 text-neutral-700 lg:text-base md:text-sm text-[10px] lg:font-medium md:font-normal text-start font-['Poppins'] leading-normal">Price :</p>
                                                <p className="text-neutral-700 lg:text-base md:text-sm text-[10px] lg:font-semibold md:font-medium font-['Inter'] leading-normal lg:ml-[14px] md:ml-[8px] ml-[6px] text-start">&#8377;{price}</p>
                                                <p className="opacity-50 text-neutral-700 lg:text-base md:text-sm text-[10px] lg:font-normal md:font-light font-['Inter'] line-through leading-normal lg:ml-[11px] md:ml-[8px] ml-[6px] text-start">&#8377; 9999</p>
                                                <p className="text-red-600 lg:text-base lg:font-semibold md:text-sm md:font-bold text-[10px] font-Lexend lg:ml-[28px] md:ml-[18px] ml-[6px] text-start">10 % Off</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex text-start'>
                                        <div className='flex flex-col'>
                                            <p className=" text-neutral-700 lg:text-xl md:text-base text-sm lg:font-semibold md:font-medium font-['Poppins'] lg:mt-[60px] lg:ml-[114px] md:ml-[58px] md:mt-[36px] ml-[100px] mt-[10px] text-start">Qty</p>
                                            <div className='flex lg:mt-[19px] md:mt-[9px]'>
                                                <button onClick={() => decrement(id)} className='lg:w-10 lg:h-10 md:w-6 md:h-6 w-4 h-4 bg-amber-900 rounded-full shadow text-white lg:ml-[54px] md:ml-[30px] md:mt-0 lg:mt-0 ml-[90px] mt-[10px] '><RemoveIcon sx={{ '@media (min-width:300px)': { fontSize: '12px', }, '@media (min-width:768px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} className='mb-2.5 md:mb-0 lg:mb-0' /></button>
                                                <p className=" text-neutral-700 lg:text-[22px] md:text-[16px] text-[12px] lg:font-semibold md:font-medium font-['Poppins'] lg:ml-[27px] md:ml-[15px] ml-[10px] md:mt-0 lg:mt-0 mt-[10px] text-start">{qty}</p>
                                                <button onClick={() => increment(id)} className="lg:w-10 lg:h-10 md:w-6 md:h-6 w-4 h-4 bg-amber-500 rounded-full shadow text-white lg:ml-[27px] md:ml-[15px]  md:mt-0 lg:mt-0 ml-[10px] mt-[10px]"><AddIcon sx={{ '@media (min-width:300px)': { fontSize: '12px', }, '@media (min-width:768px)': { fontSize: '16px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} className='mb-2.5 md:mb-0 lg:mb-0' /></button>
                                            </div>
                                        </div>

                                        <div>
                                            <p className="text-center text-neutral-700 lg:text-xl lg:font-semibold md:text-base md:font-medium text-sm font-['Poppins'] lg:mt-[60px] lg:ml-[62px] md:mt-[36px] md:ml-[32px] ml-[60px] mt-[10px]">Total</p>
                                            <p className="text-neutral-700 lg:text-lg lg:font-semibold md:text-base md:font-medium text-xs font-['Inter'] leading-7 lg:mt-[20px] lg:ml-[64px] md:mt-[10px] md:ml-[34px] ml-[60px] mt-[6px]">&#8377; {qty * price}</p>
                                        </div>
                                    </div>

                                    <form>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="lg:w-5 lg:h-5 md:w-3 md:h-3 w-2.5 h-2.5 lg:top-[150px] md:top-[100px] top-[140px] right-[12px] cursor-pointer absolute rounded border border-zinc-400" />
                                    </form>
                                </div>
                            )
                        })}

                    </div>




                </div>}

                {stepNo === 2 && <BillingInfo />}
                {stepNo === 3 && <Payment />}

                <div className='flex flex-col lg:pt-[74px] md:pt-[24px] lg:ml-[20px] md:mx-auto'>

                    <div className="Promo md:w-[444px] md:h-[68px] w-[330px] h-[48px] bg-neutral-50 md:rounded-[10px] rounded-[5px] border border-stone-300 border-opacity-80 md:py-[12px] py-[8px] px-[10px]">
                        <div className="md:w-[419px] md:h-[45px] w-[305px] h-[30px] relative">
                            <form onSubmit={handleSubmit}>
                                <input onChange={handleChange} placeholder='Promo Code' class="md:w-[419px] md:h-[45px] w-[305px] h-[30px] md:pl-[28px] pl-[20px] left-0 top-0 absolute bg-white rounded-md shadow text-neutral-400 md:text-[16px] text-[12px] font-normal font-Lexend tracking-wide"></input>

                                <button className="md:w-[104px] md:h-[45px] w-[60px] h-[30px] absolute bg-cyan-500 rounded-tr-md rounded-br-md md:left-[315px] left-[250px] top-[0px]  text-white md:text-[16px] text-[12px] font-semibold font-['Poppins'] tracking-wide">Apply</button>
                            </form>
                        </div>
                    </div>


                    <div className='py-[15px]'>
                        <div className="Order md:w-[444px] md:h-fit w-[330px] h-[270px] bg-neutral-50 md:rounded-[10px] rounded-[8px] border border-stone-300 border-opacity-80">
                            <p className="md:py-[22px] py-[14px] md:px-[21px] px-[14px] text-neutral-700 md:text-[20px] text-[16px] font-semibold font-Lexend">Order Summary</p>

                            <div className='px-[10px]'>
                                <div className="Box md:w-[419px] md:h-[250px] w-[306px] h-[400px] bg-white md:rounded-[10px] rounded-[6px] Info flex px-[10px] flex-col ">


                                    <div className='QTY flex flex-row py-[10px]'>
                                        <p className=" text-neutral-700 md:text-[18px] text-[14px] font-medium font-['Poppins'] md:px-[20px] px-[6px]">Qty</p>
                                        <p className=" text-neutral-700  md:text-[18px] text-[14px] font-medium font-['Poppins'] px-[30px]">Product</p>
                                        <p className=" text-neutral-700  md:text-[18px] text-[14px] font-medium font-['Poppins'] md:pl-[90px] pl-[80px]">Price</p>
                                    </div>

                                    <div className='md:max-h-[130px] overflow-y-scroll flex flex-col h-[130px]'>
                                        <div className='Product flex flex-col'>

                                            {action === "cart" && cart.map(({ qty, title, price }) => (
                                                <div className='flex pt-[2px]' >
                                                    <p className="text-neutral-700 md:text-[16px] text-[12px] font-medium font-['Poppins'] md:pt-[16px] md:px-[30px] px-[14px] ">
                                                        {qty}
                                                    </p>
                                                    <p className="text-neutral-400 md:w-[200px] w-[160px] truncate md:text-[16px] text-[12px] font-normal font-['Poppins'] tracking-tight px-[30px] md:pt-[16px]">
                                                        {title}
                                                    </p>
                                                    <p className="text-neutral-400 md:text-[16px] text-[12px] font-normal font-['Poppins'] tracking-tight md:pt-[16px] md:pl-[38px] pl-[24px]">
                                                        {qty * price} INR
                                                    </p>
                                                </div>
                                            ))}

                                            {action === "buy" && buy.map(({ qty, title, price }) => (
                                                <div className='flex'>
                                                    <p className="text-neutral-700 md:text-[16px] text-[12px] font-medium font-['Poppins'] md:pt-[16px] md:px-[30px] px-[14px] pt-[12px]">
                                                        {qty}
                                                    </p>
                                                    <p className="text-neutral-400 md:w-[200px] w-[160px] truncate md:text-[16px] text-[12px] font-normal font-['Poppins'] tracking-tight px-[30px] md:pt-[16px] pt-[12px]">
                                                        {title}
                                                    </p>
                                                    <p className="text-neutral-400 md:text-[16px] text-[12px] font-normal font-['Poppins'] tracking-tight md:pt-[16px] md:pl-[38px] pl-[24px] pt-[12px]">
                                                        {qty * price} INR
                                                    </p>
                                                </div>
                                            ))}

                                        </div>

                                    </div>

                                    <div className="flex flex-col">
                                        {action === "cart" && <p className=" text-neutral-700 md:text-[18px] text-[14px] font-semibold text-end font-['Inter'] md:px-[40px] px-[20px]">{total_item} Items</p>}
                                        {action === "buy" && <p className=" text-neutral-700 md:text-[18px] text-[14px] font-semibold text-end font-['Inter'] md:px-[40px] px-[20px]">{buy_total_item} Items</p>}

                                        <hr className='mx-[20px] py-[2px]'></hr>

                                        <div className='Total  flex justify-between'>
                                            <p className="md:px-[21px] px-[18px] text-neutral-700 md:text-[20px] text-[16px] text-start font-semibold font-['Poppins']">Total</p>
                                            {action === "cart" && <p className="text-end md:px-[40px] px-[16px] text-neutral-700 md:text-[18px] text-[14px] font-semibold font-['Inter']">{total_price} INR</p>}
                                            {action === "buy" && <p className="text-end md:px-[40px] px-[16px] text-neutral-700 md:text-[18px] text-[14px] font-semibold font-['Inter']">{buy_total_price} INR</p>}
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {stepNo === 1 &&

                                <div className='md:py-[12px] md:px-[24px] py-[8px] px-[18px] '>
                                    <button className="md:w-[395px] md:h-[50px] w-[290px] h-[35px] justify-center items-center bg-cyan-500 md:rounded-[9px] rounded-[5px] shadow text-white md:text-[16px] text-[12px] font-semibold font-Lexend" onClick={next}>
                                        Go To Billing <EastIcon />
                                    </button>
                                </div>}
                        </div>
                    </div>

                    <div className="Payment md:w-[443px] md:h-[188px] w-[330px] h-[170px] bg-neutral-50 rounded-[10px] border border-stone-300 border-opacity-80">
                        <p className=" text-neutral-700 md:text-[20px] text-[16px] font-semibold font-Lexend py-[12px] px-[20px]">Accepted Payment Methods</p>
                        <div className='flex flex-wrap gap-[30px] md:py-[20px] py-[10px]'>
                            <img src='/img/visa.svg' className='pl-[20px]' />
                            <img src='/img/mastercard.svg' />
                            <img src='/img/maestro.svg' />
                            <img src='/img/discover.svg' />
                            <img src='/img/cirrus.svg' className='md:pl-0 lg:pl-0 pl-[20px]' />
                            <img src='/img/jcb.svg' className='md:pl-[20px]' />
                            <img src='/img/paypal.svg' />
                        </div>
                    </div>
                </div>


            </div>




        </div>
        <Trusted/>
        </>
    )
}

export default Cart