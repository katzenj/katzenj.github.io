import { format, parseISO, compareDesc } from "date-fns";
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Link } from "react-router-dom";

import client from "src/components/contentful-client";

import styles from "src/styles/main.module.scss";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [about, setAbout] = useState([""]);

  const getAbout = async () => {
    const response = await client.getEntries({
      content_type: "mainPage",
    });
    const item = response.items[0];
    const header = item.fields.header.split("\n");
    const filteredHeader = header.filter((content) => content !== "");
    setAbout(filteredHeader);
  };

  const getPosts = async () => {
    try {
      const response = await client.getEntries({
        content_type: "blogPost",
        select: "fields.title,fields.publishedDate,fields.slug",
      });

      const retrievedPosts = response.items.map((item) => ({
        title: item.fields.title,
        date: parseISO(item.fields.publishedDate),
        slug: item.fields.slug,
      }));
      retrievedPosts.sort(compareDesc);
      setPosts(retrievedPosts);

      return retrievedPosts;
    } catch (err) {
      console.error(err);
      return {};
    }
  };

  useEffect(() => {
    getAbout();
    getPosts();
  }, []);

  return (
    <div className={styles.profileContent}>
      <span className={styles.title} role="img" aria-label="computer man emoji">
        👨‍💻
      </span>
      <div className={styles.mainAbout}>
        {about.map((paragraph) => <p>{paragraph}</p>)}
      </div>
      <ol className={styles.posts}>
        {posts.map((post) => (
          <li className={styles.post} key={post.slug}>
            <Link to={`/blog/${post.slug}`}>
              <h2>{post.title}</h2>
              <p>{format(post.date, "MMM do, yyyy").toUpperCase()}</p>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Main;
