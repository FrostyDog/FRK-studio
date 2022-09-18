import React from "react";
import WorksItems from "../components/WorkItems";
import Mountain from "../assets/workItems/mount-proj.png";
import Drones from "../assets/workItems/delivery.png";
import Martins from "../assets/workItems/dr-martin.png";
import Modernism from "../assets/workItems/pp-modernism.png";
import CyberSec from "../assets/workItems/syber-sec.png";
import SushiFreak from "../assets/workItems/sushifreak.png";
import Instock from "../assets/new-work-items/instock.png";
import Playjoy from "../assets/workItems/playjoy.png";

export default function Works(props) {
  return (
    <div>
      <div style={{ height: "5rem" }}></div>
      <WorksItems
        itemImage={Instock}
        orientation="right"
        title="Instock"
        itemImageLink="https://www.behance.net/gallery/133582491/UXUI-InStock-Supplies-Manager"
        text="A perfect software to monitor product refills in franchise shops, 
        fully customizable by suppliers, easy to monitor and manage data and staff."
      />
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
        itemImage={SushiFreak}
        orientation="left"
        title="Sushi Freak"
        text="I liked so much working on this project. Amazing Client and 
        amazing concept of business. This is a Sushi restaurant with 
        a big variety of products and services. It was a challenge to 
        create a custom menu page, however, I enjoyed the process itself.
        Also I am proud of this website being choosed for appreciation 
        from official AdobeXD rewiewers."
      />
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
        text="I was inspired by one of my favorite shoe brands. My idea was to 
        redesign official website of this brand into more modern-looking
        way and improve the user-flow for better conversions through 
        customer experience."
      />
      <WorksItems
        itemImage={Modernism}
        orientation="left"
        title="P.Modernism"
        text="Web design for a creative event community group which is making extraordinary 
        and authentic events. Very interesting and rare kind of service, honestly, 
        I enjoy the idea as much as I enjoyed working on this project."
      />
      <WorksItems
        itemImage={CyberSec}
        orientation="right"
        title="Cyber Security"
        text="Design made for European IT start-up, in the branch of cybersecurity. 
        The website with full list of services and pricing. Made with the 
        help of Adobe PS and XD. Main point here is to show the responsiveness 
        of the pages and easy UX"
      />
    </div>
  );
}