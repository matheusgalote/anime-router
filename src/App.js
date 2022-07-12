import React from 'react'
import Header from './Header';
import app from './css/App.module.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Animes from './Animes';
import Footer from './Footer';
import Anime from './Anime';

const App = () => {

  return (
    <main>
      <BrowserRouter className={app.container}>
        <Header />
        <Routes>
          <Route path='/' element={<Animes />} />
          <Route path='/anime/:id' element={<Anime />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </main>
  );
}

export default App;
