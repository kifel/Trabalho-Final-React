import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/navbar";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/home";
import { Produto } from "./pages/produto";
import { Produtos } from "./pages/produtos";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} exact={true} />
          <Route path="/produtos" element={<Produtos />} exact={true} />
          <Route path="/produtos/:id" element={<Produto />} exact={true} />
          <Route path="/cart" element={<Cart />} exact={true} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
