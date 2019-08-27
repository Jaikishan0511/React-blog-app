import React from "react";
import axios from "axios";

class Updatepost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
  }
  async componentDidMount() {
    const {
      match: { params }
    } = this.props;
    const responseData = await axios.get(`/api/post/${params.id}`);
    const { title, description } = responseData.data.result;
    this.setState({
      title,
      description
    });
  }
  handleChangetitle = event => {
    this.setState({ title: event.target.value });
  };
  handleChangedescription = event => {
    this.setState({ description: event.target.value });
  };
  handleSubmit = () => {
    const { title, description } = this.state;
    if (title && description) {
      const {
        match: { params }
      } = this.props;
      axios({
        method: "put",
        url: `/api/post/${params.id}`,
        data: {
          title,
          description
        }
      }).then(() => {
        this.props.history.push("/postinfo");
        // window.location.assign("/");
      });
    }
  };
  render() {
    return (
      <div>
        <input value={this.state.title} onChange={this.handleChangetitle} />
        <br />
        <input
          value={this.state.description}
          onChange={this.handleChangedescription}
        />

        <br />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
export default Updatepost;
