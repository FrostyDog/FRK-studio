import React from "react";
import WorksItems from "../components/WorkItems";
import Mountain from "../assets/workItems/mount-proj.png";
import Drones from "../assets/workItems/delivery.png";

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
    </div>
  );
}
