import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex flex-nowrap justify-center space-x-8  ">
      <Link className='bg-violet-50 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  p-3 w-36 border-2 rounded-lg border-blue-600' >Home</Link >
      <Link to="/login" className='hover:bg-slate-200  p-3 w-36 border-2 rounded-lg border-inherit'>Login</Link >
     
      <Link to="/friends" className='hover:bg-slate-200  p-3  w-36 border-2 rounded-lg border-inherit'>Friends</Link>
      <Link to="/about"  className='hover:bg-slate-200  p-3  w-36 border-2 rounded-lg border-inherit'>About</Link>

    </div>
    
  );
};

export default Header;