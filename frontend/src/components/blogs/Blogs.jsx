import React from "react";
import styles from "./blog.module.css";
import useFetch from "../../hooks/useFetch";

const Blogs = () => {
  const { data, loading } = useFetch("http://localhost:8000/api/blogs");

  return (
    <div className={styles.container}>
      {loading ? (
        "loading"
      ) : (
        <>
          {data.map((item) => (
            <div key={item._id} className={styles.blogCards}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <h6>Posted on:{item.createdAt}</h6>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Blogs;
