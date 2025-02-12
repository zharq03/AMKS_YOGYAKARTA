import rumah from "../assets/rumah.jpg";
import { useNavigate } from "react-router-dom";

const JudulKegiatan = () => {
  const navigate = useNavigate();

  const kegiatan = [
    { nama: "Kerohanian", gambar: "/imagesberanda/sholat.png", link: "KegiatanOlahraga" },
    { nama: "Olahraga", gambar: "/imagesberanda/badminton.png", link: "/KegiatanKerohanian" },
    { nama: "Kerja Bakti", gambar: "/imagesberanda/tirakatan.png", link: "/KerjaBakti" },
  ];

  return (
    <div className="relative w-full h-[450px] md:h-[500px] bg-cover bg-center flex items-center justify-start px-10"
      style={{ backgroundImage: "url('/imagesberanda/rumah.jpg')" }}
    >
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Konten Teks */}
      <div className="relative z-10 max-w-2xl text-white">
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
      </div>

      {/* Card Slider */}
      <div className="absolute bottom-8 right-8 flex gap-4 overflow-x-auto scrollbar-hide w-64 md:w-80">
        {kegiatan.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.link)}
            className="min-w-[150px] md:min-w-[180px] bg-white bg-opacity-90 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <img src={item.gambar} alt={item.nama} className="w-full h-28 object-cover rounded-t-lg" />
            <div className="p-3 text-center font-semibold text-gray-800">{item.nama}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JudulKegiatan;
