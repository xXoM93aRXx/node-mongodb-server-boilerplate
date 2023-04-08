import React, { useEffect } from "react";
import { Item } from "./components";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts);
  }, [dispatch]);

  return <Item />;
};

export default App;
