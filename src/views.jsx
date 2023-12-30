import Dec30 from "./views/Dec30.jsx";

const views = [
    {id: 1, content: <Dec30 />},
    {id: 2, content: <h2>View 2</h2>},
    {id: 3, content: <h2>View 3</h2>},
    {id: 4, content: <h2>View 4</h2>},
    {id: 5, content: <h2>View 5</h2>}
]
export function getViews() {
    return views;
}

export function getView(id) {

    return views.find(view => view.id == id);
}
