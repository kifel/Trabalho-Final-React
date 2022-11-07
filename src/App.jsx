import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/navbar";
import { Cart } from "./pages/cart";
import { FaleConosco } from "./pages/faleConosco/index1";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { NotFound } from "./pages/notFound";
import { PainelAdmin } from "./pages/painelAdmin";
import { Categoria } from "./pages/painelAdmin/categoria";
import { CategoriaEditar } from "./pages/painelAdmin/categoria/editar";
import { CategoriaInserir } from "./pages/painelAdmin/categoria/inserir";
import { Cliente } from "./pages/painelAdmin/cliente";
import { ClienteEditar } from "./pages/painelAdmin/cliente/editar";
import { Funcionarios } from "./pages/painelAdmin/funcionarios";
import { FuncionariosEditar } from "./pages/painelAdmin/funcionarios/editar";
import { FuncionariosInserir } from "./pages/painelAdmin/funcionarios/inserir";
import { Produto } from "./pages/produto";
import { Produtos } from "./pages/produtos";
import { Register } from "./pages/register";

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
        <Route path="/clientes-gen/editar/:id" element={<ClienteEditar />} exact={true} />
        <Route path="/funcionarios-gen" element={<Funcionarios />} exact={true} />
        <Route path="/funcionarios-gen/cadastrar" element={<FuncionariosInserir />} exact={true} />
        <Route path="/funcionarios-gen/editar/:id" element={<FuncionariosEditar />} exact={true} />
        <Route path="/categoria-gen" element={<Categoria />} exact={true} />
        <Route path="/categoria-gen/cadastrar" element={<CategoriaInserir />} exact={true} />
        <Route path="/categoria-gen/editar/:id" element={<CategoriaEditar />} exact={true} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
