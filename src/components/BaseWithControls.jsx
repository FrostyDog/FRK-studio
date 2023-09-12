import React from "react";
import { useState } from "react";
import { Button, Typography } from '@mui/material';
import { Link } from 'next/link';
import RoundText from "../assets/round-text.svg";
import Behance from "../assets/icons/behance.png";
import Insta from "../assets/icons/instagram-logo.png";
import Twitter from "../assets/icons/twitter-logo-button.png";
import Linkedin from "../assets/icons/linkedin.svg";

export default function BaseWithControls(props) {
  let worksOutlined;
  let bioOutlined;
  let [RoundTextStance, setRoundTextStance] = useState(false);
  let [figura, setFigura] = useState(false);

  switch (props.stance) {
    case "works":
      worksOutlined = "outlined";
      bioOutlined = null;
      if (figura === true) {
        setFigura(false);
      }
      setTimeout(() => {
        setRoundTextStance(true);
      }, 1200);
      break;
    case "bio":
      bioOutlined = "outlined";
      worksOutlined = null;
      setTimeout(() => {
        setFigura(true);
      }, 1200);
      if (RoundTextStance === true) {
        setRoundTextStance(false);
      }
      break;
    default:
  }

  return (
    <div>
      {figura ? <div className="figura-bg"> </div> : null}
      <div className="upper-controls">
        <Button className="button" variant={bioOutlined} color="primary">
          {" "}
          <Link onClick={() => props.changeStance("bio")} to="/bio">
            Bio
          </Link>
        </Button>{" "}
        <Button className="button" variant={worksOutlined} color="primary">
          {" "}
          <Link onClick={() => props.changeStance("works")} to="/works">
            Works
          </Link>
        </Button>
        <div className="left-contact">
          <Button href="mailto:anna.figura259@gmail.com " color="primary">
            Contact
          </Button>
          <div className="icon-wrapper">
            <a href="https://www.behance.net/uxfrk"  target="_blank" rel="noopener noreferrer" >
              <img src={Behance} alt="Behance" />
            </a>
            <a href="http://instagram.com/UX.frk" target="_blank" rel="noopener noreferrer" >
              <img src={Insta} alt="Insta" />
            </a>
            <a href="https://twitter.com/UXfigura" target="_blank" rel="noopener noreferrer" >
              <img src={Twitter} alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com/in/anna-figura-73964a170/" target="_blank" rel="noopener noreferrer" >
              <img src={Linkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      <div className={`header-info ${props.stance}`}>
        <div className="main-title">
          {RoundTextStance ? <img src={RoundText} className="round-text" alt="" /> : null}
          <Typography variant="h1" color="primary">
            <span className="bold secondary">a</span>nna <br />
            figura
          </Typography>
        </div>

        <div className="sub-text">
          <Typography variant="h5" color="primary">
            Certified <br />
            <span className="bold">UX/UI Designer</span>
          </Typography>
        </div>
        <img className={`arrow ${props.stance}`} src={require("../assets/icons/right-arrow.png")} alt="" />
      </div>
    </div>
  );
}
