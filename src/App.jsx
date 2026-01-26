import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import ThreeEconomies from './components/ThreeEconomies';
import EarnSection from './components/EarnSection';
import Testimonials from './components/Testimonials';
import Technology from './components/DePIN';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <ThreeEconomies />
      <EarnSection />
      <Testimonials />
      <Technology />
      <Tokenomics />
      <Footer />
    </main>
  )
}

export default App
