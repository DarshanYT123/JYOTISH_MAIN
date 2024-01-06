import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';

const data=[
  {
    image: "/img/image2.png",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    views: "2839",
    date: "May 17, 2019"
  },
  {
    image: "/img/image3.png",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    views: "2839",
    date: "May 17, 2019"
  },
  {
    image: "/img/image4.png",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    views: "2839",
    date: "May 17, 2019"
  },
  {
    image: "/img/image5.png",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    views: "2839",
    date: "May 17, 2019"
  },
]

const BlogDetails = () => {
  return (
    <>
    <div className='px-16'>
      
      <p className=" text-amber-900 text-[26px] font-semibold font-['Lexend'] text-start py-5 lg:w-[907px] pt-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className='lg:flex lg:flex-row lg:justify-between lg:items-center'>
      <div className="container lg:flex lg:flex-row lg:items-center lg:justify-between  md:flex md:flex-col ">
        <div className="one flex flex-col ">
         <img src='/img/image2.png' className='lg:w-[908rem] md:w-[700rem] lg:h-[32rem] md:h-[20rem] object-cover'/>
         <p className=" text-neutral-700 text-[16px] font-normal font-['Lexend'] leading-normal text-start  lg:pt-[14px] md:pt-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero tincidunt scelerisque. Donec tempus congue lacinia. Phasellus lacinia felis est.<br></br>placerat commodo odio tincidunt iaculis. Sed felis magna, iaculis a metus id, ullamcorper suscipit nulla. Fusce facilisis, nunc ultricies posuere porttitor, nisl lacus tincidunt diam, vel feugiat nisi elit id massa. Proin nulla augue, dapibus. <br></br> Id blandit mauris ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. </p>
         <p className=" text-neutral-700 text-[16px] font-normal font-['Lexend'] leading-normal text-start lg:pt-[14px] md:pt-[14px]">Maecenas faucibus neque in nulla mollis interdum. Quisque quis pellentesque enim, vitae pulvinar purus. Quisque vitae suscipit risus. Curabitur scelerisque magna a interdum pretium.<br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis.</p>
        </div>
        </div>
        <div className="two lg:flex lg:flex-col md:flex md:flex-row lg:px-[20px]  md:pt-[30px] lg:pt-[0px]">
         
        <div className='lg:py-[10px] '>
          <div className="flex flex-col lg:w-[444px] lg:h-[414px] md:w-[320px] md:h-[326px]  bg-white rounded-[5px] shadow border border-neutral-400">
             <p className=" text-amber-900 lg:text-[20px] font-normal md:text-[18px]  font-['Lexend'] lg:pt-[6px] md:pt-[3px] text-start px-4 ">Latest Post</p>
            <div className='lg:pt-[20px] lg:pl-[16px] md:pt-[10px] md:pl-[12px]'>
             <div className="flex  md:pb-[5px] ">
               <img src='/img/post1.png' className="lg:w-[195px] lg:h-[107px] md:w-[140px] md:h-[80px]" />
               <p className="   text-neutral-700 lg:text-[16px] font-normal md:text-[12px] font-['Lexend'] text-start px-2  ">Vestibulum mollis nunc a molestie dictum venenatis felis scelerisque.</p>
             </div>
             <div className="flex  md:py-[5px]">
               <img src='/img/post2.png'  className="lg:w-[195px] lg:h-[107px] md:w-[140px] md:h-[80px]"/>
               <p className="text-start px-2 text-neutral-700 lg:text-[16px] font-normal md:text-[12px] font-['Lexend']  ">Vestibulum mollis nunc a molestie dictum venenatis  felis scelerisque.</p>
             </div>
             <div className="flex  md:py-[5px]">
               <img src='/img/post3.png'  className="lg:w-[195px] lg:h-[107px] md:w-[140px] md:h-[80px]"/>
               <p className=" text-start px-2 text-neutral-700 lg:text-[16px] font-normal md:text-[12px] font-['Lexend']  ">Vestibulum mollis nunc a molestie dictum venenatis  felis scelerisque.</p>
             </div>
            </div>
          </div>
         </div> 
         

          <div className='lg:py-[10px] md:px-[20px] lg:px-[0px]'> 
          <div className="flex flex-col lg:w-[444px] lg:h-[414px] md:w-[320px] md:h-[326px]  bg-white rounded-[5px] shadow border border-neutral-400  ">
             <p className=" text-amber-900 lg:text-[20px] font-normal md:text-[18px]  font-['Lexend'] lg:pt-[6px] md:pt-[3px] text-start px-3 ">Top Post</p>
            <div className='lg:pt-[20px] lg:pl-[16px] md:pt-[10px] md:pl-[12px]'>
             <div className="flex  md:py-[5px] ">
               <img src='/img/post4.png' className="lg:w-[195px] lg:h-[107px] md:w-[140px] md:h-[80px]" />
               <p className=" text-start px-2 text-neutral-700 lg:text-[16px] font-normal md:text-[12px] font-['Lexend']">Vestibulum mollis nunc a molestie dictum venenatis felis scelerisque.</p>
             </div>
             <div className="flex  md:py-[5px]">
               <img src='/img/post5.png'  className="lg:w-[195px] lg:h-[107px] md:w-[140px] md:h-[80px]"/>
               <p className=" text-start px-2 text-neutral-700 lg:text-[16px] font-normal md:text-[12px] font-['Lexend']  ">Vestibulum mollis nunc a molestie dictum venenatis  felis scelerisque.</p>
             </div>
             <div className="flex  md:py-[5px]">
               <img src='/img/post6.png'  className="lg:w-[195px] lg:h-[107px] md:w-[140px] md:h-[80px]"/>
               <p className=" text-start px-2 text-neutral-700 lg:text-[16px] font-normal md:text-[12px] font-['Lexend']  ">Vestibulum mollis nunc a molestie dictum venenatis  felis scelerisque.</p>
             </div>
            </div>
          </div>
          </div>

        </div>
      </div>

      <p className="text-amber-900 text-[26px] font-semibold text-start font-['Lexend'] lg:pt-[60px] md:pt-[30px]">Related Posts</p>
            
             <div className="lg:flex lg:flex-wrap md:grid md:grid-cols-2 lg:justify-between lg:space-x-0 md:space-x-6 lg:py-[40px] md:py-[40px]">
             {
              data.map(({ image, line, views, date}, index)=>{
                return(
                  // <div className='px-[10px] py-[10px]'>
                  <div className=' w-[329px] h-[269px]  relative '>
                  <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent'></div>
                  <img src={image}/>
                  <div className='text absolute top-44 text-white px-[18px] '>
                  <p className=" text-[20px] font-medium font-['Inter']">{line}</p>
                  <div className='flex py-[5px]'>
                  <p className="text-[14px] font-medium font-['Inter']"><VisibilityIcon/>&nbsp;{views}</p>
                  <p className= "text-[14px] font-medium font-['Inter'] pl-[140px]">{date}</p>
                  </div>
                  </div>
                </div>
                // </div>
                )
              })
             }
            
            </div>

           
            </div>
    </>
  )
}

export default BlogDetails
