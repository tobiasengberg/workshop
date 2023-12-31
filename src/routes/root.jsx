import React from 'react';
import {Outlet, Link } from "react-router-dom";


const Root = () => {
    return (
        <div>
            <header className="main-header">
                <nav>
                    <ul>
                        <li key={1}>
                            <Link to="views">
                                Views
                            </Link>
                        </li>
                        <li key={2}>
                            <Link to="drags">
                                Drags
                            </Link>
                        </li>
                        <li key={3}>
                            <Link to="d3">
                                D3
                            </Link>
                        </li>
                        <li key={4}>
                            <Link to="three">
                                Three
                            </Link>
                        </li>
                        <li key={5}>
                            <Link to="gsap">
                                GSAP
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </div>
    );
};

export default Root;