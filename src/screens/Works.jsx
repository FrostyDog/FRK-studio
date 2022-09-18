import React from "react";
import WorksItems from "../components/WorkItems";
import Mountain from "../assets/workItems/mount-proj.png";
import Drones from "../assets/workItems/delivery.png";
import Martins from "../assets/workItems/dr-martin.png";
import Ploho from "../assets/workItems/ploho.png";
import CyberSec from "../assets/workItems/syber-sec.png";
import SushiFreak from "../assets/workItems/sushifreak.png";
import Instock from "../assets/new-work-items/instock.png";
import Adeasy from "../assets/new-work-items/adeasy.png";
import Shuffler from "../assets/new-work-items/shufler.png";
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
        itemImage={Adeasy}
        orientation="left"
        title="AdEasy"
        itemImageLink="https://www.behance.net/gallery/132991701/UXUI-AdEasy-CRM-system"
        text="Service for online businesses which helps creating unique 
        advertisements and monitor campaign performance. "
      />
      <WorksItems
        itemImage={Shuffler}
        orientation="right"
        title="Shuffler"
        itemImageLink="https://www.behance.net/gallery/107805115/App-Design-Shuffler-Application"
        text="An app for vinyl fans, who like to keep their collection in order. 
        The main feature is not only a possibility to save and keep physical collection in digital format but also a shuffler, 
        which picks what to listen at the moment."
      />
      <WorksItems
        itemImage={Playjoy}
        orientation="left"
        title="PlayJoy"
        realLink="http://playjoystudios.com/"
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
        realLink="http://sushifreak.me/"
        itemImageLink="https://www.behance.net/gallery/99891989/Website-Redesign-Sushi-Freak"
        text="I liked so much working on this project. Amazing Client and 
        amazing concept of business. This is a Sushi restaurant with 
        a big variety of products and services. It was a challenge to 
        create a custom menu page, however, I enjoyed the process itself.
        Also I am proud of this website being choosed for appreciation 
        from official AdobeXD rewiewers."
      />

<WorksItems
        itemImage={Ploho}
        orientation="right"
        title="PLOHO band"
        realLink="https://ploho.vercel.app/"
        itemImageLink="https://www.behance.net/gallery/127058567/Website-Design-PLOHO-band"
        text="One-page website made for Russian post-punk band, containing
        nessessary information about music band, tours, videos and 
        currently supported for further updates. I enjoyed working on 
        this project, since i am a big fan of this genre of music and
        especially creations of this music group. "
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