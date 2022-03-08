import "./styles.css";
import "./App.css";
import DonutChart from "./DonutChart";
import Legend from "./Legend";
import React from "react";

function App() {
  return (
    <div className="App">
      <DonutChart />
      <Legend />
    </div>
  );
}

export default App;
