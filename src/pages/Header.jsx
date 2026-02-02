import React from 'react';
import './header.css';
import userImg from '../images/user.jpg';

function Header({ toggleActive, library, bag, sectionActive }) {
  
  return (
    <header>
      <a href="#" className="menu" onClick={toggleActive}>
        <i className="bi bi-sliders"></i>
      </a>

      <div className="userItems">
        <a href="#" className="icon" onClick={() => sectionActive('library')}>
          <i className="bi bi-heart-fill"></i>
          <span className="like">{library ? library.length : 0}</span>
        </a>

        <a href="#" className="icon" onClick={() => sectionActive('bag')}>
          <i className="bi bi-bag-fill"></i>
          <span className="bagCount">{bag ? bag.length : 0}</span>
        </a>

        <div className="avatar">
          <a href="#" className="avatarLink">
            <img src={userImg} alt="User Image" />
          </a>
          <div className="user">
            <span>Fatiya Labibah</span>
            <a href="#">View Profile</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;