import React,{useState} from "react";
import { FaStar } from "react-icons/fa";
import {Data} from './data'
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";
const AstrologersReaders = (p) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  

  // Handle changes in the search input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle changes in the checkbox selection
  // const handleCheckboxChange = (value) => {
  //   if (selectedCheckboxes.includes(value)) {
  //     setSelectedCheckboxes(selectedCheckboxes.filter(item => item !== value));
  //   } else {
  //     setSelectedCheckboxes([...selectedCheckboxes, value]);
  //   }
  // };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCheckboxes([...selectedCheckboxes, value]);
    } else {
      setSelectedCheckboxes(selectedCheckboxes.filter((item) => item !== value));
    }
  };

  // const handleCheckboxChange = (e) => {
  //   const value = e.target.value;
  //   setSelectedCheckboxes((prevSelected) => {
  //     if (prevSelected.includes(value)) {
  //       return prevSelected.filter((option) => option !== value);
  //     } else {
  //       return [...prevSelected, value];
  //     }
  //   });
  // };

  // Perform filtering based on search term and selected checkboxes
  // const filteredData = Data.filter(item =>
  //   item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
  //   (selectedCheckboxes.length === 0 || selectedCheckboxes.includes(item.name) || selectedCheckboxes.includes(item.lang)) 
   
    
     
  // );

  const filteredData = Data.filter(item => {

    
    const nameMatches = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.lang.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.desk.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.year.toString().includes(searchTerm.toLowerCase())
   
    const checkboxMatches = 
      selectedCheckboxes.length === 0 ||
      selectedCheckboxes.includes(item.name) ||
      selectedCheckboxes.includes(item.desk) ||
      selectedCheckboxes.includes(item.lang) 
      
    console.log(item)
  
    return nameMatches && checkboxMatches ;
  });

  console.log(selectedCheckboxes)


    const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)
  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    stars: {
      display: "flex",
      flexDirection: "row",
    },

   
  
  };

 //price
 const [sliderValue, setSliderValue] = useState(50);

 const handleSliderChange = (event) => {
   setSliderValue(event.target.value);
 };
    return (
    <>

    {/* Navbar start */}
    <div className="py-5 md:py-0">
    <div className="border bg-[#04B4DB] rounded-[5px] py-3 px-5 ">
          <div className="flex  flex-col lg:flex-row lg:gap-8 md:gap-4    md:justify-between items-start md:items-center   ">
       <div className="flex flex-col md:flex-row justify-start items-start md:justify-center md:items-center  md:gap-y-0 gap-y-3 gap-x-7">
            <div className="  ">
              <h1 className="text-[#FFF] lg:px-2  ">FilterBy: </h1>

            </div>
            {/* Expertise */}
            <div>
             
            <div class="group relative z-10 inline-block px-2">
    <div className="flex flex-row justify-center items-center cursor-pointer ">
        <button
          //onClick={() => setIsOpen(!isOpen)}
          type="button"
          class=" text-[#FFFF] lg:text-[18px] md:text-[16px] "
        >
          Expertise
      <img src="/img/Polygon 1.svg" className=" absolute top-[0.7rem] -right-2 "/>
      </button>
      
      </div>
        <nav tabindex="0" class="absolute md:top-10  md:-right-[3.3rem]   border-[#FFF] bg-[#FFF] border border-solid my-5 w-[11.5rem]  shadow-[rgba(141,141,141,0.25)_0px_4px_10px_0px] invisible  rounded  transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
        <div className="flex flex-col gap-2  cursor-pointer px-4  ">
            
            <div className="flex items-center mb-2">
              <input
                id="Career"
                type="checkbox"
                value="Career"
                // checked={selectedCheckboxes.includes("Career")}
                // onChange={() => handleCheckboxChange("Career")}
                checked={selectedCheckboxes.includes('Career')}
                onChange={handleCheckboxChange}
                
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
               value="Business"
              
               checked={selectedCheckboxes.includes('Business')}
               onChange={handleCheckboxChange}
            //   checked={selectedCategories.includes('Business')}
            // onChange={() => handleCheckboxChange('Business')}
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
                name="Love"
                value="Love"
              checked={selectedCheckboxes.includes('Love')}
               onChange={handleCheckboxChange}
              
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
                name="Relationship"
                value="Relationship"
              checked={selectedCheckboxes.includes('Relationship')}
               onChange={handleCheckboxChange}
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
                name="Gemstone"
                value="Gemstone"
              checked={selectedCheckboxes.includes('Gemstone')}
               onChange={handleCheckboxChange}
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
                name="Foreign Travel"
                value="Foreign Travel"
              checked={selectedCheckboxes.includes('Foreign Travel')}
               onChange={handleCheckboxChange}
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

  
            </div>
            {/* end Expertise */}
            {/* skill */}
            <div>
            
            <div class="group relative z-10 inline-block px-2">
    <div className="flex flex-row justify-center items-center cursor-pointer ">
        <button
          //onClick={() => setIsOpen(!isOpen)}
          type="button"
          class=" text-[#FFFF] lg:text-[18px] md:text-[16px] "
        >
          Skills
      <img src="/img/Polygon 1.svg" className=" absolute top-[0.7rem] -right-2 "/>
      </button>
      
      </div>
     
      
      
        <nav tabindex="0" className="flex absolute md:top-10 md:-right-[3.3rem] items-center justify-center border-[#FFF] bg-[#FFF] border border-solid my-5 w-[11rem]   shadow-[rgba(141,141,141,0.25)_0px_4px_10px_0px] invisible  rounded  transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
          <div className="flex flex-col gap-2  cursor-pointer px-2  ">
            
            <div className="flex items-center mb-2">
              <input
                id="Vedic"
                type="checkbox"
                name="Vedic"
                value="Vedic"
              //   onChange={
              //     handleChange
              // }
                class="accent-[#EA9500] bg-grey w-4 h-4 "
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
              //   onChange={
              //     handleChange
              // }
                class="accent-[#EA9500] bg-grey w-4 h-4 "
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
              //   onChange={
              //     handleChange
              // }
                class="accent-[#EA9500] bg-grey w-4 h-4 "
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
              //   onChange={
              //     handleChange
              // }
                class="accent-[#EA9500] bg-grey w-4 h-4 "
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
              //   onChange={
              //     handleChange
              // }
                class="accent-[#EA9500] bg-grey w-4 h-4 "
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
              //   onChange={
              //     handleChange
              // }
                class="accent-[#EA9500] bg-grey w-4 h-4 "
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
              //   onChange={
              //     handleChange
              // }
                class="accent-[#EA9500] bg-grey w-4 h-4 "
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
              //   onChange={
              //     handleChange
              // }
                class="accent-[#EA9500] bg-grey w-4 h-4 "
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
              //   onChange={
              //     handleChange
              // }
                class="accent-[#EA9500] bg-grey w-4 h-4 "
              />
              <label
                for="default-checkbox"
                className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
              >
            Numerology
              </label>
            </div>
            </div>
          </nav>
        
        
      
      </div>
            </div>
            {/* skill end */}
            {/* experience */}
            <div className="">
            <div class="group relative z-10 inline-block px-2">
    <div className="flex flex-row justify-center items-center cursor-pointer ">
        <button
          //onClick={() => setIsOpen(!isOpen)}
          type="button"
          class=" text-[#FFFF] lg:text-[18px] md:text-[16px] "
        >
          Experience
      <img src="/img/Polygon 1.svg" className=" absolute top-[0.7rem] -right-2 "/>
      </button>
      
      </div>
 
       
         
         <div class=" absolute md:top-[40px] md:-right-[80] z-10 mt-2 w-56 h-56 border border-[#0000] origin-top-right rounded-md bg-white shadow-lg pt-10 py-10 invisible   transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
           <div className="flex items-center justify-center">
             <span className='font-Lexend text-[1rem] not-italic font-medium leading-[199%] capitalize text-[#3A3A3A]'> Experience In Years</span>
           </div>
          <div className='w-50 mt-4 px-3'>
             {/* <ProgressBar progressPercentage={50} /> */}
             <input
         type="range"
         min="0"
         max="100"
         value={sliderValue}
         onChange={handleSliderChange}
         className='    rounded-full ' 
       />
       {/* <p>Selected Value: {sliderValue}</p> */}
           </div>
           <div className="flex gap-28 text-right px-3 pt-1">
                 <span>{sliderValue}</span>
                 <span>Above 20</span>
 
 
             </div>
           <div className="pt-8 text-[#FFA300] flex items-center justify-center">
                 <span>{sliderValue} years</span>
 
             </div>
       </div>
 
      
     </div>
 
  
            </div>
            {/* end */}
            <div className="">
            
            <div class="group relative z-10 inline-block px-2">
    <div className="flex flex-row justify-center items-center cursor-pointer ">
        <button
          //onClick={() => setIsOpen(!isOpen)}
          type="button"
          class=" text-[#FFFF] lg:text-[18px] md:text-[16px] "
        >
          Language
      <img src="/img/Polygon 1.svg" className=" absolute top-[0.7rem] -right-2 "/>
      </button>
      
      </div>
   
   
    
      <nav className="flex absolute md:top-10 md:-right-[3.3rem]  items-center justify-center border-[#FFF] bg-[#FFF] my-5 w-[11rem]  border border-solid shadow-[rgba(141,141,141,0.25)_0px_4px_10px_0px] invisible  rounded  transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
        <div className="flex flex-col gap-2  cursor-pointer px-2  ">
          
          <div className="flex items-center mb-2">
            <input
              id="Hindi"
              type="checkbox"
              name="Hindi"
              value="Hindi"
              // checked={selectedCheckboxes.includes("Hindi")}
              //   onChange={() => handleCheckboxChange("Hindi")}
              checked={selectedCheckboxes.includes('Hindi')}
              onChange={handleCheckboxChange}
              class="accent-[#EA9500] bg-grey w-4 h-4"
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
              checked={selectedCheckboxes.includes('English')}
              onChange={handleCheckboxChange}
              class="accent-[#EA9500] bg-grey w-4 h-4 "
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
              checked={selectedCheckboxes.includes('Gujarati')}
              onChange={handleCheckboxChange}
              class="accent-[#EA9500] bg-grey w-4 h-4 "
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
              checked={selectedCheckboxes.includes('Bengali')}
              onChange={handleCheckboxChange}
              class="accent-[#EA9500] bg-grey w-4 h-4 "
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
              checked={selectedCheckboxes.includes('Marathi')}
              onChange={handleCheckboxChange}
              class="accent-[#EA9500] bg-grey w-4 h-4 "
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
              checked={selectedCheckboxes.includes('Tamil')}
              onChange={handleCheckboxChange}
              class="accent-[#EA9500] bg-grey w-4 h-4 "
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
              checked={selectedCheckboxes.includes('Telugu')}
              onChange={handleCheckboxChange}
              class="accent-[#EA9500] bg-grey w-4 h-4 "
            />
            <label
              for="default-checkbox"
              className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
            >
          Telugu
            </label>
          </div>

        

          
          </div>
        </nav>
      
      
   
    </div>
            </div>
            {/*  */}
            {/* price */}
            <div className="">
          
            <div class="group relative z-10 inline-block px-2">
    <div className="flex flex-row justify-center items-center cursor-pointer ">
        <button
          //onClick={() => setIsOpen(!isOpen)}
          type="button"
          class=" text-[#FFFF] lg:text-[18px] md:text-[16px] "
        >
          Price
      <img src="/img/Polygon 1.svg" className=" absolute top-[0.7rem] -right-2 "/>
      </button>
      
      </div>
 
       {/* {showOptions ? ( */}
         
         <div class=" absolute md:-left-[70px] md:top-[40px] z-10 mt-2 w-56 h-56 border border-[#0000] origin-top-right rounded-md bg-white shadow-lg pt-10 py-10 invisible   transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
           <div className="flex items-center justify-center">
             <span className="font-Lexend text-[1rem] not-italic font-medium leading-[199%] capitalize text-[#3A3A3A]"> Price in ruppes</span>
           </div>
          <div className='w-50 mt-4 px-3'>
             {/* <ProgressBar progressPercentage={50} /> */}
             <input
         type="range"
         min="0"
         max="100"
         value={sliderValue}
         onChange={handleSliderChange}
         className='    rounded-full ' 
       />
       {/* <p>Selected Value: {sliderValue}</p> */}
 
           </div>
           <div className="flex gap-28 text-right px-3 pt-1">
         <span>{sliderValue}</span>
                 <span>Above 80</span>
 
             </div>
           <div className="pt-8 text-[#FFA300] flex items-center justify-center">
           <FaRupeeSign  size={14}/>
           <span> {sliderValue}</span>
  
             </div>
       </div>
 
       {/* ) : null} */}
     </div>
 
  
            </div>
            {/* price end */}
            {/* short */}
            <div className=" ">
             
          
            </div>
            {/* end short */}
            </div>
            <div className="flex flex-col md:flex-row md:gap-x-5  gap-y-3 md:gap-y-0 justify-start md:justify-end  items-start md:items-center">
            <div class="">
    <div class="group relative z-10 inline-block px-2">
    <div className="flex flex-row justify-center items-center cursor-pointer ">
        <button
          //onClick={() => setIsOpen(!isOpen)}
          type="button"
          class=" text-[#FFFF] lg:text-[18px] md:text-[16px] "
        >
          Short
      <img src="/img/Polygon 1.svg" className=" absolute top-[0.7rem] -right-2 "/>
      </button>
      
      </div>
        <nav tabindex="0" className="flex absolute md:top-10 md:-right-[7rem]   items-center justify-center border-[#FFF] bg-[#FFF] my-5 w-[16rem]  border border-solid shadow-[rgba(141,141,141,0.25)_0px_4px_10px_0px] invisible  rounded  transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
        <div class="flex flex-col gap-2  cursor-pointer px-2  ">
          
          <div className="flex items-center mb-2">
            <input
              id="Popularity"
              type="checkbox"
              name="Popularity"
              value="Popularity"
            //   onChange={
            //     handleChange
            // }
              class="accent-[#EA9500] bg-grey w-4 h-4 "
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
            //   onChange={
            //     handleChange
            // }
              class="accent-[#EA9500] bg-grey w-4 h-4 "
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
            //   onChange={
            //     handleChange
            // }
              class="accent-[#EA9500] bg-grey w-4 h-4 "
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
            //   onChange={
            //     handleChange
            // }
              class="accent-[#EA9500] bg-grey w-4 h-4 "
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
            //   onChange={
            //     handleChange
            // }
              class="accent-[#EA9500] bg-grey w-4 h-4 "
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
            //   onChange={
            //     handleChange
            // }
              class="accent-[#EA9500] bg-grey w-4 h-4 "
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
            //   onChange={
            //     handleChange
            // }
              class="accent-[#EA9500] bg-grey w-4 h-4 "
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
            //   onChange={
            //     handleChange
            // }
              class="accent-[#EA9500] bg-grey w-4 h-4 "
            />
            <label
              for="default-checkbox"
              className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
            >
          Rating : High to Low
            </label>
          </div>

        

          
          </div>
        </nav>
    </div>
</div>
             <div className=" relative">
              <form className="flex items-center   ">

                <div className="  w-full   ">

                  <input 
                  type="text"
                  id="searchInput"
                  value={searchTerm}
                  onChange={handleSearchChange}
         className="rounded-[6px] p-2 bg-[#FFF]  lg:px-4 md:px-5   pt-2 py-2 lg:text-[14px] md:text-[12px] not-italic  font-normal leading-normal focus:ring-blue-500 focus:border-blue-500 block" placeholder="Search Astrologer" required />


                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" className="absolute   lg:top-[6px] lg:bottom-0 lg:right-0 lg:left-[10rem] md:top-[6px] md:left-[8rem] right-2 top-2  ">
                    <path d="M11 2.69998C15.968 2.69998 20 6.73198 20 11.7C20 16.668 15.968 20.7 11 20.7C6.032 20.7 2 16.668 2 11.7C2 6.73198 6.032 2.69998 11 2.69998ZM11 18.7C14.867 18.7 18 15.567 18 11.7C18 7.83198 14.867 4.69998 11 4.69998C7.132 4.69998 4 7.83198 4 11.7C4 15.567 7.132 18.7 11 18.7ZM19.485 18.771L22.314 21.599L20.899 23.014L18.071 20.185L19.485 18.771Z" fill="#A2A2A2" />
                  </svg>
                </div>

              </form>
            </div>
            </div>


          </div>
          

        </div>
        </div>
    {/* End Navbar */}
   <div className='  md:py-10 '>
                <div className="grid grid-flow-cols grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 " >
                {
                   filteredData.map((item)=>{
                   
                        return(
                            <>
                            <div key={item.id}>
                             <div className={` p-[1.5px] md:w-[21.3rem] lg:w-[26rem] relative  hover:bg-[#FFA300]   shadow-[0px_4px_10px_0px_rgba(174,174,174,0.25)] overflow-x-hidden  rounded-[6px] `}>
                        <div className='flex flex-row    bg-white pt-2  rounded-[6px]'>
                        <div className='flex flex-col pt-3   '>
                                <div className='md:px-2 lg:px-3 px-3  '>
                                    <img src={item.img1} className='w-[5.5rem] md:w-20 lg:w-32' alt='' />
                                </div>
                                <div className='flex flex-col justify-start items-center gap-x-2 px-2 md:px-4  py-2'>
                                <div className="flex flex-row   text-[#ffd23e] lg:gap-1">
                <i class="fa fa-star fa_custom " aria-hidden="true"></i>
                <i class="fa fa-star fa_custom " aria-hidden="true"></i>
                <i class="fa fa-star fa_custom " aria-hidden="true"></i>
                <i class="fa fa-star fa_custom " aria-hidden="true"></i>
                <i class="fa fa-star fa_custom " aria-hidden="true"></i>
                 
                </div>
                                    <h2 className="text-black text-[13px] font-Lexend not-italic font-semibold leading-[normal] tracking-[0.52px] py-2 ">{item.text1}<span className="text-black text-[13px] px-1 font-Lexend not-italic font-normal leading-[normal] tracking-[0.52px]">{item.text2}</span></h2>
                                </div>
                            </div>
                            <div className="">
                            <img src={item.img3} className='w-5 absolute top-2 right-2 ' alt='' />
                            </div>
                            <div>
                              
                                <div className='flex flex-col  px-1 md:px-2 lg:px-4 pt-4 md:pb-2.5 lg:pb-2 '>
                                   <div className="flex flex-row items-end justify-between ">
                                    <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[18px] md:text-[20px] font-Lexend not-italic font-medium leading-[normal]'>{item.name}</h2>
                                </div>
                                    <div className='flex flex-row gap-x-2 md:gap-x-3 py-1.5' >
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M15.4166 8.33335L19.0833 17.5H17.2874L16.2866 15H12.8783L11.8791 17.5H10.0841L13.7499 8.33335H15.4166ZM8.33326 1.66669V3.33335H13.3333V5.00002H11.6933C11.0504 6.93508 10.0245 8.72087 8.6766 10.2509C9.27768 10.7872 9.92966 11.2636 10.6233 11.6734L9.99743 13.2384C9.10203 12.7305 8.26459 12.1267 7.49993 11.4375C6.01125 12.7848 4.2483 13.7935 2.33243 14.3942L1.88576 12.7867C3.52729 12.2633 5.03995 11.3995 6.32493 10.2517C5.37384 9.17497 4.58165 7.96774 3.97243 6.66669H5.8391C6.30355 7.52407 6.86048 8.32802 7.49993 9.06419C8.54168 7.86344 9.36268 6.48777 9.92493 5.00085L1.6666 5.00002V3.33335H6.6666V1.66669H8.33326ZM14.5833 10.7375L13.5441 13.3334H15.6208L14.5833 10.7375Z" fill="#3A3A3A" />
                                            </svg>
                                        </div>
                                        <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[12px] md:text-[14px] font-Poppins  not-italic font-normal leading-[normal]'>{item.lang}</h2>
                                    </div>
                                    <div className='flex flex-col justify-center items-start '>
                                        <div className='flex flex-row gap-x-2 justify-center items-center   '>
                                            <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] font-Lexend not-italic font-medium leading-[normal]">{item.exp}</h2>
                                            <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] pt-1 text-[14px] font-Poppins not-italic font-normal leading-[normal]">{item.year}</h2>
                                        </div>
                                        <div className="py-1">
                                          <p className="text-[color:var(--grey-1,#A1A1A1)] text-[10px] text-start font-Lexend not-italic font-medium leading-[normal]">{item.desk}</p>
                                        </div>
                                        <div className='flex flex-row gap-x-2 py-1 md:py-2 lg:py-2'>
                                            <h2 className="text-[color:var(--red,#DB042A)] text-[18px] font-Lexend not-italic font-semibold leading-[normal]">{item.free}</h2>
                                            <h2 className="line-through text-[color:var(--grey-1,#A1A1A1)] text-[18px] font-Lexend not-italic font-medium leading-[normal]">{item.min}</h2>
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-start items-center gap-x-1.5 md:gap-x-4 py-1.5'>
                                        {/* <div className='px-5 md:px-7 gap-x-2 py-2 bg-[#FFA300] rounded-[45px] flex flex-row justify-center items-center '>
                                            <img src={item.img4} className='w-5' alt='' />
                                            <button className=' text-white  text-[16px] font-Lexend  not-italic font-medium leading-[normal]' onClick={p.cut}>{item.call}</button>
                                        </div> */}
                                        <div className=' py-2.5 cursor-pointer  bg-[#04B4DB] rounded-[45px] flex flex-row justify-center items-center mx-auto gap-x-2  px-5 md:px-20 lg:px-20 '>
                                            <img src={item.img5} className='w-5  ' alt='' />
                                            <button className=' text-white  text-[16px]   text-start font-Lexend  not-italic font-medium leading-[normal]'>{item.chat}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                           </div>
                            </>
                        )
                    })
                }
                 

                </div>
            


            </div>
     
    </>
  );
};

export default AstrologersReaders;
