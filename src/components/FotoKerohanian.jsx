import React, { useRef } from "react";

const fotoList = [
  "/images/idl0.jpg",
  "/images/idl1.jpg",
  "/images/idl2.png",
  "/images/ngaji0.jpg",
  "/images/ngaji1.png",
  "/images/sholat.png",
  "/images/futsal3.JPG",
  "/imagesberanda/sholat.png",
  "/imagesberanda/sholat.png",
  "/imagesberanda/sholat.png",
];

const FotoKerohanian = () => {
  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const startDragging = (e) => {
    isDown = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const stopDragging = () => {
    isDown = false;
  };

  const moveDragging = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Atur kecepatan scroll
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="p-4 text-center mb-16"> {/* Mengurangi padding kiri dan kanan */}
      <h2 className="text-3xl font-bold text-yellow-400 mb-6 animate-bounce tracking-wide drop-shadow-lg">FOTO-FOTO KEGIATAN</h2>
      <div className="overflow-hidden max-w-full mx-auto px-0"> {/* Menyesuaikan agar foto bersentuhan dengan sisi kiri dan kanan */}
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-scroll scrollbar-hide cursor-grab p-2"
          onMouseDown={startDragging}
          onMouseLeave={stopDragging}
          onMouseUp={stopDragging}
          onMouseMove={moveDragging}
        >
          {fotoList.map((foto, index) => (
            <img
              key={index}
              src={foto}
              alt={`Foto ${index + 1}`}
              className="w-1/5 h-72 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-110"
              style={{ flex: "1 1 auto" }} // Memastikan layout fleksibel dan memberikan jarak antar foto
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FotoKerohanian;
