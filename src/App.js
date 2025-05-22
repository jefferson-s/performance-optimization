import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // ✅ Importando a navbar

// Lazy loading dos componentes
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Adicionando a Navbar */}
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;