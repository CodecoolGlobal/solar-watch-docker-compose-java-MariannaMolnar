import SolarDataForm from "../main/components/organisms/SolarDataForm";
import { useState } from "react";
import Loading from "../main/components/atoms/Loading";

function SolarWatch() {
    //const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [date, setDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [solarInfo, setSolarInfo] = useState(null);
    const [loading, setLoading] = useState(false);

    async function handleDataRequest(e) {
        e.preventDefault();
        setLoading(true);

        const token = localStorage.getItem("jwt");

        let response;
        let url = `/api/sunrise-sunset`;

        try {

            if (date !== '') {
                if (endDate !== '') {
                    url += `/range?city=${city}&country=${country}&date=${date}&endDate=${endDate}`;
                } else {
                    url += `?city=${city}&country=${country}&date=${date}`;
                }
            } else {
                url += `/current?city=${city}&country=${country}`;
            }

            response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                console.error('Error: ', response.status, await response.text());
                setLoading(false);
                return;
            }

            const data = await response.json();
            setSolarInfo(data);

        } catch (error) {
            console.error("Error fetching information:", error);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div>
            <SolarDataForm
                city={city}
                setCity={setCity}
                country={country}
                setCountry={setCountry}
                date={date}
                setDate={setDate}
                endDate={endDate}
                setEndDate={setEndDate}
                handleDataRequest={handleDataRequest}
            />
            {loading ? (
                <Loading />
            ) : (
                solarInfo && (
                    <div>
                        <h3>Solar information for {solarInfo.cityName}</h3>
                        <h4>Date: {solarInfo.date}</h4>
                        <h4>Sunrise: {solarInfo.sunrise}</h4>
                        <h4>Sunset: {solarInfo.sunset}</h4>
                    </div>
                )
            )}
        </div>
    )
}

export default SolarWatch;