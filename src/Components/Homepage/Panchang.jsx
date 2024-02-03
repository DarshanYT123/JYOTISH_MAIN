import React, { useState } from "react";
 




function Panchang() {
    const [hours, sethours] = useState(true);
    const [week, setweek] = useState(true);


    let sec = '#3a3a3a';

    function Hour12() {
        return (
            <>
            <div className="space-y-2">
                <div className="w-[100%]   text-[#3a3a3a] text-[color:var(--Black-text-color,#3A3A3A)] text-[18px] font-Lexend  not-italic font-semibold leading-[normal]">12 Hours Hours, 2023</div>
                <div className="w-[100%] text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-Lexend leading-[normal] font-medium text-[#3a3a3a] text-left flex flex-row justify-between "><h1>Location :</h1> <h1 style={{ "color": sec }} className="w-[65%]  text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px]leading-[normal] tracking-[0.28px] ">New Delhi, India</h1></div>
                <div className="w-[100%] text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-Lexend leading-[normal] font-medium text-[#3a3a3a] text-left flex flex-row justify-between  "><h1>Tithi :</h1> <h1 style={{ "color": sec }} className="w-[65%] text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px]">Krishna Paksha Dwitya upto 07:39</h1></div>
                <div className="w-[100%] text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-Lexend leading-[normal] font-medium text-[#3a3a3a] text-left flex flex-row justify-between  "><h1>Nakshatra :</h1><h1 style={{ "color": sec }} className="w-[65%] text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px]">Bharani upto 18:38</h1></div>
                <div className="w-[100%] text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-Lexend leading-[normal] font-medium text-[#3a3a3a] text-left flex flex-row justify-between  "><h1>Sunrise :</h1><h1 style={{ "color": sec }} className="w-[65%] text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px]">Mesha upto 12:15 AM, October 03</h1></div>
                <div className="w-[100%] text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-Lexend leading-[normal] font-medium text-[#3a3a3a] text-left flex flex-row justify-between  "><h1>Sunset :</h1><h1 style={{ "color": sec }} className="w-[65%] text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px]">Kanya 18:06:30</h1></div>
                </div>
            </>
        )
    }


    function Hour24() {
        return (
            <>
             <div className="space-y-2">
                <div className="w-[100%]   text-[#3a3a3a] text-[color:var(--Black-text-color,#3A3A3A)] text-[18px] font-Lexend  not-italic font-semibold leading-[normal] ">24 Hours Hours, 2023</div>
                <div className="w-[100%] text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-Lexend leading-[normal] font-medium text-[#3a3a3a] text-left flex flex-row justify-between  "><h1>Location :</h1> <h1 style={{ "color": sec }} className="w-[65%] text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px]">New Delhi, India</h1></div>
                <div className="w-[100%] text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-Lexend leading-[normal] font-medium text-[#3a3a3a] text-left flex flex-row justify-between  "><h1>Tithi :</h1> <h1 style={{ "color": sec }} className="w-[65%] text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px]">Krishna Paksha Dwitya upto 07:39</h1></div>
                <div className="w-[100%] text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-Lexend leading-[normal] font-medium text-[#3a3a3a] text-left flex flex-row justify-between  "><h1>Nakshatra :</h1><h1 style={{ "color": sec }} className="w-[65%] text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px]">Bharani upto 18:38</h1></div>
                <div className="w-[100%] text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-Lexend leading-[normal] font-medium text-[#3a3a3a] text-left flex flex-row justify-between  "><h1>Sunrise :</h1><h1 style={{ "color": sec }} className="w-[65%] text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px]">Mesha upto 12:15 AM, October 03</h1></div>
                <div className="w-[100%] text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-Lexend leading-[normal] font-medium text-[#3a3a3a] text-left flex flex-row justify-between  "><h1>Sunset :</h1><h1 style={{ "color": sec }} className="w-[65%] text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px]">Kanya 18:06:30</h1></div>
                </div>
            </>
        )
    }


    function Weeks() {
        return (
            <>
            <div className="space-y-1">

                <div className="w-[100%] text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-Lexend leading-[normal] font-medium text-[#3a3a3a] text-left flex flex-row justify-between  "><h1>WEEKS :</h1> <h1 style={{ "color": sec }} className="w-[65%] text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px]">The Weeks and weeks</h1></div>
                <div className="w-[100%] text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-Lexend leading-[normal] font-medium text-[#3a3a3a] text-left flex flex-row justify-between  "><h1>14 October :</h1> <h1 style={{ "color": sec }} className="w-[65%] text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px]">Sarava pitru amavasya</h1></div>
                <div className="w-[100%] text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-Lexend leading-[normal] font-medium text-[#3a3a3a] text-left flex flex-row justify-between  "><h1>14 October :</h1> <h1 style={{ "color": sec }} className="w-[65%] text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px]">Bharani uptp 18:24, Darsha Amavasiya</h1></div>
                <div className="w-[100%] text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-Lexend leading-[normal] font-medium text-[#3a3a3a] text-left flex flex-row justify-between  "><h1>15 October :</h1><h1 style={{ "color": sec }} className="w-[65%] text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px]">Navratri start (1 Day), Ghatasthapana</h1></div>
                <div className="w-[100%] text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-Lexend leading-[normal] font-medium text-[#3a3a3a] text-left flex flex-row justify-between  "><h1>16 October :</h1><h1 style={{ "color": sec }} className="w-[65%] text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px]">Navratri (2 Day),Chandra Darshana</h1></div>
                <div className="w-[100%] text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-Lexend leading-[normal] font-medium text-[#3a3a3a] text-left flex flex-row justify-between  "><h1>17 October :</h1><h1 style={{ "color": sec }} className="w-[65%] text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px]">Navaratri (3 Day)</h1></div>
                </div>

            </>
        )
    }


    function Months() {
        return (
            <>
 <div className="space-y-1">
                <div className="w-[100%] text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-Lexend leading-[normal] font-medium text-[#3a3a3a] text-left flex flex-row justify-between  "><h1>MONTHS :</h1> <h1 style={{ "color": sec }} className="w-[65%] text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px]">The Months</h1></div>
                <div className="w-[100%] text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-Lexend leading-[normal] font-medium text-[#3a3a3a] text-left flex flex-row justify-between  "><h1>14 October :</h1> <h1 style={{ "color": sec }} className="w-[65%] text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px]">Sarava pitru amavasya</h1></div>
                <div className="w-[100%] text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-Lexend leading-[normal] font-medium text-[#3a3a3a] text-left flex flex-row justify-between  "><h1>14 October :</h1> <h1 style={{ "color": sec }} className="w-[65%] text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px]">Bharani uptp 18:24, Darsha Amavasiya</h1></div>
                <div className="w-[100%] text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-Lexend leading-[normal] font-medium text-[#3a3a3a] text-left flex flex-row justify-between  "><h1>15 October :</h1><h1 style={{ "color": sec }} className="w-[65%] text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px]">Navratri start (1 Day), Ghatasthapana</h1></div>
                <div className="w-[100%] text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-Lexend leading-[normal] font-medium text-[#3a3a3a] text-left flex flex-row justify-between  "><h1>16 October :</h1><h1 style={{ "color": sec }} className="w-[65%] text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px]">Navratri (2 Day),Chandra Darshana</h1></div>
                <div className="w-[100%] text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-Lexend leading-[normal] font-medium text-[#3a3a3a] text-left flex flex-row justify-between  "><h1>17 October :</h1><h1 style={{ "color": sec }} className="w-[65%] text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px]">Navaratri (3 Day)</h1></div>
                </div>

            </>
        )
    }




    return (
        <>
        <div className=" md:flex ">
            {/* MAIN CONTAINER ---START*/}
            <div className="grid grid-cols-1 xl:grid-cols-2   w-[79vw] text-[4vmin] md:w-[91vw] gap-5 h-auto mx-auto my-[2.5vmax]">


                {/* ===================================================================== Today;s Punchage ========================================================================== */}
                {/* 12 HOURS AND 24 HOURS ----START*/}
                <div className="flex flex-col  ">

                    <h1 className=" text-[color:var(--Secondry-Color,#773101)] text-start text-[26px] py-4 font-Lexend not-italic font-semibold leading-[normal] tracking-[0.52px]">Today’s  Panchang</h1>

                    <div className=" shadow-[0px_4px_10px_0px_rgba(174,174,174,0.25)] rounded-[6px]  flex flex-col md:flex-row h-[100%] md:gap-4 md:p-3 p-2 bg-white box-border  border-2 border-transparent hover:border-[#ffa300] transform duration-300 gap-2">
                        <div className="md:w-[48%]  flex justify-center items-center">
                            <img src="/img/panchang.png" alt="the image" className="rounded-lg w-[100%]  h-[98%] sm:h-[100%] " />
                        </div>
                        <div className="md:w-[51%] box-border flex gap-1 flex-col justify-between py-1.5 md:py-0 ">
                            {/* COMP 1 */}
                            <div>
                                <div className="w-[100%] border-[1px]  border-[rgba(50,50,50,0.3)]  bg-gray-100  rounded-md justify-between flex flex-row h-[5.5vmax] lg:h-[4.5vmax] sm:h-[3.9vmax] xl:h-[2.8vmax] p-[2px] box-border">
                                    <button onClick={() => { sethours(true) }} className={` flex justify-center items-center w-[48%] rounded-md  font-Lexend text-[18px] not-italic font-semibold leading-[normal] ${hours ? "bg-[#ffa300]   text-white" : "bg-transparent text-[#3a3a3a]"}`}>12 Hours</button>
                                    <button onClick={() => { sethours(false) }} className={` flex justify-center items-center w-[48%] rounded-md  font-Lexend text-[18px] not-italic font-semibold leading-[normal] ${hours ? "bg-transparent text-[#3a3a3a]" : "bg-[#ffa300]   text-white"}`}>24 Hours</button>

                                </div>
                            </div>

                            {/* COMP 2 */}
                            <div className="flex flex-col text-[1.6vmax] sm:text-[1.8vmax] gap-2 lg:gap-[2vmax] xl:gap-[0.1vmax]">


                                {
                                    hours ? <Hour12 /> : <Hour24 />

                                }

                            </div>

                            {/* COMP 3 */}
                            <div><button className="bg-[#ffa300] rounded-3xl text-[14px] md:text-[0.6em] w-[98%] text-white font-medium py-2 ">Read More</button></div>
                        </div>
                    </div>

                </div>
                {/* 12 HOURS AND 24 HOURS ----END*/}






                {/* ===================================================================== Upcoming Festival ========================================================================== */}


                {/* WEEK AND MONTHLY ---START*/}
                <div className="flex flex-col    ">

                    <h1 className=" text-[color:var(--Secondry-Color,#773101)] text-start text-[26px] py-4 font-Lexend not-italic font-semibold leading-[normal] tracking-[0.52px]">UpComing Festival</h1>

                    <div className="  shadow-[0px_4px_10px_0px_rgba(174,174,174,0.25)] rounded-[6px] border-solid flex flex-col md:flex-row  h-[100%] bg-white   gap-4 p-3 border-2 border-transparent hover:border-[#ffa300] transform  duration-300">
                        <div className="md:w-[48%]">
                            <img src="/img/panchang2.png" alt="the image" className="rounded-lg w-[100%] h-[100%]" />
                        </div>

                        <div className="md:w-[51%] box-border flex gap-2 flex-col justify-between py-1 md:py-0 ">


                            {/* COMPT 1 */}


                            <div>
                                <div className="w-[100%] border-[1px]  border-[rgba(50,50,50,0.3)] bg-gray-100  rounded-md justify-between flex flex-row h-[5.5vmax] lg:h-[4.5vmax] sm:h-[3.9vmax] xl:h-[2.8vmax] p-[2px] box-border">
                                    <button onClick={() => { setweek(true) }} className={` flex justify-center items-center w-[48%] rounded-md  font-Lexend text-[18px] not-italic font-semibold leading-[normal] ${week ? "bg-[#ffa300]   text-white" : "bg-transparent text-[#3a3a3a]"}`}>Week</button>
                                    <button onClick={() => { setweek(false) }} className={` flex justify-center items-center w-[48%] rounded-md  font-Lexend text-[18px] not-italic font-semibold leading-[normal] ${week ? "bg-transparent text-[#3a3a3a]" : "bg-[#ffa300]   text-white"}`}>Month</button>
                                </div>
                            </div>


                            {/* COMPT 2 */}
                            <div className="flex flex-col gap-2 lg:gap-[2vmax] text-[1.6vmax] sm:text-[1.8vmax] xl:gap-[0.1vmax]">

                                {
                                    week ? <Weeks /> : <Months />
                                }
                            </div>


                            {/* COMPT 3 */}
                            <div><button className="bg-[#ffa300] rounded-3xl text-[14px] md:text-[0.6em] w-[98%] text-white font-medium py-2 ">Read More</button></div>
                        </div>
                    </div>


                </div>
                {/* WEEK AND MONTHLY ---END*/}


            </div>
            {/* MAIN CONTAINER ---END*/}
            </div>
        </>
    )
}
export default Panchang;