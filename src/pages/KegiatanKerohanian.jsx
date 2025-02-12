import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import KegiatanBesar from "../components/KegiatanBesar.jsx";
import JudulKegiatanKerohanian from "../components/JudulKegiatanKerohanian.jsx";
import KegiatanTahunan from "../components/KegiatanTahunan.jsx";


const KegiatanKerohanian = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-6 space-y-16">
        <JudulKegiatanKerohanian />
      </main>
      <Footer />
    </>
  );
};

export default KegiatanKerohanian;
