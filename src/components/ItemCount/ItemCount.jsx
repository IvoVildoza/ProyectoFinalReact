import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div>
      <button onClick={restar}>-</button>

      <span style={{ margin: "0 10px" }}>{count}</span>

      <button onClick={sumar} disabled={count >= stock}>
        +
      </button>

      <p>Stock disponible: {stock}</p>

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;