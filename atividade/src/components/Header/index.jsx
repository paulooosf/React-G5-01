import { Link } from "react-router-dom";
import './style.css';

function Header() {
  return (
    <header>
        <h2>Exercicio 01 - G5</h2>
        <div className="menu">
          <Link to={"/"}>Empresa</Link>
          <Link to={"/exercicio1"}>Exercicio 1</Link>
          <Link to={"/exercicio2"}>Exercicio 2</Link>
          <Link to={"/exercicio3"}>Exercicio 3</Link>
          <Link to={"/exercicio4"}>Exercicio 4</Link>
        </div>
    </header>
  );
}

export default Header;