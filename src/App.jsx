import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/navbar";
import { Cart } from "./pages/cart";
import { FaleConosco } from "./pages/faleConosco/index1";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { NotFound } from "./pages/notFound";
import { PainelAdmin } from "./pages/painelAdmin";
import { Cliente } from "./pages/painelAdmin/cliente";
import { Produto } from "./pages/produto";
import { Produtos } from "./pages/produtos";
import { Register } from "./pages/register";
import { Sobre } from "./pages/sobre";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/produtos" element={<Produtos />} exact={true} />
        <Route path="/produtos/:id" element={<Produto />} exact={true} />
        <Route path="/cart" element={<Cart />} exact={true} />
        <Route path="/login" element={<Login />} exact={true} />
        <Route path="/register" element={<Register />} exact={true} />
        <Route path="/fale-conosco" element={<FaleConosco />} exact={true} />
        <Route path="/admin" element={<PainelAdmin />} exact={true} />
        <Route path="/clientes-gen" element={<Cliente />} exact={true}/>
        <Route path="/sobre" element={<Sobre />} exact={true}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
