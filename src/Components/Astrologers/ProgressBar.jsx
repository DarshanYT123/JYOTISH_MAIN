import React from 'react'

const ProgressBar = ({ progressPercentage }) => {
  return (
   <>
   <div className='h-2 w-full bg-gray-300 rounded overflow-hidden'>
			<div
				style={{ width: `${progressPercentage}%` }}
				className={`h-full ${
					progressPercentage < 70 ? 'bg-[#FFA300]' : 'bg-green-600'
				}`}
			>

            </div>
            
		</div>

   </>
  )
}

export default ProgressBar