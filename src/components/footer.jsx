const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-8 bottom-0 left-0 w-full z-10">
        <div className="container mx-auto px-4">
        {/* Pesan Sambutan */}
        <div className="text-left space-y-4">
          <p className="text-lg font-semibold">
            Kepada Para Pembaca yang Terhormat,
          </p>
          <p className="text-sm leading-relaxed">
            Selamat datang di buku tahunan Asrama Mahasiswa Kabupaten Sambas!
            <br />
            Di dalam buku ini, kami dengan bangga membagikan cerita inspiratif dari
            para mahasiswa yang tinggal di asrama ini.
            <br />
            Semoga cerita-cerita ini dapat menginspirasi dan menjadi kenangan
            berharga bagi kita semua.
          </p>
          <p className="text-lg font-semibold italic">Salam hangat,</p>
        </div>

        {/* Garis Pembatas */}
        <div className="border-t border-white mt-6"></div>

        {/* Informasi Kontak */}
        <div className="text-left text-sm mt-4 space-y-1">
          <p>AZHAR RIZQULLAH</p>
          <p>Developer</p>
          <p>Asrama Mahasiswa Kabupaten Sambas</p>
          <p>Contact Information: 08981335730</p>
          {/* Social Media */}
          <div className="flex items-center justify-end space-x-2">
            <i className="fab fa-instagram text-xl text-white"></i>
            <a
              href="https://www.instagram.com/amks.yogyakarta/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white hover:underline"
            >
              @amks.yogyakarta
            </a>
          </div>
        </div>
      </div>
      </footer>
    );
  };
  
  export default Footer;
  