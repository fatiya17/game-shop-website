import React, { useState, useEffect } from 'react';
import './bag.css';
import ShopBagItem from '../components/ShopBagItem';

function Bag({ games, reference, bag, setBag }) {
  const [total, setTotal] = useState(0);

  // Fungsi hitung total belanja
  const handleTotalPayment = () => {
    if (!bag || bag.length === 0) return 0;
    return bag
      .map(item => item.price * (1 - item.discount))
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
      .toFixed(2);
  };

  useEffect(() => {
    setTotal(handleTotalPayment());
  }, [bag]);

  return (
    <section id="bag" className="bag" ref={reference}>
      <div className="container-fluid">
        <div className="row mb-4">
          <h1>My Bag</h1>
        </div>
        
        {bag.length === 0 ? (
          <div className="empty-bag">
            <h2>Your bag is empty</h2>
            <p>Start adding some awesome games!</p>
          </div>
        ) : (
          <>
            <div className="row">
              <div className="table-responsive">
                <table className="shopBagTable table table-borderless align-middle">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Preview</th>
                      <th>Game</th>
                      <th>Price</th>
                      <th>Discount</th>
                      <th>Payment</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bag.map((game, index) => (
                      <ShopBagItem 
                        index={index} 
                        key={game._id} 
                        game={game} 
                        bag={bag}
                        setBag={setBag}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bagian Total & Checkout */}
            <div className="row d-flex justify-content-between mt-5 align-items-center summary-row">
              <div className="col-lg-2">
                <p className="itemCount">Total Items: <b>{bag.length}</b></p>
              </div>
              <div className="col-lg-10 d-flex justify-content-end">
                <div className="payment-box">
                  <div className="total-text">Total: <span>${total}</span></div>
                  <a href="#" className="checkout-btn">
                    Check Out <i className="bi bi-wallet-fill"></i>
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Bag;