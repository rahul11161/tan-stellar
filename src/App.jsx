import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import ServicePage from './pages/ServicePage';
import ScrollToTop from './components/ScrollToTop';
import Portfolio from './pages/Portfolio';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
      <Router>
      <ScrollToTop />
        <Navbar /> {/* Stays visible on all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
