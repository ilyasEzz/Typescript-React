import * as React from 'react'

export default function CustomDate() {
    let [time, setTime] = React.useState("");

    let getTime = () => {
        setTime(new Date().toTimeString());
    }
    return (
        <div>
            {time}
            <button className="btn btn-success m-2" onClick={getTime}>Get the date</button>
        </div>
    )
}
