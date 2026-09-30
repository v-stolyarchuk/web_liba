import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <h2>Logo</h2>
                </div>
                <nav className="navigation">
                    <ul>
                        <li><NavLink to="/">Головна</NavLink></li>
                        <li><NavLink to="/products">Товари</NavLink></li>
                        <li><NavLink to="/services">Послуги</NavLink></li>
                        <li><NavLink to="/tools">Інструменти</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};