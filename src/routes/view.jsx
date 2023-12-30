import { Form, useLoaderData } from "react-router-dom";
import { getView } from "../views";

export function loader({ params }) {
    const view = getView(params.viewId);
    return { view };
}
export default function View() {
    const { view } = useLoaderData();

    return (
        <div id="view">
                {view.content}
        </div>
    );
}

