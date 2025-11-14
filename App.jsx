import React from 'react';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Habilidades from './components/Habilidades.jsx';
import Proyectos from './components/Proyectos.jsx';
import Contactos from './components/Contactos.jsx';

export default function App(){
  return (
    <>
      <Header />
      <main>
        <Home />
        <Proyectos />
        <Habilidades />
        <Contactos />
      </main>
      <footer className="text-center py-3" style={{background:'#fff'}}>© {new Date().getFullYear()} Naydelyn Briones</footer>
    </>
  );
}
