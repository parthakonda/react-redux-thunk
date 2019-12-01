import { FETCH_POSTS, NEW_POST } from "../actions";
import initialState from "../initial.state";
export default function(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.posts
      };
    case NEW_POST:
      console.log("NEWPOST");
      return {
        ...state,
        post: action.post
      };
    default:
      return state;
  }
}
