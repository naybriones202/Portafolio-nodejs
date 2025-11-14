import React from 'react';

export default function Habilidades(){
  return (
    <section id="habilidades" className="contenedor-habilidades py-5">
      <div className="container">
        <h1>Mis Habilidades</h1>
        <p>Aquí te muestro algunas de las competencias que he desarrollado en mi formación y proyectos.</p>

        <div className="habilidades-grid">
          <div className="habilidad">
            <i className="fa-brands fa-html5"></i>
            <h3>HTML</h3>
            <p>Estructuración profesional de páginas web.</p>
          </div>

          <div className="habilidad">
            <i className="fa-brands fa-css3-alt"></i>
            <h3>CSS</h3>
            <p>Diseños modernos, responsivos y atractivos.</p>
          </div>

          <div className="habilidad">
            <i className="fa-brands fa-java"></i>
            <h3>Java</h3>
            <p>Desarrollos de software, mantenimiento y optimización.</p>
          </div>

          <div className="habilidad">
            <i className="fa-solid fa-network-wired"></i>
            <h3>Redes</h3>
            <p>Configuración y administración básica de redes y VLANs.</p>
          </div>

          <div className="habilidad">
            <i className="fa-solid fa-chart-line"></i>
            <h3>Monitoreo Zabbix</h3>
            <p>Instalación, configuración y análisis de métricas en sistemas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
