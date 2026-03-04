import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import ItemDetail from "../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
  const getItem = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(p => p.id === Number(itemId)));
    }, 500);
  });

  getItem.then(res => setItem(res));
}, [itemId]);



  return item ? <ItemDetail {...item} /> : <p>Cargando...</p>;
};

export default ItemDetailContainer;
