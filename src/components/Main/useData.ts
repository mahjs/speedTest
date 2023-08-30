import { useEffect, useState } from "react";
import { useColor } from "../../utils/useColor";

declare global {
  interface Window {
    Speedtest: new () => any;
  }
}

export type DataState = {
  clientIp: string;
  dlProgress: number;
  dlStatus: string;
  jitterStatus: string;
  pingProgress: number;
  pingStatus: string;
  testState: number;
  ulProgress: number;
  ulStatus: string;
};
const useData = () => {
  const [openTest, setOpenTest] = useState<boolean>(false);
  const [dataState, setDataState] = useState<Partial<DataState>>({});
  const [showEndResult, setShowEndResult] = useState<boolean>(false);

  const test = new window.Speedtest();

  useEffect(() => {
    if (!openTest) return;

    const timer = setTimeout(() => {
      test.start();
      test.onupdate = (data: DataState) => {
        setDataState(data);
        useColor(data);
      };
    }, 5500);

    return () => clearTimeout(timer);
  }, [openTest]);

  test.onend = () => {
    const gradientElement = document.getElementById("ringer-value-gradient");
    gradientElement!.style.background =
      "conic-gradient(from 222deg, rgba(27, 112, 128, .11) 0deg, rgba(27, 112, 238, .11) 0deg)";

    setTimeout(() => setShowEndResult(true), 1500);
  };

  return {
    openTest,
    setOpenTest,
    dataState,
    showEndResult,
  };
};

export default useData;
