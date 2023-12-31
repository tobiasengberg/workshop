import React from 'react';
import {Outlet, Link, useLoaderData} from "react-router-dom";
import {getThrees} from "../data/threesData.jsx";

export function loader() {
    const threes = getThrees();
    return { threes };
}

const Threes = () => {
    const { threes } = useLoaderData();
    return (
        <>
            <header className="second-header">
                <nav>
                    {threes.length ? (
                        <ul>
                            {threes.map((three) => (
                                <li key={three.id}>
                                    <Link to={`${three.id}`}>
                                        {three.id}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>
                            <i>No Threes</i>
                        </p>
                    )}
                </nav>
            </header>
            <Outlet />
        </>
    );
};

export default Threes;