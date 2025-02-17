import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import KegiatanBesar from "../components/KegiatanBesar.jsx";
import JudulKegiatan from "../components/JudulKegiatan.jsx";
import KegiatanTahunan from "../components/KegiatanTahunan.jsx";


const Kegiatan = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-6 space-y-16">
        <JudulKegiatan />
        <KegiatanTahunan />
        <KegiatanBesar />
      </main>
      <Footer />
    </>
  );
};

export default Kegiatan;
