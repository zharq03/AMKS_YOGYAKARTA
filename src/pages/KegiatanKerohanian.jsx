import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import IsiKerohanian from "../components/isikerohanian.jsx";
import JudulKegiatanKerohanian from "../components/JudulKegiatanKerohanian.jsx";
import FotoKerohanian from "../components/FotoKerohanian.jsx";


const KegiatanKerohanian = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-6 space-y-16">
        <JudulKegiatanKerohanian />
        <IsiKerohanian />
        <FotoKerohanian />
      </main>
      <Footer />
    </>
  );
};

export default KegiatanKerohanian;
