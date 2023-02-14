import styles from "./AlgorithmImplementation.module.scss";
import { useEffect, useRef } from "react";
import { useTransitionContext } from "../../contexts/TransitionContext";

const AlgorithmImplementation = ({ implementation }) => {
  const implementationEl = useRef(null);
  const { implementationTransitionActive, setImplementationTransitionActive } =
    useTransitionContext();

  const createMarkup = () => {
    return { __html: implementation };
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setImplementationTransitionActive(true);
        }
      });
    },
    { threshold: 0.15 }
  );

  useEffect(() => {
    if (implementationTransitionActive) {
      implementationEl.current.classList.add(styles["transition-active"]);
    } else {
      implementationEl.current.classList.remove(styles["transition-active"]);
    }
    observer.observe(implementationEl.current);
  }, [implementationTransitionActive]);

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
