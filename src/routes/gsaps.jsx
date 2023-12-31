import React from 'react';
import {Outlet, Link, useLoaderData} from "react-router-dom";
import {getGsaps} from "../data/gsapData.jsx";

export function loader() {
    const gsaps = getGsaps();
    return { gsaps };
}

const Gsaps = () => {
    const { gsaps } = useLoaderData();
    return (
        <>
            <header className="second-header">
                <nav>
                    {gsaps.length ? (
                        <ul>
                            {gsaps.map((gsap) => (
                                <li key={gsap.id}>
                                    <Link to={`${gsap.id}`}>
                                        {gsap.id}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>
                            <i>No gsaps</i>
                        </p>
                    )}
                </nav>
            </header>
            <Outlet />
        </>
    );
};

export default Gsaps;