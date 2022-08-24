import Header from "Components/Header";
import Menu from "Components/Menu";
import Sobre from "Components/Sobre";
import Cardapio from "pages/Cardapio";
import Prato from "pages/Cardapio/Prato";
import Footer from "pages/Footer";
import Inicio from "pages/Inicio";
import NotFound from "pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path = "sobre" element = {<Sobre />} />
          </Route>
          <Route path = "prato/:id" element = {<Prato />} />
          <Route path = "*" element = {<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
