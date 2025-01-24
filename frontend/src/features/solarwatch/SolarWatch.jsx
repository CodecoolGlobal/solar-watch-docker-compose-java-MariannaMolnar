import SolarDataForm from "../main/components/organisms/SolarDataForm";
import { useState } from "react";
import Loading from "../main/components/atoms/Loading";
import ReportCard from "../main/components/molecules/ReportCard";

function SolarWatch() {
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

    function renderReportCards() {
        if (!endDate) {
            return <ReportCard
                date={solarInfo.date}
                sunrise={solarInfo.sunrise}
                sunset={solarInfo.sunset}
            />
        } else {
            return solarInfo.map((report) => (
                <div key={report.id}>
                    <ReportCard
                        date={report.date}
                        sunrise={report.sunrise}
                        sunset={report.sunset}
                    />
                </div>
            ))
        }
    }


    return (
        <div className="w-full">
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
                    <div className="p-2 w-full">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Solar information for {solarInfo[0].cityName}, {country.toUpperCase()}
                            </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4 justify-stretch mt-10">
                            {renderReportCards()}
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

export default SolarWatch;