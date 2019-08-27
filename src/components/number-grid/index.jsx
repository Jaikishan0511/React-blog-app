import React from "react";
import styles from "./index.module.css";
import Row from "../row";
class Numbergrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleBoxClick = event => {
    try {
      if (this.state.counter < 9 && !event.target.innerText) {
        const newCounter = this.state.counter + 1;
        event.target.innerText = newCounter;
        this.setState({
          counter: newCounter
        });
      }
    } catch (err) {
      debugger;
      console.log(err);
    }
  };
  render() {
    return (
      <div className={styles.content} id="content">
        <Row handleBoxClick={this.handleBoxClick.bind(this)} />
        <Row handleBoxClick={this.handleBoxClick.bind(this)} />
        <Row handleBoxClick={this.handleBoxClick.bind(this)} />
      </div>
    );
  }
}

export default Numbergrid;
