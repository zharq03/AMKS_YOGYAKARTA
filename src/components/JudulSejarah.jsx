import rumah from "../assets/rumah.jpg";
import { motion } from "framer-motion";

const JudulSejarah = () => {
    return (
          <motion.div
                className="w-full max-w-[calc(100%-60px)] mx-auto relative h-[450px] md:h-[500px] rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }} // Mulai dari transparan dan turun sedikit
                animate={{ opacity: 1, y: 0 }} // Muncul penuh dan naik ke posisi normal
                exit={{ opacity: 0, y: -30 }} // Saat halaman berubah, menghilang ke atas
                transition={{ duration: 0.8, ease: "easeOut" }} // Efek smooth
              >
                {/* Background Image */}
                <motion.img
                  src={rumah}
                  alt="Asrama Mahasiswa Kab. Sambas"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }} // Mulai dengan sedikit diperbesar
                  animate={{ scale: 1 }} // Kembali ke ukuran normal
                  transition={{ duration: 1.2, ease: "easeOut" }} // Efek smooth zoom-out
                />
                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-start p-8 space-y-4 text-white bg-black/50">
                  <h1 className="text-4xl font-bold leading-snug">
                    Asrama Mahasiswa <br /> Kab. Sambas <br />
                    <span className="text-yellow-300">YOGYAKARTA</span>
                  </h1>
                  <p className="text-lg">
                    Sambas adalah rumah kedua bagi mahasiswa-mahasiswa dalam mencari ilmu di tanah perantauan ini.
                    Cerita perjalanan, perjuangan, dan kebersamaan dibangun dari sini.
                  </p>
                  <p className="text-sm font-light">
                    Jalan Piringan No. 5B UH III Kalasan, Kota Yogyakarta
                  </p>
                </div>
              </motion.div>
        );
      };
  
  export default JudulSejarah;
  