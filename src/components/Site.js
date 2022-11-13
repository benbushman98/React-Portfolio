import Header from './Header';
import Footer from './Footer';
import React from 'react'


const Site = () => {
    const style = {
        backgroundColor: "#222222",
        minHeight: "100vh",

    }
    return (
        <div style={style}>
            <Header />
            <Footer />
        </div>
    )
}

export default Site;