"use client";

import React from "react";
import Details from "./details";
import { fetchData } from "../_actions/fetchData";

const InputSearch = () => {
  try {
    const [domainName, setDomainName] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const [data, setData] = React.useState(null);

    const handleSubmit = async (domainName: string) => {
      setLoading(true);
      setData(await fetchData(domainName));

      setLoading(false);
    };

    return (
      <main>
        <div className="container flex gap-6 mx-auto w-full">
          <input
            type="text"
            className="bg-gray-100 rounded-xl text-black px-8 py-4 w-full"
            placeholder="Enter domain name (eg. google.com)"
            value={domainName}
            onChange={(e) => setDomainName(e.target.value)}
          />
          <button
            className="bg-black/90 text-white px-10 py-4 rounded-xl"
            onClick={() => handleSubmit(domainName)}
          >
            Search
          </button>
        </div>
        {loading && <div className="w-full text-center">Loading.....</div>}
        {data && <Details data={data} />}
      </main>
    );
  } catch (error) {
    console.error(error);
    return <></>;
  }
};

export default InputSearch;
