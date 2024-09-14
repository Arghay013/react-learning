const Card = ({ product, addToCart, isInCart }) => {
    return (
      <div className="card">
        <h1>{product.title}</h1>
        <img src={product.picture} alt={product.title} className="card-image" />
        <p>Price: ${product.price}</p>
        <button
          className="button"
          onClick={() => addToCart(product)}
          disabled={isInCart}
        >
          {isInCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    );
  };
  
  export default Card;
  