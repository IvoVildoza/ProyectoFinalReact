import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import ItemDetail from "../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
  .then((res) => {
    console.log("DOC:", res);
    console.log("DATA:", res.data());

    if (res.exists()) {
      const product = { id: res.id, ...res.data() };
      console.log("PRODUCT:", product); // 👈 CLAVE
      setItem({ id: res.id, ...res.data() });
    } else {
      console.log("No existe el producto");
    }
  })
  .catch((error) => console.log(error));
  }, [itemId]);

  return item ? <ItemDetail {...item} /> : <p>Cargando...</p>;
};

export default ItemDetailContainer;