import { FC } from "react";
import SVG from "react-inlinesvg";

// Local components
import Range from "./components/Range";
import Result from "./components/Result";
import EndResults from "../EndResult";

// Locals
import useData from "./useData";
import "./styles.css";

const Main: FC = () => {
  const { openTest, setOpenTest, dataState, showEndResult } = useData();

  return (
    <main className="main">
      <div className="wrapper mainWrapper">
        {showEndResult && <EndResults dataState={dataState} />}
        {!showEndResult && (
          <section className="mainNetworkTest">
            <p className="speedtestTitle">تست سرعت اینترنت</p>
            <div
              className={[
                "resultsWrapper",
                openTest ? "enableResults" : "disableResults",
              ].join(" ")}
            >
              <span className="divider one"></span>
              <span className="divider two"></span>
              <Result
                title="سرعت دانلود"
                iconSrc="/svg/download.svg"
                value={Number(dataState.dlStatus || 0)}
                unit="Mbps"
                disable={(dataState.testState || 0) < 1}
              />
              <Result
                title="سرعت آپلود"
                iconSrc="/svg/upload.svg"
                value={Number(dataState.ulStatus || 0)}
                unit="Mbps"
                disable={(dataState.testState || 0) < 3}
              />
              <Result
                title="پینگ"
                iconSrc="/svg/ping.svg"
                value={Number(dataState.pingStatus || 0)}
                unit="ms"
              />
            </div>

            <div
              className={["mainResult", openTest ? "slideDownButton" : ""].join(
                " "
              )}
              onClick={() => {
                setOpenTest(true);
              }}
            >
              <div className="connectionTestButtonContainer">
                <div className="ring"></div>
                <h2>
                  <button className="connectionTestButtonLink textWhite">
                    شروع
                  </button>
                </h2>
              </div>
            </div>

            {openTest && (
              <div className="cornometer">
                <SVG src="/svg/ellipse.svg" className="ringer" />
                <SVG
                  src="/svg/vector.svg"
                  className="vector"
                  style={
                    {
                      "--value":
                        dataState.testState === 1
                          ? `${Math.min(
                              Number(dataState.dlStatus) * 2.2 - 145,
                              100
                            )}deg`
                          : dataState.testState === 3
                          ? `${Math.min(
                              Number(dataState.ulStatus) * 2.2 - 145,
                              100
                            )}deg`
                          : "-145deg",
                    } as React.CSSProperties
                  }
                />

                {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((value) => (
                  <Range
                    value={value}
                    delay={value / 50}
                    statusValue={
                      dataState.testState === 1
                        ? Number(dataState.dlStatus)
                        : dataState.testState === 3
                        ? Number(dataState.ulStatus)
                        : 0
                    }
                    testStatus={dataState.testState || 0}
                  />
                ))}
                <div className="speedRate">
                  <p>
                    {dataState.testState === 1
                      ? dataState.dlStatus || "0.00"
                      : dataState.testState === 3
                      ? dataState.ulStatus || "0.00"
                      : "0.00"}
                  </p>
                  <div>
                    <span>
                      {(dataState.testState === 1 ||
                        dataState.testState === 3) && (
                        <SVG
                          src={`/svg/${
                            dataState.testState === 1
                              ? "download"
                              : dataState.testState === 3
                              ? "upload"
                              : ""
                          }.svg`}
                        />
                      )}
                    </span>
                    <span>Mbps</span>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
};
export default Main;
