import { useState, useEffect } from 'react';
import './CardCart.css';
import Card from './Card/Card';

function App() {
  const [cards, setCards] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('./card.json')
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  // Add to Cart Function
  const addToCart = (product) => {
    // Add the product to the cart if it's not already added
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  // Remove from Cart Function
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="main-container">
      {/* Cards Section */}
      <div className="cards-container">
        <h1>Products</h1>
        <div className="cards-grid">
          {cards.map((card) => (
            <div className="card-wrapper" key={card.id}>
              <Card
                product={card}
                addToCart={addToCart}
                isInCart={cart.some((item) => item.id === card.id)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div className="cart-container">
        <h1>Added Cart</h1>
        <div className="cart-manage">
          <h4>Product Name</h4>
          <h4>Price</h4>
          <h4>Action</h4>
        </div>
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <h4>{item.title}</h4>
              <h4>${item.price}</h4>
              <button className="r-button" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
