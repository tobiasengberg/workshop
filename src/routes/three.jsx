import { Form, useLoaderData } from "react-router-dom";
import {getThree} from "../data/threesData.jsx";

export function loader({ params }) {
    const three = getThree(params.threeId);
    return { three };
}
export default function Three() {
    const { three } = useLoaderData();

    return (
        <div id="view">
            {three.content}
        </div>
    );
}

