import React, { useState, useEffect } from 'react';
import './categories.css';
import GameCard from '../components/GameCard';

function Categories({ games, reference, library, setLibrary, bag, setBag }) {
  const [data, setData] = useState(games);
  const filters = [
    { name: 'All', title: 'All' },
    { name: 'RPG', title: 'RPG' },
    { name: 'MOBA', title: 'MOBA' },
    { name: 'Battle', title: 'Battle' },
    { name: 'Racing', title: 'Racing' },
    { name: 'Fighting', title: 'Fighting' },
  ];
  const [activeFilter, setActiveFilter] = useState('All');
  const [text, setText] = useState('');

  useEffect(() => {
    setData(games);
  }, [games]);

  const handleFilterGames = (category) => {
    setActiveFilter(category);
    setText('');
    if (category === 'All') {
      setData(games);
      return;
    }
    setData(games.filter(game => game.category === category));
  };

  const handleSearchGames = (e) => {
    const val = e.target.value;
    setText(val);
    setData(games.filter(game => 
      game.title.toLowerCase().includes(val.toLowerCase())
    ));
    setActiveFilter('All');
  };

  return (
    <section id="categories" className='categories' ref={reference}>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-lg-8 d-flex align-items-center justify-content-start">
            <ul className="filters">
              {filters.map(filter => (
                <li 
                  key={filter.name} 
                  className={`${activeFilter === filter.name ? 'active' : ''}`}
                  onClick={() => handleFilterGames(filter.name)}
                >
                  {filter.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-end">
            <div className="search">
              <i className="bi bi-search"></i>
              <input 
                type="text" 
                placeholder="Search" 
                value={text}
                onChange={handleSearchGames}
              />
            </div>
          </div>
        </div>

        <div className="row mt-4">
          {data.map(game => (
            <GameCard 
                key={game._id} 
                game={game} 
                library={library} 
                setLibrary={setLibrary} 
                bag={bag} 
                setBag={setBag} 
            />
          ))}
          {data.length === 0 && (
            <h2 className="text-center text-white mt-5">No Games Found</h2>
          )}
        </div>
      </div>
    </section>
  );
}

export default Categories;