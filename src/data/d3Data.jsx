
import Dec30 from "../views/Dec30.jsx";

const d3Data = [
    {id: 1, content: <Dec30 />},
    {id: 2, content: <h2>D3 2</h2>},
    {id: 3, content: <h2>D3 3</h2>},
    {id: 4, content: <h2>D3 4</h2>},
    {id: 5, content: <h2>D3 5</h2>}
]
export function getD3s() {
    return d3Data;
}

export function getD3(id) {

    return d3Data.find(d3 => d3.id == id);
}
