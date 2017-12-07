import React from 'react';

import Menu from './header_menu.jsx';

import data from '../../assets/mock-up/mock_up.json';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = data;
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        if(window.scrollY > 0)
            document.querySelector('header.header-wrapper').classList.add('shadow');
        else
            document.querySelector('header.header-wrapper').classList.remove('shadow');
    }

    render() {
        return (
            <header className="header-wrapper">
                <div className="header-desktop-container">
                    <div className="left-side">
                        <div className="logo-wrapper">
                            <a href={'/'} className="logo roboto-mono">
                                <span className="firstName">{this.state.personelInfo.firstName}</span>
                                <br />
                                <span className="lastName">{this.state.personelInfo.lastName}</span>
                            </a>
                        </div>
                    </div>
                    <div className="right-side">
                       <nav className="menu-wrapper">
                            <Menu menuData={ this.state.menu } />                          
                       </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;