import React, { useRef } from "react";

const fotoList = [
  "/images/kerj1.jpg",
  "/images/kerj2.jpg",
  "/images/kerj3.png",
  "/images/kerj4.png",
  "/images/kerj5.jpg",
  "/images/kerj6.png",
  "/images/kerj7.png",
  "/images/kerj8.png",
  "/images/kerj9.png",
  "/images/kerj10.png",
];

const FotoKerjaBakti = () => {
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

export default FotoKerjaBakti;
