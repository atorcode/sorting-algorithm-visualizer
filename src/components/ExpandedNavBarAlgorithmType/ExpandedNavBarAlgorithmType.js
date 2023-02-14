import { Link } from "react-router-dom";
import styles from "./ExpandedNavBarAlgorithmType.module.scss";
import { useExpandedNavBarContext } from "../../contexts/ExpandedNavBarContext";
import { formatLink, applyInitialCase } from "../../utils/utils";
import { useTransitionContext } from "../../contexts/TransitionContext";

const ExpandedNavBarAlgorithmType = ({ name }) => {
  const { setNavIsExpanded } = useExpandedNavBarContext();
  const { setTransitionActive } = useTransitionContext();

  return (
    <>
      <li className={styles["algorithm"]}>
        <Link
          to={formatLink(name)}
          className={styles["link"]}
          onClick={() => {
            window.scrollTo(0, 0);
            setNavIsExpanded(false);
            setTransitionActive(false);
          }}
        >
          <p>{applyInitialCase(name)}</p>
        </Link>
      </li>
    </>
  );
};

export default ExpandedNavBarAlgorithmType;
