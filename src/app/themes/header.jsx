import React from 'react';

class Header extends React.Component {

    scrollListener() {

    }

    render() {
        return (
            <header className='header-wrapper' onScroll={scrollListener(this)}>
                <div className='header-desktop-container'>
                    <div className='left-side'>
                        <div className='logo-wrapper'>
                            <a href={'/'} className='logo roboto-mono '>
                                <span className='firstName'>Yarkın</span>
                                <br />
                                <span className='lastName'>ÜÇERLER</span>
                            </a>
                        </div>
                    </div>
                    <div className='right-side'>
                       <nav className='menu-wrapper'>
                           <ul className='menu'>

                           </ul>
                       </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;