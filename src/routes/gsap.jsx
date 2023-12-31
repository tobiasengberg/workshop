import { Form, useLoaderData } from "react-router-dom";
import {getGsap} from "../data/gsapData.jsx";

export function loader({ params }) {
    const gsap = getGsap(params.gsapId);
    return { gsap };
}
export default function Gsap() {
    const { gsap } = useLoaderData();

    return (
        <div id="view">
            {gsap.content}
        </div>
    );
}

