import styles from "./VisualizerBars.module.scss";
import VisualizerBar from "../VisualizerBar";
import { useAnimationContext } from "../../contexts/AnimationContext";

const VisualizerBars = ({ barsToRender }) => {
  const { barsContainer } = useAnimationContext();
  return (
    <section ref={barsContainer} className={styles["bars"]}>
      {barsToRender &&
        barsToRender.map((bar, index) => {
          return <VisualizerBar key={bar.correctPos} index={index} {...bar} />;
        })}
    </section>
  );
};

export default VisualizerBars;
