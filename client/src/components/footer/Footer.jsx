import './Footer.css'

export default function Footer() {
    return(
        <footer className="site-footer">
            <div className="container">
                <div className="footer-content">
                    <p>
                        &copy; <span id="current-year"></span> PhoneZone. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}