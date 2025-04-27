import { Link } from 'react-router-dom';


function SubmitClicks ({allClicks, setAllClicks}) {

    return (
        <div>
            <Link to="/clicks">Clicks</Link>
            {
                allClicks.map((location, index) => (
                    <div key={index} className={location.hit ? "hit" : "miss"}>X: {location.x}, Y: {location.y}</div>
                ))
            }
        </div>
    )
}

export default SubmitClicks;