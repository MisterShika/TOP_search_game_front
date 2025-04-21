import Header from '../components/Header';
import waldo from '../assets/waldo.jpg'

function Home () {

    const imageClick = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xCoordinate = (x / rect.width) * 100;
        const yCoordinate = (y / rect.height) * 100;

        const percentX = parseFloat(xCoordinate.toFixed(4));
        const percentY = parseFloat(yCoordinate.toFixed(4));

        console.log(percentX);
        console.log(percentY);
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