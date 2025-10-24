import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import './head.css';
import { useState } from 'react';

function Head() {
    const [menuopen, setmenuopen] = useState(false);

    const links = [
        { name: 'Home', path: "/" },
        { name: 'Services', path: "/services" },
        { name: 'About', path: "/about" },
        { name: 'Blog', path: "/blog" },
        { name: 'Career', path: "/career" },
    ]

    return(
        <header className='head-section'>
            
            {/* Logo Section */}
            <div className='info'>
                <span>Altaf Raja</span>
            </div>

            {/* Navigation Links */}
            <nav className={`nav-container ${menuopen ? 'mobile-open' : ''}`}>
                <ul className='list'>
                    {links.map((item) => (
                        <li key={item.name}>
                            <Link 
                                to={item.path} 
                                className='link-list'
                                onClick={() => setmenuopen(false)} // Close menu on click
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Right Section - Toggle Button & Contact Button */}
            <div className='header-right'>
                {/* Mobile Menu Toggle Button */}
                <button
                    type='button' 
                    className='menu-toggle-btn'
                    onClick={() => setmenuopen(!menuopen)}
                    aria-label="Toggle menu"
                >
                    {menuopen ? (
                        <XMarkIcon className="menu-icon" />
                    ) : (
                        <Bars3Icon className="menu-icon" />
                    )}
                </button>
                
                {/* Contact Us Button */}
                <button className='head-btn'>Contact Us</button>
            </div>
        </header>
    )
}

export default Head;