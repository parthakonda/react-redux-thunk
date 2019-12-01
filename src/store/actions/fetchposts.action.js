import { FETCH_POSTS } from "./types";

export default function fetchPosts() {
  return function(dispatch) {
    dispatch({
      type: FETCH_POSTS,
      posts: []
    });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        return response.json();
      })
      .then(data => {
        dispatch({
          type: FETCH_POSTS,
          posts: data
        });
      });
  };
}
