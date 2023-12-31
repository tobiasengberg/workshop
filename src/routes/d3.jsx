import { Form, useLoaderData } from "react-router-dom";
import {getD3} from "../data/d3Data.jsx";

export function loader({ params }) {
    const d3 = getD3(params.d3Id);
    return { d3 };
}
export default function D3() {
    const { d3 } = useLoaderData();

    return (
        <div id="view">
            {d3.content}
        </div>
    );
}

