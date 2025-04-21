import Header from '../components/Header';
import waldo from '../assets/waldo.jpg'
import {useState, useEffect} from 'react';

function Home () {
    const [locationCoord, setLocationCoord] = useState([
        {x: 64.0137, y: 89.7059},
        {x: 68.2256, y: 90.0735},
        {x: 68.7691, y: 97.2426},
        {x: 63.8778, y: 97.0588}
    ]);

    function isPointInQuad(px, py) {
        const cross = (ax, ay, bx, by) => ax * by - ay * bx;

        for (let i = 0; i < 4; i++) {
            const a = locationCoord[i];
            const b = locationCoord[(i + 1) % 4];
            const edgeX = b.x - a.x;
            const edgeY = b.y - a.y;
            const pointX = px - a.x;
            const pointY = py - a.y;

            if (cross(edgeX, edgeY, pointX, pointY) < 0) {
                return false;
            }
        }
        return true;
    }

    const imageClick = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xCoordinate = (x / rect.width) * 100;
        const yCoordinate = (y / rect.height) * 100;

        const percentX = parseFloat(xCoordinate.toFixed(4));
        const percentY = parseFloat(yCoordinate.toFixed(4));

        let blah = {x: percentX, y: percentY};

        console.log(isPointInQuad(blah.x, blah.y));
    };

    return (
        <main>
            <Header />
            Hello World
            <img 
                src={waldo}
                onClick = {imageClick}
                alt="Waldo" />
        </main>
    )
}

export default Home;