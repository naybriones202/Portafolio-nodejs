import React from 'react';

export default function Proyectos(){
  return (
    <section id="proyectos" className="contenedor-proyectos py-5">
      <div className="container">
        <h1>Mis Proyectos</h1>
        <p>Aquí encontrarás algunos de mis trabajos, con imágenes y una breve descripción de cada uno.</p>

        <div className="galeria">
          <div className="proyecto">
            <img src="/img/HTML.webp" alt="Proyecto 1" />
            <h3>Proyecto 1: Página Web Personal</h3>
            <p>Diseñé y desarrollé mi primera página web utilizando HTML, CSS y un toque de JavaScript para la interactividad.</p>
          </div>

          <div className="proyecto">
            <img src="/img/entrono_virtual.png" alt="Proyecto 2" />
            <h3>Proyecto 2: Uso de entornos virtuales Linux</h3>
            <p>Instalación, configuración y administración de entornos virtuales con Linux Ubuntu.</p>
          </div>

          <div className="proyecto">
            <img src="/img/proyecto2.png" alt="Proyecto 3" />
            <h3>Proyecto 3: Sistema de Monitoreo con Zabbix</h3>
            <p>Configuración de un sistema de monitoreo de red utilizando Zabbix Appliance y Linux Ubuntu.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
