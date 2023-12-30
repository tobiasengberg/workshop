import React from 'react';
import {Outlet} from "react-router-dom";

const Area = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Area;