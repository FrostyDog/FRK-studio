import React from "react";
import { Typography } from "@material-ui/core";
import ContactMe from "../components/ContactMe";

export default function Bio() {
  return (
    <div class="bio-component">
      <Typography>
        Hello and welcome to my Portfoio Page I am a designer. I create designs for websites and applications in mostly
        minimalistic style. I do believe in power of unique esthetics and style.
        <br />
        <br />
        Every project is important to me, so I take the necessary time to understand your needs and priorities, which
        help me to make the right steps to deliver a custom and desirable design for you. I am aslo open to any of your
        possible ideas, even the most brave and artistic ones.
        <br />
        <br />
        Feel free to check out my portfolio and let's talk about your new awesome project!
      </Typography>

      <div className="space-20"></div>

      <Typography variant="h2" className="sub-text uppercase" color="primary">
        Let's work <br />
        <span className="bold">together</span>
      </Typography>
      <Typography>
        for inquires, more information and for anything else please contact. take it simple: fill the form out and send
        me a message, so i can learn more about you and your needs. I will get back to you with a reply as soon as
        possible. thank you.
      </Typography>
      <div className="space-5"></div>

      <ContactMe/>

    </div>
  );
}
