import React from 'react'
import {Link,NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between bg-gray-900'>

          <div className='  font-bold text-4xl text-green-600'>🧑‍💻 EM SERVICE</div>
          <div className='flex gap-10 text-white font-bold justify-center items-center'>
             <Link  to='/'>Home</Link>
             <Link to='/'>profile</Link>
             <Link to='/'>logout</Link>
          </div>
            
    </div>
  )
}

export default Navbar
