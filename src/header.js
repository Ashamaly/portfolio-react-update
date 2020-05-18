import React from 'react';
import './css/styles.css';

function Header() {
    return (
        <nav>
            <div class="nav-container">
                <ul class="nav-links">
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;