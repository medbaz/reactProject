import React from 'react'
import { ResponsiveBar } from "@nivo/bar";

function Bar() {
                  
const data = [
  {
    day: "Monday",
    degress: 59,
  },
  {
    day: "Tuesday",
    degress: 61,
  },
  {
    day: "Wednesday",
    degress: 55,
  },
  {
    day: "Thursday",
    degress: 78,
  },
  {
    day: "Friday",
    degress: 71,
  },
  {
    day: "Saturday",
    degress: 56,
  },
  {
    day: "Sunday",
    degress: 67,
  },
];

  return (
    <section className="bg-white w-11/12 h-3/4 m-auto mt-9  box-border  rounded-xl p-4">
      <article className="  w-full flex flex-col box-border h-full">
        <h1 className={"title"}> Bar </h1>
        <div className="md:w-5/6 md:h-5/6 m-auto w-full   h-full  bg-orange-200 border rounded-lg">
          <ResponsiveBar
            data={data}
            keys={["degress"]}
            indexBy="day"
            margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
            padding={0.4}
            valueScale={{ type: "linear" }}
            colors="#3182CE"
            animate={true}
            enableLabel={false}
            axisTop={null}
            axisRight={null}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "degrees",
              legendPosition: "middle",
              legendOffset: -40,
            }}
          />
        </div>
      </article>
    </section>
  );
}

export default Bar