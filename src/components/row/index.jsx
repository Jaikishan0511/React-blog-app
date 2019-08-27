import React from "react";
import styles from "./index.module.css";
import Cell from "../cell";
function Row(props) {
  return (
    <div className={styles.row}>
      <Cell handleBoxClick={props.handleBoxClick} />
      <Cell handleBoxClick={props.handleBoxClick} />
      <Cell handleBoxClick={props.handleBoxClick} />
    </div>
  );
}
export default Row;
