import React from 'react';
import menuItems from '../menu-items';
import './NavigationDesktop.scss';

const Navigation = () => {
    return (
        <div className="Navigation">
             <nav>
                <ul className="main-list">
                    {
                        menuItems.map(item => {
                            let contents = (
                                <ul className="sub-list">
                                    {
                                        item.subs.map(sub => {
                                            return (<li key={sub.id}><a href='/'>{sub.name}</a></li>)
                                        })
                                    }
                                </ul>
                            );
                            return (<li key={item.id}>
                                <div className="name">{item.name} <span className="arrow"/></div>
                                {contents}
                                
                                </li>);
                        })
                    }
                </ul>
            </nav> 
            <div className="buttons top">
                <a href="/">Login</a>
                <button><a href="/" className="white-button">Sign Up</a></button> 
            </div>
        </div>
    )
}
export default Navigation;