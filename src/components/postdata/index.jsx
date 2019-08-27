import React from "react";
import axios from "axios";
class Postinfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: {}
    };
  }

  async componentDidMount() {
    const {
      match: { params }
    } = this.props;
    const responseData = await axios.get(`/api/post/${params.id}`);
    this.setState({
      postData: responseData.data.result
    });
  }
  handleClick = () => {
    const {
      match: { params }
    } = this.props;
    this.props.history.push(`/updatepost/${params.id}`);
  };
  deletehandleClick = () => {
    const {
      match: { params }
    } = this.props;
    axios({
      method: "delete",
      url: `/api/post/${params.id}`
    }).then(response => {
      this.props.history.push("/postinfo");
    });
  };
  render() {
    return (
      <div>
        {this.state.postData.title ? (
          <ul>
            <li>{this.state.postData.title}</li>
            <li>{this.state.postData.description}</li>
            <li>
              <button onClick={this.handleClick}>update-me</button>
              <button onClick={this.deletehandleClick}>delete-me</button>
            </li>
          </ul>
        ) : (
          <div>
            <img
              src={process.env.PUBLIC_URL + "/Pacman-1s-200px.gif"}
              alt="loading..."
            />
            ;
          </div>
        )}
      </div>
    );
  }
}
export default Postinfo;
