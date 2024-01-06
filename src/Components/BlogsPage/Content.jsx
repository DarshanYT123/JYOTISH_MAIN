import React from 'react'

const Content = ({ id, activeTab, children }) => {
     return (
          activeTab === id ?
               <div className="lg:py-4 md:py-2 w-full ">
                    <div className='flex flex-col items-center mx-auto lg:w-full '>
                         {children}
                    </div>
               </div>
               : null
     )
}

export default Content