import React, { useState } from 'react';
import menuItems from '../menu-items';
import './NavigationDesktop.scss';
import './NavigationMobile.scss';

const Navigation = () => {
    const [currentlyOpen, setCurrentlyOpen] = useState(null);

    const setOpen = item => {
        if (item.id === currentlyOpen) {
            setCurrentlyOpen(null);
        } else {
            setCurrentlyOpen(item.id);
        }
    }

    return (
        <div className="Navigation">
            <nav>
                <ul className="Menu">
                    {
                        menuItems.map(item => {
                            const open = item.id === currentlyOpen;

                            let iconClass = 'icon closed';
                            let contents = '';
                            if (open) {
                                iconClass = 'icon opened';
                                contents = (
                                    <ul className="sub-list">
                                        {
                                            item.subs.map(sub => {
                                                return (<li key={sub.id}><a href='.'>{sub.name}</a></li>)
                                            })
                                        }
                                    </ul>
                                );
                            }
                            return (<li className="category" onClick={() => setOpen(item)} key={item.id}>{item.name} <span className={iconClass} />
                                {contents}
                            </li>);
                        })
                    }
                </ul>
                <div className="buttons top">
                    <a href=".">Login</a>
                    <button><a href="." className="white-button">Sign Up</a></button>
                </div>
            </nav>
        </div>
    )
}
export default Navigation;