import './DetailsPhoneContent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function DetailsPhoneContent() {


    return (
        <div className="phone-content">
            <div className="phone-image">
                <img src="https://s13emagst.akamaized.net/products/60458/60457156/images/res_968c9ac33392707226842f4933552b0c.jpg?width=720&height=720&hash=E6495DD6BD702C3B660156F76D2B0FDB" alt="PhoneImage" />
            </div>

            <div className="phone-specs">
                <div className="spec-item">
                    <i className="icons fas fa-tv"></i>
                    <span className="spec-value">
                        <strong>Display:</strong> 6.8
                    </span>
                </div>

                <div className="spec-item">
                    <i className="icons fas fa-palette"></i>
                    <span className="spec-value"><strong>Color:</strong> Red</span>
                </div>

                <div className="spec-item">
                    <i className="icons fas fa-microchip"></i>
                    <span className="spec-value"><strong>CPU:</strong> SnapDragon</span>
                </div>

                <div className="spec-item">
                    <i className="icons fas fa-memory"></i>
                    <span className="spec-value"><strong>RAM:</strong> 4GB</span>
                </div>

                <div className="spec-item">
                    <i className="icons fas fa-sd-card"></i>
                    <span className="spec-value">
                        <strong>Storage:</strong> 128GB
                    </span>
                </div>

                <div className="spec-item price">
                    <i className="icons fas fa-dollar-sign"></i>
                    <span className="spec-value">129$</span>
                </div>

                <div>
                    <button className="btn btn-buy disabled-buy">
                        Buy
                        <span className="coming-soon">Coming Soon</span>
                    </button>
                </div>
            </div>
        </div>
    )
}