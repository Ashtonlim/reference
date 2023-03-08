import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = ({ data = [], width = 500, height = 300 }) => {
  //   data = { x: [1, 2, 3, 4], y: [1, 2, 3, 4] };
  data = [
    { x: 1, y: 4 },
    { x: 4, y: 2 },
    { x: 5, y: 5 },
    { x: 6, y: 9 },
  ];
  const svgBarChart = useRef();
  console.log(data);
  useEffect(() => {
    // .current selects the current component svgBarChart is attached to
    // console.log(svgBarChart) = <svg/>

    // selects element
    const svg = d3
      .select(svgBarChart.current)
      // specifies the container width and height
      .attr("width", width)
      .attr("height", height)
      // allows axis values to be seen as values are outside container
      .style("overflow", "visible");

    // xScale is a function that when pass a value (in this case a value from the x axis)
    // it automatically returns the pixel location that bar should render.
    const xScale = d3
      // scale band is used for discrete values. They may already discrete,
      // or turned discrete from continous (you make want to relook if this is the right graph in this case then)
      .scaleBand()
      // all the bins/columns and their values that exist
      .domain(data.map((val) => val.x))
      // the width of the x axis in pixels
      .range([0, width])
      // padding for the bars
      .padding(0.3)
      .round(true);

    const yScale = d3
      // for continous values
      .scaleLinear()
      // an arr denoting [lowest value , highest value] for y axis
      .domain([0, d3.max(data.map(({ y }) => y))])
      // sth about rounding? please check
      .nice()
      // the height of the y axis in pixels
      .range([height, 0]);

    const color = d3
      .scaleSequential()
      .domain([0, data.length])
      .interpolator(d3.interpolateRdYlGn);

    const xAxis = d3.axisBottom(xScale).ticks(data.length);
    const yAxis = d3.axisLeft(yScale).ticks(6);

    svg.append("g").call(xAxis).attr("transform", `translate(0, ${height})`);
    svg.append("g").call(yAxis);

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      // xScale is passed the x value, it then returns back the pixel location
      // it should be rendered at. E.g. xScale('a') => 50, xScale('b') => 100
      .attr("x", ({ x }) => xScale(x))
      // yScale does the same, given the y val, return height it starts drawing
      // but because SVGs are drawn from top left corner, a bar is drawn from the top left corner
      // if the height of bar y, is supposed to be 250, and the container height is 300.
      // yScale(y = 250) -> 50px from the top and draws all the way down specified by attr("height")
      .attr("y", ({ y }) => yScale(y))
      .attr("width", xScale.bandwidth())
      // yScale(y) returns 50, 300 - 50 = 250 -> draw 250px down.
      // yScale(y2) returns 150, 300 - 150 = 150 -> draw 150px down.
      .attr("height", ({ y }, i) => height - yScale(y))
      .attr("fill", (_, i) => color(i))
      .attr("cursor", "pointer");
  });
  return (
    <div className="mb-5">
      <svg ref={svgBarChart}></svg>
    </div>
  );
};

export default BarChart;
