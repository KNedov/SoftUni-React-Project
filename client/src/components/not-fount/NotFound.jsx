import { Link } from "react-router-dom";
import './NotFound.css'

export default function NotFound() {


    return (
        <>
            <div className="not-found-container">
                <div className="error-content">
                    <div className="error-code">404</div>
                    <h1 className="error-title">Page Not Found</h1>
                    <p className="error-message">
                        Oops! The page you're looking for doesn't exist or has been moved.
                    </p>
                    <div className="error-actions">
                        <Link to={'/'} className="home-button">
                        <i class="fas fa-house-user"></i>
                        </Link>
                        <Link to="mailto:k.medov.90@gmail.com" className="contact-button">
                        <i class="fas fa-envelope"></i>
                        </Link>
                    </div>
                </div>
                <div className="error-image"></div>
            </div></>
    )
}