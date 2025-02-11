import React, { useState } from "react";

const DuluSekarangSejarah = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    { year: "2018", text: "Bentuk asrama pada tahun 2018 yang masih ada atap di depan garasi dan juga banyak pernak pernik di luar foto diambil melalui google maps dengan fitur street view.", image: "/imagesberanda/agustusan.png" },
    { year: "2019", text: "Bentuk asrama pada tahun 2019 yang lebih rapi dengan beberapa perbaikan kecil.", image: "/imagesberanda/agustusan.png" },
    { year: "2022", text: "Bentuk asrama pada tahun 2022 dengan atap depan sudah dihilangkan untuk memperluas area parkir.", image: "/imagesberanda/agustusan.png" },
    { year: "2023", text: "Bentuk asrama pada tahun 2023 dengan perubahan besar termasuk renovasi pada lantai dua.", image: "/imagesberanda/agustusan.png" },
    { year: "2024", text: "Bentuk asrama pada tahun 2024 setelah renovasi besar-besaran dengan tampilan modern.", image: "/imagesberanda/agustusan.png" },
  ];

  return (
    <div className="relative bg-gray-800 text-white">
      {/* Latar Belakang */}
      <img
        src="/imagesberanda/pantai.jpg"
        alt="Background"
        className="w-full h-[400px] object-cover"
      />

      {/* Teks Utama */}
      <h1 className="absolute top-40 left-1/2 transform -translate-x-1/2 text-4xl md:text-5xl font-bold tracking-wide transition-transform duration-300 hover:scale-110">
        Dulu VS Sekarang
      </h1>

      {/* Container Card */}
      <div className="absolute top-[280px] w-full flex justify-center gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`transition-all duration-300 rounded-lg shadow-lg bg-white text-black w-60 overflow-hidden cursor-pointer ${
              hoveredCard === index
                ? "transform scale-110 z-20" // Perbesar kartu yang di-hover
                : hoveredCard !== null
                ? "transform scale-90 opacity-70" // Kartu lain jadi kecil dan transparan
                : "z-10"
            }`}
          >
            <img
              src={card.image}
              alt={`Card ${index + 1}`}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">{card.year}</h2>
              <p className="text-sm text-gray-600">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Tambahkan margin untuk memberi jarak ke footer */}
      <div className="h-80"></div>
    </div>
  );
  
};

export default DuluSekarangSejarah;
