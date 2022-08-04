import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {
	

	return (
    <nav className='h-[50px] flex justify-between px-5 bg-gray-500 text-white items-center'>
      <span className='font-bold'>React 2022</span>

      <span>
        <Link to='/' className='mr-2'>Product</Link>
        <Link to='/about'>About</Link>
      </span>
    </nav>
  );
}
