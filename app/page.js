import site from '../data/site.json';

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav className="nav">
          <div className="logo">{site.name}</div>
          <div className="nav-links">
            <a href="#catalogo">Catálogo</a>
            <a href="#experiencia">Experiencia</a>
            <a href="#testimonios">Testimonios</a>
            <a href="#contacto">Contacto</a>
          </div>
          <a className="btn btn-outline" href={site.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </nav>
        <div className="hero-content">
          <div>
            <p className="eyebrow">Pastelería artesanal</p>
            <h1>{site.tagline}</h1>
            <p className="lead">{site.description}</p>
            <div className="cta-group">
              <a className="btn btn-primary" href={site.whatsapp} target="_blank" rel="noreferrer">
                {site.cta.primary}
              </a>
              <a className="btn btn-ghost" href="#catalogo">
                {site.cta.secondary}
              </a>
            </div>
            <div className="hero-note">
              <span>Entrega en 24-48h</span>
              <span>Pedidos personalizados</span>
            </div>
          </div>
          <div className="hero-card">
            <h3>Agenda tu pedido hoy</h3>
            <p>Cuéntanos tu idea y recibe una propuesta en menos de 2 horas.</p>
            <a className="btn btn-primary" href={site.whatsapp} target="_blank" rel="noreferrer">
              Hablar con un pastelero
            </a>
          </div>
        </div>
      </header>

      <section id="catalogo" className="section">
        <div className="section-heading">
          <h2>Catálogo destacado</h2>
          <p>Opciones favoritas para sorprender en cualquier celebración.</p>
        </div>
        <div className="grid three">
          {site.products.map((product) => (
            <article key={product.title} className="card">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div className="card-footer">
                <span>{product.price}</span>
                <a href={site.whatsapp} target="_blank" rel="noreferrer">
                  Reservar
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experiencia" className="section alt">
        <div className="section-heading">
          <h2>Una experiencia dulce y confiable</h2>
          <p>Trabajamos contigo para que cada detalle salga perfecto.</p>
        </div>
        <div className="grid three">
          {site.features.map((feature) => (
            <article key={feature.title} className="card soft">
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="testimonios" className="section">
        <div className="section-heading">
          <h2>Clientes felices</h2>
          <p>Opiniones reales de quienes ya probaron nuestras delicias.</p>
        </div>
        <div className="grid two">
          {site.testimonials.map((item) => (
            <article key={item.name} className="testimonial">
              <p>“{item.text}”</p>
              <strong>{item.name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section cta" id="contacto">
        <div>
          <h2>¿Listo para tu próximo pedido?</h2>
          <p>Estamos listos para diseñar tu pastel ideal y entregarlo a tiempo.</p>
        </div>
        <div className="cta-actions">
          <a className="btn btn-primary" href={site.whatsapp} target="_blank" rel="noreferrer">
            Hacer pedido
          </a>
          <a className="btn btn-outline" href="mailto:info@pasteleriaaurora.com">
            Escribir email
          </a>
        </div>
      </section>

      <footer className="footer">
        <div>
          <h3>{site.name}</h3>
          <p>{site.contact.address}</p>
          <p>{site.contact.hours}</p>
        </div>
        <div>
          <h4>Contacto</h4>
          <p>{site.contact.phone}</p>
          <p>{site.contact.email}</p>
        </div>
        <div>
          <h4>WhatsApp directo</h4>
          <a className="btn btn-primary" href={site.whatsapp} target="_blank" rel="noreferrer">
            {site.cta.primary}
          </a>
        </div>
      </footer>
    </main>
  );
}
