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
