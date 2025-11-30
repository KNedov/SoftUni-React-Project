import { Link } from 'react-router'
import './ProductCard.css'

export default function ProductCard(
  { color,
    cpu,
    displaySize,
    image,
    phoneName,
    price,
    ram,
    storage,
    _id, }
) {



  return (
    <div className="product-card">
      {/* <div className="phone-image"> */}
        <img
          src={image}
          alt="PhoneName"
          className="phone-image"
        />
      {/* </div> */}
      <div className="product-info">
        <h3>{phoneName}</h3>
        <div className="price-container">
          <i className="icons fas fa-dollar-sign"> </i>
          <span>{price}</span>
        </div>
        <div className="specs">
          <div className="spec-item">
            <i className="icons fas fa-tv"></i>
            <span>{displaySize}</span>
          </div>
          <div className="spec-item">
            <i className="icons fas fa-memory"></i>
            <span>{ram} RAM</span>
          </div>
          <div className="spec-item">
            <i className="icons fas fa-sd-card"></i>
            <span>{storage} Storage</span>
          </div>
          <div className="spec-item">
            <i className="icons fas fa-microchip"></i>
            <span>{cpu} CPU</span>
          </div>
        </div>
        <Link
          to={`/${_id}/details`}
          color="primary"
          className="details-btn"
        >
          Details
        </Link>
      </div>
    </div>
  )
}