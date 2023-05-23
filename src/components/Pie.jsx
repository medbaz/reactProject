import React from 'react'
 import { ResponsivePie } from '@nivo/pie';




function Pie() {

  const pieData = [
    {
      id: "java",
      label: "java",
      value: 195,
      color: "hsl(90, 70%, 50%)",
    },
    {
      id: "erlang",
      label: "erlang",
      value: 419,
      color: "hsl(56, 70%, 50%)",
    },
    {
      id: "ruby",
      label: "ruby",
      value: 407,
      color: "hsl(103, 70%, 50%)",
    },
    {
      id: "haskell",
      label: "haskell",
      value: 474,
      color: "hsl(186, 70%, 50%)",
    },
    {
      id: "go",
      label: "go",
      value: 71,
      color: "hsl(104, 70%, 50%)",
    },
  ];


  return (
    <section className="bg-white w-11/12 h-3/4 m-auto mt-9  box-border  rounded-xl p-4">
      <article className="  w-full flex flex-col box-border h-full">
        <h1 className={"title"}> Bar </h1>
        <div className="md:w-5/6 md:h-5/6 m-auto w-full   h-full  bg-orange-200 border rounded-lg">
        
    <ResponsivePie
      data={pieData}
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      innerRadius={0.3}
      padAngle={1.2}
      cornerRadius={5}
      activeOuterRadiusOffset={10}
      borderWidth={2}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={0}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
    />
 
        </div>
      </article>
    </section>
  );
}

export default Pie ;