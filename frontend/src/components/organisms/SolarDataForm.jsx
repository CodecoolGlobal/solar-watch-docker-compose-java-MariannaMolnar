/* eslint-disable react/prop-types */
import { useState } from "react";
import InputField from "../atoms/InputField.jsx";
import Button from "../atoms/Button.jsx";

function SolarDataForm({ formState, setFormState, handleDataRequest, capitalizeFirstChar }) {
    const [useEndDate, setUseEndDate] = useState(false);


    function handleCheckBoxChange(event) {
        const isChecked = event.target.checked;
        setUseEndDate(isChecked);
        if (!isChecked) setFormState({ ...formState, endDate: '' });
    }


    return (
        <div className="w-full">
            <h1 className="font-bold text-3xl mb-5"> Request Solar Information</h1>
            <form onSubmit={handleDataRequest} className="flex flex-col items-center">
                <div>
                    <InputField
                        label="City"
                        type="text"
                        value={formState.city}
                        onChange={(e) => setFormState({ ...formState, city: capitalizeFirstChar(e.target.value) })}
                        required
                    />
                    <InputField
                        label="Country"
                        type="text"
                        value={formState.country}
                        onChange={(e) => setFormState({ ...formState, country: e.target.value })}
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
                                    value={formState.date}
                                    onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                                />
                                <InputField
                                    label="To"
                                    type="date"
                                    value={formState.endDate}
                                    onChange={(e) => setFormState({ ...formState, endDate: e.target.value })}
                                />
                            </>

                        ) : (
                            <InputField
                                label=" "
                                type="date"
                                value={formState.date}
                                onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                            />
                        )}

                    </div>
                    
                    <Button type="submit"
                        className="flex w-full justify-center rounded-md shadow-sm"
                        bgColor="bg-pink-300"
                    >
                        Submit
                    </Button>

                </div>
            </form>
        </div>
    )
}

export default SolarDataForm;