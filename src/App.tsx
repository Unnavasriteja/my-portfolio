import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import './App.css';
import { ScrollProgress } from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen bg-bg-page text-neutral-200 font-sans">
      <ScrollProgress />
      <Navbar />
      <main className="pt-16">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
