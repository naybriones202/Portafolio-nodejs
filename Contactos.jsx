import React from 'react';

export default function Contactos(){
  return (
    <section id="contactos" className="contenedor-contactos py-5">
      <div className="container text-center">
        <h1>Contáctame</h1>
        <p>¿Quieres comunicarte conmigo? Puedes hacerlo a través de mis redes o enviarme un mensaje directo.</p>

        <div className="contacto-info">
          <div className="tarjeta">
            <i className="fa-solid fa-envelope"></i>
            <h3>Correo Electrónico</h3>
            <p><a href="mailto:naydelynbriones@gmail.com">naydelynbriones@gmail.com</a></p>
          </div>

          <div className="tarjeta">
            <i className="fa-brands fa-whatsapp"></i>
            <h3>WhatsApp</h3>
            <p><a href="https://wa.me/qr/6AEI2IB7IWDRJ1" target="_blank" rel="noreferrer">+593 980335023</a></p>
          </div>

          <div className="tarjeta">
            <i className="fa-brands fa-instagram"></i>
            <h3>Instagram</h3>
            <p><a href="https://instagram.com/naydelynbriones" target="_blank" rel="noreferrer">@nayade_bri22</a></p>
          </div>

          <div className="tarjeta">
            <i className="fa-brands fa-github"></i>
            <h3>GitHub</h3>
            <p><a href="https://github.com/naybriones202" target="_blank" rel="noreferrer">naybriones202</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
