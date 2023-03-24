import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Walmart from './components/testimonials/Walmart';
import JPMorgan from './components/testimonials/JPMorgan';
import Att from './components/testimonials/Att';
import IPrism from './components/testimonials/IPrism';
import KTree from './components/testimonials/KTree'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route exact path="/my-portfolio/" element={<Home />} />
            <Route exact path="/my-portfolio/walmart" element={<Walmart />} />
            <Route exact path="/my-portfolio/jpmorganchase" element={<JPMorgan />} />
            <Route exact path="/my-portfolio/at-t" element={<Att />} />
            <Route exact path="/my-portfolio/iprism" element={<IPrism />} />
            <Route exact path="/my-portfolio/ktree" element={<KTree />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
