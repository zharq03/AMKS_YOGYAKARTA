import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const JudulKegiatan = () => {
  const navigate = useNavigate();

  const kegiatan = [
    { nama: "Kerohanian", gambar: "/imagesberanda/sholat.png", path: "/KegiatanKerohanian" },
    { nama: "Olahraga", gambar: "/imagesberanda/badminton.png", path: "/KegiatanOlahraga" },
    { nama: "Kerja Bakti", gambar: "/imagesberanda/tirakatan.png", path: "/KerjaBakti" },
  ];

  return (
    <motion.div
      className="relative w-full max-w-[calc(100%-60px)] mx-auto h-[450px] md:h-[500px] bg-cover bg-center flex items-center justify-start px-[30px] rounded-xl overflow-hidden"
      style={{ backgroundImage: "url('/imagesberanda/rumah.jpg')" }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Overlay Gelap */}
      <motion.div 
        className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      ></motion.div>

      {/* Konten Teks */}
      <motion.div 
        className="relative z-10 max-w-2xl text-white"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Kegiatan Wajib <br /> AMKS Yogyakarta
        </h1>
        <p className="mt-3 text-lg">Asrama Mahasiswa Kabupaten Sambas</p>
        <ul className="mt-4 text-md list-disc pl-5 space-y-1">
          <li>Kajian rutin setiap minggu</li>
          <li>Olahraga bersama di akhir pekan</li>
          <li>Kerja bakti setiap bulan</li>
          <li>Kegiatan sosial dan kemanusiaan</li>
        </ul>
      </motion.div>

      {/* Card Slider */}
      <motion.div 
        className="absolute bottom-8 right-8 flex gap-4 overflow-x-auto scrollbar-hide w-64 md:w-80"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {kegiatan.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => navigate(item.path, { replace: true })}
            className="min-w-[150px] md:min-w-[180px] bg-white bg-opacity-90 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={item.gambar} alt={item.nama} className="w-full h-28 object-cover rounded-t-lg" />
            <div className="p-3 text-center font-semibold text-gray-800">{item.nama}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default JudulKegiatan;
