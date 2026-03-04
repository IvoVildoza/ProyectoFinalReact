import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getTotalQuantity } = useCart();

  return (
    <Link to="/cart">
      🛒 {getTotalQuantity()}
    </Link>
  );
};

export default CartWidget;