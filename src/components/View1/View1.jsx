import { useState } from "react";
import { Link } from "react-router-dom";
import BarChart from "./BarChart";
function View1() {
  const [count, setCount] = useState(0);

  return (
    <div className="View1">
      <h1>Hello, World</h1>

      <BarChart />
    </div>
  );
}

export default View1;
