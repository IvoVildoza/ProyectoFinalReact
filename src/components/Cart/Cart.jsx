import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { db } from "../../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import "./Cart.css"; // CSS que vamos a usar

const Cart = () => {
  const { cart, removeItem, clearCart, getTotalPrice } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // 🔹 Cerrar formulario si carrito queda vacío
  useEffect(() => {
    if (cart.length === 0) {
      setShowForm(false);
    }
  }, [cart]);

  const handleConfirm = async (buyerData) => {
    if (!cart.length) return;

    const order = {
      buyer: buyerData,
      items: cart.map((p) => ({
        id: p.id,
        title: p.title,
        price: p.price,
        quantity: p.quantity,
      })),
      total: getTotalPrice(),
      date: Timestamp.fromDate(new Date()),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id); // guardar ID
      clearCart();            // limpiar carrito
    } catch (error) {
      console.error("Error generando la orden:", error);
      alert("Hubo un error al generar la orden. Intenta nuevamente");
    }
  };

  // 🔹 Carrito vacío
  if (cart.length === 0 && !orderId) {
    return (
      <div className="container">
        <h2>Carrito</h2>
        <p>El carrito está vacío 🛒</p>
        <Link to="/">Ir a comprar</Link>
      </div>
    );
  }

  // 🔹 Orden finalizada
  if (orderId) {
    return (
      <div className="container">
        <h2>¡Compra finalizada! ✅</h2>
        <p>ID de tu orden: {orderId}</p>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  // 🔹 Carrito con productos
  return (
    <div className="container">
      <h2>Carrito</h2>
      {cart.map((prod) => (
        <div key={prod.id} className="cart-item">
          {prod.image && <img src={prod.image} alt={prod.title} />}
          <div className="cart-item-info">
            <h4>{prod.title}</h4>
            <p>Cantidad: {prod.quantity}</p>
            <p>Precio unitario: ${prod.price}</p>
            <p>Subtotal: ${prod.price * prod.quantity}</p>
          </div>
          <button onClick={() => removeItem(prod.id)}>Eliminar producto</button>
        </div>
      ))}

      <hr />
      <h3>Total: ${getTotalPrice()}</h3>
      <div style={{ marginTop: "20px" }}>
        <button className="finalize-btn" onClick={() => setShowForm(true)}>
          Finalizar compra
        </button>
        {showForm && <CheckoutForm onConfirm={handleConfirm} />}
      </div>
    </div>
  );
};

export default Cart;