import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";

function App() {
  return (
    <Router>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/empresa" element={<Empresa />}>
        </Route>
        <Route path="/contato" element={<Contato />}>
        </Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
