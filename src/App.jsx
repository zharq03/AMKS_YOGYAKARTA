import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sejarah from "./pages/Sejarah";
import Kegiatan from "./pages/Kegiatan";
import Lokasi from "./pages/Lokasi.jsx";
import BukuAngkatan from "./pages/BukuAngkatan";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sejarah" element={<Sejarah />} />
        <Route path="/kegiatan" element={<Kegiatan />} />
        <Route path="/lokasi" element={<Lokasi />} />
        <Route path="/buku-angkatan" element={<BukuAngkatan />} />
      </Routes>
    </Router>
  );
}

export default App;
