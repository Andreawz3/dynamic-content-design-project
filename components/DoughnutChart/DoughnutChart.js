import { useState, useEffect } from "react"
import styles from './DoughnutChart.module.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2'
ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart() {

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState ({})

    useEffect(() => {
        setChartData({
            datasets: [
                {
                    labels: "Percet to level up",
                    data: [80,20],
                    backgroundColor: [
                        'rgba(90, 140, 50, 1)',
                        'rgba(226, 214, 201, 1)'
                      ],
                      borderColor: [
                        'rgba(255, 255, 255, 0.2)'
                      ],
                      borderWidth: 1,
                }
            ]
        })
    }, [])

    return (
        <>
            <div className={styles.container}>
                <Doughnut data={chartData} option={chartOptions} />
            </div>
        </>
    )
}