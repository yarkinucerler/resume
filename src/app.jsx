import React from 'react';

import Header from "./app/themes/header.jsx";
import Footer from "./app/themes/footer.jsx";

class App extends React.Component {
    render() {
        return (
            <div className={'wrapper'}>
                <Header />
                <Footer />
            </div>
        );
    }
}

export default App;