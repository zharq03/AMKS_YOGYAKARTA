import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import KegiatanBesar from "../components/KegiatanBesar.jsx";
import JudulKerjaBakti from "../components/JudulKerjaBakti.jsx";
import KegiatanTahunan from "../components/KegiatanTahunan.jsx";


const KerjaBakti = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-6 space-y-16">
        <JudulKerjaBakti />

      </main>
      <Footer />
    </>
  );
};

export default KerjaBakti;
