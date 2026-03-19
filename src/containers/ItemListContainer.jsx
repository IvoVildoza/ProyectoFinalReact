import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import ItemList from "../components/ItemList/ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

useEffect(() => {
  const productsRef = collection(db, "products");

  const q = productsRef;

  getDocs(q)
    .then((snapshot) => {
      const productsAdapted = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setItems(productsAdapted);
    })
    .catch((error) => console.log(error));

}, [categoryId]);
  return (
    <div>
      <h1 className="catalog-title">Catálogo</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
