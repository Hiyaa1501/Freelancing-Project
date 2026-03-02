import Header from "./components/Header";
import Hero from "./components/Hero";
import WorkListing from "./components/WorkListing";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WorkListing />
    </div>
  );
};

export default App;
