import React from 'react';
import './myLibrary.css'; 
import GameCard from '../components/GameCard';

function MyLibrary({ games, reference, library, setLibrary, bag, setBag }) {
  return (
    <section id="library" className='library' ref={reference}>
      <div className="container-fluid">
        <div className="row mb-3">
            <h1>My Library</h1>
        </div>
        <div className="row">
            {games.length === 0 ? (
                <h2 className="text-white">Your library is empty</h2>
            ) : (
                games.map(game => (
                    <GameCard 
                        key={game._id} 
                        game={game} 
                        library={library} 
                        setLibrary={setLibrary} 
                        bag={bag} 
                        setBag={setBag} 
                    />
                ))
            )}
        </div>
      </div>
    </section>
  );
}

export default MyLibrary;