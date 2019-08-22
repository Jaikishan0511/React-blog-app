import React, { useState } from "react";
import styles from "./index.module.css";
import Row from "../row";
function Numbergrid() {
  const [counter, setCounter] = useState(0);

  const handleBoxClick = event => {
    if (counter < 9 && !event.target.innerText) {
      const newCounter = counter + 1;
      event.target.innerText = newCounter;
      setCounter(newCounter);
    }
  };

  return (
    <div className={styles.content}>
      <Row handleBoxClick={handleBoxClick} />
      <Row handleBoxClick={handleBoxClick} />
      <Row handleBoxClick={handleBoxClick} />
    </div>
  );
}

export default Numbergrid;
