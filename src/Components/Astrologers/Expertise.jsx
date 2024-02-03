import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
const Expertise = () => {
  // Sample list of items
  
  const items = [
    { id: 1, name: 'Item 1', category: 'Career' },
    { id: 2, name: 'Item 2', category: 'Business' },
    { id: 3, name: 'Item 3', category: 'Career' },
    { id: 4, name: 'Item 4', category: 'Love' },
    { id: 5, name: 'Item 5', category: 'Love' },
    { id: 6, name: 'Item 5', category: 'Relationship' },
    { id: 7, name: 'Item 5', category: 'Gemstone' },
    { id: 8, name: 'Item 5', category: 'ForeignTravel' },
   
    
   
    // ... more items
  ];

  // State to keep track of selected checkboxes
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Function to handle checkbox changes
  const handleCheckboxChange = (category) => {
    if (selectedCategories.includes(category)) {
      // If category is already selected, remove it
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((prevCategory) => prevCategory !== category)
      );
    } else {
      // If category is not selected, add it
      setSelectedCategories((prevCategories) => [...prevCategories, category]);
    }
  };

  // Filter the items based on selected categories
  const filteredItems = items.filter((item) =>
    selectedCategories.length === 0
      ? true // Show all items if no category is selected
      : selectedCategories.includes(item.category)
  );

console.log(filteredItems)
  return (
    <>
    
    <div className="group relative z-10 inline-block">
    <div>
        <button
          //onClick={() => setIsOpen(!isOpen)}
          type="button"
          class="lg:px-4 md:px-2 text-[#FFFF] lg:text-[18px] md:text-[16px] cursor-pointer "
        >
          Expertise
        </button>
        <IoMdArrowDropdown
          size={15}
          className="text-white absolute lg:bottom-[0.05rem] lg:left-[5.5rem]  md:bottom-[0.05rem] md:left-[4.5rem] h-5 w-5"
        />
      </div>
        <nav tabindex="0" class="absolute top-10 -right-[3.3rem]   border-[#FFF] bg-[#FFF] border border-solid my-5 w-[11.5rem]  shadow-[rgba(141,141,141,0.25)_0px_4px_10px_0px] invisible  rounded  transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
        <div className="flex flex-col gap-2  cursor-pointer px-4  ">
            
            <div className="flex items-center mb-2">
              <input
                id="Career"
              //   type="checkbox"
              //   name="Career"
              //   value="Career"
              //   onChange={
              //     handleChange
              // }
              type="checkbox"
            checked={selectedCategories.includes('Career')}
            onChange={() => handleCheckboxChange('Career')}
                className="accent-[#EA9500] bg-grey w-4 h-4 "
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
              //   name="Business"
              //   value="Business"
              //   onChange={
              //     handleChange
              // }
              checked={selectedCategories.includes('Business')}
            onChange={() => handleCheckboxChange('Business')}
                className="accent-[#EA9500] bg-grey w-4 h-4 "
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
                id="Love"
                type="checkbox"
              //   name="Love"
              //   value="Love"
              //   onChange={
              //     handleChange
              // }
              checked={selectedCategories.includes('Love')}
              onChange={() => handleCheckboxChange('Love')}
                className="accent-[#EA9500] bg-grey w-4 h-4 "
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
              //   name="Relationship"
              //   value="Relationship"
              //   onChange={
              //     handleChange
              // }
              checked={selectedCategories.includes('Relationship')}
              onChange={() => handleCheckboxChange('Relationship')}
                className="accent-[#EA9500] bg-grey w-4 h-4"
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
              //   name="Gemstone"
              //   value="Gemstone"
              //   onChange={
              //     handleChange
              // }
              checked={selectedCategories.includes('Gemstone')}
              onChange={() => handleCheckboxChange('Gemstone')}
                className="accent-[#EA9500] bg-grey w-4 h-4"
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
              //   name="Foreign Travel"
              //   value="Foreign Travel"
              //   onChange={
              //     handleChange
              // }
              checked={selectedCategories.includes('ForeignTravel')}
              onChange={() => handleCheckboxChange('ForeignTravel')}
                className="accent-[#EA9500] bg-grey w-4 h-4"
              />
              <label
                for="default-checkbox"
                className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
              >
               Foreign Travel
              </label>
            </div>
            </div>

        </nav>
    </div>

   </>
  )
}

export default Expertise