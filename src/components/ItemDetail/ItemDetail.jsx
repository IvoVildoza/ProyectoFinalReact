import { useState } from "react";
import { useCart } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, title, price, category, description }) => {

  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (quantity) => {
    const item = { id, title, price };
    addItem(item, quantity);
    setAdded(true);
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>Precio: ${price}</p>
      <p>Categoría: {category}</p>
      <p>Descripción: {description}</p>

      {!added ? (
        <ItemCount onAdd={handleAdd} />
      ) : (
        <p>Producto agregado al carrito ✅</p>
      )}
    </div>
  );
};

export default ItemDetail;