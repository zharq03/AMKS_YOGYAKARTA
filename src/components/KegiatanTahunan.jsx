import React from "react";

const KegiatanTahunan = () => {
  const kegiatan = [
    { nama: "Agustusan", gambar: "/imagesberanda/agustusan.png" },
    { nama: "Makrab", gambar: "/imagesberanda/boyro.jpg" },
    { nama: "Makrab", gambar: "/imagesberanda/makrabroxdd.jpg" },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between px-10 py-10">
      {/* Bagian Kiri (Teks) */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <h2 className="text-4xl font-bold text-yellow-500">Kegiatan Tahunan Asrama</h2>
        <p className="mt-3 text-gray-700 text-lg">
          Adalah kegiatan yang turun temurun dilakukan satu kali dalam waktu satu tahun yang di mana ini pasti dilakukan tapi tidak pasti untuk waktu pelaksanaannya.
        </p>
      </div>

      {/* Bagian Kanan (Card Slider) */}
      <div className="w-full md:w-1/2 flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        {kegiatan.map((item, index) => (
          <div
            key={index}
            className="w-1/2 min-w-[200px] md:min-w-[250px] bg-white rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 snap-start h-80"
          >
            <img src={item.gambar} alt={item.nama} className="w-full h-64 object-cover rounded-t-lg" />
            <div className="p-3 text-center font-semibold text-gray-800">{item.nama}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KegiatanTahunan;
