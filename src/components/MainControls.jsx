import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function StableInfo(props) {
  let worksOutlined;
  let bioOutlined;

  switch (props.stance) {
    case "works":
      worksOutlined = "outlined";
      bioOutlined = null;
      break;
    case "bio":
      bioOutlined = "outlined";
      worksOutlined = null;
      break;
    default:
    // code block
  }

  return (
    <div>
      <div class="upper-controls">
        <Button className="button" variant={bioOutlined} color="primary">
          {" "}
          <Link onClick={() => props.changeStance("bio")} exact to="/bio">
            Bio
          </Link>
        </Button>{" "}
        <Button className="button" variant={worksOutlined} color="primary">
          {" "}
          <Link onClick={() => props.changeStance("works")} exact to="/works">
            Works
          </Link>
        </Button>
        <div className="left-contact">
          <Button color="primary">Contact</Button>
        </div>
      </div>

      <div className={`header-info ${props.stance}`}>
        <div class="main-title">
          <Typography variant="h1" color="primary">
            <span class="bold secondary">a</span>nna <br />
            figura
          </Typography>
        </div>

        <div class="sub-text">
          <Typography variant="h5" color="primary">
            Designer and owner of <br />
            <span class="bold">FRK design studio</span>
          </Typography>
        </div>
        <img  className={`arrow ${props.stance}`} src={require("../assets/icons/right-arrow.png")} alt=""/>
      </div>
    </div>
  );
}
