import React from "react";

const kegiatanList = [
  {
    image: "/path-to-image-1.jpg",
    title: "Sholat",
    description: "Adalah kegiatan yang turun temurun dilakukan ketika warga asrama sudah gabut level maksimal",
  },
  {
    image: "/path-to-image-2.jpg",
    title: "Ngaji",
    description: "Adalah kegiatan yang turun temurun dilakukan ketika warga asrama sudah gabut level maksimal",
  },
  {
    image: "/path-to-image-3.jpg",
    title: "Khultum",
    description: "Adalah kegiatan yang turun temurun dilakukan ketika warga asrama sudah gabut level maksimal",
  },
  {
    image: "/path-to-image-4.jpg",
    title: "Idul Adha",
    description: "Adalah kegiatan yang turun temurun dilakukan ketika warga asrama sudah gabut level maksimal",
  },
];

const IsiKerohanian = () => {
  return (
    <div className="grid grid-cols-2 gap-8 p-10">
      {kegiatanList.map((item, index) => (
        <div key={index} className="flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
          <img src={item.image} alt={item.title} className="w-32 h-32 object-cover rounded-lg shadow-lg" />
          <div>
            <h3 className="text-xl font-bold text-yellow-400 transition-transform duration-300 hover:scale-110">
              {item.title}
            </h3>
            <p className="text-sm text-gray-700">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IsiKerohanian;
