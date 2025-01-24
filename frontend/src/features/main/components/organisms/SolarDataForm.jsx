/* eslint-disable react/prop-types */
import { useState } from "react";
import InputField from "../atoms/InputField";

import Button from "../atoms/Button";

function SolarDataForm({ city, setCity, country, setCountry, date, setDate, endDate, setEndDate, handleDataRequest }) {
    const [useEndDate, setUseEndDate] = useState(false);


    function handleCheckBoxChange(event) {
        const isChecked = event.target.checked;
        setUseEndDate(isChecked);
        if (!isChecked) setEndDate("");
    }

    return (
        <div className="w-full">
            <h1 className="font-bold text-3xl mb-5"> Request Solar Information</h1>
            <form onSubmit={handleDataRequest} className="flex flex-col items-center">
                <div>
                    <InputField
                        label="City"
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                    <InputField
                        label="Country"
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    />
                    
                    <div className="mb-4 max-w-lg flex flex-col">
                        <label className="block  font-medium mb-2 text-left"> Date </label>
                        <div className="flex gap-2">
                            <input
                                type="checkbox"
                                id="useRange"
                                checked={useEndDate}
                                onChange={(e) => handleCheckBoxChange(e)}
                                className="h-4 w-4 accent-customBlue border-gray-300 rounded focus:ring-customBlue mt-1"
                            />
                            <label htmlFor="useRange" className="flex gap-2"> Use range </label>
                        </div>
                        {useEndDate ? (
                            <>
                                <InputField
                                    label="From"
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                                <InputField
                                    label="To"
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                            </>

                        ) : (
                            <InputField
                                label=" "
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        )}

                    </div>

                    <Button type="submit"
                        className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Submit
                    </Button>

                </div>
            </form>
        </div>
    )
}

export default SolarDataForm;