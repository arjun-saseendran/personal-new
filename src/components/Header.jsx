import React from 'react'

export const Header = () => {
  return (
    <div className='flex justify-between items-center p-10 h-20 w-full bg-blue-500'>

<div className='flex items-center gap-4'>
<div>

  <img className='w-12 h-12 rounded-full' src="../../public/dp.jpeg" alt="" />
</div>
<div>

  <span className='text-white text-2xl'>Angel Maria</span>
</div>

</div>

<div>
    <ul className='flex gap-8 text-white font-bold'>
        <li className='cursor-pointer'>About Me</li>
        <li className='cursor-pointer'>Skills</li>
        <li className='cursor-pointer'>Hobbies & Interests</li>
        <li className='cursor-pointer'>Passions</li>
        <li className='cursor-pointer'>Academic Background</li>
        <li className='cursor-pointer'>Work Experience</li>
        <li className='cursor-pointer'>Certifications</li>
    </ul>

</div>

    </div>
  )
}
