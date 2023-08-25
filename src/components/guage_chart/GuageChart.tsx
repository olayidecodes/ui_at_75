"use client"
import dynamic from "next/dynamic";
const GaugeComponent = dynamic(() => import('react-gauge-component'), { ssr: false });
import React, { useEffect, useState } from 'react';
// import GaugeComponent from './lib';
// import CONSTANTS from './lib/GaugeComponent/constants';
import styles from './page.module.css'
import myData from './test_data';
import FundraisingThermometer from "../thermometer/FundraisingThermometer";

interface Transaction {
  firstName: string;
  lastName: string;
  email: string;
  amount: number;
  narration: string;
  transactionID: string;
  status: string;
  date: string;
}

interface HallData {
  hallName: string;
  data: Transaction[];
}

const GuageChart = () => {
  const [currentValue, setCurrentValue] = useState(50);
  const [arcs, setArcs] = useState([{ limit: 30 }, { limit: 50 }, { limit: 100 }])
  
  function calculateTotalPaid(data: HallData[]): number {
    let totalPaid = 0;

    for (const hall of data) {
        for (const transaction of hall.data) {
            if (transaction.status === 'PENDING') {
                totalPaid += transaction.amount;
            }
        }
    }

    return totalPaid;
}

function valueToPercentage(value: number, target: number): number {
  if (value === 0) {
      throw new Error("Total cannot be zero.");
  }

  const percentage = (value / target) * 100;
  return percentage;
}

const target = 10000000;

const totalPaidAmount = valueToPercentage(calculateTotalPaid(myData), target);
console.log('Total Paid Amount:', totalPaidAmount);

useEffect(() => {
  const timer = setTimeout(() => {
    setCurrentValue(totalPaidAmount);
    setArcs([{ limit: 30 }, { limit: 35 }, { limit: 100 }])
  });

  return () => {
    clearTimeout(timer);
  };
  
}, []);

  // const kbitsToMbits = (value: number) => {
  //   if (value >= 1000) {
  //     value = value / 1000;
  //     if (Number.isInteger(value)) {
  //       return value.toFixed(0) + ' mbit/s';
  //     } else {
  //       return value.toFixed(1) + ' mbit/s';
  //     }
  //   } else {
  //     return value.toFixed(0) + ' kbit/s';
  //   }
  // }
  // const debugGauge = () => <GaugeComponent
  //   arc={{
  //     padding: 0.01,
  //     // nbSubArcs: 100,
  //     // colorArray: ['#EA4228', '#EFFF']
  //     subArcs: [
  //       { limit: 15, color: '#EA4228', showMark: true },
  //       { limit: 17, color: '#F5CD19', showMark: true },
  //       { limit: 28, color: '#5BE12C', showMark: true },
  //       { limit: 30, color: '#F5CD19', showMark: true },
  //       { color: '#EA4228' }
  //     ]
  //   }}
  //   labels={{
  //     valueLabel: { formatTextValue: value => value + 'ºC' },
  //     markLabel: {
  //       valueConfig: { formatTextValue: value => value + 'ºC'},
  //       marks: [
  //         { value: 22.5 }
  //       ]
  //     }
  //   }}
  //   value={100}
  //   minValue={10}
  //   maxValue={100}
  // />


  return (
    <div className={styles.guage_chart}>
      <div className={styles.box_guage}>
        <GaugeComponent
          arc={{
            subArcs: [
              {
                limit: 20,
                color: '#EA4228',
                showMark: true,
                tooltip: { text: 'Empty' }
              },
              {
                limit: 40,
                color: '#F58B19',
                showMark: true,
                tooltip: { text: 'Low' }
              },
              {
                limit: 60,
                color: '#F5CD19',
                showMark: true,
                tooltip: { text: 'Fine' }
              },
              {
                limit: 100,
                color: '#5BE12C',
                showMark: true,
                tooltip: { text: 'Full' }
              },
            ]
          }}
          value={currentValue}
          className={styles.guage}
        />
      </div>
      <FundraisingThermometer current={currentValue} goal={target} />
      <div className={styles.text}>
        <p>Total amount realized so far:</p>
        <h3>₦{currentValue}M</h3>
      </div>
    </div>
  )
}

export default GuageChart
