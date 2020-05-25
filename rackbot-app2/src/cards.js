import React from "react";

const services = {
  card1: {
    title: "Servicio Remoto",
        text: (
            <div>
                <p>Nos conectamos a tu computador remotamente a través de una aplicación segura para darte soporte.</p>
                <p><strong>Ventajas y catacterísticas:</strong></p>
                <ul>
                    <li>Menor tiempo de espera.</li>
                    <li>Problemas de baja o media complejidad.</li>
                    <li>Se requiere acceso y conectividad en el equipo.</li>
                </ul>
            </div>),
    footer: <small className="text-muted">$60,000 por servicio</small>
  },
  card2: {
    title: "Servicio a domicilio",
        text: (
          <div>
              <p>Si el problema requiere una visita, uno de nuestros profesionales te visitará.</p>
              <p><strong>Ventajas y catacterísticas:</strong></p>
              <ul>
                  <li>Tiempo de espera: Según agendamiento</li>
                  <li>Servicios de mayor complejidad.</li>
                  <li>Necesarios cuando no hay acceso o conectividad</li>
              </ul>
          </div>),
    footer: <small className="text-muted">$60,000/hora (la primera hora de servicio). $40,000/hora en adelante</small>
  },
  card3: {
    title: "Asesoría",
        text: (
          <div>
              Si necesitas orientación o tienes preguntas acerca de temas relacionados con:
              <ul>
                  <li>Informática en general</li>
                  <li>Windows y Office</li>
                  <li>Redes e internet</li>
              </ul>
              Puedes recibir asesoría de nuestros profesionales
          </div>),
    footer: <small className="text-muted">¡Asesoría gratuita!</small>
  },

};


export default services;
