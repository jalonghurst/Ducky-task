import React from "react";
import "./styles.css";
import { ReactComponent as Transport } from "./assets/icons/transport.svg";
import { ReactComponent as Consumption } from "./assets/icons/consumption.svg";
import { ReactComponent as Energy } from "./assets/icons/energy.svg";
import { ReactComponent as Food } from "./assets/icons/food.svg";
import { ReactComponent as Public } from "./assets/icons/public.svg";

const Legend = () => {
  return (
    <div id="legend">
      {/* Food*/}
      <div className="legendsection">
        <Food className="icon" />
        <span className="categorylabel">Food</span>
        <br />
        <span className="percentagelabel">16%</span>
      </div>

      {/* Consumption */}
      <div className="legendsection">
        <Consumption className="icon" />
        <span className="categorylabel">Consumption</span>
        <br />
        <span className="percentagelabel">25%</span>
      </div>

      {/* Energy */}
      <div className="legendsection">
        <Energy className="icon" />
        <span className="categorylabel">Energy</span>
        <br />
        <span className="percentagelabel">20%</span>
      </div>

      {/* Public */}
      <div className="legendsection">
        <Public className="icon" />
        <span className="categorylabel">Public</span>
        <br />
        <span className="percentagelabel">26.5%</span>
      </div>

      {/* Transport */}
      <div className="legendsection">
        <Transport className="icon" />
        <span className="categorylabel">Transport</span>
        <br />
        <span className="percentagelabel">12.5%</span>
      </div>
    </div>
  );
};

export default Legend;
