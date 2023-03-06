import donut from '../assets/donut.jpg'
import krusty from '../assets/krusty.jpg'
import moe from '../assets/moe-tav.jpg'
import sumo from '../assets/sumo.jpg'
import dutchman from '../assets/dutchman.jpg'

const Restaurants = () => {

  const Style = {
    title: {
      color: '#f65132',
    },

    img: {
      height: '250px'
    },

    restaurant: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '10px'
  }

}

const Restaurant = ({ title, image, description, price }) => {
  return (
    <div style={Style.restaurant}>
      <img style={Style.img} src={image} alt='' />
      <h2 style={Style.title}>{title}</h2>
      <p>{description}</p>
      <h3>Price Range: {price}</h3>
    </div>
  )
}

return (
  <div>
    <div className="header">
      <h1>Famous Restaurants</h1>
    </div>
    <div className="restaurant-body">
      <div className='restaurant-container'>
        <Restaurant
          title="Lard Lad Donuts"
          image={donut}
          description="
              A donut shop in the town of Springfield, 
              The store's mascot, Lard Lad, stands in the 
              parking lot of the building holding a giant donut."
          price="$"
        />
        <Restaurant
          title="Krusty Burger"
          image={krusty}
          description="
              Krusty Burger is a fast-food burger restaurant chain that was founded by
              Krusty the Clown in Springfield, but has locations in many cities."
          price="$$$"
        />
        <Restaurant
          title="Moe's Tavern"
          image={moe}
          description="
              Moe's Tavern, or simply called Moe's, is the local bar in Springfield.
              The bar is named after its owner: Moe Szyslak."
          price="$$$$"
        />
        <Restaurant
          title="The Happy Sumo"
          image={sumo}
          description="
              The Happy Sumo is a Japanese restaurant. Among the restaurant's menu offerings are all kinds of sushi, including fugu,
              which can be fatally poisonous if not properly prepared. The Master Sushi Chef is the only person at the restaurant qualified to prepare fugu.
              The restaurant also offers karaoke. It is located on Elm St."
          price="$$$$"
        />
        <Restaurant
          title="The Frying Dutchman"
          image={dutchman}
          description="
              The restaurant is notorious for its poorly-prepared seafood. 
              Homer gave the restaurant a bad review, but despite the 
              Captain's hatred of Homer for giving the bad review, 
              he placed the bad review on the door anyway, 
              as it was a convenient way to cover up the 
              D from the Health Inspection Agency."
          price="$"
        />
      </div>
    </div>
  </div>
);
}

export default Restaurants;
