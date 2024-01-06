import React, { useState } from "react";
import SunsignDropdown from "../Homepage/SunsignDropdown";
import DailyDropdown from "../Homepage/DailyDropdown";
import SelectOptionDropdown from "../Homepage/SelectOptionDropdown";
const PersonalisedHoroscope = () => {

//read more 

const butcol = "#ffa300";
const parcol = "#3a3a3a";

  const [selected, setSelected] = useState("Arise");
  const [selected1, setSelected1] = useState("Daily");
  const [selected2, setSelected2] = useState("Select Option");
  return (
    <div className=" text-[2vmax] xl:text-[1.2vmax]  border-2 border-[#ffa300] md:m-3 rounded-xl mx-[0.5vmax] xl:mx-[5.3vmax] lg:py-[3.2vmax]  lg:px-[1.9vmax] flex flex-col gap-5 py-8 p-4 box-border">
    <div style={{ "color": parcol }} className="flex flex-col lg:flex-row md:justify-between font-medium lg:pb-[1vmax] " >
        <p className="text-[1.4em] pb-3 ">Your Personalised Horoscope</p>
        <div className="flex flex-row  items-center gap-4">
            <p className="text-[1.1em]">Select Your Sun Sign</p>
            <select name="sun" id="sun" className="p-2 px-4 box-border  rounded-lg border-2 border-[rgba(204,204,204)] ">
                <option value="Arise">
                    <a href="#">Arise</a>
                </option>
                <option value="Arise">
                    <a href="#">Arise1</a>
                </option>
                <option value="Arise">
                    <a href="#">Arise2</a>
                </option>
            </select>
        </div>
    </div>
    <div className="w-[100%] flex flex-row gap-4  font-medium">
        <select name="daily" id="daily" className="p-2 px-4 box-border  rounded-lg border-2 border-[rgba(204,204,204)] ">
            <option value="Daily">Daily</option>
            <option value="Monthly">Monthly</option>
        </select>
        <select name="daily" id="daily" className="p-2 px-4 rounded-lg border-2 border-[rgba(204,204,204)] ">
            <option value="Daily">Select Option</option>
            <option value="Monthly">Monthly</option>
        </select>
    </div>
    <div className=" text-justify w-[100%] box-border p-3 border-2 border-[rgba(204,204,204)] rounded-xl bg-[rgb(250,250,250)]" style={{ "color": parcol }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi eligendi veniam veritatis adipisci placeat nam hic quas amet minima saepe delectus dolorem itaque quae iste perspiciatis iusto sunt non consectetur, ab iure, ipsam rem? Ratione distinctio quam officiis necessitatibus omnis voluptate quasi unde repudiandae exercitationem provident sed fugiat sunt nisi, enim explicabo architecto deleniti, temporibus commodi quas magnam incidunt placeat qui iure saepe. Quod nulla voluptate nihil, vitae temporibus ea amet ut impedit obcaecati excepturi molestiae ab rerum tempore odio!
    </div>
    <div>
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
