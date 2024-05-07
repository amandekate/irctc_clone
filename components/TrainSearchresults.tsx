import TrainDetails from "@/components/TrainDetails";
import { FaArrowRight } from "react-icons/fa";
import { format } from "date-fns";

interface TrainSearchResultsProps {
  trains: any;
  travelDate: Date;
  source: string;
  destination: string;
}

const TrainSearchResults: React.FC<TrainSearchResultsProps> = ({
  trains,
  travelDate,
  source,
  destination,
}) => {
  if (trains.length === 0)
    return (
      <span className="text-xl font-bold m-auto">
        {" "}
        Select Source and Destination and hit search.
      </span>
    );
  return (
    <div className="flex flex-col w-3/4 px-2">
      <h2 className="flex flex-row items-center border-2 mt-3 rounded-sm pl-2 ">
        Results for <span className="font-extrabold ">{source}</span>{" "}
        <FaArrowRight /> {" "}
        <span className="font-extrabold">{destination}</span>{" "}
        <span className="font-extrabold">
          {" "}|{format(travelDate, "dd/MM/yyyy")}
        </span>
      </h2>


      {trains.length === 0 ? (
        <p>Search for train</p>
      ) : (
        trains.map((train: any, i: any) => (
          <TrainDetails
            key={i + 1}
            train={train}
            source={source}
            destination={destination}
            journeyDate={travelDate}
          />
        ))
      )}
    </div>
  );
};

export default TrainSearchResults;
