import Loading from "@components/loading";
import { useCountiesStore } from "@store/countries";
import React from "react";
import { useEffect } from "react";

const Countries = () => {
  const { getCountries, countries } = useCountiesStore();
  useEffect(() => {
    getCountries();
  }, [getCountries]);

  if (countries) {
    return (
      <div className="w-full md:w-1/2">
        <h1 className="mb-4">First 20 countries:</h1>
        <div className="grid grid-cols-3 gap-4 ">
          {countries.map((country) => {
            return (
              <div className="flex items-center space-x-4 bg-slate-200 p-2 rounded-full">
                <img
                  className="w-6 h-6 object-contain"
                  src={country.flags.png}
                  alt="Country Flag"
                />
                <span className="line-clamp-1">{country.name.common}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return <Loading />;
};

export default Countries;
