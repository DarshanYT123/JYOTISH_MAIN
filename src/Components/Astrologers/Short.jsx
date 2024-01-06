import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Short = () => {
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
      Short
      </button>
      {/* <IoMdArrowDropdown
        size={15}
        className="text-white absolute bottom-[0.1rem] left-[6rem] h-5 w-5"
      /> */}
    </div>
   
    {isOpen ? (
    
      <div class="flex  items-center justify-center border-[#FFF] bg-[#FFF] my-5 w-[16rem]  border border-solid shadow-[rgba(141,141,141,0.25)_0px_4px_10px_0px] ">
        <div class="flex flex-col gap-2  cursor-pointer px-2  ">
          
          <div className="flex items-center mb-2">
            <input
              id="Popularity"
              type="checkbox"
              name="Popularity"
              value="Popularity"
              class="accent-[#12B28C] w-4 h-4 "
            />
            <label
              for="default-checkbox"
              className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
            >
             Popularity
            </label>
          </div>

          <div className="flex items-center mb-2">
            <input
              id=" Experience1"
              type="checkbox"
              name=" Experience : High to Low"
              value=" Experience : High to Low"
              class="accent-[#12B28C] w-4 h-4 "
            />
            <label
              for="default-checkbox"
              className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
            >
              Experience : High to Low
            </label>
          </div>

          <div className="flex items-center mb-2">
            <input
              id="Experience2"
              type="checkbox"
              name="Experience : Low to High"
              value="Experience : Low to High"
              class="accent-[#12B28C] w-4 h-4 "
            />
            <label
              for="default-checkbox"
              className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
            >
            Experience : Low to High
            </label>
          </div>

          <div className="flex items-center mb-2">
            <input
              id="Totalorders1"
              type="checkbox"
              name="Total orders : High to Low"
              value="Total orders : High to Low"
              class="accent-[#12B28C] w-4 h-4 "
            />
            <label
              for="default-checkbox"
              className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
            >
              Total orders : High to Low
            </label>
          </div >
          <div className="flex items-center mb-2">
            <input
              id="Totalorders2"
              type="checkbox"
              name="Total orders : Low to High"
              value="Total orders : Low to High"
              class="accent-[#12B28C] w-4 h-4 "
            />
            <label
              for="default-checkbox"
              className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
            >
          Total orders : Low to High
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              id="Price1"
              type="checkbox"
              name="Price : High to Low"
              value="Price : High to Low"
              class="accent-[#12B28C] w-4 h-4 "
            />
            <label
              for="default-checkbox"
              className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
            >
          Price : High to Low
            </label>
          </div>

          <div className="flex items-center mb-2">
            <input
              id="Price2"
              type="checkbox"
              name="Price : Low to High"
              value="Price : Low to High"
              class="accent-[#12B28C] w-4 h-4 "
            />
            <label
              for="default-checkbox"
              className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
            >
          Price : Low to High
            </label>
          </div>

          <div className="flex items-center mb-2">
            <input
              id="Rating"
              type="checkbox"
              name="Rating : High to Low"
              value="Rating : High to Low"
              class="accent-[#12B28C] w-4 h-4 "
            />
            <label
              for="default-checkbox"
              className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
            >
          Rating : High to Low
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

export default Short