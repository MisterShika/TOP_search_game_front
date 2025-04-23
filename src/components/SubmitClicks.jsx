function SubmitClicks ({allClicks}) {

    return (
        <div>
            Testing
            {
                allClicks.map((location, index) => (
                    <div key={index}>{location.x}</div>
                ))
            }
        </div>
    )
}

export default SubmitClicks;