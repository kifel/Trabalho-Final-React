import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} exact={true} />
          {/* <Route path="/produtos" element={<Produtos />} exact={true} />
          <Route path="/produtos/:id" element={<Produto />} exact={true} />
          <Route path="/cart" element={<Cart />} exact={true} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
