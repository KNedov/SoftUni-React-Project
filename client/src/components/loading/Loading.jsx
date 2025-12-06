import './Loading.css'

export default function Loading() {

    return (
        <div className="loading-container">
            <div className="spinner-wrapper">
                <div className="spinner"></div>
                <p className="loading-text">Loading phones...</p>
            </div>
        </div>
    )
}