import { Link } from "react-router-dom";

const Item = ({ id, name, price, img }) => {
  return (
    <div className="item">
      <img
        src={img}
        alt={name}
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover"
        }}
      />
      <h3>{name}</h3>
      <p>${price}</p>
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;