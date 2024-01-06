import { FormLabel } from '@mui/material';
import React, { useState, useEffect } from 'react'

const Report24 = () => {
  const initialvalues= { fullname: "", birthtime: "", birthdate: "", gender:"", birthcountry: "", birthplace:""};
  const [formValues, setFormValues] = useState(initialvalues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange=(e)=>{
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value});
    console.log(formValues)
   
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  

  useEffect(()=>{
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
    }
  },[formErrors]);

  const validate = (values) =>{
    const errors = {};
    if (!values.fullname){
      errors.fullname = "Full Name is required"
    }
    return errors;
  }

  return (
    <div className='px-16'>
      <p className="text-amber-900 text-[26px] text-start font-medium font-['Lexend'] py-7">2023 Yearly Report</p>
      <div className='lg:flex lg:flex-row  lg:justify-between lg:space-x-10'>
        <div className=''>
        <img src='/img/report7.png' className='w-[120rem] h-[420px] '/>
        </div>
       
        <div className='text-start'>
          <p className=" text-neutral-700 text-[16px] font-medium font-Lexend leading-normal">Placerat commodo odio tincidunt iaculis. Sed felis magna, iaculis a metus id, ullamcorper suscipit nulla.  , vel feugiat nisi elit id massa. Proin nulla augue,Proin nulla augue dapibus.</p>
          <p className="py-[5px] text-neutral-700 text-[16px]  font-medium font-Lexend leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet elit, Lorem .</p>
          <p className="py-[5px] text-neutral-700 text-[16px] font-medium font-Lexend leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet elit, Lorem ipsum dolor sit amet, consectetur adipiscing consectetur adipiscing elit.Lorem ipsum dolor sit  amet .</p>
          <p className="py-[5px] text-neutral-700 text-[16px] font-medium font-Lexend leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        
      </div>

      <div className='py-[30px]'>
      <div className="lg:w-[1021px] lg:h-[287px] md:w-[676px] md:h-[290px] bg-white rounded-[5px] md:mx-auto shadow border border-neutral-400">
         <p className=" md:text-[18px] md:font-normal py-3 text-center lg:text-[20px] lg:font-medium  font-['Lexend'] text-amber-900 ">Fill Your Details To Generate Your 2023 Yearly Report</p>
        
         <form className='md:flex md:flex-wrap' onSubmit={handleSubmit}>
          <div className='py-3 text-start '>
           <label className="text-neutral-700 lg:text-[16px] md:px-6 lg:font-medium text-start  md:text-[14px] md:font-normal font-['Lexend'] " htmlFor='fullname'>Full Name</label><br></br>
            <input type='text' name='fullname' placeholder='Name here...' value={formValues.fullname} onChange={handleChange} className='lg:w-[514px] lg:h-[45px] md:w-[300px] md:h-[28px] md:rounded-[3px] lg:rounded-[5px] shadow border border-neutral-400 hover:border-amber-500 mt-2 lg:ml-[21px] lg:pl-[18px] md:pl-[10px] md:ml-[22px] '/>
            <p>{formErrors.fullname}</p>
            </div>
            <div className='py-3 text-start '>
            <label className="text-neutral-700 lg:text-[16px] md:px-6 lg:font-medium md:text-[14px] md:font-normal font-['Lexend'] " htmlFor='birthtime'>Birth Time</label><br></br>
            <input type='time' name='birthtime' placeholder='9:00 PM' value={formValues.birthtime} onChange={handleChange} className='lg:w-52 lg:h-[45px] md:w-36 md:h-[28px] lg:rounded-[5px] md:rounded-[3px] shadow border border-neutral-400 hover:border-amber-500 lg:ml-[20px] mt-2 lg:pl-[18px] md:pl-[10px] md:ml-[16px] md:mt-[10px] text-neutral-400' />
            </div>
            <div className='py-3 text-start '>
            <label className="text-neutral-700 lg:text-[16px] md:px-6 lg:font-medium md:text-[14px] md:font-normal font-['Lexend'] " htmlFor='birthdate'>Birth Date</label><br></br>
            <input type='date' name='birthdate' placeholder='dd/mm/yyyy' value={formValues.birthdate} onChange={handleChange} className='lg:w-[212px] lg:h-[45px] lg:rounded-[5px] md:w-[160px] md:h-[28px] md:rounded-[3px] shadow border border-neutral-400 hover:border-amber-500 text-neutral-400 lg:ml-[20px] mt-2 lg:pl-[18px] md:pl-[10px] md:ml-[16px] md:mt-[10px]'/>
            </div>
            <div className='py-3 '>
            <p className="text-neutral-700 py-3 lg:text-[16px] lg:font-medium md:text-[14px] md:font-normal font-['Lexend'] ">Gender</p>
           <div className='flex flex-row justify-center items-center px-5 gap-x-4'> 
            <div className='flex flex-row justify-center items-center gap-x-2 '>
            <input type='radio' name='gender' value={formValues.male} onChange={handleChange} className='lg:w-5 lg:h-5 md:w-3 md:h-3 rounded-full border hover:border-amber-500 border-zinc-400 '/>
            <label className="text-neutral-700 lg:text-[16px] lg:font-medium md:text-[14px] md:font-normal font-['Lexend'] " htmlFor='male'>Male</label>
            </div>
            <div className='flex flex-row justify-center items-center gap-x-2 '>
            <input type='radio' name='gender' value={formValues.female} onChange={handleChange} className='lg:w-5 lg:h-5 md:w-3 md:h-3 rounded-full border hover:border-amber-500 border-zinc-400'/>
            <label className="text-neutral-700 lg:text-[16px] lg:font-medium md:text-[14px] md:font-normal font-['Lexend'] " htmlFor='female'>Female</label>
            </div>
            <div className='flex flex-row justify-center items-center gap-x-2'>
            <input type='radio' name='gender' value={formValues.other} onChange={handleChange} className='lg:w-5 lg:h-5 md:w-3 md:h-3 rounded-full border hover:border-amber-500 border-zinc-400 '/>
            <label className="text-neutral-700 lg:text-[16px] lg:font-medium  md:text-[14px] md:font-normal font-['Lexend']" htmlFor='other'>Other</label>
            </div>
            
            </div></div>
            <div className='py-3 text-start '>
            <label className="text-neutral-700  md:px-6 lg:text-[16px] lg:font-medium md:text-[14px] md:font-normal font-['Lexend'] lg:pl-[42px] md:pl-[20px]" htmlFor='birthcountry'>Birth Country</label><br></br>
            <input type='text' name='birthcountry' placeholder='Select Country' value={formValues.birthcountry} onChange={handleChange} className='lg:w-[212px] lg:h-[45px] lg:rounded-[5px] md:w-[140px] md:h-[28px] md:rounded-[3px] shadow border hover:border-amber-500 border-neutral-400 text-neutral-400  mt-2 lg:pl-[18px] lg:ml-[22px] md:ml-[20px] md:mt-[10px] md:pl-[10px] '/>
            </div>
            <div className='py-3 text-start '>
            <label className="text-neutral-700 md:px-6 lg:text-[16px] lg:font-medium md:text-[14px] md:font-normal font-['Lexend'] lg:pl-[19px] md:pl-[10px]" htmlFor='birthcountry'>Birth Place</label><br></br>
            <input type='text' name='birthplace' placeholder='Mumbai, India' value={formValues.birthplace} onChange={handleChange} className='lg:w-[212px] lg:h-[45px] lg:rounded-[5px] md:w-[140px] md:h-[28px] md:rounded-[3px] shadow border hover:border-amber-500 border-neutral-400 text-neutral-400 mt-2 lg:pl-[18px] lg:ml-[19px] md:ml-[10px] md:mt-[10px] md:pl-[10px]'/>
            </div>
            <div className='lg:py-11 md:py-3 '>
            <button className="lg:w-[210px] lg:h-[46px] md:w-[140px] md:h-[32px]  lg:ml-[19px]  md:ml-[240px] bg-amber-500 rounded-lg border border-amber-500 text-center text-white lg:text-[20px] lg:font-medium md:text-[16px] md:font-normal font-['Lexend']">Download Now</button>
            </div>
         </form>
      </div>
      </div>
    </div>
  )
}

export default Report24
