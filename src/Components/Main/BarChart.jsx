import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ data }) => {
    useEffect(() => {
        const ctx = document.getElementById('barChartCanvas').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }, [data]);

    return <canvas id="barChartCanvas"></canvas>;
};

export default BarChart;
