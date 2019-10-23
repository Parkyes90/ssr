import React from "react";

const Home = () => {
  return (
    <div>
      <div>I'm the Very Very home component</div>{" "}
      <button
        onClick={() => {
          console.log("clicked1");
        }}
      >
        Press me!
      </button>
    </div>
  );
};

export default Home;
