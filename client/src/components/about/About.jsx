import "./About.css";

export default function About() {
    return (
        <div className="about-page">
            <h1 className="about-title">About Us</h1>

            <p className="about-text">
                Welcome to our online store! We specialize in high-quality smartphones and accessories.
                You can find our physical location at the Municipality of Rakitovo.
            </p>

            <h2 className="about-subtitle">Our Location</h2>

            <div className="map-container">
                <iframe
                    title="Google Map Location"
                    src="https://www.google.com/maps?q=41.990189,24.087402&z=17&output=embed"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <p className="about-text">
                You are welcome to visit us or contact us online for support and inquiries.
            </p>
        </div>
    );
}


