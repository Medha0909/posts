import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

function Post({ state }) {
  return (
    <>
      <article>
        <div style={{ marginTop: "5%", marginBottom: "5%" }}>
          <div className="cards">
            <Card className="c1">
              <CardContent>
                <section>
                  <div className="row">
                    <div className="col-lg-1">
                      <CardMedia variant="h3" gutterBottom>
                        <img
                          style={{ marginLeft: "5px", marginTop: "10px" }}
                          src="https://th.bing.com/th?id=ODLS.9924ed82-7fe3-4d55-aaaa-6934ea260750&w=32&h=32&qlt=98&pcl=fffffa&o=6&pid=1.2"
                          alt="..."
                        ></img>
                      </CardMedia>
                    </div>
                    <div className="col-lg-9">
                      <Typography
                        variant="h4"
                        component="div"
                        style={{
                          fontSize: "30px",
                          fontWeight: "700",
                          paddingTop: "10px",
                          paddingBottom: "10px",
                        }}
                      >
                        {state.title}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {state.body}
                      </Typography>
                      <Typography variant="body1">
                        Link: <a href={state.link}>{state.link}</a>
                      </Typography>
                    </div>
                    <div className="col-lg-2" id="v1">
                      <Typography variant="body2">
                        <div className="a1">
                          <span className="s2">{state.comment_count}</span>
                          <span className="s1">comments</span>
                        </div>
                      </Typography>
                    </div>
                  </div>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>
    </>
  );
}

export default Post;
