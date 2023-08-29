import Header from "./components/Header";
import Main from "./components/Main";
import SVG from "react-inlinesvg";
import "./App.css";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Main />
      </div>
      <SVG src="/svg/speedtest.svg" className="background-logo" />
    </>
  );
}

export default App;
