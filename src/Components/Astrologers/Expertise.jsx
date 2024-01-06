import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
const Expertise = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" relative z-10">
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          class="px-4 text-[#FFFF] "
        >
          Expertise
        </button>
        {/* <IoMdArrowDropdown
          size={15}
          className="text-white absolute bottom-[0.1rem] left-[6rem] h-5 w-5"
        /> */}
      </div>
     
      {isOpen ? (
      
        <div class="flex   border-[#FFF] bg-[#FFF] my-5 w-[12rem]  border border-solid shadow-[rgba(141,141,141,0.25)_0px_4px_10px_0px] ">
          <div class="flex flex-col gap-2  cursor-pointer px-2  ">
            
            <div className="flex items-center mb-2">
              <input
                id="Career"
                type="checkbox"
                name="Career"
                value="Career"
                class="accent-[#12B28C] w-4 h-4 "
              />
              <label
                for="default-checkbox"
                className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
              >
                Career
              </label>
            </div>

            <div className="flex items-center mb-2">
              <input
                id="Business"
                type="checkbox"
                name="Business"
                value="Business"
                class="accent-[#12B28C] w-4 h-4 "
              />
              <label
                for="default-checkbox"
                className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
              >
                Business
              </label>
            </div>

            <div className="flex items-center mb-2">
              <input
                id=" Love"
                type="checkbox"
                name="Love"
                value="Love"
                class="accent-[#12B28C] w-4 h-4 "
              />
              <label
                for="default-checkbox"
                className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
              >
                 Love
              </label>
            </div>

            <div className="flex items-center mb-2">
              <input
                id="Relationship"
                type="checkbox"
                name="Relationship"
                value="Relationship"
                class="accent-[#12B28C] w-4 h-4 "
              />
              <label
                for="default-checkbox"
                className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
              >
                Relationship
              </label>
            </div >
            <div className="flex items-center mb-2">
              <input
                id="Gemstone"
                type="checkbox"
                name="Gemstone"
                value="Gemstone"
                class="accent-[#12B28C] w-4 h-4 "
              />
              <label
                for="default-checkbox"
                className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
              >
                Gemstone
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                id="ForeignTravel"
                type="checkbox"
                name="Foreign Travel"
                value="Foreign Travel"
                class="accent-[#12B28C] w-4 h-4 "
              />
              <label
                for="default-checkbox"
                className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
              >
               Foreign Travel
              </label>
            </div>
            </div>
          </div>
        
        
      ) : (
        <></>
      )}
      </div>
    </>
  );
};

export default Expertise;
