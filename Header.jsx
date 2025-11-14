import React from 'react';

export default function Header(){
  return (
    <header className="bg-white shadow-sm">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <h2 className="logo m-0">Naydelyn Briones <span>Estudiante</span></h2>

        <nav>
          <a className="mx-2" href="#proyectos">Proyectos</a>
          <a className="mx-2" href="#habilidades">Habilidades</a>
          <a className="mx-2" href="#contactos">Contactos</a>
        </nav>
      </div>
    </header>
  );
}
