
import Dec30 from "../views/Dec30.jsx";

const dragsData = [
    {id: 1, content: <Dec30 />},
    {id: 2, content: <h2>Drag 2</h2>},
    {id: 3, content: <h2>Drag 3</h2>},
    {id: 4, content: <h2>Drag 4</h2>},
    {id: 5, content: <h2>Drag 5</h2>}
]
export function getDrags() {
    return dragsData;
}

export function getDrag(id) {

    return dragsData.find(drag => drag.id == id);
}
