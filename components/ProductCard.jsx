import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // ✅ import

function ProductCard({ product }) {
  const { addToCart } = useCart(); // ✅ context se function

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', margin: '1rem', width: '250px' }}>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p><b>${product.price}</b></p>
      <Link to={`/product/${product._id}`} style={{ display: 'block', marginBottom: '0.5rem' }}>View Details</Link>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;


