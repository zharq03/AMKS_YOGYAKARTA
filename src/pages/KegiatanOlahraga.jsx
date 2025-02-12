import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import JudulKegiatanOlahraga from "../components/JudulKegiatanOlahraga.jsx";

const KegiatanOlahraga = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-6 space-y-16">
        <JudulKegiatanOlahraga />
      </main>
      <Footer />
    </>
  );
};

export default KegiatanOlahraga;
