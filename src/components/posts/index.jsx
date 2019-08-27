import React from "react";
import axios from "axios";
class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: []
    };
  }
  componentDidMount() {
    axios.get("/api/post").then(response => {
      this.setState({
        postData: response.data.data
      });
    });
  }
  handleClick = event => {
    this.props.history.push(`/postinfo/${event.target.id}`);
  };
  renderNewdata() {
    const newData = this.state.postData.map(element => {
      return (
        <div key={element.id}>
          <p>Title - {element.title}</p>
          <p>description - {element.description}</p>
          <button id={element.id} onClick={this.handleClick}>
            Postdetail
          </button>
        </div>
      );
    });
    return newData;
  }
  render() {
    return (
      <div>{this.state.postData.length ? this.renderNewdata() : <div />}</div>
    );
  }
}
export default Posts;
