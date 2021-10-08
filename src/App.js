import About from "./components/about";
import Header from "./components/header";
import Hero from "./components/hero";
function App() {
  return (
    <div className="px-7.5 md:px-40">
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default App;
