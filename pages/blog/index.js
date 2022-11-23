import styles from "./blog.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const Blog = ({ data }) => {
  return (
    <div className={styles.apiData}>
      {data &&
        data.slice(0, 10).map((elemDat) => {
          return (
            <Link className={styles.cardData} href={`/blog/${elemDat.id}`}>
              <div key={elemDat.id} className={styles.card}>
                <h4 className={styles.blogId}>{elemDat.id}</h4>
                <h4>{elemDat.title}</h4>
              </div>
            </Link>
          );
        })}
    </div>
  );
};
export default Blog;
