import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <header className="app-header">
                <h1>React SSR Application</h1>
                <p>Welcome to Server-Side Rendered React with Vite!</p>
            </header>
            <main className="app-main">
                <section className="features">
                    <h2>Features</h2>
                    <ul>
                        <li>⚡ Server-Side Rendering (SSR)</li>
                        <li>⚡ Client-Side Hydration</li>
                        <li>⚡ Express.js Backend</li>
                        <li>⚡ Vite Build System</li>
                        <li>⚡ Lightning Fast HMR</li>
                        <li>⚡ Modern React 18</li>
                    </ul>
                </section>
                <section className="info">
                    <h2>How it works</h2>
                    <p>
                        This application renders React components on the server using Vite's
                        SSR capabilities and sends the initial HTML to the browser. Then React
                        hydrates the components on the client side for full interactivity with
                        lightning-fast Hot Module Replacement during development.
                    </p>
                </section>
            </main>
            <footer className="app-footer">
                <p>© 2024 React SSR App with Vite ⚡</p>
            </footer>
        </div>
    );
};

export default App; 