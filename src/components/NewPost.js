import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../store/actions/newpost.action";

class NewPost extends Component {
  state = {
    title: "",
    body: ""
  };

  createPost = () => {
    this.props.createPost(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <h1>New Post</h1>
        <label>Title</label>
        <br />
        <input
          type="text"
          onChange={e => this.setState({ title: e.target.value })}
          value={this.state.title}
        />
        <br />
        <br />
        <label>Body</label>
        <br />
        <textarea
          onChange={e => this.setState({ body: e.target.value })}
          value={this.state.body}
        ></textarea>
        <br />
        <br />
        <button type="button" onClick={this.createPost}>
          Create
        </button>
      </React.Fragment>
    );
  }
}

export default connect(null, { createPost })(NewPost);
