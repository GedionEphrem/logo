import React from "react";
import ReactApexChart from "react-apexcharts";
import "./card.css"
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Commen from "../../commen/Commen";

const Card = () => {
    const data = {
        series: [58],
        options: {
            chart: {
                height: 150,
                type: "radialBar",
                foreColor: "grey",
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: "58%",
                    },
                    dataLabels: {
                        value: {
                            show: false,
                        },
                    },
                },
            },
            labels: ["58"],
            colors: ["#ff5b5b"],
        },
    }
    const data1 = {
        series: [80],
        options: {
            chart: {
                height: 150,
                type: "radialBar",
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: "58%",
                    },
                    //add it
                    dataLabels: {
                        value: {
                            show: false,
                        },
                    },
                },
            },
            labels: ["80"],
            colors: ["#E9B251"],
        },
    }
    const Progress = ({ done }) => {
        return (
            <div className='progress'>
                <div
                    className='progress-done'
                    style={{
                        opacity: 1,
                        width: `${done}%`,
                    }}
                ></div>
            </div>
        )
    }
    return (
        <section className='cards grid'>
            <div className='cardbox'>
                <Commen title='Total Revenue' />
                <div className='circle'>
                    <div className='row'>
                        <ReactApexChart options={data.options} series={data.series} type="radialBar" height={150} />
                    </div>
                    <div className='title row'>
                        <h1>256</h1>
                        <p>Revenue today</p>

                    </div>
                </div>
            </div>
            <div className="carBox">
                <Commen title='Sales Analytics' />
                <div className="circle">
                    <div className="batch row">
                        <span>32%</span>
                        <TrendingUpIcon className=" batchIcon" />
                    </div>
                    <div className="title row">
                        <h1>8451</h1>
                        <p>revenue today</p>
                    </div>
                </div>
                <Progress done='70' />
            </div>
            <div className="carBox">
                <Commen title='Total revenue' />
                <div className="circle">
                    <div className="row">
                        <ReactApexChart options={data1.options} series={data1.series} type="radialBar" height={150} />
                    </div>
                    <div className='title row'>
                        <h1>134</h1>
                        <p>Revenue today</p>

                    </div>
                </div>
            </div>
            <div className="carBox">
                <Commen title='Sales Analytics' />
                <div className="circle">
                    <div className="batch row">
                        <span>14%</span>
                        <TrendingUpIcon className=" batchIcon" />
                    </div>
                    <div className="title row">
                        <h1>5432</h1>
                        <p>revenue today</p>
                    </div>
                </div>
                <Progress done='40' />
            </div>
        </section>

    )
}
export default Card