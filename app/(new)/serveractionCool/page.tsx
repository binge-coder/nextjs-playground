import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='border border-red-500 min-h-screen flex items-center justify-center' >
        <form action="" className='border border-green-500 p-4'>
            <label htmlFor="name">name: </label>
            <input type="text" name="fname" id="fnameID" />
        </form>


    </div>
  )
}

export default page