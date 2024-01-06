import React,{useState} from "react";
import { Link } from "react-router-dom";
import TabNavItem from "../TabNavItem/TabNavItem";
import TabContent from "../TabContent/TabContent";

const Panchang = ({ color }) => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [activeTabid, setActiveTabid] = useState("tab3");

  const [openTab, setOpenTab] = React.useState(1);
  const [openNextprev, setOpenNextprev] = React.useState(1);
  return (
      <div className=" px-4 md:px-16 lg:px-16 py-10 ">
        <div className="flex gap-[24rem] py-3 ">
          <div className="hidden md:hidden lg:block ">
            <h1 className=" font-Lexend text-[var(--Secondry-Color,#773101)] text-[18px] md:text-[26px] not-italic font-semibold leading-normal tracking-[0.52px]">
              Today’s Panchang
            </h1>
          </div>
          <div className="hidden md:hidden lg:block">
            <h1 className="font-Lexend text-[var(--Secondry-Color,#773101)] text-[18px] md:text-[26px] not-italic font-semibold leading-normal tracking-[0.52px]">
              UpComing Festival
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 lg:gap-5 gap-y-10  justify-center items-center">
        <div className="block md:block lg:hidden ">
            <h1 className=" font-Lexend text-[var(--Secondry-Color,#773101)] text-[26px] not-italic font-semibold leading-normal tracking-[0.52px]">
              Today’s Panchang
            </h1>
          </div>
          <div className="border border-[var(--grey-1,#A1A1A1)] hover:border-[#FFA300] rounded-[6px] bg-[var(--Pure-White,#FFF)]  max-w-[350px] max-h-[350px] min-w-[350px] min-h-[350px]  md:max-w-[585px] md:max-h-[350px] md:min-w-[585px] md:min-h-[350px]  lg:min-w-[600px]  lg:max-w-[600px] lg:max-h-[350px] lg:min-h-[350px] shadow-[rgba(174,174,174,0.25)_0px_4px_10px_0px] ">
            <div className="flex gap-2">
              <div className="hidden md:block lg:block">
                <img
                  src="/img/panchang.png"
                  className="w-[25rem] h-[340px] py-2 px-2"
                  alt="panchang"
                />
              </div>
              <div className="px-2 py-2">
              <ul className="flex flex-row items-center justify-between bg-[#F5F5F5] shadow-[0px_4px_12px_0px_rgba(157,157,157,0.18)_inset] rounded-[3px] overflow-hidden ">
        <TabNavItem
          title="12 Hours"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="24 Hours"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>
      <TabContent id="tab1" activeTab={activeTab}>
                <div className="">
                <div className="date  flex items-left justify-left">
                  <span className="font-Lexend text-left text-[var(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-semibold leading-normal">Monday, 2 October, 2023</span>
                </div>
                <div className="flex flex-row gap-8 py-1.5">
                <span className="font-Lexend text-[(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-medium leading-normal">Location :</span>
                <span className="text-justify font-Poppins text-[14px] not-italic font-normal leading-normal tracking-[0.28px]">New Delhi, India </span>
              </div>
              <div className="flex flex-row gap-16 py-1.5">
                <span className="font-Lexend text-[(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-medium leading-normal">
                Tithi:
                  </span>
                <span className="text-justify font-Poppins text-[14px] not-italic font-normal leading-normal tracking-[0.28px]">
                Krishna Paksha Dwitiya  upto 07:36
                   </span>
              </div>
              <div className="flex flex-row gap-3 py-1.5">
                <span className="font-Lexend text-[(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-medium leading-normal">
                Nakshatra :
                  </span>
                <span className=" text-justify font-Poppins text-[14px] not-italic font-normal leading-normal tracking-[0.28px]">
                Bharani upto 18:24 
                  </span>
              </div>
              <div className="flex flex-row gap-9 py-1.5">
                <span className="font-Lexend text-[(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-medium leading-normal">
                Sunrise:
                  </span>
                <span className=" text-justifyfont-Poppins text-[14px] not-italic font-normal leading-normal tracking-[0.28px]">
                Mesha upto 12:15 AM, Oct 03  
                  </span>
              </div>
              <div className="flex flex-row gap-9 py-1.5">
                <span className="  font-Lexend text-[(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-medium leading-normal">
                Sunset :
                  </span>
                <span className="text-justify font-Poppins text-[14px] not-italic font-normal leading-normal tracking-[0.28px]">
                Kanya upto 18:06:30
                  </span>
              </div>
              <div className="readmmorebtn py-2 font-Lexend text-[#FFF] text-[16px] not-italic font-semibold leading-[normal]">
                <button className="border bg-[var(--Main-Color,#FFA300)]   rounded-[34px] px-20 py-1.5">Read More</button>
              </div> 
                </div>
                </TabContent>
                <TabContent id="tab2" activeTab={activeTab}>
                <div className="">
                <div className="date flex items-left justify-left">
                  <span className="font-Lexend text-left text-[var(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-semibold leading-normal">Monday, 2 October, 2023</span>
                </div>
                <div className="flex flex-row gap-8 py-1.5">
                <span className="font-Lexend text-[(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-medium leading-normal">Location :</span>
                <span className="text-justify font-Poppins text-[14px] not-italic font-normal leading-normal tracking-[0.28px]">New Delhi, India </span>
              </div>
              <div className="flex flex-row gap-16 py-1.5">
                <span className="font-Lexend text-[(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-medium leading-normal">
                Tithi:
                  </span>
                <span className="text-justify font-Poppins text-[14px] not-italic font-normal leading-normal tracking-[0.28px]">
                Krishna Paksha Dwitiya  upto 07:36
                   </span>
              </div>
              <div className="flex flex-row gap-3 py-1.5">
                <span className="font-Lexend text-[(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-medium leading-normal">
                Nakshatra :
                  </span>
                <span className=" text-justify font-Poppins text-[14px] not-italic font-normal leading-normal tracking-[0.28px]">
                Bharani upto 18:24 
                  </span>
              </div>
              <div className="flex flex-row gap-9 py-1.5">
                <span className="font-Lexend text-[(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-medium leading-normal">
                Sunrise:
                  </span>
                <span className=" text-justifyfont-Poppins text-[14px] not-italic font-normal leading-normal tracking-[0.28px]">
                Mesha upto 12:15 AM, Oct 03  
                  </span>
              </div>
              <div className="flex flex-row gap-9 py-1.5">
                <span className="  font-Lexend text-[(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-medium leading-normal">
                Sunset :
                  </span>
                <span className="text-justify font-Poppins text-[14px] not-italic font-normal leading-normal tracking-[0.28px]">
                Kanya upto 18:06:30
                  </span>
              </div>
              <div className="readmmorebtn py-2 font-Lexend text-[#FFF] text-[16px] not-italic font-semibold leading-[normal]">
                <button className="border bg-[var(--Main-Color,#FFA300)]   rounded-[34px] px-20 py-1.5">Read More</button>
              </div> 
                </div>
                </TabContent>
             

              </div>
             
            </div>

            
            
          </div>

         
          {/* seond card */}
          <div className="block md:block lg:hidden">
            <h1 className="font-Lexend text-[var(--Secondry-Color,#773101)] text-[26px] not-italic font-semibold leading-normal tracking-[0.52px]">
              UpComing Festival
            </h1>
          </div>
          <div className="border border-[var(--grey-1,#A1A1A1)] hover:border-[#FFA300]  rounded-[6px] bg-[var(--Pure-White,#FFF)]  max-w-[350px] max-h-[350px] min-w-[350px] min-h-[350px]  md:max-w-[585px] md:max-h-[350px] md:min-w-[585px] md:min-h-[350px]  lg:min-w-[610px]  lg:max-w-[610px] lg:max-h-[350px] lg:min-h-[350px] shadow-[rgba(174,174,174,0.25)_0px_4px_10px_0px] ">
          
          <div className="flex gap-2 ">
              <div className="hidden md:block lg:block">
                <img
                  src="/img/panchang2.png"
                  className="w-[25rem] h-[340px] py-2 px-2"
                  alt="panchang"
                />
              </div>
              <div className="px-2 py-2">
              <ul className="flex flex-row items-center justify-between bg-[#F5F5F5] shadow-[0px_4px_12px_0px_rgba(157,157,157,0.18)_inset] rounded-[3px] overflow-hidden ">
        <TabNavItem
          title="Week"
          id="tab3"
          activeTab={activeTabid}
          setActiveTab={setActiveTabid}
        />
        <TabNavItem
          title="Month"
          id="tab4"
          activeTab={activeTabid}
          setActiveTab={setActiveTabid}
        />
      </ul>
<TabContent id="tab3" activeTab={activeTabid}>
                <div className="">
                    <div className="flex flex-row gap-4 px-2 py-1">
                <span className="font-Lexend text-[(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-medium leading-normal">
                7October:
                  </span>
                <span className="text-justify font-Poppins text-[14px] not-italic font-normal leading-normal tracking-[0.28px]">
                The Maha Navaratri
                   </span>
              </div>
              <div className="flex flex-row gap-4 py-1 px-2">
                <span className="font-Lexend text-[(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-medium leading-normal">
                14october:
                  </span>
                <span className="text-justify font-Poppins text-[14px] not-italic font-normal leading-normal tracking-[0.28px]">
                Sarva pitru amavasya 
                   </span>
              </div>
              <div className="flex flex-row gap-4  py-1 px-2 ">
                <span className="font-Lexend text-[(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-medium leading-normal">
                14october:
                  </span>
                <span className=" text-justify font-Poppins text-[14px] not-italic font-normal leading-normal tracking-[0.28px]">
                Bharani upto 18:24,Darsha Amavasiya
                  </span>
              </div>
              <div className="flex flex-row gap-4 py-1 px-2">
                <span className="font-Lexend text-[(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-medium leading-normal">
                15october:
                  </span>
                <span className="text-justify font-Poppins text-[14px] not-italic font-normal leading-normal tracking-[0.28px]">
                Navaratri starte (1 Day), Ghatasthapana
                  </span>
              </div>
              <div className="flex flex-row gap-4 py-1 px-2">
                <span className="  font-Lexend text-[(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-medium leading-normal">
                16october:
                  </span>
                <span className="text-justify font-Poppins text-[14px] not-italic font-normal leading-normal tracking-[0.28px]">
                Navaratri (2 Day),Chandra Darshana
                  </span>
              </div>
              <div className="flex flex-row gap-4 py-1 px-2">
                <span className="  font-Lexend text-[(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-medium leading-normal">
                17october:
                  </span>
                <span className="text-justify font-Poppins text-[14px] not-italic font-normal leading-normal tracking-[0.28px]">
                Navaratri (3 Day)
                  </span>
              </div>


              
              <div className="readmmorebtn py-1 font-Lexend text-[#FFF] text-[16px] not-italic font-semibold leading-[normal]">
                <button className="border bg-[var(--Main-Color,#FFA300)]  rounded-[34px] px-20 py-1.5">Read More</button>
              </div>
                  </div>
                  </TabContent>
                  <TabContent id="tab4" activeTab={activeTabid}>
                  <div className="">
                    <div className="flex flex-row gap-4 px-2 py-1">
                <span className="font-Lexend text-[(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-medium leading-normal">
                7October:
                  </span>
                <span className="text-justify font-Poppins text-[14px] not-italic font-normal leading-normal tracking-[0.28px]">
                The Maha Navaratri
                   </span>
              </div>
              <div className="flex flex-row gap-4 py-1 px-2">
                <span className="font-Lexend text-[(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-medium leading-normal">
                14october:
                  </span>
                <span className="text-justify font-Poppins text-[14px] not-italic font-normal leading-normal tracking-[0.28px]">
                Sarva pitru amavasya 
                   </span>
              </div>
              <div className="flex flex-row gap-4  py-1 px-2 ">
                <span className="font-Lexend text-[(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-medium leading-normal">
                14october:
                  </span>
                <span className=" text-justify font-Poppins text-[14px] not-italic font-normal leading-normal tracking-[0.28px]">
                Bharani upto 18:24,Darsha Amavasiya
                  </span>
              </div>
              <div className="flex flex-row gap-4 py-1 px-2">
                <span className="font-Lexend text-[(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-medium leading-normal">
                15october:
                  </span>
                <span className="text-justify font-Poppins text-[14px] not-italic font-normal leading-normal tracking-[0.28px]">
                Navaratri starte (1 Day), Ghatasthapana
                  </span>
              </div>
              <div className="flex flex-row gap-4 py-1 px-2">
                <span className="  font-Lexend text-[(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-medium leading-normal">
                16october:
                  </span>
                <span className="text-justify font-Poppins text-[14px] not-italic font-normal leading-normal tracking-[0.28px]">
                Navaratri (2 Day),Chandra Darshana
                  </span>
              </div>
              <div className="flex flex-row gap-4 py-1 px-2">
                <span className="  font-Lexend text-[(--Black-text-color,#3A3A3A)] text-[16px] not-italic font-medium leading-normal">
                17october:
                  </span>
                <span className="text-justify font-Poppins text-[14px] not-italic font-normal leading-normal tracking-[0.28px]">
                Navaratri (3 Day)
                  </span>
              </div>


              
              <div className="readmmorebtn py-2 font-Lexend text-[#FFF] text-[16px] not-italic font-semibold leading-[normal]">
                <button className="border bg-[var(--Main-Color,#FFA300)]  rounded-[34px] px-20 py-1.5">Read More</button>
              </div>
                  </div>
                  </TabContent>
              </div>
             
            </div>
            

          </div>
        </div>
      </div>
  );
};

export default Panchang
