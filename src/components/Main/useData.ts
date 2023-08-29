import { useEffect, useState } from "react";

declare global {
  interface Window {
    Speedtest: new () => any;
  }
}

type DataState = {
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

  const test = new window.Speedtest();

  useEffect(() => {
    if (!openTest) return;

    const timer = setTimeout(() => {
      test.start();
      test.onupdate = (data: DataState) => {
        setDataState(data);
      };
    }, 5500);

    return () => clearTimeout(timer);
  }, [openTest]);

  return {
    openTest,
    setOpenTest,
    dataState,
  };
};

export default useData;
