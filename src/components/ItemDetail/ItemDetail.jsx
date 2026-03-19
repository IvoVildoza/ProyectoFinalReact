import { useState } from "react";
import { useCart } from "../../context/CartContext"; // 👈 ESTE
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, price, category, img, stock }) => {

  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (quantity) => {
    const item = { id, name, price };
    addItem(item, quantity);
    setAdded(true);
  };

  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} />
      <p>Precio: ${price}</p>
      <p>Categoría: {category}</p>

      {!added ? (
        <ItemCount stock={stock} onAdd={handleAdd} />
      ) : (
        <p>Producto agregado al carrito ✅</p>
      )}
    </div>
  );
};

export default ItemDetail;