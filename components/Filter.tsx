import React from "react";
import { Button } from "./ui/button";
import { coachData } from "@/lib/trainData";


const Filter = () => {
    return (
        <div className="flex flex-col border-2 w-1/4">
            <div className="px-4 py-2 font-extrabold">
                <p>Refine Result</p>
            </div>
            <div className="border-t-2 px-4 py-2">
                <label className="block mb-1 font-semibold">Journey Class:</label>
                <div className="grid grid-cols-2">
                    {coachData.map((coach: any, index: number) => (
                        <label key={index} className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-gray-600"
                                value={coach.code}
                            />
                            <span className="ml-2">{coach.nameWithCode}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="border-t-2 px-4 ">
                <label className="block mb-1 font-semibold">Train Type:</label>
                <div className="flex flex-wrap flex-col">
                    <label className="inline-flex items-center mr-4 mb-2">
                        <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-gray-600"
                            value="SuperFast"
                        />
                        <span className="ml-2">SuperFast</span>
                    </label>
                    <label className="inline-flex items-center mr-4 mb-2">
                        <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-gray-600"
                            value="Express"
                        />
                        <span className="ml-2">Express</span>
                    </label>
                    <label className="inline-flex items-center mr-4 mb-2">
                        <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-gray-600"
                            value="Vande Bharat"
                        />
                        <span className="ml-2">Vande Bharat</span>
                    </label>
                </div>
            </div>

            <div>
                <label className="block mb-1 font-semibold border-t-2 px-4">
                    Departure Time:
                </label>
                <div className=" grid grid-cols-2  pl-2">
                    <Button className="mr-2 mb-2 flex flex-col bg-blue-700 ">
                        00:00 - 06:00 <span>Early Morning</span>
                    </Button>
                    <Button className="mr-2 mb-2 flex flex-col bg-blue-700">
                        06:00 - 12:00 <span>Morning</span>
                    </Button>
                    <Button className="mr-2 mb-2 flex flex-col bg-blue-700">
                        12:00 - 18:00 <span>Mid Day</span>
                    </Button>
                    <Button className="mr-2 mb-2 flex flex-col bg-blue-700">
                        18:00 - 24:00 <span>Night</span>
                    </Button>
                </div>
            </div>

            <div>
                <label className="block mb-1 font-semibold border-t-2 px-4">
                    Arrival Time:
                </label>
                <div className="grid grid-cols-2 pl-2">
                    <Button className="mr-2 mb-2 flex flex-col bg-blue-700 ">
                        00:00 - 06:00 <span>Early Morning</span>
                    </Button>
                    <Button className="mr-2 mb-2 flex flex-col bg-blue-700 ">
                        06:00 - 12:00 <span>Morning</span>
                    </Button>
                    <Button className="mr-2 mb-2 flex flex-col bg-blue-700 ">
                        12:00 - 18:00 <span>Mid Day</span>
                    </Button>
                    <Button className="mr-2 mb-2 flex flex-col bg-blue-700 ">
                        18:00 - 24:00 <span>Night</span>
                    </Button>
                </div>

            </div>


        </div>
    );
};

export default Filter;
