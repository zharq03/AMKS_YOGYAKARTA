import { Link } from "react-router-dom";
import Logo from "../assets/AMKS.png";

const Header = () => {
  return (
    <header className="bg-white shadow-md top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-10 w-10 rounded-full" />
          <h1 className="text-lg font-bold text-blue-600">AMKS Yogyakarta</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition duration-200">
            Beranda
          </Link>
          <Link to="/sejarah" className="text-gray-700 hover:text-blue-600 transition duration-200">
            Sejarah
          </Link>
          <Link to="/kegiatan" className="text-gray-700 hover:text-blue-600 transition duration-200">
            Kegiatan
          </Link>
          {/* Lokasi Link ke Google Maps */}
          <a
            href="https://www.google.com/maps/place/Asrama+Sambas+(%EA%A6%84%EA%A6%B1%EA%A6%BF%EA%A6%A9%EA%A6%B1%EA%A6%A9%EA%A7%80%EA%A6%A7%EA%A6%B1%EA%A7%80)/@-7.8055809,110.3811882,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a5777578a54cd:0x59ad2302c84097ff!8m2!3d-7.8055862!4d110.3837631!16s%2Fg%2F11c5221yx_?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition duration-200"
          >
            Lokasi
          </a>
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
