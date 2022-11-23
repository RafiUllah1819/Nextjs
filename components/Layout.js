import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import { Footer } from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
