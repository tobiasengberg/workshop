
import Dec30 from "../views/Dec30.jsx";

const gsapsData = [
    {id: 1, content: <Dec30 />},
    {id: 2, content: <h2>GSAP 2</h2>},
    {id: 3, content: <h2>GSAP 3</h2>},
    {id: 4, content: <h2>GSAP 4</h2>},
    {id: 5, content: <h2>GSAP 5</h2>}
]
export function getGsaps() {
    return gsapsData;
}

export function getGsap(id) {

    return gsapsData.find(gsap => gsap.id == id);
}
