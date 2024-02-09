import React from "react";

const LatestReports = () => {

  const latsetreports=[
    {
      image:"./img/Reports2.png",
      title:"2024 Highlights",
    },
    {
      image:"./img/Reports3.png",
      title:"2024 Career",
    },
    {
      image:"./img/Reports2.png",
      title:"2024 Business",
    },
    {
      image:"./img/Reports3.png",
      title:"2024 Detailed Report",
    },
   
  ]
  return (
    <>
      <div className="  md:py-5">
        <div className=" py-3 md:py-10  ">
          <h1 className=" text-left text-[var(--Secondry-Color,#773101)] font-Lexend text-[18px] md:text-[26px] not-italic font-semibold leading-normal">
            Latest Reports
          </h1>
        </div>

        <div className="flex lg:flex-row flex-wrap   md:gap-y-5 gap-y-7 justify-between items-center">
          {latsetreports.map((data,index)=>{
            return(
              <div key={index} className="group" >
                <div className="hover:bg-[#FFA300]  p-[2px]  rounded-[10px] shadow-[rgba(174,174,174,0.25)_0px_4px_10px_0px] ">
            <div className=" max-w-[290px] max-h-[320px] min-w-[290px] min-h-[320px] rounded-[10px]  md:max-w-[300px] md:max-h-[320px] md:min-w-[300px] md:min-h-[320px]  lg:min-w-[300px]  lg:max-w-[300px] lg:max-h-[320px] lg:min-h-[320px]  bg-[#FFF]  ">
            <div className="flex items-center justify-center">
                <img src={data.image}className="py-2 px-4 w-[290px] h-[258px]" />
            </div>
            <div className="py-2 font-Lexend group-hover:text-[#FFA300] text-[#3A3A3A] text-[20px] not-italic font-medium leading-normal">
              <h1>{data.title}</h1>
            </div>
            </div>
        </div>
              </div>
            )
          })}
       

       
      
        

     
        </div>
      </div>
    </>
  );
};

export default LatestReports;
