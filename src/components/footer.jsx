import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';
const footer = () => {
  return (
    <footer style={{ background: "#222", color: "#fff", padding: "40px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h3>Tienda Online</h3>
          <p>Tu tienda de confianza para compras en línea.</p>
        </div>
        <nav>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", gap: "20px" }}>
            <li><a href="/about" style={{ color: "#fff", textDecoration: "none" }}>Sobre Nosotros</a></li>
            <li><a href="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contacto</a></li>
            <li><a href="/faq" style={{ color: "#fff", textDecoration: "none" }}>Preguntas Frecuentes</a></li>
          </ul>
        </nav>
        <div>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", marginRight: "15px" }}>Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", marginRight: "15px" }}>Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>Twitter</a>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "30px", fontSize: "14px", color: "#bbb" }}>
        <p>© 2025 Tienda Online - Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default footer;
