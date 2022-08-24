import styles from "./Header.module.scss"
import { Outlet } from "react-router-dom"
import stylesTema from "styles/Temas.module.scss";

export default function Header() {
  return (
    <main>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <div className= {stylesTema.container}>
        <Outlet />
      </div>
    </main>
  );
}
