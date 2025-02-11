import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import JudulSejarah from "../components/JudulSejarah.jsx";
import PendekSejarah from "../components/PendekSejarah.jsx";
import VisiMisisejarah from "../components/VisiMisiSejarah.jsx";
import DuluSekarangSejarah from "../components/DuluSekarangSejarah.jsx";


const Sejarah = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-6 space-y-16">
      <JudulSejarah />
      <PendekSejarah />
      <VisiMisisejarah />
      <DuluSekarangSejarah />
      </main>
      <Footer />
    </>
  );
};

export default Sejarah;
