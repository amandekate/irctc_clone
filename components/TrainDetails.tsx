import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { Card } from "./ui/card";
import { RefreshCcw } from "lucide-react";
import { isEmpty } from "lodash";
import RunDayHighlighter from "./RunDayHighlighter"; 
import { coachData, seats3A, seatsSL } from "@/lib/trainData";

interface TrainDetailsProps {
  train: any;
  source: string;
  destination: string;
  journeyDate: Date;
}

const TrainDetails: React.FC<TrainDetailsProps> = ({
  train,
  source,
  destination,
  journeyDate,
}) => {
  const { train_name, train_number, class_type, run_days, from_sta, to_sta, duration } = train;
  const [seatData, setSeatData] = useState<any>({});

  const findSeatAvailability = (train_number: any, coach: any) => {
    console.log("Coach - ", coach);
    if (coach === "3A") {
      setSeatData((prev: any) => ({ ...prev, [coach]: [...seats3A] }));
    }
    if (coach === "SL") {
      setSeatData((prev: any) => ({ ...prev, [coach]: [...seatsSL] }));
    }
  };

  useEffect(() => {
    console.log("seatData - ", seatData);
  }, [seatData]);

  return (
    <>
      <Card className="p-2 border-2 mt-3">
        <div className="flex flex-row justify-between px-2 py-1 bg-slate-200 rounded">
          <text className="font-extrabold">
            {train_name} <span>({train_number})</span>
          </text>
          <text>
            <span className="font-bold">Runs On:</span>{" "}
            {run_days.map((day: string) => (
              <RunDayHighlighter key={day} day={day} runDays={run_days} />
            ))}
          </text>
        </div>
        <div className="flex flex-row justify-between px-2 py-2">
          <div>
            <text>
              <span className="font-extrabold">{from_sta} </span>| {source} | {" "}
              {format(journeyDate, "dd/MM/yyyy")}
            </text>
          </div>
          <div >
            <text className="font-bold">
              {duration} Hrs
            </text>
          </div>
          <div>
            <text>
              <span className="font-extrabold">{to_sta} </span>| {destination} |
              {format(journeyDate, "dd/MM/yyyy")}
            </text>
          </div>
        </div>
        <div className="flex flex-row w-full px-2 gap-2 py-2">
          {coachData.map((coach: any) => {
            if (class_type.includes(coach.code)) {
              return (
                <div
                  className="flex flex-col p-4 border-2 rounded cursor-pointer"
                  key={coach.code}
                >
                  <span className="text-xl font-bold">
                    {coach.nameWithCode}
                  </span>
                  <div
                    className="flex gap-2"
                    onClick={() =>
                      findSeatAvailability(train_number, coach.code)
                    }
                  >
                    {!isEmpty(seatData) && !isEmpty(seatData?.[coach.code]) ? (
                      <span className="text-green-500 ">
                        {seatData?.[coach.code]?.[0]?.current_status}
                      </span>
                    ) : (
                      <>
                        <span>Refresh</span>
                        <RefreshCcw />
                      </>
                    )}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="flex px-2 gap-2">
          <button className="bg-[#fb792b] text-white border font-bold border-gray-300 rounded px-4 py-2">
            Book Now
          </button>
          
        </div>
      </Card>
    </>
  );
};

export default TrainDetails;
