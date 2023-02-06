import { Link } from "react-router-dom";
import styles from "./ExpandedNavBarAlgorithmType.module.scss";
import { useExpandedNavBarContext } from "../../contexts/ExpandedNavBarContext";
import { formatLink } from "../../utils/utils";

const ExpandedNavBarAlgorithmType = ({ name }) => {
  const { setNavIsExpanded } = useExpandedNavBarContext();

  return (
    <>
      <li className={styles["algorithm"]}>
        <Link
          to={formatLink(name)}
          className={styles["link"]}
          onClick={() => {
            window.scrollTo(0, 0);
            setNavIsExpanded(false);
          }}
        >
          <p>{name}</p>
        </Link>
      </li>
    </>
  );
};

export default ExpandedNavBarAlgorithmType;
