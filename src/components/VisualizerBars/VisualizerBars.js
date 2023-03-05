import styles from "./VisualizerBars.module.scss";
import VisualizerBar from "../VisualizerBar";
import { useAnimationContext } from "../../contexts/AnimationContext";

const VisualizerBars = ({ name, barsToRender }) => {
  const { barsContainer } = useAnimationContext();
  return (
    <section ref={barsContainer} className={styles["bars"]}>
      {barsToRender &&
        barsToRender.map((bar, index) => {
          return (
            <VisualizerBar
              key={
                name === "merge sort"
                  ? `${bar.correctPos} ${bar.left}`
                  : bar.correctPos
              }
              index={index}
              {...bar}
            />
          );
        })}
    </section>
  );
};

export default VisualizerBars;
