import React from "react";
import WorksItems from "../components/WorkItems";
import Playjoy from "../assets/workItems/playjoy.png";
import Ploho from "../assets/workItems/ploho.png";
import Sushifreak from "../assets/workItems/sushifreak.png";

export default function Works(props) {
  return (
    <div>
      <div style={{ height: "5rem" }}></div>
      <WorksItems
        itemImage={Playjoy}
        orientation="right"
        title="PlayJoy"
        text="Website design created for Ukrainian gaming outsource start-up, 
        containing full list of services and released projects. Made with 
        dark and bright colors in order to highlight the core points of
        the business and improve the user flow for potential clients or 
        customers."
      />
      <WorksItems
        itemImage={Ploho}
        orientation="left"
        title="PLOHO band"
        text="One-page website made for Russian post-punk band, containing
        nessessary information about music band, tours, videos and 
        currently supported for further updates. I enjoyed working on 
        this project, since i am a big fan of this genre of music and
        especially creations of this music group."
      />
      <WorksItems
        itemImage={Sushifreak}
        orientation="right"
        title="Sushi Freak"
        text="I liked so much working on this project. Amazing Client and 
        amazing concept of business. This is a Sushi restaurant with 
        a big variety of products and services. It was a challenge to 
        create a custom menu page, however, I enjoyed the process itself.
        Also I am proud of this website being choosed for appreciation 
        from official AdobeXD rewiewers."
      />
    </div>
  );
}
