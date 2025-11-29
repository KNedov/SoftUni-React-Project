import { Link } from "react-router";
import './Tablets.css'

export default function Tablets() {


    return (
        <div className="coming-soon-card">
            <div className="card-header">
                <span className="card-icon">⏳</span>
                <div className="card-titles">
                    <h3 className="card-title">Tablets Section</h3>
                    <p className="card-subtitle">Coming Soon!</p>
                </div>
            </div>
            <div className="card-content">
                <p>We're working hard to bring you the best tablets collection.</p>
                <p>
                    Please check back later or explore our{' '}
                    <Link to="/products/smartphones" className="collection-link">
                        smartphones collection
                    </Link>.
                </p>
            </div>
        </div>
    );
}