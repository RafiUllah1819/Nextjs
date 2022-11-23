import styles from "../styles/Home.module.css";
import HomeCom from "../components/Home";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <HomeCom /> */}
      <div className={styles.homePage}>
        <h1 className={styles.title}>The React Framework for Production</h1>
        <p className={styles.description}>
          Next.js gives you the best developer experience with all the features
          you need for production: hybrid static & server rendering, TypeScript
          support, smart bundling, route pre-fetching, and more. No config
          needed.
        </p>
        <div className={styles.btns}>
          <Link href="#">Start Learning</Link>
          <Link href="#">Documentation</Link>
        </div>
      </div>
    </div>
  );
}
