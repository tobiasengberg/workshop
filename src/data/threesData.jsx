
import Dec30 from "../views/Dec30.jsx";

const threeData = [
    {id: 1, content: <Dec30 />},
    {id: 2, content: <h2>Three 2</h2>},
    {id: 3, content: <h2>Three 3</h2>},
    {id: 4, content: <h2>Three 4</h2>},
    {id: 5, content: <h2>Three 5</h2>}
]
export function getThrees() {
    return threeData;
}

export function getThree(id) {

    return threeData.find(three => three.id == id);
}
