import About from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
function App() {
  return (
    <div className="px-7.5 mb-20 md:px-40 relative">
      <Header />
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
