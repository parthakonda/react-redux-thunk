import React, { Component } from "react";
import { connect } from "react-redux";
import fetchPosts from "../store/actions/fetchposts.action";
import PropTypes from "prop-types";
class Post extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(newProps) {
    console.log("POPROPOP");
    console.log(newProps);
    newProps.post && newProps.posts.unshift(newProps.post);
  }

  render() {
    console.log("-----");
    console.log(this.props.posts);
    return (
      <React.Fragment>
        <h1>Posts</h1>
        {this.props.posts.map(item => {
          return (
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  post: state.posts.post
});

Post.defaultProps = {
  posts: []
};

Post.propTypes = {
  posts: PropTypes.array.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  post: PropTypes.object
};

export default connect(mapStateToProps, { fetchPosts })(Post);
