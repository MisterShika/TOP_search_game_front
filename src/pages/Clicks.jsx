import {useState, useEffect, useRef, useContext} from 'react';
import { ClickContext } from '../context/ClickContext';

function Clicks () {
    const { allClicks, setAllClicks } = useContext(ClickContext);

    return (
        <main>
            <table>
            <tr>
                <th>Spot</th>
                <th>Time</th>
                <th>Tags</th>
                <th>Notes</th>
            </tr>
            {
                allClicks.map((location, index) => (
                    <tr key={index} className={location.hit ? "hit" : "miss"}>
                        <td>X: {location.x}, Y: {location.y}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                ))
            }
            </table>
        </main>
    )
}

export default Clicks;