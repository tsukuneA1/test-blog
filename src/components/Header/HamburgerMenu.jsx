import { useState } from "react";
import "./HamburgerMenu.css";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="menu-container">
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {isOpen && <div className="overlay" onClick={closeMenu} />}
      <nav className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li onClick={() => setIsOpen(false)}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'start', cursor: 'pointer'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m10 18l-6-6l6-6l1.4 1.45L7.85 11H20v2H7.85l3.55 3.55z"></path></svg>
            Back
            </div>
            
          </li>
          <li><a href="/">Home</a></li>
          <li><a href="/web">Web</a></li>
          <li><a href="/app">App</a></li>
          <li><a href="/competitive_programming">競プロ</a></li>
          <li><a href="/hackathon">hackathon</a></li>
          <li><a href="/other">other</a></li>
          <li><a href="/articles/article">Tech Blogs</a></li>
          <li><a href="/articles/users">Members</a></li>
        </ul>
      </nav>
    </div>
  );
}
