import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='border border-green-500'>
      <div className="grid grid-cols-3 gap-4">
  <div className="bg-blue-500 text-white text-center py-4">Column 1</div>
  <div className="bg-gray-200 text-center py-4">Column 2</div>
  <div className="bg-blue-500 text-white text-center py-4">Column 3</div>
</div>    
<div className="flex flex-col md:flex-row">
  <div className="w-full md:w-1/4 md:block hidden bg-blue-500 text-white text-center py-4">Sidebar</div>
  <div className="flex-1 bg-gray-200 text-center py-4">Content</div>
</div>  
    </div>
  )
}

export default page