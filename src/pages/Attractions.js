import GayNeighborhood from "../assets/gayNeighborhood.png";
import Museum from "../assets/springfieldMuseum.png";
import Planetarium from "../assets/springfieldPlanetarium.png";
import Navbar from "../components/Navbar";

function Attractions() {
  return (
    <div className="attractions-page">
      <div className="header">
        <h1>Tourist Attractions</h1>
      </div>

      <p className="attractions-information">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ea
        repellendus id commodi doloremque, vitae velit sunt facilis inventore
        aspernatur eveniet expedita quaerat consequuntur non incidunt adipisci
        dolores facere officiis! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Unde ea repellendus id commodi doloremque, vitae velit
        sunt facilis inventore aspernatur eveniet expedita quaerat consequuntur
        non incidunt adipisci dolores facere officiis!
      </p>

      <div className="attractions">
        <div className="attraction">
          <h2>Springfield Musem of Natural History</h2>
          <img
            className="attraction-images"
            src={Museum}
            alt="Natural History Musem"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ea
            repellendus id commodi doloremque, vitae velit sunt facilis
            inventore aspernatur eveniet expedita quaerat consequuntur non
            incidunt adipisci dolores facere officiis!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ea
            repellendus id commodi doloremque, vitae velit sunt facilis
            inventore aspernatur eveniet expedita quaerat consequuntur non
            incidunt adipisci dolores facere officiis!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ea
            repellendus id commodi doloremque, vitae velit sunt facilis
            inventore aspernatur eveniet expedita quaerat consequuntur non
            incidunt adipisci dolores facere officiis!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ea
            repellendus id commodi doloremque, vitae velit sunt facilis
            inventore aspernatur eveniet expedita quaerat consequuntur non
            incidunt adipisci dolores facere officiis!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ea
            repellendus id commodi doloremque, vitae velit sunt facilis
            inventore aspernatur eveniet expedita quaerat consequuntur non
            incidunt adipisci dolores facere officiis!
          </p>
        </div>
      </div>

      <div className="attractions-btn-container">
        <button type="text" className="attractions-btn">
          More Attractions
        </button>
      </div>
    </div>
  );
}
export default Attractions;
