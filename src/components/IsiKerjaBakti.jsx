const IsiKerjaBakti = () => {
    return (
      <div className="flex flex-col gap-10 px-6 py-12">
        {/* Visi */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          {/* Teks Visi */}
          <div className="md:w-2/3 text-right">
            <h2 className="text-3xl font-bold text-yellow-500 mb-4 hover:text-yellow-600 transition duration-300">
              Visi
            </h2>
            <p className="text-lg text-blue-700 hover:text-blue-800 transition duration-300">
              Adalah kegiatan yang turun temurun dilakukan ketika warga asrama sudah gabut level
              maksimal dan juga biasanya dilakukan ketika makrab yang pastinya makrab asrama adalah di pantai.
            </p>
          </div>
          {/* Gambar Visi */}
          <div className="md:w-1/3">
            <img
              src="/imagesberanda/tirakatan.png"
              alt="Visi"
              className="w-full rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
  
        {/* Misi */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Teks Misi */}
          <div className="md:w-2/3 text-left">
            <h2 className="text-3xl font-bold text-yellow-500 mb-4 hover:text-yellow-600 transition duration-300">
              Misi
            </h2>
            <p className="text-lg text-blue-700 hover:text-blue-800 transition duration-300">
              Adalah kegiatan yang turun temurun dilakukan ketika warga asrama sudah gabut level
              maksimal dan juga biasanya dilakukan ketika makrab yang pastinya makrab asrama adalah di pantai.
            </p>
          </div>
          {/* Gambar Misi */}
          <div className="md:w-1/3">
            <img
              src="/imagesberanda/tirakatan.png"
              alt="Misi"
              className="w-full rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default IsiKerjaBakti ;
  