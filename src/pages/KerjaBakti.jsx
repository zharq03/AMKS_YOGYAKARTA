import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import IsiKerjaBakti from "../components/IsiKerjaBakti.jsx";
import JudulKerjaBakti from "../components/JudulKerjaBakti.jsx";
import FotoKerjaBakti from "../components/FotoKerjaBakti.jsx";


const KerjaBakti = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-6 space-y-16">
        <JudulKerjaBakti />
        <IsiKerjaBakti />
        <FotoKerjaBakti />
      </main>
      <Footer />
    </>
  );
};

export default KerjaBakti;
