import Header from '../components/Header';
import SubmitClicks from '../components/SubmitClicks';
import waldo from '../assets/waldo.jpg'
import {useState, useEffect, useRef} from 'react';
import '../styles/home.css';

function Home () {
    const [locationCoord, setLocationCoord] = useState([
        {x: 64.0137, y: 89.7059},
        {x: 68.2256, y: 90.0735},
        {x: 68.7691, y: 97.2426},
        {x: 63.8778, y: 97.0588}
    ]);
    const [allClicks, setAllClicks] = useState([]);
    const canvasRef = useRef(null);
    const imgRef = useRef(null);

    const isPointInQuad = (px, py) => {
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

        const isHit = isPointInQuad(xCoordinate, yCoordinate);

        const clickedObject = {x: percentX, y: percentY, hit: isHit};

        setAllClicks([
            ...allClicks,
            clickedObject
        ]);
    };

    const syncCanvasSize = () => {
        const canvas = canvasRef.current;
        const img = imgRef.current;
    
        if (canvas && img) {
          canvas.width = img.clientWidth;
          canvas.height = img.clientHeight;
        }
    };

    useEffect(() => {
        window.addEventListener('resize', syncCanvasSize);
        return () => window.removeEventListener('resize', syncCanvasSize);
    }, []);

    return (
        <main>
            <Header />
            Hello World

            <div className="image-wrapper">
                <canvas ref={canvasRef}  />
                <img src={waldo} alt="Waldo" ref={imgRef} onLoad={syncCanvasSize} onClick={imageClick} />
            </div>
            <SubmitClicks allClicks={allClicks}/>
        </main>
    )
}

export default Home;