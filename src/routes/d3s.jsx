import React from 'react';
import {Outlet, Link, useLoaderData} from "react-router-dom";
import {getD3s} from "../data/d3Data.jsx";

export function loader() {
    const d3s = getD3s();
    return { d3s };
}

const D3s = () => {
    const { d3s } = useLoaderData();
    return (
        <>
            <header className="second-header">
                <nav>
                    {d3s.length ? (
                        <ul>
                            {d3s.map((d3) => (
                                <li key={d3.id}>
                                    <Link to={`${d3.id}`}>
                                        {d3.id}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>
                            <i>No D3s</i>
                        </p>
                    )}
                </nav>
            </header>
            <Outlet />
        </>
    );
};

export default D3s;