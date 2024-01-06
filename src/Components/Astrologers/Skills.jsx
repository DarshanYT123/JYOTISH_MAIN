import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Skills = () => {
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
         Skills
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
                id="Vedic"
                type="checkbox"
                name="Vedic"
                value="Vedic"
                class="accent-[#12B28C] w-4 h-4 "
              />
              <label
                for="default-checkbox"
                className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
              >
               Vedic
              </label>
            </div>

            <div className="flex items-center mb-2">
              <input
                id="Astrology"
                type="checkbox"
                name="Astrology"
                value="Astrology"
                class="accent-[#12B28C] w-4 h-4 "
              />
              <label
                for="default-checkbox"
                className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
              >
                Astrology
              </label>
            </div>

            <div className="flex items-center mb-2">
              <input
                id="Vastu"
                type="checkbox"
                name="Vastu"
                value="Vastu"
                class="accent-[#12B28C] w-4 h-4 "
              />
              <label
                for="default-checkbox"
                className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
              >
                Vastu
              </label>
            </div>

            <div className="flex items-center mb-2">
              <input
                id="Prashna"
                type="checkbox"
                name="Prashna"
                value="Prashna"
                class="accent-[#12B28C] w-4 h-4 "
              />
              <label
                for="default-checkbox"
                className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
              >
                Prashna
              </label>
            </div >
            <div className="flex items-center mb-2">
              <input
                id="Kundali"
                type="checkbox"
                name="Kundali"
                value="Kundali"
                class="accent-[#12B28C] w-4 h-4 "
              />
              <label
                for="default-checkbox"
                className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
              >
              Kundali
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                id="Counsellor"
                type="checkbox"
                name="Counsellor"
                value="Counsellor"
                class="accent-[#12B28C] w-4 h-4 "
              />
              <label
                for="default-checkbox"
                className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
              >
              Counsellor
              </label>
            </div>

            <div className="flex items-center mb-2">
              <input
                id="Tarot Reading"
                type="checkbox"
                name="Tarot Reading"
                value="Tarot Reading"
                class="accent-[#12B28C] w-4 h-4 "
              />
              <label
                for="default-checkbox"
                className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
              >
             Tarot Reading
              </label>
            </div>

            <div className="flex items-center mb-2">
              <input
                id="Nadi"
                type="checkbox"
                name="Nadi"
                value="Nadi"
                class="accent-[#12B28C] w-4 h-4 "
              />
              <label
                for="default-checkbox"
                className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
              >
            Nadi
              </label>
            </div>

            <div className="flex items-center mb-2">
              <input
                id="Numerology"
                type="checkbox"
                name="Numerology"
                value="Numerology"
                class="accent-[#12B28C] w-4 h-4 "
              />
              <label
                for="default-checkbox"
                className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
              >
            Numerology
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

export default Skills
