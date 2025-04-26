/*Header*/
function HeaderComponent() {
  return (
    <header>
      <h1>CasaNova🏘️</h1>
    </header>
  );
}

/*Navbar*/
function NavBarComponent() {
  return (
    <nav className="navbar">
      <button class="menu-toggle">☰</button>
      <ul class="nav-menu">
        <li>
          <a href="index.html">INICIO</a>
        </li>
        <li>
          <a href="index.html">APARTAMENTOS</a>
        </li>
        <li>
          <a href="index.html">CASAS</a>
        </li>
        <li>
          <a href="index.html">LOTES</a>
        </li>
        <li>
          <a href="index.html">CONTACTO</a>
        </li>
      </ul>
    </nav>
  );
}

/*Footer*/
function FooterComponent() {
  return (
    <footer>
      <address>Contacto: contacto@casanova.com</address>
      <small>&copy; 2025 CasaNova. Todos los derechos reservados.</small>
    </footer>
  );
}

/*React*/
ReactDOM.render(
  <HeaderComponent />,
  document.getElementById("headercomponent")
);

ReactDOM.render(
  <NavBarComponent />,
  document.getElementById("navbarcomponent")
);

ReactDOM.render(
  <FooterComponent />,
  document.getElementById("footercomponent")
);
