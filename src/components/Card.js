import {Link} from 'react-router-dom'

const Card = ({title, body, image, url}) => {
  return (
    <div className="card">
      <div>
      <img 
        style={{height: '250px', minHeight: '50%', maxHeight: '100%'}} 
        src={image} alt="" />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
        <div>
          <Link className="link-card" to={url}>
            Explore here
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card