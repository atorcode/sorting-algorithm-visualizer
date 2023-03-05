import styles from "./VisualizerBars.module.scss";
import VisualizerBar from "../VisualizerBar";
import { useAnimationContext } from "../../contexts/AnimationContext";

const VisualizerBars = ({ barsToRender }) => {
  const { barsContainer } = useAnimationContext();
  // const uniquePositions = Array.from(
  //   new Set(barsToRender.map((bar) => bar.correctPos))
  // );
  // const uniqueBars = uniquePositions.map((correctPos) =>
  //   barsToRender.find((bar) => bar.correctPos === correctPos)
  // );
  return (
    <section ref={barsContainer} className={styles["bars"]}>
      {barsToRender &&
        barsToRender.map((bar, index) => {
          return <VisualizerBar key={bar.correctPos} index={index} {...bar} />;
        })}
    </section>
    // <section ref={barsContainer} className={styles["bars"]}>
    //   {uniqueBars &&
    //     uniqueBars.map((bar, index) => {
    //       return <VisualizerBar key={bar.correctPos} index={index} {...bar} />;
    //     })}
    // </section>
  );
};

export default VisualizerBars;
