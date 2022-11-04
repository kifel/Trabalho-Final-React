import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/navbar";
import { Cart } from "./pages/cart";
import { Home } from "./pages/home";
import { NotFound } from "./pages/notFound";
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
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
