import './Footer.scss';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Site Pages</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Social Links</h3>
                    <ul className="social-links">
                        <li><a href="#" aria-label="Facebook"><FaFacebook /></a></li>
                        <li><a href="#" aria-label="Twitter"><FaTwitter /></a></li>
                        <li><a href="#" aria-label="Instagram"><FaInstagram /></a></li>
                        <li><a href="#" aria-label="LinkedIn"><FaLinkedin /></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};