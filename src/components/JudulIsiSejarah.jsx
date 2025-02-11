import rumah from "../assets/rumah.jpg";

const JudulIsiSejarah = () => {
    return (
          <div className="relative">
            {/* Background Image */}
            <img
              src={rumah} 
              alt="Asrama Mahasiswa Kab. Sambas"
              className="w-full h-96 object-cover rounded-2xl"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-start p-8 space-y-4 text-white bg-black/50 rounded-2xl">
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
          </div>
        );
      };
  
  export default JudulIsiSejarah;
  