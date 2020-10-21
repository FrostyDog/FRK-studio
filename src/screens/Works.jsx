import React from "react";
import WorksItems from "../components/WorkItems";
import Mountain from "../assets/workItems/mount-proj.png";
import Drones from "../assets/workItems/delivery.png";
import Martins from "../assets/workItems/dr-martin.png";
import Modernism from "../assets/workItems/pp-modernism.png";
import CyberSec from "../assets/workItems/syber-sec.png";
import SushiFreak from "../assets/workItems/sushi-freak.png";

export default function Works(props) {
  return (
    <div>
      <div style={{ height: "5rem" }}></div>
      <WorksItems
        itemImage={Mountain}
        orientation="right"
        title="Mountain Project"
        text="First page design on a Web service for 
        photographers from entire world. 
        They are able to share photos on this website 
        and best ones are displayed on the first page 
        under different"
      />
      <WorksItems
        itemImage={Drones}
        orientation="left"
        title="Drone Delivery"
        text="Delivery industry is growing, so in 21 century 
        it is important to be in trend and improve 
        most popular and useful services. Check out
         this First page made with help of photoshop 
        and some sudden inspiration. "
      />
      <WorksItems
        itemImage={Martins}
        orientation="right"
        title="Dr. Martens"
        text="I was inspired by one of my favorite shoe brands. 
        Official website looks a bit old, so my idea was
         to redesign it for more actual and moder"
      />
      <WorksItems
        itemImage={Modernism}
        orientation="left"
        title="P.Modernism"
        text="Web design for a creative event community 
        group which is making extraordinary and authentic 
        events. Very interesting and rare kind of service, 
        honestly, I enjoy the idea as much as I enjoyed"
      />
      <WorksItems
        itemImage={CyberSec}
        orientation="right"
        title="Cyber Security"
        text="The website with full list of services and pricing. 
        Made with the help of Adobe PS and XD. Main 
        point here is to show the responsiveness of the 
        pages and easy UX"
      />
      <WorksItems
        itemImage={SushiFreak}
        orientation="left"
        title="Sushi Freak"
        text="I liked so much working on this project. 
        Amazing Client and amazing kind of business.
         This is a concept Sushi restaurant with a big variety
         of products and services"
      />
    </div>
  );
}
