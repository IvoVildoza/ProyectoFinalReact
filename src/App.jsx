import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>

          <Route path="/cart" element={<Cart />} />

          <Route path="/" element={<ItemListContainer />} />

          <Route
            path="/category/:categoryId"
            element={<ItemListContainer />}
          />

          <Route
            path="/item/:itemId"
            element={<ItemDetailContainer />}
          />

          <Route
            path="*"
            element={<h2>404 - Página no encontrada</h2>}
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;