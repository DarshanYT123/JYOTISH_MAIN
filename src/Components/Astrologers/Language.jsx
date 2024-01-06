import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Language = () => {
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
      Language
      </button>
      {/* <IoMdArrowDropdown
        size={15}
        className="text-white absolute bottom-[0.1rem] left-[6rem] h-5 w-5"
      /> */}
    </div>
   
    {isOpen ? (
    
      <div class="flex  items-center justify-center border-[#FFF] bg-[#FFF] my-5 w-[11rem]  border border-solid shadow-[rgba(141,141,141,0.25)_0px_4px_10px_0px] ">
        <div class="flex flex-col gap-2  cursor-pointer px-2  ">
          
          <div className="flex items-center mb-2">
            <input
              id="Hindi"
              type="checkbox"
              name="Hindi"
              value="Hindi"
              class="accent-[#12B28C] w-4 h-4 "
            />
            <label
              for="default-checkbox"
              className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
            >
             Hindi
            </label>
          </div>

          <div className="flex items-center mb-2">
            <input
              id="English"
              type="checkbox"
              name="English"
              value="English"
              class="accent-[#12B28C] w-4 h-4 "
            />
            <label
              for="default-checkbox"
              className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
            >
             English
            </label>
          </div>

          <div className="flex items-center mb-2">
            <input
              id="Gujarati"
              type="checkbox"
              name="Gujarati"
              value="Gujarati"
              class="accent-[#12B28C] w-4 h-4 "
            />
            <label
              for="default-checkbox"
              className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
            >
             Gujarati
            </label>
          </div>

          <div className="flex items-center mb-2">
            <input
              id="Bengali"
              type="checkbox"
              name="Bengali"
              value="Bengali"
              class="accent-[#12B28C] w-4 h-4 "
            />
            <label
              for="default-checkbox"
              className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
            >
              Bengali
            </label>
          </div >
          <div className="flex items-center mb-2">
            <input
              id="Marathi"
              type="checkbox"
              name="Marathi"
              value="Marathi"
              class="accent-[#12B28C] w-4 h-4 "
            />
            <label
              for="default-checkbox"
              className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
            >
           Marathi
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              id="Tamil"
              type="checkbox"
              name="Tamil"
              value="Tamil"
              class="accent-[#12B28C] w-4 h-4 "
            />
            <label
              for="default-checkbox"
              className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
            >
          Tamil
            </label>
          </div>

          <div className="flex items-center mb-2">
            <input
              id="Telugu"
              type="checkbox"
              name="Telugu"
              value="Telugu"
              class="accent-[#12B28C] w-4 h-4 "
            />
            <label
              for="default-checkbox"
              className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
            >
          Telugu
            </label>
          </div>

        

          
          </div>
        </div>
      
      
    ) : (
      <></>
    )}
    </div>
  </>

  )
}

export default Language