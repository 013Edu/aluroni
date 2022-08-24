import styles from "./Menu.module.scss";
import logo from "assets/logo.svg";
import { Link } from "react-router-dom";

export default function Menu() {
  const rotas = [
    {
      label: "Início",
      to: "/",
    },
    {
      label: "Cardápio",
      to: "/cardapio",
    },
    {
      label: "Sobre",

      to: "/sobre",
    },
  ];

  return (
    <nav className={styles.menu}>
      <img className={styles.img} src={logo} alt="logo aluroni" />
      <ul className={styles.menu__list}>
        {rotas.map((rotas, index) => (
          <li className={styles.menu__link} key={index}>
            <Link to={rotas.to}>{rotas.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
