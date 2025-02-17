const IsiKerjaBakti = () => {
    return (
      <div className="flex flex-col gap-10 px-6 py-12">
  {/* Wilayah A */}
  <div className="flex flex-col md:flex-row-reverse items-center gap-8">
    {/* Teks Wilayah A */}
    <div className="md:w-2/3 text-right">
      <h2 className="text-3xl font-bold text-yellow-500 mb-4 hover:text-yellow-600 transition duration-300">
        Wilayah A
      </h2>
      <p className="text-lg text-blue-700 hover:text-blue-800 transition duration-300">
        Wilayah mencakup ruang tamu, kamar mandi, mushola, dan halaman. Warga asrama yang bertugas 
        di wilayah ini bertanggung jawab untuk menjaga kebersihan dan kerapian tempat-tempat yang 
        sering digunakan untuk kegiatan bersama serta ibadah.
      </p>
    </div>
    {/* Gambar Wilayah A */}
    <div className="md:w-1/5">
      <img
        src="/images/a.png"
        alt="wilayah a"
        className="w-full rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
      />
    </div>
  </div>

  {/* Wilayah B */}
  <div className="flex flex-col md:flex-row items-center gap-8">
    {/* Teks Wilayah B */}
    <div className="md:w-2/3 text-left">
      <h2 className="text-3xl font-bold text-yellow-500 mb-4 hover:text-yellow-600 transition duration-300">
        Wilayah B
      </h2>
      <p className="text-lg text-blue-700 hover:text-blue-800 transition duration-300">
        Wilayah ini meliputi WC, tangga, dan garasi. Pembersihan di area ini penting untuk memastikan 
        kenyamanan dan keamanan penghuni asrama dalam beraktivitas sehari-hari, terutama di jalur lalu lintas utama.
      </p>
    </div>
    {/* Gambar Wilayah B */}
    <div className="md:w-1/5">
      <img
        src="/images/b.png"
        alt="wilayah b"
        className="w-full rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
      />
    </div>
  </div>

  {/* Wilayah C */}
  <div className="flex flex-col md:flex-row-reverse items-center gap-8">
    {/* Teks Wilayah C */}
    <div className="md:w-2/3 text-right">
      <h2 className="text-3xl font-bold text-yellow-500 mb-4 hover:text-yellow-600 transition duration-300">
        Wilayah C
      </h2>
      <p className="text-lg text-blue-700 hover:text-blue-800 transition duration-300">
        Wilayah ini mencakup dapur, WC, serta seluruh ruangan hingga balkon. Kebersihan di area ini 
        sangat penting karena berhubungan dengan sanitasi makanan dan kenyamanan seluruh penghuni 
        asrama dalam menjalankan aktivitas sehari-hari.
      </p>
    </div>
    {/* Gambar Wilayah C */}
    <div className="md:w-1/5">
      <img
        src="/images/c.png"
        alt="wilayah c"
        className="w-full rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
      />
    </div>
  </div>
</div>

    );
  };
  
  export default IsiKerjaBakti ;
  