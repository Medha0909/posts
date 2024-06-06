import React, { useEffect } from "react";
import Post from "./Post";

const List = ({ searchResult }) => {
  const results = searchResult.map((state) => (
    <Post key={state.id} state={state} />
  ));

  var content = results?.length ? (
    results
  ) : (
    <article>
      <div style={{ textAlign: "center" }}>
        <p>No Matching Posts...</p>
      </div>
    </article>
  );
  return <main>{content}</main>;
};

export default List;
