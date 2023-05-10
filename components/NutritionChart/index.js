import { useState, useEffect } from "react"
import styles from './NutritionChart.module.css'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart() {
    const recipeData = inventory.recipe;
    const [chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ['Calories', 'Carbs', 'Protein', 'Fat', 'Fiber', 'Calcium', 'Iron'],
            datasets: [
                {
                    label: '',
                    data: [recipeData.calories, recipeData.carb, recipeData.protein, recipeData.fat, recipeData.fiber, recipeData.calcium, recipeData.iron],
                    backgroundColor: [
                      'rgb(229,100,92)',
                      'rgb(90,140,50)',
                      'rgb(236,198,79)',
                      'rgb(142,189,189)',
                      'rgb(229,167,85)',
                      'rgb(234,229,224)',
                      'rgb(162,190,82)'
                    ],
                    borderColor: 'transparent'
                },
            ]
        })

        setChartOptions({
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Nutrition Value',
                },
            }
        })
    }, [])

    return (
        <>
            <div className={styles.container}>
                <Doughnut data={chartData} options={chartOptions} />
            </div>
            <span className={styles.label}>{recipeData.dishName}</span>
        </>
    )
}