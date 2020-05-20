import React from 'react';
import './css/styles.css';

function Header() {
    return (
        <nav>
            <div class="nav-container">
                <ul class="nav-links">
                    <a href=""><li>About</li></a>
                    <a><li>Skills</li></a>
                    <a><li>Projects</li></a>
                    <a><li>Contact</li></a>
                </ul>
            </div>
        </nav>
    );
}

export default Header;