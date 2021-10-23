import About from "./containers/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./containers/Hero";
import Services from "./containers/Service";
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
