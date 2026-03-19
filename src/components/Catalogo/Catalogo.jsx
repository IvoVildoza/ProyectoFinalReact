import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

function Catalogo() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsRef = collection(db, "products");

    getDocs(productsRef)
      .then((snapshot) => {
        const productsAdapted = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsAdapted);
      });
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "30px 0", fontSize: "36px" }}>
        Catálogo
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "30px",
        padding: "0 20px"
      }}>
        {products.map(product => (
          <div key={product.id}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogo;