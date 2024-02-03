import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Mobile from "./components/Mobile";

export default function Home() {
  return (
    <>
      <main className="font-inter">
        <div className="hidden lg:block">
          <Header />
          <Hero />
          <Footer />
        </div>
        <div className="lg:hidden flex h-screen justify-center items-center">
          <Mobile />
        </div>
      </main>
    </>
  );
}
