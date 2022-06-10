import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <div className='logo'>
          <a href='/'>
            ATools<span>.</span>
          </a>
        </div>
        <div className='user'>
          <button className='header_btn trail'>StartFree Trail</button>
          <button className='header_btn login'>Login</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
