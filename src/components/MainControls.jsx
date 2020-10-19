import React from "react";
import {useState} from "react";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import RoundText from "../assets/round-text.svg";
import "../theme/animations.scss";

export default function StableInfo(props) {
  let worksOutlined;
  let bioOutlined;
  let [RoundTextStance, setRoundTextStance] = useState(false);


  switch (props.stance) {
    case "works":
      worksOutlined = "outlined";
      bioOutlined = null;
      setTimeout(() => {
        setRoundTextStance(true);
      }, 1200);
      break;
    case "bio":
      bioOutlined = "outlined";
      worksOutlined = null;
      if(RoundTextStance === true)
      setRoundTextStance(false)
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
          {RoundTextStance ? <img src={RoundText} class="round-text" alt="" /> : null}
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
        <img className={`arrow ${props.stance}`} src={require("../assets/icons/right-arrow.png")} alt="" />
      </div>
    </div>
  );
}
