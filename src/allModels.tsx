import roadster from "./assets/roadster.webp";
import roadsterV from "./assets/roadsterV.webp";
import cybertruck from "./assets/cybertruck.webp";
import cybertruckV from "./assets/cybertruckV.webp";
import semi from "./assets/semi.webp";
import semiV from "./assets/semi.jpg";
import optimus from "./assets/optimus.png";
import optimusV from "./assets/optimus.png";
import tequila from "./assets/tequila.jpg";
let div = document.createElement("div");
div.id = "ncapInfo";
let tesladiv = document.createElement("div");
tesladiv.innerHTML = "TESLA CLONE © 2023";
div.appendChild(tesladiv);
tesladiv = document.createElement("div");
tesladiv.innerHTML = "Privacy & Legal";
div.appendChild(tesladiv);
tesladiv = document.createElement("div");
tesladiv.innerHTML = "Contact";
div.appendChild(tesladiv);
tesladiv = document.createElement("div");
tesladiv.innerHTML = "News";
div.appendChild(tesladiv);
tesladiv = document.createElement("div");
tesladiv.innerHTML = "Get Updates";
div.appendChild(tesladiv);
tesladiv = document.createElement("div");
tesladiv.innerHTML = "Locations";
div.appendChild(tesladiv);
export default [
  { name: "Roadster", src: roadster, srcV: roadsterV, ncap: "SPEED" },
  { name: "Cybertruck", src: cybertruck, srcV: cybertruckV, ncap: "STRENGTH" },
  { name: "Semi", src: semi, srcV: semiV, ncap: "POWER" },
  { name: "Optimus", src: optimus, srcV: optimus, ncap: "INTELLIGENCE" },
  {
    name: "Tequila",
    src: tequila,
    srcV: tequila,
    ncap: div,
  },
];
