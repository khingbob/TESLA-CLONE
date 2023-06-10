import Header from "./components/Header";
import Content from "./components/Content";
import allModels from "./allModels";
import modelcss from "./components/Model.module.css";
import { useState } from "react";

export const scrollCheck = () => {
  allModels.forEach((model) => {
    let ncap: any = document.getElementById(modelcss.ncap);
    let top: any = document
      .getElementById(model.name)
      ?.getBoundingClientRect().top;
    if (top > -300 && top <= 300) {
      ncap.removeChild(ncap.firstChild);
      ncap.innerHTML = model.ncap;
      if (model.name === "Tequila") {
        ncap.innerHTML = "";
        ncap.appendChild(model.ncap);
        if (window.innerWidth >= 720) {
          document.documentElement.className = "TequilaMode";
        } else {
          document.documentElement.className = "TequilaNarrow";
        }
      } else if (model.name === "Semi") {
        if (window.innerWidth >= 720) {
          document.documentElement.className = "SemiLight";
        } else {
          document.documentElement.className = "SemiDark";
        }
      } else {
        document.documentElement.className = model.name + "Mode";
      }
      let modelName: any = document.getElementById(modelcss.modelName);
      modelName.innerHTML = model.name;
    }
  });
};
document.documentElement.className = "cybertruckMode";
export default () => {
  document.documentElement.className = "RoadsterMode";
  const headerWidthBreak = 950;
  const [headerNarrow, setHeaderNarrow] = useState(
    window.innerWidth < headerWidthBreak
  );

  const checkNarrow = (
    isNarrow: boolean,
    setNarrow: any,
    breakPoint: number
  ) => {
    if (!isNarrow && window.innerWidth < breakPoint) {
      setNarrow(true);
    } else if (isNarrow && window.innerWidth >= breakPoint) {
      setNarrow(false);
    }
  };

  window.onresize = () => {
    checkNarrow(headerNarrow, setHeaderNarrow, headerWidthBreak);
    scrollCheck();
  };

  window.onscroll = () => {
    scrollCheck();
  };

  return (
    <>
      <Header narrow={headerNarrow} />
      <Content />
    </>
  );
};
