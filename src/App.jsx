import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-[72px]">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
