import './DetailsPhoneContent.css'
export default function DetailsPhoneContent({
    _id,
    image,
    displaySize,
    color,
    cpu,
    ram,
    storage,
    price,
    phoneName,
    isAuthenticated,
    isOwner
}) {


    return (
        <div className="phone-content">
            <div className="phone-image">
                <img src={image} alt={phoneName} />
            </div>

            <div className="phone-specs">
                <div className="spec-item">
                    <i className="icons fas fa-tv"></i>
                    <span className="spec-value">
                        <strong>Display:</strong> {displaySize}
                    </span>
                </div>

                <div className="spec-item">
                    <i className="icons fas fa-palette"></i>
                    <span className="spec-value"><strong>Color:</strong> {color}</span>
                </div>

                <div className="spec-item">
                    <i className="icons fas fa-microchip"></i>
                    <span className="spec-value"><strong>CPU:</strong> {cpu}</span>
                </div>

                <div className="spec-item">
                    <i className="icons fas fa-memory"></i>
                    <span className="spec-value"><strong>RAM:</strong> {ram} GB</span>
                </div>

                <div className="spec-item">
                    <i className="icons fas fa-sd-card"></i>
                    <span className="spec-value">
                        <strong>Storage:</strong> {storage} GB
                    </span>
                </div>

                <div className="spec-item price">
                    <i className="icons fas fa-dollar-sign"></i>
                    <span className="spec-value">{price} $</span>
                </div>

                {isAuthenticated &&!isOwner
                    && <div>
                        <button className="btn btn-buy disabled-buy">
                            Buy
                            <span className="coming-soon">Coming Soon</span>
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}