import styles from "./AlgorithmImplementation.module.scss";
import { useEffect, useRef } from "react";

const AlgorithmImplementation = ({ implementation }) => {
  const implementationEl = useRef(null);

  const createMarkup = () => {
    return { __html: implementation };
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles["transition-active"]);
        }
      });
    },
    { threshold: 0.15 }
  );

  useEffect(() => {
    observer.observe(implementationEl.current);
  }, []);

  return (
    <section className={styles["implementation-section"]}>
      <h2>IMPLEMENTATION</h2>
      <pre ref={implementationEl} className={styles["implementation"]}>
        <code dangerouslySetInnerHTML={createMarkup()}></code>
      </pre>
    </section>
  );
};

export default AlgorithmImplementation;
