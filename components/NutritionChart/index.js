import { useState, useEffect } from "react"
import styles from './NutritionChart.module.css'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { inventory } from "@/data/recipes";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function NutritionChart() {
    const recipeData = inventory.recipe[1];
    const [chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({})

    // console.log("carb", recipeData.carb);
    useEffect(() => {
        setChartData({
            labels: ['Carbs', 'Protein', 'Fat', 'Fiber', 'Calcium', 'Iron'],
            datasets: [
                {
                    label: '',
                    data: [recipeData.carbGram, recipeData.proteinGram, recipeData.fatGram, recipeData.fiberGram, recipeData.calciumGram, recipeData.ironGram],
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
            <span className={styles.label}>{recipeData.dishName} <p className={styles.p__text}>(measured in grams)</p></span>
        </>
    )
}