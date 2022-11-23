import styles from "./blog.module.css";
import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((curElem) => {
    return {
      params: {
        pageno: curElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageno;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const myData = ({ data }) => {
  return (
    <div className={styles.apiData}>
      <div className={styles.singleRecord}>
        <h3 className={styles.blogId}>{data.id}</h3>
        <h3 className={styles.singleDataRecord}>{data.title}</h3>
        <p className={styles.textApi}>{data.body}</p>
        <Link className={styles.backBtn} href="/">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default myData;
