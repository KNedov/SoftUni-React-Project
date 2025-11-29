import { Link } from "react-router";
import './NoPhoneMsg.css'

export default function NoPhoneMsg() {
    return (
        <div className="no-phones-message" id="no-phones-message">
            <i className="fas fa-mobile-alt" />
            <h2>No Phones Available</h2>
            <p>There are currently no phones to display.</p>
            <Link to="/product/create" className="btn primary-btn">
                Add New Phone
            </Link>
        </div>
    )
}