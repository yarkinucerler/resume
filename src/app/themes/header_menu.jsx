import React from 'react';

class Menu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="menu">
                { this.props.menuData.map( t => <li> { t.name} </li>) }
            </ul>
        );
    }
    
} 

export default Menu;