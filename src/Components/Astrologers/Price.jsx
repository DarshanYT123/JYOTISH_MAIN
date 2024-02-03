import React ,{useState}  from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";
const Price = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };
 
  return (
    <>
    <div class="group relative inline-block text-left"  >
       <div>
         <button
           // onClick={handleClick}
           type="button"
           id="menu-button"
           aria-expanded="true"
           aria-haspopup="true"
         >
           <div className=''>
             <section className="inline-flex gap-1 items-center text-left cursor-pointer">
               <h3 className="lg:text-[18px] md:text-[16px] text-[#FFFF] cursor-pointer">Price
               <IoMdArrowDropdown size={15} className='text-white absolute lg:bottom-[0.1rem] lg:left-[3rem] md:bottom-[0.1rem] md:left-[2.5rem] h-5 w-5'/>
               </h3>
             </section>
           </div>
         </button>
       </div>
 
       {/* {showOptions ? ( */}
         
         <div class=" absolute -left-[70px] top-[40px] z-10 mt-2 w-56 h-56 border border-[#0000] origin-top-right rounded-md bg-white shadow-lg pt-10 py-10 invisible   transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
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
 
  
    </>
  )
}

export default Price

// import React, { useState } from 'react'
// // import {data} from './data'
// const Price = () => {

  
//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   const data = [
//     {
//         LastName: 'Davolio', FirstName: 'Nancy', Price: 100, City: 'Seattle', Title: 'Sales Representative',
//       },
//       {
//         LastName: 'Fuller', FirstName: 'Andrew', Price: 50, City: 'Tacoma', Title: 'Vice President, Sales',
//       },
//       {
//         LastName: 'Leverling', FirstName: 'Janet', Price: 200, City: 'Kirkland', Title: 'Sales Representative',
//       },
//       {
//         LastName: 'Peacock', FirstName: 'Margaret', Price: 70, City: 'Redmond', Title: 'Sales Representative',
//       },
//       {
//         LastName: 'Buchanan', FirstName: 'Steven', Price: 80, City: 'London', Title: 'Sales Manager',
//       },
//       {
//         LastName: 'Suyama', FirstName: 'Michael', Price: 90, City: 'London', Title: 'Sales Representative',
//       },
//       {
//         LastName: 'King', FirstName: 'Robert', Price: 99, City: 'London', Title: 'Sales Representative',
//       },
//       {
//         LastName: 'Callahan', FirstName: 'Laura', Price: 49, City: 'Seattle', Title: 'Inside Sales Coordinator',
//       },
//       {
//         LastName: 'Dodsworth', FirstName: 'Anne', Price: 60, City: 'London', Title: 'Sales Representative',
//       },
//     ]

//   const handleFilterChange = () => {
//     const min = parseFloat(minPrice);
//     const max = parseFloat(maxPrice);

   
//     if (!isNaN(min) && !isNaN(max)) {
//       const filtered = data.filter(
//         (data) => data.Price >= min && data.Price <= max
//       );
//       setFilteredProducts(filtered);
//     } else {
//       // Reset the filter if either min or max is not a valid number
//       setFilteredProducts(data);
//     }
  
//     console.log(filteredProducts)
//   };
//   return (
//     <div>
//       <label>
//         Min Price:
//         <input
//           type="number"
//           value={minPrice}
//           onChange={(e) => setMinPrice(e.target.value)}
//         />
//       </label>

//       <label>
//         Max Price:
//         <input
//           type="number"
//           value={maxPrice}
//           onChange={(e) => setMaxPrice(e.target.value)}
//         />
//       </label>

//       <button onClick={handleFilterChange}>Apply Filter</button>

//       <ul>
//         {filteredProducts.map((data,index) => (
//          <li key={data.index}>{data.Price}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Price