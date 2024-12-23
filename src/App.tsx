import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Header from './components/header';
import Footer from './components/footer';


const App = () => {
  return (
    <div className="app-container">
      <Header />

      <BrowserRouter>
        <div className="h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
};

export default App;
