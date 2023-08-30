import { FC } from "react";

// Utils
import { toPersianDigit } from "../../../../utils/numbers";

// locals
import classes from "./styles.module.css";

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
            statusValue >= value && (testStatus === 1 || testStatus === 3)
              ? testStatus <= 1
                ? classes.activeDownload
                : classes.activeUpload
              : classes.normalNumber,
          ].join(" ")}
        >
          {toPersianDigit(value)}
        </span>
      )}
    </div>
  );
};

export default Range;
