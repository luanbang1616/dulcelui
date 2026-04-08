import { useState, useEffect } from 'react'
import './index.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const products = [
    {
      id: 2,
      name: 'Brownies',
      description: 'Brownies esponjosos con chocolate premium',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=400&fit=crop',
      tag: 'Caseros'
    },
    {
      id: 3,
      name: 'Tortas',
      description: 'Tortas personalizadas para toda ocasión',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop',
      tag: 'Por encargo'
    },
    {
      id: 4,
      name: 'Cheesecakes',
      description: 'Cheesecake cremoso con toppings variados',
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&h=400&fit=crop',
      tag: 'Premium'
    },
    {
      id: 5,
      name: 'Maní Surtido Mixto',
      description: 'Variedad de maní tostado y caramelizado',
      image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&h=400&fit=crop',
      tag: 'Snack'
    }
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/584120924550', '_blank')
  }

  return (
    <div className="app">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="nav-logo" onClick={() => scrollToSection('inicio')}>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C21121"/>
                  <stop offset="100%" stopColor="#e63946"/>
                </linearGradient>
              </defs>
              <circle cx="30" cy="30" r="28" fill="url(#logoGrad)"/>
              <path d="M18 42 C18 42, 22 28, 30 22 C38 28, 42 42, 42 42" stroke="#B3E6GB" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <circle cx="30" cy="32" r="10" fill="#B3E6GB"/>
              <circle cx="30" cy="32" r="5" fill="#C21121"/>
              <path d="M20 20 Q30 15 40 20" stroke="#B3E6GB" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <circle cx="18" cy="25" r="2" fill="#B3E6GB"/>
              <circle cx="42" cy="25" r="2" fill="#B3E6GB"/>
            </svg>
            <span className="nav-logo-text">Dulce Lui</span>
          </div>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#inicio" onClick={(e) => {e.preventDefault(); scrollToSection('inicio')}}>Inicio</a></li>
            <li><a href="#nosotros" onClick={(e) => {e.preventDefault(); scrollToSection('nosotros')}}>Nosotros</a></li>
            <li><a href="#productos" onClick={(e) => {e.preventDefault(); scrollToSection('productos')}}>Productos</a></li>
            <li><a href="#contacto" onClick={(e) => {e.preventDefault(); scrollToSection('contacto')}}>Contacto</a></li>
          </ul>
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Dulces Momentos
              <span>Dulce Lui</span>
            </h1>
            <p className="hero-subtitle">Donde cada bocado es una experiencia única</p>
            <p className="hero-tagline">Repostería artesanal con amor y tradición</p>
            <a href="#contacto" className="cta-button" onClick={(e) => {e.preventDefault(); scrollToSection('contacto')}}>
              Realizar Pedido
            </a>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1558326567-98ae2405596b?w=600&h=500&fit=crop" alt="Dulces" />
          </div>
        </div>
      </section>

      {/* Sobre Nosotros - About */}
      <section id="sobre-nosotros" className="about-section">
        <h2 className="section-title">Sobre Nosotros</h2>
        <p className="section-subtitle">Conoce nuestra historia</p>
        <div className="about-content">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&h=400&fit=crop" alt="Sobre nosotros" />
          </div>
          <div className="about-text">
            <h3>Pasión por la Repostería</h3>
            <p>En Dulce Lui nos especializamos en crear dulces experiencias que conquistan el corazón. Cada producto es elaborado con ingredientes frescos y la mayor dedicación.</p>
            <p>Nuestra prioridad es la satisfacción total de nuestros clientes, ofreciendo siempre productos de la más alta calidad con diseños exclusivos y personalizados.</p>
            <div className="about-features">
              <div className="about-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span>Calidad Premium</span>
              </div>
              <div className="about-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                <span>Hecho con Amor</span>
              </div>
              <div className="about-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>Entrega a Tiempo</span>
              </div>
              <div className="about-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
                <span>Atención Personalizada</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Objectives */}
      <section id="nosotros" className="mission-section">
        <h2 className="section-title">Nuestra Esencia</h2>
        <p className="section-subtitle">Lo que nos define</p>
        <div className="mission-grid">
          <div className="mission-card">
            <div className="mission-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="3"/>
                <line x1="12" y1="2" x2="12" y2="5"/>
              </svg>
            </div>
            <h3>Misión</h3>
            <p>Crear experiencias dulces memorables ofreciendo productos de repostería artesanal de la más alta calidad, elaborados con ingredientes frescos y pasión, superando las expectativas de nuestros clientes en cada mordida.</p>
          </div>
          <div className="mission-card">
            <div className="mission-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h3>Visión</h3>
            <p>Ser la tienda de repostería artesanal más confiable y querida de la región, manteniendo nuestra esencia artesanal mientras innovamos constantemente para procurar alegría a través de nuestros dulces con diseños únicos.</p>
          </div>
          <div className="mission-card">
            <div className="mission-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <h3>Objetivos</h3>
            <ul className="objectives-list">
              <li>Brindar productos frescos y de calidad excepcional</li>
              <li>Ofrecer un servicio personalizado por encargo</li>
              <li>Mantener la satisfacción total del cliente</li>
              <li>Innovar constantemente en sabores y diseños</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="products-section">
        <h2 className="section-title">Nuestros Productos</h2>
        <p className="section-subtitle">Explora nuestra deliciosa variedad</p>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} className="product-image" />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span className="product-tag">{product.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="contact-section">
        <h2 className="section-title">Contáctanos</h2>
        <p className="section-subtitle">Estamos listos para atenderte</p>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="contact-details">
                <h4>Ubicación</h4>
                <p>El Tigre, Urbanización Morichal, Anzoátegui</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="contact-details">
                <h4>Horario de Atención</h4>
                <p>Lunes a Viernes: 8:00 AM - 3:00 PM</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="contact-details">
                <h4>Correo Electrónico</h4>
                <p>luissandoval162003@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="contact-details">
                <h4>WhatsApp</h4>
                <p>+58 412-0924550</p>
              </div>
            </div>
            <button className="whatsapp-button" onClick={handleWhatsApp}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.174-.184.297-.297.397-.495.099-.198.05-.371-.025-.524-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Realizar Pedido
            </button>
          </div>
          <div className="contact-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1967.560249225094!2d-64.2784652239586!3d10.2395356428572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c3fd3a7f1a1a1a1%3A0x0!2sEl%20Tigre%2C%20Anzo%C3%A1tegui%2C%20Venezuela!5e0!3m2!1ses!2sve!4v1700000000000"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <svg width="80" height="80" viewBox="0 0 60 60" fill="none">
              <defs>
                <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C21121"/>
                  <stop offset="100%" stopColor="#e63946"/>
                </linearGradient>
              </defs>
              <circle cx="30" cy="30" r="28" fill="url(#footerLogoGrad)"/>
              <path d="M18 42 C18 42, 22 28, 30 22 C38 28, 42 42, 42 42" stroke="#B3E6GB" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <circle cx="30" cy="32" r="10" fill="#B3E6GB"/>
              <circle cx="30" cy="32" r="5" fill="#C21121"/>
              <path d="M20 20 Q30 15 40 20" stroke="#B3E6GB" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <circle cx="18" cy="25" r="2" fill="#B3E6GB"/>
              <circle cx="42" cy="25" r="2" fill="#B3E6GB"/>
            </svg>
            <h3>Dulce Lui</h3>
            <p>Dulzura en cada momento</p>
          </div>
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="#inicio" onClick={(e) => {e.preventDefault(); scrollToSection('inicio')}}>Inicio</a></li>
              <li><a href="#sobre-nosotros" onClick={(e) => {e.preventDefault(); scrollToSection('sobre-nosotros')}}>Sobre Nosotros</a></li>
              <li><a href="#nosotros" onClick={(e) => {e.preventDefault(); scrollToSection('nosotros')}}>Nosotros</a></li>
              <li><a href="#productos" onClick={(e) => {e.preventDefault(); scrollToSection('productos')}}>Productos</a></li>
              <li><a href="#contacto" onClick={(e) => {e.preventDefault(); scrollToSection('contacto')}}>Contacto</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Síguenos</h4>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>2026 Dulce Lui. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App