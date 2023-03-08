import { useState } from "react";
import { Link } from "react-router-dom";
import BarChart from "./BarChart";
import OldBarChart from "./OldBarChart";

function View1() {
  const [count, setCount] = useState(0);

  return (
    <div className="View1">
      <h1>Hello, World</h1>

      {/* <BarChart /> */}
      {/* <OldBarChart /> */}
    </div>
  );
}

export default View1;
