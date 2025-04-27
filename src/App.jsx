import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Clicks from './pages/Clicks';
import { ClickContext } from './context/ClickContext';
import { useState } from 'react';

function App() {
    const [allClicks, setAllClicks] = useState([]);

    return (
        <ClickContext.Provider value={{ allClicks, setAllClicks }}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/clicks" element={<Clicks />} />
            </Routes>
        </ClickContext.Provider>
    )
}

export default App
