"use client"
import React from 'react'
import styles from './page.module.css'
import { Bar } from "react-chartjs-2";
import { useEffect } from 'react'
import { getCheckouts } from '../../lib/api/checkout'
import { CategoryScale, Chart, BarElement, Tooltip, Legend, LinearScale } from "chart.js";
import myData from '../guage_chart/test_data';


Chart.register(CategoryScale, BarElement, Tooltip, Legend, LinearScale);

interface NameBoxTypes {
	color: string;
	name: string;
}

// interface DataItem {
// 	hallName: string;
// 	data: {
// 	  firstName: string;
// 	  lastName: string;
// 	  email: string;
// 	  amount: number;
// 	  narration: string;
// 	  transactionID: string;
// 	  status: string;
// 	  date: string;
// 	}[];
//   }

interface Payer {
	firstName: string;
	lastName: string;
	email: string;
	amount: number;
	narration: string;
	transactionID: string;
	status: string;
	date: string;
  }
  
  interface Hall {
	hallName: string;
	data: Payer[];
  }
  

const items = [
	{
		id: 1,
		color: "brown",
		name: "Alexander brown hall"
	},
	{
		id: 2,
		color: "lightblue",
		name: "Kuti hall"
	},
	{
		id: 3,
		color: "red",
		name: "Tedder hall"
	},
	{
		id: 4,
		color: "yellow",
		name: "Mellanby hall"
	},
	{
		id: 5,
		color: "teal",
		name: "Queen Elizabeth hall"
	},
	{
		id: 6,
		color: "blue",
		name: "Independence hall"
	},
	{
		id: 7,
		color: "purple",
		name: "Idia hall"
	},
	{
		id: 8,
		color: "teal",
		name: "Bello hall"
	},
	{
		id: 9,
		color: "lightgreen",
		name: "Awolowo hall"
	},
	{
		id: 10,
		color: "magenta",
		name: "Nnamdi Azikwe hall"
	},
]

const NameBox: React.FC<{ item: NameBoxTypes }> = ({ item: { color, name } }) => {
	return (
		<div className={styles.namebox}>
			<span className={styles[`${color}`]}></span>
			<p>{name}</p>
		</div>
	)
}


function BarChart() {

	const getCheckoutData = async () => {
        const data = await getCheckouts()
		// console.log(data)
	}

	useEffect(() => {
		getCheckoutData()
	}, [])



	// // Function to filter data by hallName
	// function filterDataByHallName(data: DataItem[], hallName: string): DataItem[] {
	// 	return data.filter(item => item.hallName === hallName);
	//   }
	  
	//   // Example usage
	//   const filteredData = filterDataByHallName(myData, "Idia");
	//   console.log(filteredData);

 // Replace with the actual path to your data file

 function calculateTotalPaymentsByHall(data: Hall[]): Record<string, number> {
	const hallTotals: Record<string, number> = {};
  
	data.forEach(hall => {
	  const hallName = hall.hallName;
	  hall.data.forEach(payer => {
		if (!hallTotals[hallName]) {
		  hallTotals[hallName] = 0;
		}
		hallTotals[hallName] += payer.amount;
	  });
	});
  
	return hallTotals;
  }
  
  const totalPaymentsByHall = calculateTotalPaymentsByHall(myData);
  console.log(totalPaymentsByHall);


return (
	<div className={styles.bar_chart}>
	<div className={styles.text}>
		<h1>Donations received so far</h1>
		<p>Each bars represent the payment by each individual halls</p>
		<hr />
	</div>
	<div className={styles.chart}>	
	<div style={{ maxWidth: "1050px" }}>
		<Bar
		data={{
			// Name of the variables on x-axies for each bar
			labels: ["", "", "", "", "", "", "", "", "", ""],
			datasets: [
			{
				// Label for bars
				label: "total count/value",
				// Data or value of your each variable
				data: [	240, 220, 210, 90, 200, 40, 210, 70, 150, 170],
				// Color of each bar
				backgroundColor: ["brown", "lightblue", "red", "yellow", "teal", "blue", "purple", "teal", "lightgreen"],
				// Border color of each bar
				borderColor: ["brown", "lightblue", "red", "yellow", "teal", "blue", "purple", "teal", "lightgreen"],
				borderWidth: 0.5,
			},
			],
		}}
		// Height of graph
		height={400}
		options={{
			maintainAspectRatio: false,
			scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        beginAtZero: true
                    }
                }],
			},
			legend: {
			labels: {
				fontSize: 15,
			},
			},
		}}
		/>
	</div>
	</div>
	<div className={styles.bottom}>
		{items.map((item) => <NameBox item={item} key={item.id}/>)}
	</div>
	</div>
);
}

export default BarChart;