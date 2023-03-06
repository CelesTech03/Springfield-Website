import SimpsonsHouse from "../assets/742-Evergreen.png";
import BurnsManor from "../assets/Burnsmanor.png";
import KrustyMansion from "../assets/Krusty-Mansion.png";
import FlandersHouse from "../assets/Flandersjunksale.png";
import PlaceLeft from "../components/PlaceLeft";
import PlaceRight from "../components/PlaceRight";
import Navbar from "../components/Navbar";

function Lodging() {
  return (
    <div className="lodging-page">
      <Navbar />

      <div className="header">
        <h1>Places to Stay</h1>
      </div>

      <div className="places">
        <PlaceLeft
          name="742 Evergreen Terrace"
          image={SimpsonsHouse}
          description="This is the main location in The Simpsons and the address of the Simpson family's house."
        />
        <PlaceRight
          name="744 Evergreen Terrace"
          image={FlandersHouse}
          description="744 Evergreen Terrace is the address of the house where the Flanders family live. They live next door, to the left, of the Simpsons, at 742 Evergreen Terrace."
        />
        <PlaceLeft
          name="Burns Manor"
          image={BurnsManor}
          description="Burns Manor is Mr. Burns' mansion. It used to host the Springfield Nuclear Power Plant Annual Picnic."
        />
        <PlaceRight
          name="Krusty's Mansion"
          image={KrustyMansion}
          description="Krusty's Mansion is the mansion that Krusty the Clown lives in."
        />
      </div>
    </div>
  );
}
export default Lodging;
