import React from 'react';
import {Outlet, Link, useLoaderData} from "react-router-dom";
import { getViews } from "../viewsData.jsx";

export function loader() {
    const views = getViews();
    return { views };
}

const Drags = () => {
    const { views } = useLoaderData();
    return (
        <>
            <header className="second-header">
                <nav>
                    {views.length ? (
                        <ul>
                            {views.map((view) => (
                                <li key={view.id}>
                                    <Link to={`views/${view.id}`}>
                                        {view.id}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>
                            <i>No views</i>
                        </p>
                    )}
                </nav>
            </header>
            <Outlet />
        </>
    );
};

export default Drags;