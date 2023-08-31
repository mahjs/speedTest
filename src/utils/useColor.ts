import { DataState } from "../components/Main/useData";
import { uploadColorsGradient, downloadColorsGradient } from "./colors";

export const useColor = (state: DataState) => {
  const colorPallet =
    state.testState <= 1 ? downloadColorsGradient : uploadColorsGradient;
  const rangeValue = Math.round(
    state.testState <= 1
      ? Number(state.dlStatus) || 0
      : Number(state.ulStatus) || 0
  );

  const gradientElement = document.getElementById("ringerValueGradient");
  const gradientBackground = `conic-gradient(from 222deg, ${
    colorPallet[0].color
  } 0deg, ${colorPallet[Math.min(rangeValue, 99)].color} ${Math.min(
    Math.ceil(rangeValue * 2.5),
    275
  )}deg, rgba(27, 112, 238, .11) ${Math.min(
    Math.ceil(rangeValue * 2.5),
    275
  )}deg)`;

  if (state.testState > 3) {
    gradientElement!.style.background =
      "conic-gradient(from 222deg, rgba(27, 112, 128, .11) 0deg, rgba(27, 112, 238, .11) 0deg)";
  }
  gradientElement!.style.background = gradientBackground;
};

// We could use GSAP for a better ui too.

// const strokeWidth = 50;
// const downloadColors = ["rgba(45,68,253,1)", "rgba(132,179,250,1)"];
// const uploadColors = ["rgba(250,198,255,1)", "rgba(241,21,153,1)"];
// gsap.registerPlugin(MotionPathPlugin);
// export const useColor2 = (state: DataState) => {
//   const gradientPath = document.querySelector(
//     "#gradient-path"
//   ) as SVGPathElement;
//   // @ts-ignore
//   const baseNumbersOfDots = Math.ceil(0.5 * gradientPath?.getTotalLength());

//   const selectedColors = state.testState <= 1 ? downloadColors : uploadColors;
//   const stateValue =
//     state.testState <= 1
//       ? Number(state.dlStatus) || 0
//       : Number(state.ulStatus) || 0;
//   const g = document.querySelector("#gradient-els");
//   g!.innerHTML = "";

//   for (
//     let idx = 0;
//     idx < baseNumbersOfDots / (100 / Math.min(Math.ceil(stateValue), 100));
//     idx++
//   ) {
//     const circle = document.createElementNS(
//       "http://www.w3.org/2000/svg",
//       "circle"
//     );
//     g?.appendChild(circle);

//     gsap.set(circle, {
//       motionPath: {
//         path: gradientPath,
//         start: idx / baseNumbersOfDots,
//         end: idx / baseNumbersOfDots,
//       },
//       attr: {
//         cx: 0,
//         cy: 0,
//         r: 0.5 * strokeWidth,
//         fill: gsap.utils.interpolate(
//           selectedColors,
//           idx / baseNumbersOfDots / (100 / Math.min(Math.ceil(stateValue), 100))
//         ),
//       },
//     });
//   }
// };
