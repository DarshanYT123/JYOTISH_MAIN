import React, { useState } from "react";
import SunsignDropdown from "../Homepage/SunsignDropdown";
import DailyDropdown from "../Homepage/DailyDropdown";
import SelectOptionDropdown from "../Homepage/SelectOptionDropdown";
const PersonalisedHoroscope = () => {

    //read more 


    // FOR THE ARISE SELECT BUTTON ===========================================================================

    function aric() {
        let selected = document.querySelector("#drop");
        let wrapper = document.querySelector("#wrap1");
        wrapper.classList.toggle("show")
    }

    function se(e) {
        let sel = document.querySelector("#arise");
        // console.log(wra.innerHTML);
        // sel.innerHTML=e.innerHTML;
        console.log(e.target.innerHTML)
        sel.innerHTML=e.target.innerHTML;




    }




    function aric1() {
        let selected = document.querySelector("#drop1");
        let wrapper = document.querySelector("#wrap2");
        wrapper.classList.toggle("show");
    }

    function daily(e) {
        let selected = document.querySelector("#arise1");
        selected.innerHTML = e.target.innerHTML;
    }
    
    
    




    function aric2() {
        let selected = document.querySelector("#drop2");
        let wrapper = document.querySelector("#wrap3");
        wrapper.classList.toggle("show");
    }

    function sele(e) {
        let selected = document.querySelector("#arise2");
        selected.innerHTML = e.target.innerHTML;
    }
    

    const butcol = "#ffa300";
    const parcol = "#3a3a3a";

    // const [selected, setSelected] = useState("Arise");
    // const [selected1, setSelected1] = useState("Daily");
    // const [selected2, setSelected2] = useState("Select Option");


    return (


        <div className=" text-[2vmax] xl:text-[1.2vmax]  border-[0.6px] border-[#A1A1A1] bg-[#fafafa] md:m-3 rounded-xl px-5  lg:py-[3.2vmax]   flex flex-col gap-3 md:gap-5 py-8 p-4 box-border">
            <div style={{ "color": parcol }} className="flex flex-col lg:flex-row md:justify-between font-medium lg:pb-[1vmax] " >
                <p className="text-[color:var(--Black-text-color,#3A3A3A)]  md:py-0 text-[16px] md:text-[26px] font-Lexend not-italic font-medium leading-[normal] ">Your Personalised Horoscope</p>
                <div className="flex flex-row  items-center pt-6  md:pt-6 gap-5 md:gap-4">
                    <p className="text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] md:text-[20px] font-Lexend not-italic font-medium leading-[normal]">Select Your Sun Sign</p>

                    <div id="drop" onClick={() => aric()} className="border-[0.6px] bg-white relative cursor-pointer select-none gap-3 py-2 w-[14vmax] md:w-[14vmax] lg:w-[8.5vmax] justify-center  rounded-md border-[#a1a1a1] flex flex-row">
                        <h1 id="arise text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] font-Lexend not-italic font-medium leading-[normal]" >Arise</h1>
                        <i class="fa-solid fa-sort-down"></i>
                        <div id="wrap1" className=" absolute  cursor-pointer flex-col   hidden  w-full bg-white rounded-md overflow-hidden top-[3.8vmax] z-30">
                            <h1 onClick={(e) => se(e)} className=" z-10 clikc border-l-[3px]  hover:text-[#ffa300]   transform duration-200  py-3 border-transparent hover:border-[#ffa300] px-5">Maris</h1>

                            <h1  onClick={(e)=>se(e)}  className="clikc border-l-[3px]  hover:text-[#ffa300]  transform duration-200  py-3 border-transparent hover:border-[#ffa300] px-5">Vrise</h1>

                            <h1  onClick={(e)=>se(e)} className="clikc border-l-[3px]  hover:text-[#ffa300]  transform duration-200  py-3 border-transparent hover:border-[#ffa300] px-5">Arise</h1>
                        </div>
                    </div>



                </div>
            </div>

            <div className="w-[100%] flex flex-row gap-4  font-medium">




                {/* DAILY SELECT BUTTON */}
                <div id="drop1" onClick={()=>aric1()} className="border-[0.6px] bg-white relative cursor-pointer select-none gap-3 py-2 w-[16vmax] md:w-[14vmax] lg:w-[8.5vmax] justify-center  rounded-md border-[#a1a1a1] flex flex-row">
                    <h1 id="arise1 text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] font-Lexend not-italic font-medium leading-[normal]" >Daily</h1>
                    <i class="fa-solid fa-sort-down"></i>
                    <div id="wrap2" className=" absolute  cursor-pointer flex-col   hidden  w-full bg-white rounded-md overflow-hidden top-[3.8vmax] z-30">
                        <h1  onClick={(e)=>daily(e)}  className=" clikc border-l-[3px]  hover:text-[#ffa300]   transform duration-200  py-3 border-transparent hover:border-[#ffa300] px-5">Weekly</h1>
                        <h1  onClick={(e)=>daily(e)}  className=" clikc border-l-[3px]  hover:text-[#ffa300]   transform duration-200  py-3 border-transparent hover:border-[#ffa300] px-5">Monthly</h1>
                        <h1  onClick={(e)=>daily(e)}  className="clikc border-l-[3px]  hover:text-[#ffa300]  transform duration-200  py-3 border-transparent hover:border-[#ffa300] px-5">Yearly</h1>
                    </div>
                </div>



                {/* SLECT OPTION SELECT BUTTON */}
                <div id="drop2"  onClick={()=>aric2()}  className="border-[0.6px] bg-white relative cursor-pointer select-none gap-3 py-2 w-[20vmax] md:w-[20vmax] lg:w-[12vmax] justify-center  rounded-md border-[#a1a1a1] flex flex-row">
                    <h1 id="arise2 text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] font-Lexend not-italic font-medium leading-[normal]" >Select Option</h1>
                    <i class="fa-solid fa-sort-down"></i>
                    <div id="wrap3" className=" absolute  cursor-pointer flex-col   hidden  w-full bg-white rounded-md overflow-hidden top-[3.8vmax] z-30">
                        <h1  onClick={(e)=>sele(e)}  className=" clikc border-l-[3px]  hover:text-[#ffa300]   transform duration-200  py-3 border-transparent hover:border-[#ffa300] px-5">Buissness</h1>
                        <h1   onClick={(e)=>sele(e)}  className="clikc border-l-[3px]  hover:text-[#ffa300]  transform duration-200  py-3 border-transparent hover:border-[#ffa300] px-5">Relationship</h1>
                        <h1  onClick={(e)=>sele(e)} className="clikc border-l-[3px]  hover:text-[#ffa300]  transform duration-200  py-3 border-transparent hover:border-[#ffa300] px-5">Finance</h1>
                        <h1  onClick={(e)=>sele(e)}  className="clikc border-l-[3px]  hover:text-[#ffa300]  transform duration-200  py-3 border-transparent hover:border-[#ffa300] px-5">Health</h1>
                    </div>
                </div>

            </div>



<div className="rounded-[4px] bg-white border-[0.6px] border-solid border-[rgba(161,161,161,0.40)]">
            <p className=" text-[color:var(--Black-text-color,#3A3A3A)] p-3 md:p-7  text-left md:text-justify lg:text-start text-[16px] font-Poppins not-italic font-normal leading-[189.023%] tracking-[0.96px]  " style={{ "color": parcol }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi eligendi veniam veritatis adipisci placeat nam hic quas amet minima saepe delectus dolorem itaque quae iste perspiciatis iusto sunt non consectetur, ab iure, ipsam rem? Ratione distinctio quam officiis necessitatibus omnis voluptate quasi unde repudiandae exercitationem provident sed fugiat sunt nisi, enim explicabo architecto deleniti, temporibus commodi quas magnam incidunt placeat qui iure saepe. Quod nulla voluptate nihil, vitae temporibus ea amet ut impedit obcaecati excepturi molestiae ab rerum tempore odio!
            </p>
            </div>
            <div className="text-left">
                <button className="text-white font-medium px-9 py-2 rounded-3xl" style={{ "backgroundColor": butcol }}>Read More</button>
            </div>
        </div>
        //     <div className=" bg-[#F3F3F3]  py-10">
        //       <div className="px-16  ">
        //         <div className="flex flex-col md:flex-col  lg:flex-row   lg:gap-[25.5rem] md:mx-auto">
        //           <div className=" py-5">
        //             <h1 className=" truncate text-black  text-[26px] not-italic font-medium leading-normal">
        //               {" "}
        //               Your Personalised Horoscope
        //             </h1>
        //           </div>
        //           <div className="flex flex-col md:flex-col lg:flex-row lg:gap-5 md:mx-auto ">
        //             <label className=" text-[#3A3A3A] text-[26px] not-italic font-medium leading-normal">
        //               Select Your Sun Sign
        //             </label>
        //             <div className="pt-5 md:pt-5 lg:pt-0 ml-5 lg:ml-0 md:ml-0">
        //             <SunsignDropdown selected={selected} setSelected={setSelected}  / >
        //             </div>
        //           </div>
        //         </div>

        //         <div className="flex flex-col md:flex-col lg:flex-row gap-y-10  lg:gap-20 py-5 items-center justify-ceneter">
        //           <DailyDropdown selected1={selected1} setSelected1={setSelected1} />
        //           <SelectOptionDropdown
        //             selected2={selected2}
        //             setSelected2={setSelected2}
        //           />
        //         </div>

        //           <div className="   ">
        //             <div className="flex items-start justify-start overflow-y-auto h-32 lg:overflow-y-hidden md:overflow-y-hidden  max-w-[300px] max-h-[500px] min-w-[300px] min-h-[500px]  lg:max-w-[1216px] lg:max-h-[230px] md:max-w-[600px] md:max-h-[260px] md:min-w-[600px] md:min-h-[[260px] lg:min-w-[1216px] lg:min-h-[210px]  border border-[var(--grey-1,#A1A1A1)] bg-[#FAFAFA] ">

        //            <div className="p-5 py-5 font-Poppins ">
        //                 <p className=" text-justify text-[var(--Black-text-color,#3A3A3A) font-Poppins]
        //                 text-[16px] not-italic font-normal leading-[189.023%] tracking-[0.96px] ">
        //                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        //                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        //                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        //                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        //                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        //                   Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet , 
        //                   Lorem ipsum dolor sit ametLorem ipsum dolor sit amet,
        //                    consectetur adipiscing elit.Lorem ipsum dolor sit amet, 
        //                    consectetur adipiscing elit.Lorem ipsum dolor sit amet, 
        //                    consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        //                     consectetur adipiscing elit.Lorem ipsum dolor sit amet, 
        //                     consectetur adipiscing elit.Lorem ipsum dolor sit amet, 
        //                     Lorem ipsum dolor sit amet , Lorem ipsum dolor sit amet</p>
        //               </div>
        //             </div>
        // {/*           
        //             <div className="py-5 flex justify-left items-left ">
        //               <button className="text-[#FFF] font-Lexend text-[16px] not-italic font-semibold leading-normal bg-[var(--Sky-Blue,#04B4DB)] border rounded-[34px] py-2 px-10">Read More</button>
        //             </div> */}


        //           </div>
        //           <div className="py-5 flex justify-left items-left ">
        //               <button className="text-[#FFF] font-Lexend text-[16px] not-italic font-semibold leading-normal bg-[var(--Sky-Blue,#04B4DB)] border rounded-[34px] py-2 px-10">Read More</button>
        //             </div>

        //       </div>
        //     </div>
    );
};

export default PersonalisedHoroscope;
