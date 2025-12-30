'use client';

import { motion } from 'framer-motion';
import site from '../data/site.json';

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  return (
    <main>
      <motion.div className="nav-wrapper" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <nav className="nav">
          <div className="logo">{site.name}</div>
          <div className="nav-links">
            <a href="#catalogo">Catálogo</a>
            <a href="#experiencia">Experiencia</a>
            <a href="#galeria">Galería</a>
            <a href="#testimonios">Testimonios</a>
            <a href="#contacto">Contacto</a>
          </div>
          <button className="nav-icon" type="button" aria-label="Buscar">
            <span aria-hidden>🔍</span>
          </button>
          <a className="btn btn-outline" href={site.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </nav>
      </motion.div>

      <motion.header className="hero" initial="hidden" animate="show" variants={stagger}>
        <div className="hero-content hero-desktop">
          <motion.div variants={fadeInUp}>
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
          </motion.div>
          <motion.div className="hero-visual" variants={stagger}>
            <motion.div className="hero-image" variants={fadeInUp}>
              <img
                src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80"
                alt="Tarta artesanal decorada"
              />
            </motion.div>
            <motion.div className="hero-card" variants={fadeInUp}>
              <h3>Agenda tu pedido hoy</h3>
              <p>Cuéntanos tu idea y recibe una propuesta en menos de 2 horas.</p>
              <a className="btn btn-primary" href={site.whatsapp} target="_blank" rel="noreferrer">
                Hablar con un pastelero
              </a>
            </motion.div>
          </motion.div>
        </div>
        <div className="hero-mobile">
          <div className="hero-mobile-image">
            <img
              src="https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=900&q=80"
              alt="Pastel con frutas frescas"
            />
            <div className="hero-mobile-overlay">
              <p className="eyebrow">Bienvenido a nuestra pastelería</p>
              <h1>{site.tagline}</h1>
              <p>{site.description}</p>
            </div>
          </div>
          <div className="mobile-quick-actions">
            <article>
              <span role="img" aria-label="Pastel">🍰</span>
              <h3>Pedidos</h3>
              <p>Agenda tu diseño personalizado.</p>
            </article>
            <article>
              <span role="img" aria-label="Caja regalo">🎁</span>
              <h3>Ofertas</h3>
              <p>Promos dulces de temporada.</p>
            </article>
            <article>
              <span role="img" aria-label="Corazón">❤️</span>
              <h3>Favoritos</h3>
              <p>Guarda tus sabores top.</p>
            </article>
          </div>
          <div className="mobile-news">
            <h2>Novedades dulces</h2>
            <div className="mobile-news-list">
              {site.products.slice(0, 2).map((product) => (
                <article key={product.title} className="mobile-news-card">
                  <img src={product.image} alt={product.title} />
                  <div>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <a href="#catalogo">Ver más ›</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </motion.header>

      <motion.section
        id="catalogo"
        className="section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.div className="section-heading" variants={fadeInUp}>
          <h2>Catálogo destacado</h2>
          <p>Opciones favoritas para sorprender en cualquier celebración.</p>
        </motion.div>
        <motion.div className="grid three" variants={stagger}>
          {site.products.map((product) => (
            <motion.article key={product.title} className="card" variants={fadeInUp}>
              <div className="card-media">
                <img src={product.image} alt={product.title} />
              </div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div className="card-footer">
                <span>{product.price}</span>
                <a href={site.whatsapp} target="_blank" rel="noreferrer">
                  Reservar
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        id="experiencia"
        className="section alt"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.div className="section-heading" variants={fadeInUp}>
          <h2>Una experiencia dulce y confiable</h2>
          <p>Trabajamos contigo para que cada detalle salga perfecto.</p>
        </motion.div>
        <motion.div className="grid three" variants={stagger}>
          {site.features.map((feature) => (
            <motion.article key={feature.title} className="card soft" variants={fadeInUp}>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        id="galeria"
        className="section gallery"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.div className="section-heading" variants={fadeInUp}>
          <h2>Tartas que enamoran</h2>
          <p>Selección fresca y minimalista para inspirar tu próxima celebración.</p>
        </motion.div>
        <motion.div className="gallery-grid" variants={stagger}>
          {site.gallery.map((image, index) => (
            <motion.div key={image} className={`gallery-item gallery-${index + 1}`} variants={fadeInUp}>
              <img src={image} alt={`Tarta destacada ${index + 1}`} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        id="testimonios"
        className="section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.div className="section-heading" variants={fadeInUp}>
          <h2>Clientes felices</h2>
          <p>Opiniones reales de quienes ya probaron nuestras delicias.</p>
        </motion.div>
        <motion.div className="grid two" variants={stagger}>
          {site.testimonials.map((item) => (
            <motion.article key={item.name} className="testimonial" variants={fadeInUp}>
              <p>“{item.text}”</p>
              <strong>{item.name}</strong>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="section cta"
        id="contacto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.div variants={fadeInUp}>
          <h2>¿Listo para tu próximo pedido?</h2>
          <p>Estamos listos para diseñar tu pastel ideal y entregarlo a tiempo.</p>
        </motion.div>
        <motion.div className="cta-actions" variants={fadeInUp}>
          <a className="btn btn-primary" href={site.whatsapp} target="_blank" rel="noreferrer">
            Hacer pedido
          </a>
          <a className="btn btn-outline" href="mailto:info@pasteleriaaurora.com">
            Escribir email
          </a>
        </motion.div>
      </motion.section>

      <motion.footer
        className="footer"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
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
      </motion.footer>

      <motion.div
        className="mobile-dock"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a className="dock-link" href="#catalogo">
          Catálogo
        </a>
        <a className="dock-primary" href={site.whatsapp} target="_blank" rel="noreferrer">
          {site.cta.primary}
        </a>
        <a className="dock-link" href="#contacto">
          Contacto
        </a>
      </motion.div>
    </main>
  );
}
