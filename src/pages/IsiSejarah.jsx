import Header from "../components/header";
import Footer from "../components/footer";
import JudulIsiSejarah from "../components/JudulIsiSejarah";
import IntiIsiSejarah from "../components/IntiIsiSejarah";

const IsiSejarah = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-6 space-y-16">
      <JudulIsiSejarah />
      <IntiIsiSejarah />
      </main>
      <Footer />
    </>
  );
};

export default IsiSejarah;
