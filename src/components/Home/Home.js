import { useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Link to="/view1">view 1</Link>
    </div>
  );
}

export default App;
