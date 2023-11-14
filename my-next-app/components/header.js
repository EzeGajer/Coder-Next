import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">
          <span className={styles.logoText}>GajerShop</span>
        </Link>

        <div className={styles.menu}>
          <div className={styles.menuItems}>
            <Link href="/productos" className={styles.menuItem}>
              Productos
            </Link>
            <Link href="/contacto" className={styles.menuItem}>
              Contacto
            </Link>
            <Link href="/carrito" className={styles.menuItem}>
              Carrito
            </Link>
            <Link href="/admin" className={styles.menuItem}>
              Admin
            </Link>
          </div>
          <div className={styles.login}>
            <Link href="/login" className={styles.loginButton}>
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
