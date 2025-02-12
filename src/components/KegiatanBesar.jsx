import React from "react";

const KegiatanBesar = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center px-6 py-12">
      {/* Judul */}
      <h2 className="text-4xl font-bold text-yellow-400 drop-shadow-lg text-center">
        Kegiatan Besar Asrama
      </h2>

      {/* Latar Belakang (Tidak Menutupi Seluruh Halaman) */}
      <div className="relative w-full max-w-5xl bg-gradient-to-b from-blue-800 to-blue-600 rounded-2xl p-8 mt-6 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-lg">
        {/* Bagian Teks (Kiri) */}
        <div className="w-full md:w-1/2 text-white">
          <h3 className="text-2xl font-semibold text-yellow-400">
            Gelar Budaya Sambas
          </h3>
          <p className="mt-3 text-lg">
            Adalah kegiatan yang turun temurun dilakukan satu kali dalam waktu satu
            tahun yang di mana ini pasti dilakukan tapi tidak pasti untuk waktu
            pelaksanaannya.
          </p>
        </div>

        {/* Bagian Gambar (Kanan) */}
        <div className="w-full md:w-1/2 relative">
          {/* Gambar Besar */}
          <img
            src="/imagesberanda/GBS.jpg"
            alt="Gelar Budaya"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
          />

          {/* Gambar Kecil (di Bawah Kiri Gambar Besar) */}
          <div className="absolute bottom-[-20px] left-[-20px] flex gap-4">
            <img
              src="/imagesberanda/melayu.jpg"
              alt="Gambar Kecil 1"
              className="w-24 h-24 object-cover rounded-lg shadow-md border-2 border-white"
            />
            {/* <img
              src="/images/kegiatan/kecil2.png"
              alt="Gambar Kecil 2"
              className="w-24 h-24 object-cover rounded-lg shadow-md border-2 border-white"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KegiatanBesar;
