import React from 'react';
import {Outlet, Link, useLoaderData} from "react-router-dom";
import {getDrags} from "../data/dragsData.jsx";

export function loader() {
    const drags = getDrags();
    return { drags };
}

const Drags = () => {
    const { drags } = useLoaderData();
    return (
        <>
            <header className="second-header">
                <nav>
                    {drags.length ? (
                        <ul>
                            {drags.map((drag) => (
                                <li key={drag.id}>
                                    <Link to={`${drag.id}`}>
                                        {drag.id}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>
                            <i>No drags</i>
                        </p>
                    )}
                </nav>
            </header>
            <Outlet />
        </>
    );
};

export default Drags;