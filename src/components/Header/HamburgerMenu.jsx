import { useState } from 'react';
import './HamburgerMenu.css'; 

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container">
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Web</a></li>
          <li><a href="/">App</a></li>
          <li><a href="/">Security</a></li>
          <li><a href='/articles/article'>Tech Blogs</a></li>
          <li><a href='/articles/users'>Members</a></li>
        </ul>
      </nav>
    </div>
  );
}
