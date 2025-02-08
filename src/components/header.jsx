import { Link } from "react-router-dom";
import Logo from "../assets/AMKS.png";

const Header = () => {
  return (
    <header className="bg-white shadow-md  top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
        <img
            src={Logo} 
            alt="Logo"
            className="h-10 w-10 rounded-full"
        />
        <h1 className="text-lg font-bold text-blue-600">AMKS Yogyakarta</h1>
        </div>


        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 transition duration-200"
          >
            Beranda
          </Link>
          <Link
            to="/sejarah"
            className="text-gray-700 hover:text-blue-600 transition duration-200"
          >
            Sejarah
          </Link>
          <Link
            to="/kegiatan"
            className="text-gray-700 hover:text-blue-600 transition duration-200"
          >
            Kegiatan
          </Link>
          <Link
            to="/lokasi"
            className="text-gray-700 hover:text-blue-600 transition duration-200"
          >
            Lokasi
          </Link>
        </nav>

        {/* Action Button */}
        <Link
          to="/buku-angkatan"
          className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-200"
        >
          Buku Angkatan
        </Link>
      </div>
    </header>
  );
};

export default Header;
