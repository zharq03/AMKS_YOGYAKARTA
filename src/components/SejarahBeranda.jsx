import React from "react";
import { useNavigate } from "react-router-dom";

const SejarahBeranda = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 p-4">
      {/* Gambar Sejarah */}
      <img
        src="/images/2024.png"
        alt="Sejarah AMKS"
        className="rounded-lg shadow-lg md:w-1/2 transform transition duration-300 hover:scale-105 hover:shadow-xl"
      />

      {/* Konten Teks */}
      <div className="md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 hover:text-yellow-600 transition duration-300">
          Sejarah Berdirinya AMKS Yogyakarta
        </h2>
        <p className="mt-4 text-gray-600 hover:text-gray-800 transition duration-300">
          Berdiri pada tahun 2006, didirikan oleh alumni asrama dengan membeli
          sebuah rumah warga asli Yogyakarta, hingga bangunan tersebut menjadi
          asrama dan tempat mahasiswa Sambas bermain dan bercerita.
        </p>
        <button
          onClick={() => navigate("/IsiSejarah")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transform transition duration-300"
        >
          Lebih Lengkap
        </button>
      </div>
    </div>
  );
};

export default SejarahBeranda;
