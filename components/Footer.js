import styles from "../styles/Footer.module.css";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerInner}>
          <Link className={styles.footerLogo} href="/">
            Next
          </Link>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
