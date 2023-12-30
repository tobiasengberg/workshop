import React from 'react';
import {Outlet, Link, useLoaderData} from "react-router-dom";
import { getViews } from "../views";

export async function loader() {
    const views = await getViews();
    return { views };
}

const Root = () => {
    const { views } = useLoaderData();
    return (
        <div>
            <header className="main-header">
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

            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Root;