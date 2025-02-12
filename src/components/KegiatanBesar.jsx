import React from "react";
import { motion } from "framer-motion";

const KegiatanBesar = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center px-6 py-12">
      {/* Judul */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-bold text-yellow-400 drop-shadow-lg text-center"
      >
        Kegiatan Besar Asrama
      </motion.h2>

      {/* Latar Belakang dengan Efek Bergerak */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative w-full max-w-5xl bg-gradient-to-b from-blue-800 to-blue-600 rounded-2xl p-8 mt-6 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-lg"
      >
        {/* Bagian Teks (Kiri) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:w-1/2 text-white"
        >
          <h3 className="text-2xl font-semibold text-yellow-400">
            Gelar Budaya Sambas
          </h3>
          <p className="mt-3 text-lg">
            Adalah kegiatan yang turun temurun dilakukan satu kali dalam waktu satu
            tahun yang di mana ini pasti dilakukan tapi tidak pasti untuk waktu
            pelaksanaannya.
          </p>
        </motion.div>

        {/* Bagian Gambar (Kanan) */}
        <div className="w-full md:w-1/2 relative">
          {/* Gambar Besar dengan Efek Hover */}
          <motion.img
            src="/imagesberanda/GBS.jpg"
            alt="Gelar Budaya"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />

          {/* Gambar Kecil (di Bawah Kiri Gambar Besar) */}
          <div className="absolute bottom-[-20px] left-[-20px] flex gap-4">
            <motion.img
              src="/imagesberanda/melayu.jpg"
              alt="Gambar Kecil 1"
              className="w-24 h-24 object-cover rounded-lg shadow-md border-2 border-white"
              animate={{
                y: [0, -5, 0],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default KegiatanBesar;
