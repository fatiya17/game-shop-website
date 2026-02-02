import React, { useState, useEffect, useRef } from "react";
import "./main.css";
import SideMenu from "../components/SideMenu";
import Header from "./Header";
import Home from "./Home";
import Categories from "./Categories";
import MyLibrary from "./MyLibrary";
import Bag from "./Bag";

function Main() {
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);
  
  const [library, setLibrary] = useState(() => {
    const savedLibrary = localStorage.getItem('library');
    return savedLibrary ? JSON.parse(savedLibrary) : [];
  });

  const [bag, setBag] = useState(() => {
    const savedBag = localStorage.getItem('bag');
    return savedBag ? JSON.parse(savedBag) : [];
  });

  useEffect(() => {
    localStorage.setItem('library', JSON.stringify(library));
  }, [library]);

  useEffect(() => {
    localStorage.setItem('bag', JSON.stringify(bag));
  }, [bag]);

  const homeRef = useRef();
  const categoriesRef = useRef();
  const libraryRef = useRef();
  const bagRef = useRef();

  const sections = [
    { name: 'home', ref: homeRef, active: true },
    { name: 'categories', ref: categoriesRef, active: false },
    { name: 'library', ref: libraryRef, active: false },
    { name: 'bag', ref: bagRef, active: false },
  ];

  const handleToggleActive = () => {
    setActive(!active);
  };

  const handleSectionActive = (target) => {
    sections.map(section => {
      section.ref.current.classList.remove('active');
      if (section.ref.current.id === target) {
        section.ref.current.classList.add('active');
      }
      return section;
    });
  };

  const fetchData = () => {
    fetch('http://localhost:3000/api/gamesData.json')
      .then(res => res.json())
      .then(data => setGames(data))
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <SideMenu active={active} sectionActive={handleSectionActive} />
      <div className={`banner ${active ? "active" : ""}`}>
        <Header 
            toggleActive={handleToggleActive} 
            library={library} 
            bag={bag}
            sectionActive={handleSectionActive}
        />
        
        <div className="container-fluid">
          {games && games.length > 0 && (
            <>
              <Home games={games} reference={homeRef} library={library} setLibrary={setLibrary} bag={bag} setBag={setBag} />
              <Categories games={games} reference={categoriesRef} library={library} setLibrary={setLibrary} bag={bag} setBag={setBag} />
              <MyLibrary games={library} reference={libraryRef} library={library} setLibrary={setLibrary} bag={bag} setBag={setBag} />
              <Bag games={bag} reference={bagRef} bag={bag} setBag={setBag} />
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default Main;