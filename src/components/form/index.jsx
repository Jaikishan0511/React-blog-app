import React from "react";
import styles from "./index.module.css";
const validEmailRegex = /^[\w_+%]+@[\w]+[.]+[\w]{2,3}$/;
const validPwdRegex = /^[\d]{3,8}$/;
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errEmail: false,
      errPassword: false
    };
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

    if (name === "email" && validEmailRegex.test(value)) {
      console.log("inside email if...");
      this.setState({
        errEmail: false
      });
      return this.state.errEmail;
    }
    if (name === "password" && validPwdRegex.test(value)) {
      console.log("inside email if...");
      this.setState({
        errPassword: false
      });
      return this.state.errPassword;
    }
  };
  handleEmailBlur = event => {
    if (!validEmailRegex.test(this.state.email)) {
      this.setState({
        errEmail: true
      });
      return this.state.errEmail;
    }
  };
  handlePasswordBlur = event => {
    if (!validPwdRegex.test(this.state.password)) {
      this.setState({
        errPassword: true
      });
      return;
    }
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { errEmail, errPassword, email, password } = this.state;
    console.log("errs", errEmail, errPassword);
    return (
      <div>
        <form className={styles.ContactData}>
          <h3>Enter contact info</h3>

          <input
            className={`${styles.textBox} ${errEmail && styles.error}`}
            type="email"
            name="email"
            value={this.state.email}
            placeholder="your email"
            onChange={this.handleInputChange}
            onBlur={this.handleEmailBlur}
          />
          <input
            className={`${styles.textBox} ${errPassword && styles.error}`}
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Please enter password"
            onChange={this.handleInputChange}
            onBlur={this.handlePasswordBlur}
          />

          <button
            onClick={e => this.onSubmit(e)}
            disabled={!email || !password || errEmail || errPassword}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Form;
