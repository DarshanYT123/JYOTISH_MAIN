import React from 'react'

const TabItem = ({ id, activeTab, children }) => {
     return (
          activeTab === id ?
               <div className="py-4 w-full ">
                    <div className='flex flex-col  mx-auto w-full'>
                         {children}
                    </div>
               </div>
               : null
     )
}

export default TabItem