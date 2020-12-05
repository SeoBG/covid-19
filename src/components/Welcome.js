import React from 'react';
import {
    Link
} from "react-router-dom";
import logo from '../logo.png';
const Welcome = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p style={{ marginBottom: 0 }}>
                    Covid-19 Demo App
                </p>
                <i style={{ fontSize: 14, marginBottom: 10 }}>
                    by Martin Dimitrov
                </i>
                <Link className="App-link" to="/list">Try It Now</Link>
            </header>
        </div>
    )
}
export default Welcome;