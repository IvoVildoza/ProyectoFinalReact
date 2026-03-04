import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import ItemList from "../components/ItemList/ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
  resolve(products.filter(p => p.category.toLowerCase() === categoryId.toLowerCase()));
} else {
  resolve(products);
}
      }, 500);
    });

    getProducts.then(res => setItems(res));
  }, [categoryId]);

  return (
    <div>
      <h1 className="catalog-title">Catálogo</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
