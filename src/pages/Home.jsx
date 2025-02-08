import Header from "../components/header";
import Footer from "../components/footer";
import JudulBeranda from "../components/JudulBeranda";
import AMKSJalanJalanBeranda from "../components/AMKSJalanJalanBeranda";
// import SejarahBeranda from "../components/SejarahBeranda";
// import LokasiBeranda from "../components/LokasiBeranda";

const Home = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-6 space-y-16">
        <JudulBeranda />
        <AMKSJalanJalanBeranda />
        {/* <SejarahBeranda />
        <LokasiBeranda /> */}
      </main>
      <Footer />
    </>
  );
};

export default Home;
