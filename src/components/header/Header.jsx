import './header.css';

import { useState } from 'react';
import Navbar from './Navbar';
import Logo from './Logo';

const Header = () => {
  const [toggle  , setToggle] = useState(false);
  return (
  <header className="header">
  <Logo/>
<Navbar toggle={toggle} setToggle={setToggle}/>
    <div className="header-menu" onClick={()=> setToggle(prev => !prev)}>

      {toggle ?  <i className='bi bi-x-lg'></i> : <i className='bi bi-list'></i>}

    
    </div>
  </header>
  )
}

export default Header