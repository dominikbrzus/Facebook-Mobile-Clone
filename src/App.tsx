import "./App.scss";
import TopNavbar from "./components/Navbar/TopNavbar";
import BottomNavbar from "./components/Navbar/BottomNavbar";
import Thing from "./components/Main/Thing";
import Reels from "./components/Main/Reels";
import Wall from "./components/Wall/Wall";
import "./style/utilities.scss";
import "./style/colors.scss";
import { CgScreen } from "react-icons/cg";

import { useState, useEffect } from "react";

function App() {
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidthWindow(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () =>
        setWidthWindow(window.innerWidth)
      );
    };
  }, [widthWindow]);

  return (
    <div className="App">
      {widthWindow < 576 ? (
        <>
          <TopNavbar />
          <BottomNavbar />
          <Thing />
          <Reels />
          <Wall />
        </>
      ) : (
        <>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              margin: "14rem auto",
              textAlign: "center",
              padding: "0 .7rem",
            }}
          >
            <CgScreen style={{ fontSize: "3rem", marginBottom: ".7rem" }} />
            The App displays only on mobile devices smaller than 576 width. Your
            current screen width is {widthWindow}px.
          </p>
        </>
      )}
    </div>
  );
}

export default App;
