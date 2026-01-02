"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import site from "../data/site.json"; // ajusta si tu ruta es distinta

function waLink(message) {
  // Si quieres usar el mismo número del JSON, lo ideal sería guardarlo aparte,
  // pero aquí lo dejo directo como en tu wa.me actual.
  const base = "https://wa.me/34999000111";
  return `${base}?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  const sectionConfigs = useMemo(
    () => [
      { id: "catalogo", dock: "catalogo" },
      { id: "experiencia", dock: "experiencia" },
      { id: "galeria", dock: "experiencia" },
      { id: "testimonios", dock: "experiencia" },
      { id: "contacto", dock: "contacto" },
    ],
    []
  );
  const [activeSection, setActiveSection] = useState("catalogo");
  const [isDesktop, setIsDesktop] = useState(false);
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 500], [0, 90]);
  const heroCardY = useTransform(scrollY, [0, 500], [0, -60]);
  const heroContentY = useTransform(scrollY, [0, 500], [0, 40]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const handleChange = (event) => setIsDesktop(event.matches);
    handleChange(media);
    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    const sections = sectionConfigs
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);
    if (sections.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = sectionConfigs.find((section) => section.id === entry.target.id);
            if (match) {
              setActiveSection(match.dock);
            }
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [sectionConfigs]);

  const heroImage =
    "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80";

  const fadeInUp = useMemo(
    () => ({
      hidden: isDesktop ? { opacity: 0, y: 70, scale: 0.96, filter: "blur(8px)" } : { opacity: 0, y: 28 },
      show: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: isDesktop ? 0.85 : 0.6, ease: "easeOut" },
      },
    }),
    [isDesktop]
  );

  const stagger = useMemo(
    () => ({
      hidden: {},
      show: { transition: { staggerChildren: isDesktop ? 0.18 : 0.12, delayChildren: isDesktop ? 0.1 : 0 } },
    }),
    [isDesktop]
  );

  const sectionViewport = useMemo(
    () => ({
      once: true,
      amount: isDesktop ? 0.35 : 0.2,
    }),
    [isDesktop]
  );

  return (
    <main>
      <motion.div className="nav-wrapper" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <nav className="nav" aria-label="Navegación principal">
          <div className="logo">{site.name}</div>

          <div className="nav-links">
            <a href="#catalogo">Catálogo</a>
            <a href="#experiencia">Experiencia</a>
            <a href="#galeria">Galería</a>
            <a href="#testimonios">Testimonios</a>
            <a href="#contacto">Contacto</a>
          </div>
          <button className="nav-icon" type="button" aria-label="Ver especialidades">
            <span aria-hidden>🎂</span>
          </button>
          <a className="btn btn-outline" href={site.whatsapp} target="_blank" rel="noreferrer">
            <span className="btn-icon" aria-hidden>
              🟢
            </span>
            WhatsApp
          </a>
        </nav>
      </motion.div>

      <motion.header className="hero" initial="hidden" animate="show" variants={stagger}>
        <div className="hero-content hero-desktop">
          <motion.div variants={fadeInUp} style={isDesktop ? { y: heroContentY } : undefined}>
            <p className="eyebrow">Pastelería artesanal</p>
            <h1>{site.tagline}</h1>
            <p className="lead">{site.description}</p>

            <div className="cta-group">
              <a className="btn btn-primary" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                <span className="btn-icon" aria-hidden>
                  🟢
                </span>
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
            <motion.div className="hero-image" variants={fadeInUp} style={isDesktop ? { y: heroImageY } : undefined}>
              <Image
                src={heroImage}
                alt="Tarta artesanal decorada"
                width={900}
                height={320}
                priority
                sizes="(max-width: 900px) 100vw, 40vw"
                style={{ width: "100%", height: "360px", objectFit: "cover" }}
              />
            </motion.div>

            <motion.div className="hero-card" variants={fadeInUp} style={isDesktop ? { y: heroCardY } : undefined}>
              <h3>Agenda tu pedido hoy</h3>
              <p>Cuéntanos tu idea y recibe una propuesta en menos de 2 horas.</p>
              <a
                className="btn btn-primary"
                href={waLink("Hola Pastelería Aurora, quiero hacer un pedido. ¿Me ayudáis a elegir el pastel ideal?")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="btn-icon" aria-hidden>
                  🟢
                </span>
                Hablar con un pastelero
              </a>
            </motion.div>
          </motion.div>
        </div>
        <div className="hero-mobile">
          <div className="hero-mobile-image">
            <Image
              src={heroImage}
              alt="Tarta artesanal decorada"
              width={900}
              height={320}
              priority
              sizes="(max-width: 640px) 100vw, 40vw"
              style={{ width: "100%", height: "280px", objectFit: "cover" }}
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
        viewport={sectionViewport}
        variants={stagger}
      >
        <motion.div className="section-heading" variants={fadeInUp}>
          <h2>Catálogo destacado</h2>
          <p>Opciones favoritas para sorprender en cualquier celebración.</p>
        </motion.div>

        <motion.div className="grid three" variants={stagger}>
          {site.products.map((product) => {
            const msg = `Hola Pastelería Aurora, quiero pedir: ${product.title}. ¿Me das opciones y precio final?`;
            return (
              <motion.article key={product.title} className="card" variants={fadeInUp}>
                <div className="card-media">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={900}
                    height={600}
                    loading="lazy"
                    sizes="(max-width: 900px) 100vw, 33vw"
                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                  />
                </div>

                <h3>{product.title}</h3>
                <p>{product.description}</p>

                <div className="card-footer">
                  <span>{product.price}</span>
                  <a href={waLink(msg)} target="_blank" rel="noopener noreferrer">
                    Reservar
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.section>

      <motion.section
        id="experiencia"
        className="section alt"
        initial="hidden"
        whileInView="show"
        viewport={sectionViewport}
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
        viewport={sectionViewport}
        variants={stagger}
      >
        <motion.div className="section-heading" variants={fadeInUp}>
          <h2>Tartas que enamoran</h2>
          <p>Selección fresca y minimalista para inspirar tu próxima celebración.</p>
        </motion.div>

        <motion.div className="gallery-grid" variants={stagger}>
          {site.gallery.map((image, index) => (
            <motion.div key={image} className={`gallery-item gallery-${index + 1}`} variants={fadeInUp}>
              <Image
                src={image}
                alt={`Tarta destacada ${index + 1}`}
                width={900}
                height={900}
                loading="lazy"
                sizes="(max-width: 900px) 50vw, 25vw"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        id="testimonios"
        className="section"
        initial="hidden"
        whileInView="show"
        viewport={sectionViewport}
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
        viewport={sectionViewport}
        variants={stagger}
      >
        <motion.div variants={fadeInUp}>
          <h2>¿Listo para tu próximo pedido?</h2>
          <p>Estamos listos para diseñar tu pastel ideal y entregarlo a tiempo.</p>
        </motion.div>

        <motion.div className="cta-actions" variants={fadeInUp}>
          <a className="btn btn-primary" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
            <span className="btn-icon" aria-hidden>
              🟢
            </span>
            Hacer pedido
          </a>
          <a className="btn btn-outline" href={`mailto:${site.contact.email}`}>
            Escribir email
          </a>
        </motion.div>
      </motion.section>

      <motion.footer
        className="footer"
        initial="hidden"
        whileInView="show"
        viewport={sectionViewport}
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
          <a className="btn btn-primary" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
            <span className="btn-icon" aria-hidden>
              🟢
            </span>
            {site.cta.primary}
          </a>
        </div>
      </motion.footer>

      <motion.div
        className="mobile-dock"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        aria-label="Accesos rápidos"
      >
        <a
          className={`dock-item${activeSection === "catalogo" ? " is-active" : ""}`}
          href="#catalogo"
          onClick={() => setActiveSection("catalogo")}
        >
          <span aria-hidden>🍰</span>
          <span>Catálogo</span>
        </a>
        <a
          className={`dock-item${activeSection === "experiencia" ? " is-active" : ""}`}
          href="#experiencia"
          onClick={() => setActiveSection("experiencia")}
        >
          <span aria-hidden>✨</span>
          <span>Experiencia</span>
        </a>
        <a className="dock-item dock-primary" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
          <span aria-hidden>🟢</span>
          <span>{site.cta.primary}</span>
        </a>
        <a
          className={`dock-item${activeSection === "contacto" ? " is-active" : ""}`}
          href="#contacto"
          onClick={() => setActiveSection("contacto")}
        >
          <span aria-hidden>📍</span>
          <span>Contacto</span>
        </a>
      </motion.div>
    </main>
  );
}
