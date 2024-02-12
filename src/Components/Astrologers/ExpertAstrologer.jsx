import React from "react";

const ExpertAstrologer = () => {
  const data = [
    {
      
      title: `Consult Astrologer`,
      desc1: `Chat with Astrologer`,
      desc2: `Talk to Astrologer`,
      desc3: `Chat with Astrologer`,
      viwmore: `View More`,
      style:`absolute -top-[1.5rem] -left-[1rem] lg:-top-[1.5rem] md:bottom-[11rem] lg:-left-[1rem] md:-left-[1rem] border border-[#FFA300] bg-[#FFA300]`,
      icon:`./img/contact.png`,
    },
    {
     
      title: `Indian Astrologer`,
      desc1: `Chat with Astrologer`,
      desc2: `Talk to Astrologer`,
      desc3: `Chat with Astrologer`,
      viwmore: `View More`,
      style:`absolute z-10 -top-[1.5rem] -left-[1rem] lg:-top-5 lg:-left-[1rem] md:-top-[1.5rem] md:-left-[1rem] border border-[#04B4DB] bg-[#04B4DB]`,
      icon:`./img/map.png`, 
    },
    {
     
      title: `International Astrologer`,
      desc1: `Chat with Astrologer`,
      desc2: `Talk to Astrologer`,
      desc3: `Chat with Astrologer`,
      viwmore: `View More`,
      style:`absolute lg:z-10 -top-[1.5rem] -left-[1rem]  lg:-top-5 lg:-left-[1rem] md:-top-[1.5rem] md:-left-[1rem] border border-[#DB042A] bg-[#DB042A]`,
      icon:`./img/international.png`,
    },
  ];
  return (
    <div className="">
      <div className="py-5">
        <h1 className=" text-left text-[var(--Secondry-Color,#773101)] font-Lexend text-[18px] md:text-[26px] not-italic font-semibold leading-normal">
          500+ Expert Astrologer’s Available Across 10 Countries Include
        </h1>
      </div>

      {/*  cards */}
      <div className=" py-5 flex flex-col lg:flex-row md:flex-col gap-8 md:gap-y-14 items-center justify-center  relative">
        {data.map((card, index) => {
          return (
            <div key={index} className="relative">
              {/* icon */}
              <div className={" rounded-full w-[50px] h-[50px] " + card.style } >
                  <img src={card.icon} className="w-6 h-6 absolute top-[12px] left-[12px]" />
              </div>
              {/* <div className="absolute z-10  -top-5 left-[28rem] border border-[#04B4DB] bg-[#04B4DB] rounded-full w-[50px] h-[50px]">

</div>

<div className="absolute z-10  -top-5 left-[48rem] border border-[#DB042A] bg-[#DB042A] rounded-full w-[50px] h-[50px]">

</div> */}

              

              {/* end icon */}
              <div className="border-[0.5px] border-[#A1A1A14D] rounded-[6px] w-[300px] h-[200px] shadow-[rgba(174,174,174,0.25)_0px_4px_10px_0px]">
                <div className="py-6">
                  <h1 className="font-Lexend text-[20px] font-semibold not-italic leading-normal text-[#FFA300]">
                  {card.title}
                  </h1>
                </div>

                <div>
                  <ul class="space-y-4 px-4">
                    <li class="flex items-center space-x-3 rtl:space-x-reverse">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                      >
                        <path
                          d="M15.5489 6.26107C15.8312 5.95791 15.8142 5.48333 15.5111 5.20108L10.5708 0.601506C10.2676 0.319252 9.79305 0.336201 9.5108 0.639362C9.22854 0.942523 9.24549 1.41709 9.54865 1.69935L13.94 5.78786L9.8515 10.1792C9.56925 10.4824 9.5862 10.957 9.88936 11.2392C10.1925 11.5215 10.6671 11.5045 10.9493 11.2013L15.5489 6.26107ZM1.02677 6.99952L15.0268 6.49952L14.9732 5.00048L0.973231 5.50048L1.02677 6.99952Z"
                          fill="#3A3A3A"
                        />
                      </svg>
                      <span className="font-Lexend text-[14px] font-normal not-italic leading-normal">
                      {card.desc1}
                      </span>
                    </li>

                    <li class="flex items-center space-x-3 rtl:space-x-reverse">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                      >
                        <path
                          d="M15.5489 6.26107C15.8312 5.95791 15.8142 5.48333 15.5111 5.20108L10.5708 0.601506C10.2676 0.319252 9.79305 0.336201 9.5108 0.639362C9.22854 0.942523 9.24549 1.41709 9.54865 1.69935L13.94 5.78786L9.8515 10.1792C9.56925 10.4824 9.5862 10.957 9.88936 11.2392C10.1925 11.5215 10.6671 11.5045 10.9493 11.2013L15.5489 6.26107ZM1.02677 6.99952L15.0268 6.49952L14.9732 5.00048L0.973231 5.50048L1.02677 6.99952Z"
                          fill="#3A3A3A"
                        />
                      </svg>
                      <span className="font-Lexend text-[14px] font-normal not-italic leading-normal">
                      {card.desc2}
                      </span>
                    </li>

                    <li class="flex items-center space-x-3 rtl:space-x-reverse">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                      >
                        <path
                          d="M15.5489 6.26107C15.8312 5.95791 15.8142 5.48333 15.5111 5.20108L10.5708 0.601506C10.2676 0.319252 9.79305 0.336201 9.5108 0.639362C9.22854 0.942523 9.24549 1.41709 9.54865 1.69935L13.94 5.78786L9.8515 10.1792C9.56925 10.4824 9.5862 10.957 9.88936 11.2392C10.1925 11.5215 10.6671 11.5045 10.9493 11.2013L15.5489 6.26107ZM1.02677 6.99952L15.0268 6.49952L14.9732 5.00048L0.973231 5.50048L1.02677 6.99952Z"
                          fill="#3A3A3A"
                        />
                      </svg>
                      <span className="font-Lexend text-[14px] font-normal not-italic leading-normal">
                      {card.desc2}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="float-right px-2">
                  <a
                    href="#"
                    className="  font-Lexend text-[14px] font-normal not-italic leading-normal text-[#04B4DB]"
                  >
                    {card.viwmore}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpertAstrologer;
