import background from '../img/background.jpg'
import restaurant from '../img/Insidethsp.jpg'
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
          <p style={{ fontSize: 'xxx-large', fontWeight: '700', color: "#107dc0" }}>
            A Village Full of Fun!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="button-container">
            <button onClick={handleClickScroll}>
              <h2>Take a Tour</h2>
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
            title={"Restaurant"}
            body={"list of restusd"}
            image={restaurant}
          />
          <Card
            title={"Attractions"}
            body={"list of attractions"}
            image={restaurant}
          />
          <Card
            title={"Lodging"}
            body={"list of lodgin"}
            image={restaurant}
          />
        </div>
      </div>
    </div>
  )
}
export default Homepage;
