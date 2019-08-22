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

  render() {
    return (
      <div>
        {this.state.postData.title ? (
          <ul>
            <li>{this.state.postData.title}</li>
            <li>{this.state.postData.description}</li>
          </ul>
        ) : (
          <div>loading...</div>
        )}
      </div>
    );
  }
}
export default Postinfo;
