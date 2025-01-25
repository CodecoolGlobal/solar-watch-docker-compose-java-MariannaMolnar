import SolarDataForm from "../components/organisms/SolarDataForm.jsx";
import { useState } from "react";
import Loading from "../components/atoms/Loading.jsx";
import ReportCard from "../components/molecules/ReportCard";

function SolarWatch() {
    const [solarInfo, setSolarInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formState, setFormState] = useState({
        city: '',
        country: '',
        date: '',
        endDate: ''
    });

    async function handleDataRequest(e) {
        e.preventDefault();
        setLoading(true);

        const token = localStorage.getItem("jwt");

        let response;
        let url = `/api/sunrise-sunset`;

        try {

            if (formState.date !== '') {
                if (formState.endDate !== '') {
                    url += `/range?city=${formState.city}&country=${formState.country}&date=${formState.date}&endDate=${formState.endDate}`;
                } else {
                    url += `?city=${formState.city}&country=${formState.country}&date=${formState.date}`;
                }
            } else {
                url += `/current?city=${formState.city}&country=${formState.country}`;
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

    function capitalizeFirstChar(string) {
        return string.charAt(0).toLocaleUpperCase() + string.substring(1);
    }

    function renderReportCards() {
        if (Array.isArray(solarInfo)) {
            return solarInfo.map((report) => (
                <div key={report.id}>
                    <ReportCard
                        date={report.date}
                        sunrise={report.sunrise}
                        sunset={report.sunset}
                    />
                </div>
            ))
        } else {
            return <ReportCard
                date={solarInfo.date}
                sunrise={solarInfo.sunrise}
                sunset={solarInfo.sunset}
            />
        }
    }


    return (
        <div className="w-full">
            <SolarDataForm
                formState={formState}
                onFormChange={setFormState}
                handleDataRequest={handleDataRequest}
                capitalizeFirstChar={capitalizeFirstChar}
            />
            {loading ? (
                <Loading />
            ) : (
                solarInfo && (
                    <div className="p-2 w-full">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Solar information for {capitalizeFirstChar(formState.city)}, {formState.country.toUpperCase()}
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