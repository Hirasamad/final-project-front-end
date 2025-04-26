import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


function Navbar() {
  const { cartItems } = useCart();

  return (
    <nav style={{ 
      padding: "15px 30px", 
      backgroundColor: "#333", 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center",
      color: "#fff"
    }}>
      <h2>MyStore</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
        <Link to="/cart" style={{ color: "#fff", textDecoration: "none" }}>
          Cart ({cartItems.length})
        </Link>
        <Link to="/checkout" style={{ color: "#fff", textDecoration: "none" }}>Checkout</Link>
  <Link to="/admin" style={{ color: "#fff", textDecoration: "none" }}>Admin</Link>
  <Link to="/login" style={{ color: "#fff", textDecoration: "none" }}>Login</Link>
  <Link to="/signup" style={{ color: "#fff", textDecoration: "none" }}>Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;




