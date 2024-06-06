import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "./home.css";
import List from "./List";
import Footer from "./footer";

function App() {
  const [state, setState] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    fetch("https://json-placeholder.mock.beeceptor.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setState(data);
        setSearchResult(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="App">
      <Navbar state={state} setSearchResult={setSearchResult} />

      <section className="Hero_Section">
        <div className="row" style={{ maxWidth: "100%",alignItems:"center"}}>
          <div className="col-lg-6" id="head" style={{ marginTop: "90px" }}>
            <h1
              style={{
                color: "#EF6C00",
                fontSize: "50px",
                fontFamily: "Orbitron, sans-serif",
                fontOpticalSizing: "auto",
                fontWeight: "800",
                fontStyle: "normal",
              }}
              className="big-heading"
            >
              10 New Technology{" "}
            </h1>
            <h3
              style={{ color: "#EF6C00", fontSize: "40px", fontWeight: "800" }}
            >
              Trends in 2024
            </h3>
            <h3 style={{ color: "#EF6C00", fontSize: "30px" }}>
              Exploring the Future...
            </h3>
            <p style={{color:"#EF6C00",fontSize:"20px",fontWeight:500}}>Well, millions of tech enthusiasts, as well as businesses from all sectors, befriend technology blogs that bring the latest news regarding technology updates faster than any other source.</p>
          </div>
          <div className="col-lg-6">
            <img
              className="p1"
              style={{ float: "right", marginTop: "30px" }}
              src="https://www.bing.com/th/id/OGC.c4191d44942617bf9199f86802f324ab?pid=1.7&rurl=https%3a%2f%2f3.bp.blogspot.com%2f-_nbEBYDqZjk%2fWfGm5zAXGHI%2fAAAAAAAAGn8%2fChkMPfvSvXATARCTGnPljq9e33p4yLkNACLcBGAs%2fs640%2fGIF2_1200x675_v2.0.gif&ehk=iDOVUZiifzsUJE8I9yfgOzFC13z0VnqhfRDBvFUuB2o%3d"
              alt="..."
            />
          </div>
        </div>
      </section>
      <List searchResult={searchResult} />
      <Footer />
    </div>
  );
}

export default App;
