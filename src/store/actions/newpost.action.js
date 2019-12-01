import { NEW_POST } from "./types";

export const createPost = payload => dispatch => {
  console.log(payload);
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
    .then(response => {
      debugger;
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log("==============");
      console.log(data);
      dispatch({
        type: NEW_POST,
        post: data
      });
    });
};
