import React,{useState} from "react";

const ViewHoroscope = () => {
    const ClientData = [
        {
          title: `PTI Global`,
          describe: `June 21 - July 20`,
          style: `bg-gradient-to-r from-[#F05225] to-[#EEA820]`,
          imgSrc: `/img/h1.svg`,
          border_color: "border-[#F05225]",
        },
        {
          title: `RK Paint`,
          describe: `June 21 - July 20`,
          style: `bg-gradient-to-r from-[#FF63F9] via-[#E41EAD] to-[#FF008D]`,
          imgSrc: `/img/h2.svg`,
          border_color: "border-[#E41EAD]",
        },
        {
          title: `Pramukh Avenue`,
          describe: `June 21 - July 20`,
          style: `bg-gradient-to-r from-[#3D7800] to-[#7FBB42]`,
          imgSrc: `/img/h3.svg`,
          border_color: "border-[#3D7800]",
        },
        {
          title: `Biorganics`,
          describe: `June 21 - July 20`,
          style: `bg-gradient-to-r from-[#0038FF] to-[#9747FF]`,
          imgSrc: `/img/h4.svg`,
          border_color: "border-[#0038FF]",
        },
        {
          title: `Ashok Pan House`,
          describe: `June 21 - July 20`,
          style: `bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]`,
          imgSrc: `/img/h5.svg`,
          border_color: "border-[#0DA1DA]",
        },
        {
          title: `Aurum`,
          describe: `June 21 - July 20`,
          style: `bg-gradient-to-r from-[#E10E8C] to-[#520C43]`,
          border_color: "border-[#E10E8C]",
          imgSrc: `/img/h6.svg`,
        },
        {
            title: `Aurum`,
            describe: `June 21 - July 20`,
            style: `bg-gradient-to-r from-[#E10E8C] to-[#520C43]`,
            border_color: "border-[#E10E8C]",
            imgSrc: `/img/h7.svg`,
          },
          {
            title: `Aurum`,
            describe: `June 21 - July 20`,
            style: `bg-gradient-to-r from-[#E10E8C] to-[#520C43]`,
            border_color: "border-[#E10E8C]",
            imgSrc: `/img/h8.svg`,
          },

          {
            title: `Aurum`,
            describe: `June 21 - July 20`,
            style: `bg-gradient-to-r from-[#E10E8C] to-[#520C43]`,
            border_color: "border-[#E10E8C]",
            imgSrc: `/img/h9.svg`,
          },

          {
            title: `Aurum`,
            describe: `June 21 - July 20`,
            style: `bg-gradient-to-r from-[#E10E8C] to-[#520C43]`,
            border_color: "border-[#E10E8C]",
            imgSrc: `/img/h10.svg`,
          },
          ];
    
  return (
    <div className="">
    <div className="py-5 md:py-5">
    <h1 className=" text-left text-[var(--Secondry-Color,#773101)] font-Lexend text-[18px] md:text-[26px] not-italic font-semibold leading-normal">
    View Your Horoscope
        </h1>
  </div>

  <div className="grid  grid-cols-6 gap-5 overflow-hidden ">
                
                <div className=" w-[180px] h-[180px] rounded-[12px] shadow-[#A1A1A180] shadow-inner  flex justify-center items-center p-2  " >
                  <div className=" ">
                  <div className="flex flex-row justify-center items-center   ">
                    <img
                      className="w-[5rem]"
                      src="/img/h1.svg"
                      alt="Bonnie"
                    />
                  </div>
                  <div className="flex justify-center items-center  mt-3">
                      <p className="text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.24px]">Arise</p>
                    </div>
                    <p className="mt-3  flex justify-center items-center text-black text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.24px]">
                    March 21 - April 20
                    </p>
                  </div>
                </div>
                <div className=" w-[180px] h-[180px] rounded-[12px] shadow-[#A1A1A180] shadow-inner  flex justify-center items-center p-2  " >
                  <div className=" ">
                  <div className="flex flex-row justify-center items-center   ">
                    <img
                      className="w-[5rem]"
                      src="/img/h2.svg"
                      alt="Bonnie"
                    />
                  </div>
                  <div className="flex justify-center items-center  mt-3">
                      <p className="text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.24px]">Taurus</p>
                    </div>
                    <p className="mt-3  flex justify-center items-center text-black text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.24px]">
                    April 21 - May 20
                    </p>
                  </div>
                </div>
                <div className=" w-[180px] h-[180px] rounded-[12px] shadow-[#A1A1A180] shadow-inner  flex justify-center items-center p-2  " >
                  <div className=" ">
                  <div className="flex flex-row justify-center items-center   ">
                    <img
                      className="w-[4rem]"
                      src="/img/h3.svg"
                      alt="Bonnie"
                    />
                  </div>
                  <div className="flex justify-center items-center  mt-3">
                      <p className="text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.24px]">Gemini</p>
                    </div>
                    <p className="mt-3  flex justify-center items-center text-black text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.24px]">
                    May 21 - June 20
                    </p>
                  </div>
                </div>
                <div className=" w-[180px] h-[180px] rounded-[12px] shadow-[#A1A1A180] shadow-inner  flex justify-center items-center p-2  " >
                  <div className=" ">
                  <div className="flex flex-row justify-center items-center   ">
                    <img
                      className="w-[6rem]"
                      src="/img/h4.svg"
                      alt="Bonnie"
                    />
                  </div>
                  <div className="flex justify-center items-center  mt-3">
                      <p className="text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.24px]">Cancer</p>
                    </div>
                    <p className="mt-3  flex justify-center items-center text-black text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.24px]">
                    June 21 - July 20
                    </p>
                  </div>
                </div>
                <div className=" w-[180px] h-[180px] rounded-[12px] shadow-[#A1A1A180] shadow-inner  flex justify-center items-center p-2  " >
                  <div className=" ">
                  <div className="flex flex-row justify-center items-center   ">
                    <img
                      className="w-[4rem]"
                      src="/img/h5.svg"
                      alt="Bonnie"
                    />
                  </div>
                  <div className="flex justify-center items-center  mt-3">
                      <p className="text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.24px]">Leo</p>
                    </div>
                    <p className="mt-3  flex justify-center items-center text-black text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.24px]">
                    July 21 - Agust 20
                    </p>
                  </div>
                </div>
                <div className=" w-[180px] h-[180px] rounded-[12px] shadow-[#A1A1A180] shadow-inner  flex justify-center items-center p-2  " >
                  <div className=" ">
                  <div className="flex flex-row justify-center items-center   ">
                    <img
                      className="w-[4rem]"
                      src="/img/h6.svg"
                      alt="Bonnie"
                    />
                  </div>
                  <div className="flex justify-center items-center  mt-3">
                      <p className="text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.24px]">Virgo</p>
                    </div>
                    <p className="mt-3  flex justify-center items-center text-black text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.24px]">
                    July 21 - Agust 20
                    </p>
                  </div>
                </div>

                {/* Part 2 */}

                <div className=" w-[180px] h-[180px] rounded-[12px] shadow-[#A1A1A180] shadow-inner  flex justify-center items-center p-2  " >
                  <div className=" ">
                  <div className="flex flex-row justify-center items-center   ">
                    <img
                      className="w-[5rem]"
                      src="/img/h1.svg"
                      alt="Bonnie"
                    />
                  </div>
                  <div className="flex justify-center items-center  mt-3">
                      <p className="text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.24px]">Arise</p>
                    </div>
                    <p className="mt-3  flex justify-center items-center text-black text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.24px]">
                    March 21 - April 20
                    </p>
                  </div>
                </div>
                <div className=" w-[180px] h-[180px] rounded-[12px] shadow-[#A1A1A180] shadow-inner  flex justify-center items-center p-2  " >
                  <div className=" ">
                  <div className="flex flex-row justify-center items-center   ">
                    <img
                      className="w-[5rem]"
                      src="/img/h2.svg"
                      alt="Bonnie"
                    />
                  </div>
                  <div className="flex justify-center items-center  mt-3">
                      <p className="text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.24px]">Taurus</p>
                    </div>
                    <p className="mt-3  flex justify-center items-center text-black text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.24px]">
                    April 21 - May 20
                    </p>
                  </div>
                </div>
                <div className=" w-[180px] h-[180px] rounded-[12px] shadow-[#A1A1A180] shadow-inner  flex justify-center items-center p-2  " >
                  <div className=" ">
                  <div className="flex flex-row justify-center items-center   ">
                    <img
                      className="w-[4rem]"
                      src="/img/h3.svg"
                      alt="Bonnie"
                    />
                  </div>
                  <div className="flex justify-center items-center  mt-3">
                      <p className="text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.24px]">Gemini</p>
                    </div>
                    <p className="mt-3  flex justify-center items-center text-black text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.24px]">
                    May 21 - June 20
                    </p>
                  </div>
                </div>
                <div className=" w-[180px] h-[180px] rounded-[12px] shadow-[#A1A1A180] shadow-inner  flex justify-center items-center p-2  " >
                  <div className=" ">
                  <div className="flex flex-row justify-center items-center   ">
                    <img
                      className="w-[6rem]"
                      src="/img/h4.svg"
                      alt="Bonnie"
                    />
                  </div>
                  <div className="flex justify-center items-center  mt-3">
                      <p className="text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.24px]">Cancer</p>
                    </div>
                    <p className="mt-3  flex justify-center items-center text-black text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.24px]">
                    June 21 - July 20
                    </p>
                  </div>
                </div>
                <div className=" w-[180px] h-[180px] rounded-[12px] shadow-[#A1A1A180] shadow-inner  flex justify-center items-center p-2  " >
                  <div className=" ">
                  <div className="flex flex-row justify-center items-center   ">
                    <img
                      className="w-[4rem]"
                      src="/img/h5.svg"
                      alt="Bonnie"
                    />
                  </div>
                  <div className="flex justify-center items-center  mt-3">
                      <p className="text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.24px]">Leo</p>
                    </div>
                    <p className="mt-3  flex justify-center items-center text-black text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.24px]">
                    July 21 - Agust 20
                    </p>
                  </div>
                </div>
                <div className=" w-[180px] h-[180px] rounded-[12px] shadow-[#A1A1A180] shadow-inner  flex justify-center items-center p-2  " >
                  <div className=" ">
                  <div className="flex flex-row justify-center items-center   ">
                    <img
                      className="w-[4rem]"
                      src="/img/h6.svg"
                      alt="Bonnie"
                    />
                  </div>
                  <div className="flex justify-center items-center  mt-3">
                      <p className="text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.24px]">Virgo</p>
                    </div>
                    <p className="mt-3  flex justify-center items-center text-black text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.24px]">
                    July 21 - Agust 20
                    </p>
                  </div>
                </div>

      </div>



</div>   
  );
};

export default ViewHoroscope
