import styles from "./AlgorithmComplexityTable.module.scss";
import { useEffect, useRef } from "react";
import { useTransitionContext } from "../../contexts/TransitionContext";

const AlgorithmComplexityTable = ({ complexity }) => {
  const complexityTableEl = useRef(null);
  const {
    complexityTableTransitionActive,
    setComplexityTableTransitionActive,
  } = useTransitionContext();

  const createMarkupTimeAvg = () => {
    return { __html: complexity.timeAvg };
  };
  const createMarkupTimeWorst = () => {
    return { __html: complexity.timeWorst };
  };
  const createMarkupTimeBest = () => {
    return { __html: complexity.timeBest };
  };
  const createMarkupSpace = () => {
    return { __html: complexity.space };
  };

  // Declared twice here and in AlgorithmImplementation so style is properly scoped to scss module
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setComplexityTableTransitionActive(true);
        }
      });
    },
    { threshold: 0.5 }
  );

  useEffect(() => {
    observer.observe(complexityTableEl.current);
    if (complexityTableTransitionActive) {
      complexityTableEl.current.classList.add(styles["transition-active"]);
    } else {
      complexityTableEl.current.classList.remove(styles["transition-active"]);
    }
  }, [complexityTableTransitionActive]);

  return (
    <section className={styles["table-section"]}>
      <h2>COMPLEXITY</h2>
      <table ref={complexityTableEl} className={styles["table"]}>
        <tbody>
          <tr>
            <th>Time (Average Case)</th>
            {complexity && (
              <td dangerouslySetInnerHTML={createMarkupTimeAvg()}></td>
            )}
          </tr>
          <tr>
            <th>Time (Worst Case)</th>
            {complexity && (
              <td dangerouslySetInnerHTML={createMarkupTimeWorst()}></td>
            )}
          </tr>
          <tr>
            <th>Time (Best Case)</th>
            {complexity && (
              <td dangerouslySetInnerHTML={createMarkupTimeBest()}></td>
            )}
          </tr>
          <tr>
            <th>Space</th>
            {complexity && (
              <td dangerouslySetInnerHTML={createMarkupSpace()}></td>
            )}
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default AlgorithmComplexityTable;
