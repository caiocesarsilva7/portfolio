import { Link } from 'react-router-dom';
import { FaCode } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <FaCode className="icon" size={28} />
        <span>Caio Cesar</span>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/contact">Contato</Link>
      </div>
    </nav>
  );
}