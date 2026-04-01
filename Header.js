function Header() {
  return (
    <header className="main-header">
      <div className="logo">
        STRAT<span>OS</span>
      </div>

      <nav className="nav-links">
        <a href="#">Solutions</a>
        <a href="#">Company</a>
        <a href="#">Resources</a>
        <a href="#" className="btn-contact">Get Started</a>
      </nav>
    </header>
  );
}

export default Header;