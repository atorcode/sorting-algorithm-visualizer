import styles from "./VisualizerHeroHeading.module.scss";
import { applyInitialCase } from "../../utils/utils";
import { useRef, useEffect } from "react";
import { useTransitionContext } from "../../contexts/TransitionContext";

const VisualizerHeroHeading = ({ name }) => {
  const heroHeadingEl = useRef(null);
  const { heroHeadingTransitionActive, setHeroHeadingTransitionActive } =
    useTransitionContext();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setHeroHeadingTransitionActive(true);
        }
      });
    },
    { threshold: 0.5 }
  );

  useEffect(() => {
    setTimeout(() => {
      if (heroHeadingTransitionActive) {
        heroHeadingEl.current.classList.add(styles["transition-active"]);
      }
    }, 50);
    if (!heroHeadingTransitionActive) {
      heroHeadingEl.current.classList.remove(styles["transition-active"]);
    }
    observer.observe(heroHeadingEl.current);
  }, [heroHeadingTransitionActive]);

  return (
    <h1 ref={heroHeadingEl} className={styles["heading"]}>
      {applyInitialCase(name)}
    </h1>
  );
};

export default VisualizerHeroHeading;
