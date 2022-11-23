import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <Link className={styles.logo} href="/">
            NEXT
          </Link>
          <ul>
            <li className={styles.list}>
              <Link className={styles.link} href="/">
                Home
              </Link>
            </li>
            <li className={styles.list}>
              <Link className={styles.link} href="/address">
                Address
              </Link>
            </li>
            <li className={styles.list}>
              <Link className={styles.link} href="/contact">
                Contact
              </Link>
            </li>
            <li className={styles.list}>
              <Link className={styles.link} href="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Nav;
