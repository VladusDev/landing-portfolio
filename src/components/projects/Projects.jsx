import { useEffect, useState } from "react";
import styles from "./Projects.module.scss";

import Card from "./Card";
import { Button } from "../button/Button";

function Projects() {
  const cats = [
    { name: "All" },
    { name: "Website Design" },
    { name: "App Mobile Design" },
    { name: "App Design" },
    { name: "Brainding" },
  ];

  const [categoryId, setCategoryId] = useState(0);
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const category = categoryId ? `category=${categoryId}` : "";
    const baseURL = `https://fc62fa5e23725634.mokky.dev/works?${category}`;

    fetch(baseURL)
      .then((res) => res.json())
      .then((json) => {
        setWorks(json);
      });
  }, [categoryId]);

  return (
    <div className="container">
      <section className={styles.projects}>
        <div className={styles.content}>
          <div className={styles.title}>Portfolio</div>
          <div className={styles.top}>
            <ul className={styles.tags}>
              {cats.map((obj, index) => (
                <li
                  className={categoryId === index ? styles.active : ""}
                  onClick={() => setCategoryId(index)}
                  key={index}
                >
                  {obj.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.works}>
          {works.map((obj, index) => (
            <Card key={index} obj={obj} />
          ))}
        </div>
        <div className={styles.btnGit}>
          <Button fz={15}>
            <a href="#">More Works</a>
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Projects;
