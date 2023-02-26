import SimpsonsHouse from "../assets/742-Evergreen.png";
import BurnsManor from "../assets/Burnsmanor.png";
import KrustyMansion from "../assets/Krusty-Mansion.png";
import FlandersHouse from "../assets/Flandersjunksale.png";

function Lodging() {
  return (
    <div className="lodging-page content">
      <div className="header">
        <h1>Places to Stay</h1>
      </div>

      <div className="places">
        <div className="house">
          <h2>742 Evergreen Terrace</h2>
          <img src={SimpsonsHouse} alt="Simpsons House" />
          <p>
            This is the main location in The Simpsons and the address of the
            Simpson family's house.
          </p>
        </div>

        <div className="house">
          <h2>744 Evergreen Terrace</h2>
          <img src={FlandersHouse} alt="Flanders House" />
          <p>
            744 Evergreen Terrace is the address of the house where the Flanders
            family live. They live next door, to the left, of the Simpsons, at
            742 Evergreen Terrace.
          </p>
        </div>

        <div className="house">
          <h2>Burns Manor</h2>
          <img src={BurnsManor} alt="Burns Manor" />
          <p>
            Burns Manor is Mr. Burns' mansion. It used to host the Springfield
            Nuclear Power Plant Annual Picnic.
          </p>
        </div>

        <div className="house">
          <h2>Krusty's Mansion</h2>
          <img src={KrustyMansion} alt="Krusty's Mansion" />
          <p>
            Krusty's Mansion is the mansion that Krusty the Clown lives in. He
            was once forced to move out and his home possessions auctioned off
            after he was arrested for tax fraud. The house has a swimming pool
            that Krusty keeps shrimp in because he doesn't swim.
          </p>
        </div>

      </div>
    </div>
  );
}
export default Lodging;
