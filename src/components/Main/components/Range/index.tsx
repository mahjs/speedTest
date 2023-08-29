import { FC } from "react";
import classes from "./styles.module.css";
import { toPersianDigit } from "../../../../utils/numbers";

type Props = {
  value: number;
  statusValue: number;
  delay: number;
  testStatus: number;
};

const Range: FC<Props> = ({ value, delay, statusValue, testStatus }) => {
  return (
    <div
      className={classes.numberWrapper}
      style={{ "--delay": `${delay}s` } as React.CSSProperties}
    >
      {testStatus < 1 && (
        <span className={classes.number}>{toPersianDigit(value)}</span>
      )}
      {testStatus >= 1 && (
        <span
          className={[
            statusValue >= value ? classes.active : classes.normalNumber,
          ].join(" ")}
        >
          {toPersianDigit(value)}
        </span>
      )}
    </div>
  );
};

export default Range;
