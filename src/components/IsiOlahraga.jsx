import React from "react";
import { motion } from "framer-motion";

const IsiOlahraga = () => {
  const kegiatan = [
    {
      nama: "BADMINTON",
      img: "/imagesberanda/badminton.png",
      posisi: "teks-atas",
    },
    {
      nama: "FUTSAL",
      img: "/imagesberanda/futsal.png",
      posisi: "gambar-atas",
    },
    {
      nama: "RENANG",
      img: "/imagesberanda/renang.png",
      posisi: "teks-atas",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-10 p-10">
      {kegiatan.map((item, index) => (
        <motion.div
          key={index}
          className="max-w-xs text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          {/* Jika teks di atas */}
          {item.posisi === "teks-atas" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-lg font-bold text-blue-700 shadow-md mb-3">
                memiliki 3 kegiatan wajib yang di lakukan pada setiap:
              </h2>
              <p className="text-sm font-semibold text-gray-700 leading-tight">
                kegiatan kerja bakti yang di <br />
                amaishaufnaifnsainjaicna <br />
                ajkmsavgrnwisovdJogbifn <br />
                eaidbacnsofbh wjvdksmcnefiuk <br />
                wjldwSODIFNSUDJK VSLDWOKA <br />
                IJOVNFJL NVJFAIJNOInjnojniuh uuh j
              </p>
            </motion.div>
          )}

          {/* Gambar dengan efek zoom dan glow */}
          <motion.div
            className="relative mt-4 shadow-lg rounded-2xl overflow-hidden"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={item.img}
              alt={item.nama}
              className="w-full h-60 object-cover rounded-2xl shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition duration-300">
              <motion.h3
                className="text-white text-2xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {item.nama}
              </motion.h3>
            </div>
          </motion.div>

          {/* Jika teks di bawah */}
          {item.posisi === "gambar-atas" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-lg font-bold text-blue-700 shadow-md mt-3">
                memiliki 3 kegiatan wajib yang di lakukan pada setiap:
              </h2>
              <p className="text-sm font-semibold text-gray-700 leading-tight">
                kegiatan kerja bakti yang di <br />
                amaishaufnaifnsainjaicna <br />
                ajkmsavgrnwisovdJogbifn <br />
                eaidbacnsofbh wjvdksmcnefiuk <br />
                wjldwSODIFNSUDJK VSLDWOKA <br />
                IJOVNFJL NVJFAIJNOInjnojniuh uuh j
              </p>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default IsiOlahraga;
