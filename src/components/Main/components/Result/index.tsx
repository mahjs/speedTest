import { FC } from "react";
import SVG from "react-inlinesvg";
import classes from "./stylles.module.css";

type Props = {
  title: string;
  iconSrc: string;
  value: number;
  unit: string;
  disable?: boolean;
};

const Result: FC<Props> = ({ title, iconSrc, value = 0, unit, disable }) => {
  return (
    <div
      className={[classes.container, disable ? classes.disable : ""].join(" ")}
    >
      <p className={classes.title}>{title}</p>
      <div className={classes.footer}>
        <div>
          <SVG src={iconSrc} className={classes.icon} />
        </div>
        <div className={classes.resultsWrapper}>
          <span className={classes.value}>{value}</span>
          <span className={classes.unit}>{unit}</span>
        </div>
      </div>
    </div>
  );
};

export default Result;
