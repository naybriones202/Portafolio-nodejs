import React from 'react';

export default function Home(){
  return (
    <section className="contenedor container py-5" id="home">
      <div className="foto">
        {/* coloca avatar.jpg en public/img/avatar.jpg */}
        <img src="/img/avatar.jpg" alt="Foto de perfil" />
      </div>

      <div className="texto">
        <h1>Hola</h1>
        <h3>Un poco de mí</h3>
        <p>¡Bienvenida a mi portafolio! Soy <strong>Naydelyn Briones</strong>, estudiante de Tecnologías de la Información apasionada por el diseño web, la seguridad informática y el aprendizaje constante.</p>

        <div className="botones">
          <a href="#proyectos" className="btn amarillo">Proyectos</a>
          <a href="#habilidades" className="btn rojo">Habilidades</a>
          <a href="#contactos" className="btn celeste">Contactos</a>
        </div>
      </div>
    </section>
  );
}
