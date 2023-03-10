import { Link } from "react-router-dom";
import styles from "./ExpandedNavBarAlgorithmType.module.scss";
import { useExpandedNavBarContext } from "../../contexts/ExpandedNavBarContext";
import { formatLink, applyInitialCase } from "../../utils/utils";
import { useTransitionContext } from "../../contexts/TransitionContext";
import { useAnimationContext } from "../../contexts/AnimationContext";

const ExpandedNavBarAlgorithmType = ({ name }) => {
  const { setNavIsExpanded } = useExpandedNavBarContext();
  const {
    setComplexityTableTransitionActive,
    setImplementationTransitionActive,
    setHeroHeadingTransitionActive,
  } = useTransitionContext();
  const { setIsPlaying, timers, numBars, createBarArray, setBarsToRender } =
    useAnimationContext();

  return (
    <>
      <li className={styles["algorithm"]}>
        <Link
          to={formatLink(name)}
          className={styles["link"]}
          onClick={() => {
            window.scrollTo(0, 0);
            setNavIsExpanded(false);
            timers.current.forEach((timer) => {
              clearTimeout(timer);
            });
            setIsPlaying(false);
            setBarsToRender(createBarArray(numBars));
            setComplexityTableTransitionActive(false);
            setImplementationTransitionActive(false);
            setHeroHeadingTransitionActive(false);
          }}
        >
          <p>{applyInitialCase(name)}</p>
        </Link>
      </li>
    </>
  );
};

export default ExpandedNavBarAlgorithmType;
