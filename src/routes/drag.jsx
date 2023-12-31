import { Form, useLoaderData } from "react-router-dom";
import {getDrag} from "../data/dragsData.jsx";

export function loader({ params }) {
    const drag = getDrag(params.dragsId);
    return { drag };
}
export default function Drag() {
    const { drag } = useLoaderData();

    return (
        <div id="view">
            {drag.content}
        </div>
    );
}

