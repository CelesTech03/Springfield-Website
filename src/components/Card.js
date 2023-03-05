const Card = ({title, body, image}) => {
  return (
    <div className="card">
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
        <div>
          button here
        </div>
      </div>
      <div>
      <img src={image} alt="" />
      </div>
    </div>
  )
}

export default Card