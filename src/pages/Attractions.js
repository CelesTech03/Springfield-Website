import GayNeighborhood from "../assets/gayNeighborhood.png";
import Museum from "../assets/springfieldMuseum.png";
import Planetarium from "../assets/springfieldPlanetarium.png";
import MoesTavern from "../assets/moesTavern.jpg";
import KwikMart from "../assets/kwikMart.png";
import SpringfieldNuclear from "../assets/springfieldNuclear.png";

function Attractions() {
  return (
    <div className="attractions-page">
      <div className="header">
        <h1>Tourist Attractions</h1>
      </div>

      <h3 className="attractions-information">
        There are plenty of exciting and entertaining attractions to explore in
        this colorful and quirky town. Here are just a few of the must-visit
        spots:
      </h3>

      <div className="attractions">
        <div className="attraction">
          <h2>Springfield Musem of Natural History</h2>
          <img
            className="attraction-images"
            src={Museum}
            alt="Natural History Musem"
          />
          <p>
            If you're interested in science and history, the Springfield Museum
            of Natural History is a must-visit attraction. Here, you can learn
            about the natural world, from dinosaurs to ancient civilizations.
            Check out the interactive exhibits, or attend one of the museum's
            educational programs.
          </p>
        </div>

        <div className="attraction">
          <h2>Springfield Planetarium</h2>
          <img
            className="attraction-images"
            src={Planetarium}
            alt="Planetarium"
          />
          <p>
            For a unique and educational experience, head to the Springfield
            Planetarium. Here, you can explore the wonders of the universe and
            learn about space and astronomy. From stunning visuals to
            informative lectures, there's plenty to see and do at this
            fascinating attraction.
          </p>
        </div>

        <div className="attraction">
          <h2>Gay Neighborhood</h2>
          <img
            className="attraction-images"
            src={GayNeighborhood}
            alt="Gay Neighborhood"
          />
          <p>
            Springfield is known for its colorful and diverse community, and the
            gay neighborhood is no exception. Located near the Springfield Town
            Square, this area is home to a variety of LGBTQ-friendly bars,
            restaurants, and shops. Be sure to check out the annual Pride
            parade, which takes place every June!
          </p>
        </div>

        <div className="attraction">
          <h2>Moe's Tavern</h2>
          <img
            className="attraction-images"
            src={MoesTavern}
            alt="Moe's Tavern"
          />
          <p>
            If you're looking for a drink and some lively conversation, head
            over to Moe's. This neighborhood bar is a favorite spot for Homer
            and his friends, and you can enjoy a cold Duff beer or a flaming Moe
            just like they do.
          </p>
        </div>

        <div className="attraction">
          <h2>The Kwik-E-Mart</h2>
          <img
            className="attraction-images"
            src={KwikMart}
            alt="The Kwik-E-Mart"
          />
          <p>
            Stop by Apu's convenience store and pick up a squishee, a Buzz Cola,
            or some Krusty-O's cereal. You might even run into Homer or Bart
            while you're there!
          </p>
        </div>
        <div className="attraction">
          <h2>The Springfield Nuclear Power Plant</h2>
          <img
            className="attraction-images"
            src={SpringfieldNuclear}
            alt="The Springfield Nuclear Power Plant"
          />
          <p>
            Homer's workplace might not be the safest place, but it's certainly
            an interesting one. Explore the plant and learn about nuclear
            energy, or just try not to get caught by Mr. Burns.
          </p>
        </div>
      </div>

      <div className="attractions-btn-container">
        <button
          type="text"
          onClick={() =>
            window.open("https://simpsons.fandom.com/wiki/Category:Museums")
          }
          target="_blank"
        >
          <h2> More Attractions</h2>
        </button>
      </div>
    </div>
  );
}
export default Attractions;
