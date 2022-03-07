type WeatherProps = {
    dateTime: string,
    curTemp: number,
    minTemp: number,
    maxTemp: number
}

export default function Weather({ dateTime, curTemp, minTemp, maxTemp }: WeatherProps) {
    return (
        <div className="self-end m-5">
            <div className="rounded-lg p-3 bg-blue-300 shadow-lg">
                <p className="text-lg font-bold">{ dateTime }</p>
                <p className="">Current Temperature:&nbsp;&nbsp;{curTemp}&#8451;</p>
                <p className="">Max Temperature:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{maxTemp}&#8451;</p>
                <p className="">Min Temperature:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{minTemp}&#8451;</p>
            </div>
        </div>
    ) 
}

