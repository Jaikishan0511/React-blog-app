import React from "react";
import styles from "./index.module.css";
function Cell(props) {
  return (
    <div className={styles.cell} id="cell" onClick={props.handleBoxClick} />
  );
}
export default Cell;
