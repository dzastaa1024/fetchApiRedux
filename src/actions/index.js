import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get("/post");

    dispatch({ type: "FETCH_POSTS", payload: response });
  };
};

export const selectPost = () => {
  return {
    type: "SELECT_POST",
  };
};
