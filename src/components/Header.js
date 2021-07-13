import React, { useState, useEffect } from 'react';
import './Header.scss';
import NavigationDesktop from './NavigationDesktop';
import NavigationMobile from './NavigationMobile';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const determineMobile = () => window.innerWidth < 475;
    const [isMobile, setIsMobile] = useState(determineMobile());
    useEffect(() => {
        const listener = () => {
            setIsMobile(determineMobile());
        }
        window.addEventListener('resize', listener);
    });

    const buttonClasses = ['menu-icon'];
    if (menuOpen) {
        buttonClasses.push('close');
    }

    console.log(window.innerWidth);

    return (
        <div className="Header">
            <div className="background-pattern">
                <div className="navigation-bar">
                    <h2 className="blogr">Blogr</h2>
                    {isMobile && menuOpen && <NavigationMobile />}
                    {!isMobile && <NavigationDesktop />}
                    <div className="hamburger-menu">
                        <button className={buttonClasses.join(' ')} onClick={() => setMenuOpen(!menuOpen)}></button>
                    </div>
                </div>
                <h1>A modern <br></br>publishing platform</h1>
                <h2 className="description"> Grow your audience and build your online brand</h2>
                <div className="buttons">
                    <button><a href="." className="white-button">Start for Free</a></button>
                    <button className="learn-more-button"><a href=".">Learn More</a></button>
                </div>
            </div>
        </div>
    )
}
export default Header;





