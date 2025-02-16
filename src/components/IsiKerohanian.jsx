import React from "react";

const kegiatanList = [
  {
    image: "/images/sholat.png",
    title: "Sholat",
    description: "Kegiatan ibadah wajib bagi seluruh warga asrama yang dilakukan secara berjamaah untuk meningkatkan keimanan dan kebersamaan.",
  },
  {
    image: "/images/ngaji1.png",
    title: "Ngaji",
    description: "Kegiatan membaca dan memahami Al-Qur'an yang rutin dilakukan bersama sebagai bentuk pembelajaran agama dan peningkatan spiritual.",
  },
  {
    image: "/images/kultum.png",
    title: "Khultum",
    description: "Sesi ceramah singkat bertujuan untuk berbagi ilmu dan meningkatkan pemahaman keislaman.",
  },
  {
    image: "/images/idl1.jpg",
    title: "Idul Adha",
    description: "Perayaan hari besar Islam yang dirayakan dengan sholat Id berjamaah dan penyembelihan hewan kurban sebagai wujud kepedulian sosial.",
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
