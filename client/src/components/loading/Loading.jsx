import './Loading.css'

export default function Loading({text}) {
    
    

    return (
        <div className="loading-container">
            <div className="spinner-wrapper">
                <div className="spinner"></div>
                <p className="loading-text">Loading {text} ...</p>
            </div>
        </div>
    )
}