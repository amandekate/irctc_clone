"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DatePicker } from "@/components/ui/datepicker";
import { useState } from "react";
import Station from "../components/Station";
import TrainSearchResults from "@/components/TrainSearchresults";
import Filter from "@/components/Filter";
import { trainData } from "@/lib/trainData";
import Loader from "@/components/Loader";

const Home = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState<Date | null>(null);
  const [searchResults, setSearchResults] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = () => {
    setLoading(true);

    setTimeout(() => {
      setSearchResults(trainData);
      setLoading(false);
    }, 300);
  };


  const isSearchDisabled = () => {
    if (source.length === 0 || destination.length === 0 || !travelDate)
      return true;
    return false;
  };

  return (
    <>
      <div className=" mx-auto px-4 py-4 ">
        <Card className="bg-blue-700 py-4 px-2">
          <div className="flex flex-row items-center justify-center gap-6">
            <div className="flex flex-col">
              <label className="pr-2 text-white text-xl font-bold">
                From :
              </label>
              <Station
                onChange={(station: string) => {
                  console.log(station);
                  setSource(station);
                }}
              />
            </div>
            <div className="flex flex-col">
              <label className="pr-2 text-white text-xl font-bold">To:</label>
              <Station
                onChange={(station: string) => setDestination(station)}
                className="text-[#082b71]"
              />
            </div>
            <div className="flex flex-col">
              <label className="pr-2 text-white text-xl font-bold">Date:</label>
              <DatePicker
                selected={travelDate}
                onChange={(date: Date) => setTravelDate(date)}
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
            </div>
            <div className="flex flex-col mt-auto">
              <Button
                onClick={handleSearch}
                className="bg-[#fb792b] py-2 px-4"
                disabled={isSearchDisabled()}
              >
                Search Trains
              </Button>
            </div>
          </div>
        </Card>
        <br />
        <div className="flex">
          <Filter />
          {loading ? (
            <Loader />
          ) : (
            travelDate && (
              <TrainSearchResults
                trains={searchResults}
                travelDate={travelDate}
                source={source}
                destination={destination}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
