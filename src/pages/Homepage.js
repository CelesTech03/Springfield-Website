import background from '../assets/background.jpg'
import restaurant from '../assets/Insidethsp.jpg'
import attraction from '../assets/close-up.jpg'
import lodging from '../assets/lodging.jpg'
import Card from '../components/Card'

const Homepage = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("body-section")
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='homepage'>
      <div className="homepage-header">
        <div className="header-text">
          <p style={{ fontSize: 'xxx-large', fontWeight: '700', color: "#2a4f16" }}>
            A Village Full of Fun!
          </p>
          <p>
            One of the most notorious towns in the 21st century fictional universe,
            Springfield is where you can unleash your survival skills either from 
            food poisoning or nuclear attack. Come here and you will
            regret staying here during your vacation!
          </p>
          <div className="button-container">
            <button onClick={handleClickScroll}>
              <p style={{ fontSize: "large", fontWeight: 'bold' }}>
                Take a Tour
              </p>
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <img src={background} alt="" />
        </div>
      </div>

      <div className='homepage-body' id="body-section">
        
        <div className='card-container'>
          <Card
            title={"Restaurants"}
            body={"Enjoy your meals in the fanciest restaurants."}
            image={restaurant}
            url={"restaurants"}
          />
          <Card
            title={"Attractions"}
            body={"Have fun with your loved ones in the best attractions in town."}
            image={attraction}
            url={"attractions"}
          />
          <Card
            title={"Lodgings"}
            body={"Lodging? The Simpsons got you covered!"}
            image={lodging}
            url={"lodging"}
          />
        </div>
      </div>
    </div>
  )
}
export default Homepage;
