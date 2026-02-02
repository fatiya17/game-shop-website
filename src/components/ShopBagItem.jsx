import React from 'react';
import './shopBagItem.css';

function ShopBagItem({ game, index, bag, setBag }) {

  const handleRemoveFromBag = (gameToRemove) => {
    const newBag = bag.filter(item => item._id !== gameToRemove._id);
    setBag(newBag);
    localStorage.setItem('bag', JSON.stringify(newBag));
  };

  return (
    <tr className="shopBagItem">
      <th scope="row">{index + 1}</th>
      <td>
        <img src={game.img} alt={game.title} className="img-fluid" />
      </td>
      <td className="title">{game.title}</td>
      <td>${game.price.toFixed(2)}</td>
      <td>{game.discount * 100}%</td>
      <td className="payment">
        ${(game.price * (1 - game.discount)).toFixed(2)}
      </td>
      <td>
        <a href="#" onClick={(e) => {
            e.preventDefault();
            handleRemoveFromBag(game);
        }}>
          <i className="bi bi-trash"></i>
        </a>
      </td>
    </tr>
  );
}

export default ShopBagItem;