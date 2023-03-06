import SimpsonsHouse from "../assets/742-Evergreen.png";
import SpringfieldInn from "../assets/springfieldInn.png";
import SleepEazy from "../assets/Sleep-Eazy.png";
import FlandersHouse from "../assets/Flandersjunksale.png";
import BarneysApartment from "../assets/barneysApartment.png";
import PlaceLeft from "../components/PlaceLeft";
import PlaceRight from "../components/PlaceRight";

function Lodging() {
  return (
    <div className="lodging-page">
      <div className="header">
        <h1>Places to Stay</h1>
      </div>

      <h3 className="attractions-information">
        If you're planning a visit to this quirky and colorful place, you'll
        need a place to stay. Here are some of the best lodging options in town:
      </h3>

      <div className="places">
        <PlaceLeft
          name="The Simpson's House"
          image={SimpsonsHouse}
          description="The Simpson family home is a two-story house located at 742 Evergreen Terrace. Just be prepared for some of Homer's shenanigans - you never know when he might sneak into your room to borrow a donut!"
          url="https://simpsons.fandom.com/wiki/742_Evergreen_Terrace"
        />
        <PlaceRight
          name="The Flander's House"
          image={FlandersHouse}
          description="If you're looking for a more wholesome experience, the Flanders' house is the perfect spot. This cozy bed and breakfast is run by Ned Flanders and his family, and you can expect comfortable rooms and a welcoming atmosphere."
          url="https://simpsons.fandom.com/wiki/744_Evergreen_Terrace"
        />
        <PlaceLeft
          name="The Springfield Inn"
          image={SpringfieldInn}
          description="For a more traditional hotel experience, check out the Springfield Inn. This mid-range hotel offers comfortable rooms, a pool, and a restaurant on site, making it a convenient and comfortable option for families and business travelers alike."
          url="https://simpsons.fandom.com/wiki/Springfield_Inn"
        />
        <PlaceRight
          name="The Sleep-Eazy Motel"
          image={SleepEazy}
          description="This budget-friendly motel may not be the fanciest option, but it's definitely one of the most memorable. With its neon sign and seedy reputation, it's the perfect spot for budget-conscious travelers or those looking for a bit of retro charm."
          url="https://simpsons.fandom.com/wiki/Sleep-Eazy_Motel"
        />
        <PlaceLeft
          name="Barney's Apartment"
          image={BarneysApartment}
          description="Located above Moe's Tavern, Barney's apartment is small, dingy, and full of beer cans - just like its owner. The apartment overlooks the Springfield Penitentiary. While it might not be the most comfortable place to stay, it's definitely an experience you won't forget."
          url="https://simpsons.fandom.com/wiki/Barney%27s_apartment"
        />
      </div>
    </div>
  );
}
export default Lodging;
