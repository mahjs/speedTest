import { FC } from "react";
import Result from "../Main/components/Result";
import { DataState } from "../Main/useData";

// Locals
import classes from "./styles.module.css";

type Props = {
  dataState: Partial<DataState>;
};

const EndResults: FC<Props> = ({ dataState }) => {
  return (
    <>
      <div className={classes.wrapper}>
        <span className={[classes.divider, classes.one].join(" ")}></span>
        <span className={[classes.divider, classes.two].join(" ")}></span>

        <Result
          title="سرعت دانلود"
          iconSrc="/svg/download.svg"
          value={Number(dataState.dlStatus || 0)}
          unit="Mbps"
        />
        <Result
          title="سرعت آپلود"
          iconSrc="/svg/upload.svg"
          value={Number(dataState.ulStatus || 0)}
          unit="Mbps"
        />
        <Result
          title="پینگ"
          iconSrc="/svg/ping.svg"
          value={Number(dataState.pingStatus || 0)}
          unit="ms"
        />
      </div>
      <div className={classes.buttonWrapper}>
        <button className={[classes.shareBtn, classes.btn].join(" ")}>
          به اشتراک گذاری
        </button>
        <button
          className={[classes.retryBtn, classes.btn].join(" ")}
          onClick={() => {
            window.location.reload();
          }}
        >
          تست مجدد
        </button>
      </div>
    </>
  );
};

export default EndResults;
