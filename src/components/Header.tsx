import css from "./Header.module.css";
import modelcss from "./Model.module.css";
import globe from "../assets/globe.jpg";
import { scrollCheck } from "../App";
import { useEffect } from "react";
export default (props: any) => {
  useEffect(() => {
    let outIn = true;
    const frost = document.getElementById(css.frost) as HTMLElement;
    frost.style.display = "none";
    const tabs = document.getElementsByClassName(css.tab);
    const floater = document.getElementById(css.floater) as HTMLElement;
    const header = document.getElementById(css.header) as HTMLElement;
    console.log("check");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("mouseover", (e: any) => {
        let rect = e.target.getBoundingClientRect();
        floater.classList.remove(css.floaterOut);
        if (outIn) {
          floater.classList.add(css.floaterIn);
          outIn = false;
        } else {
          floater.classList.remove(css.floaterIn);
        }
        floater.style.left = rect.left - 10 + "px";
        floater.style.width = rect.width + 20 + "px";
      });
    }
    header.onmouseleave = () => {
      floater.classList.add(css.floaterOut);
      outIn = true;
    };

    setTimeout(() => {
      document
        .getElementById(modelcss.modelDiv)
        ?.classList.remove(modelcss.modelDiv);
    }, 3500);
    scrollCheck();
  });
  const closeMenu = () => {
    const frost = document.getElementById(css.frost) as HTMLElement;
    document.getElementById(css.hiddenMenu)?.classList.remove(css.open);
    // document.getElementById(css.frost)?.classList.remove(css.glowUp);
    frost.style.opacity = "0";
    setTimeout(() => {
      frost.style.display = "none";
    }, 410);
  };
  const openMenu = () => {
    const frost = document.getElementById(css.frost) as HTMLElement;
    document.getElementById(css.hiddenMenu)?.classList.add(css.open);
    frost.style.display = "block";
    setTimeout(() => {
      frost.style.opacity = "1";
    }, 1);
    // document.getElementById(css.frost)?.classList.add(css.glowUp);
  };
  return props.narrow ? (
    <>
      <div id={css.frost} onClick={closeMenu} />
      <div id={css.header} className={`${css.header} ${css.narrowHeader}`}>
        <div id={css.floater} className={css.floaterOut}></div>
        <div className={`${css.tesla}`}>
          TESLA <span id={css.clone}> CLONE</span>
        </div>
        <div id={css.menu} className={`${css.menu}`} onClick={openMenu}>
          Menu
        </div>
      </div>
      <div id={css.hiddenMenu} className={`${css.hiddenMenu}`}>
        <div id={css.x}>
          <svg height="12" width="12" id={css.y} onClick={closeMenu}>
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="100%"
              stroke="#393c41"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <line
              x1="100%"
              y1="0"
              x2="0"
              y2="100%"
              stroke="#393c41"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className={css.model}>
          <a href="#Roadster">Roadster</a>
        </div>
        <div className={css.model}>
          <a href="#Cybertruck">Cybertruck</a>
        </div>
        <div className={css.model}>
          <a href="#Semi">Semi</a>
        </div>
        <div className={css.model}>
          <a href="#Optimus">Optimus</a>
        </div>
        <div className={css.model}>
          <a href="#Tequila">Tequila</a>
        </div>
        <div>Powerwall</div>
        <div>Energy</div>
        <div>Commercial Energy</div>
        <div>Utilities</div>
        <div>Charging</div>
        <div>Careers</div>
        <div>Find Us</div>
        <div>Events</div>
        <div>Support</div>
        <div>Investor Relations</div>
        <div>Account</div>
        <div id={css.more}>
          <div>More</div>
          <svg width="6" height="11">
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="50%"
              stroke="#393c41"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <line
              x1="100%"
              y1="50%"
              x2="0"
              y2="100%"
              stroke="#393c41"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div id={css.location}>
          <img src={globe} id={css.globe} />
          <div id={css.deutschland}>
            <div>Deutschland</div>
            <div id={css.deutsch}>Deutsch</div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div id={css.frost} onClick={closeMenu} />
      <div id={css.header} className={`${css.header}`}>
        <div id={css.floater} className={css.floaterOut}></div>
        <div className={`${css.tesla}`}>
          TESLA<span id={css.clone}> CLONE</span>
        </div>
        <div className={`${css.models} ${css.block}`}>
          <div className={`${css.model} ${css.tab}`}>
            <a href="#Roadster"> Roadster </a>
          </div>
          <div className={`${css.model} ${css.tab}`}>
            <a href="#Cybertruck"> Cybertruck </a>
          </div>
          <div className={`${css.model} ${css.tab}`}>
            <a href="#Semi"> Semi </a>
          </div>
          <div className={`${css.model} ${css.tab}`}>
            <a href="#Optimus"> Optimus </a>
          </div>
          <div className={`${css.model} ${css.tab}`}>
            <a href="#Tequila"> Tequila </a>
          </div>
        </div>
        <div className={`${css.other} ${css.block}`}>
          <div className={`${css.tab}`}>Support</div>
          <div className={`${css.tab}`}>Account</div>
          <div className={`${css.menu} ${css.tab}`} onClick={openMenu}>
            Menu
          </div>
        </div>
      </div>
      <div id={css.hiddenMenu} className={`${css.hiddenMenu}`}>
        <div id={css.x}>
          <svg height="12" width="12" id={css.y} onClick={closeMenu}>
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="100%"
              stroke="#393c41"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <line
              x1="100%"
              y1="0"
              x2="0"
              y2="100%"
              stroke="#393c41"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div>Powerwall</div>
        <div>Energy</div>
        <div>Commercial Energy</div>
        <div>Utilities</div>
        <div>Charging</div>
        <div>Careers</div>
        <div>Find Us</div>
        <div>Events</div>
        <div>Support</div>
        <div>Investor Relations</div>
        <div>Account</div>
        <div id={css.more}>
          <div>More</div>
          <svg width="6" height="11">
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="50%"
              stroke="#393c41"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <line
              x1="100%"
              y1="50%"
              x2="0"
              y2="100%"
              stroke="#393c41"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div id={css.location}>
          <img src={globe} id={css.globe} />
          <div id={css.deutschland}>
            <div>Deutschland</div>
            <div id={css.deutsch}>Deutsch</div>
          </div>
        </div>
      </div>
    </>
  );
};
