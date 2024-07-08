import './CardItem.css';

function CardItem({imgUrl, title, description, price, cta}) {
  return (
    <div className="card mb-3">
      <div className='image-wrapper'>
        <img src={imgUrl} alt='card item' />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <h4>INR {price}</h4>
        <a href="#" className="btn btn-primary">
          {cta}
        </a>
      </div>
    </div>
  );
}

export default CardItem;