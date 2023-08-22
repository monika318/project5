import React from 'react'

const Home = () => {
    const HomeStyle = {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        fontFamily: "Cagliostro",
        marginTop: '80px',
        marginLeft: '20%',
        backgroundColor: 'whitesmoke'
    }

    return (
        <div style={HomeStyle}>
            <h2>Welcome to<span>Groovy </span>Dashboard</h2>
        </div>
    )
}

export default Home
