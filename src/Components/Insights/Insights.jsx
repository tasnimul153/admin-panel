import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import Sidebar from '../Sidebar/Sidebar';
import './Insights.css';

const Insights = () => {
    const ref = useRef();

    useEffect(() => {
        fetch('http://localhost:8080/api/users')
            .then(response => response.json())
            .then(data => {
                const countryCount = data.reduce((acc, user) => {
                    acc[user.country] = (acc[user.country] || 0) + 1;
                    return acc;
                }, {});
                const processedData = Object.keys(countryCount).map(key => ({
                    name: key,
                    value: countryCount[key]
                }));
                drawBarChart(processedData);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    const drawBarChart = (data) => {
    const svg = d3.select(ref.current)
                  .attr('width', 800)
                  .attr('height', 500);

    const margin = { top: 20, right: 30, bottom: 100, left: 100 }; 
    const width = 800 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const xScale = d3.scaleBand()
                     .range([0, width])
                     .padding(0.1)
                     .domain(data.map(d => d.name));

    const yScale = d3.scaleLinear()
                     .range([height, 0])
                     .domain([0, d3.max(data, d => d.value)]);

    const g = svg.append('g')
                 .attr('transform', `translate(${margin.left},${margin.top})`);

    g.append("g")
     .call(d3.axisLeft(yScale).tickFormat(d => `${d}`).ticks(10))
     .append("text")
     .attr("transform", "rotate(-90)")
     .attr("y", 6)
     .attr("dy", "1em")
     .attr("text-anchor", "end")
     .text("Frequency");

    g.append("g")
     .attr("transform", `translate(0,${height})`)
     .call(d3.axisBottom(xScale))
     .selectAll("text")
     .style("text-anchor", "end")
     .attr("dx", "-.8em")
     .attr("dy", ".15em")
     .attr("transform", "rotate(-65)");

    g.selectAll(".bar")
     .data(data)
     .enter().append("rect")
     .attr("class", "bar")
     .attr("x", d => xScale(d.name))
     .attr("y", d => yScale(d.value))
     .attr("width", xScale.bandwidth())
     .attr("height", d => height - yScale(d.value));
}


    return (
        <div className='app-main'>
            <Sidebar />
            <svg ref={ref} style={{ width: 800, height: 500 }}></svg>
        </div>
    );
};

export default Insights;
