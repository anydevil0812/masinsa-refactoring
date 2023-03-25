import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart } from "chart.js";

Chart.register(ChartDataLabels);

export function SizeBarChart({ analysisSize }) {
  // 사이즈통계
  const sizeData = {
    labels: ["크다", "알맞다", "작다"],
    datasets: [
      {
        data: [analysisSize.large, analysisSize.fitted, analysisSize.small], // 데이터 값
        backgroundColor: ["#05735F", "orange", "#0ea654"], //배경색
      },
    ],
  };

  // 옵션 : 사이즈
  const sizeOptions = {
    indexAxis: "y", // 세로
    responsive: true,
    plugins: {
      legend: false,
      title: {
        display: true,
        text: "사이즈",
      },
      datalabels: {
        color: "#2D2D2D",
        formatter: (value) => {
          return value + "%"; // 데이터 레이블 퍼센트 붙여주기
        },
        font: {
          weight: "bold",
          size: "12",
        },
        anchor: "end",
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          callback: function (value) {
            return value + "%";
          }, // end callback
        }, // end ticks
      }, //end xAxis
      y: {
        stacked: true,
      }, //end yAxis
    }, // end scales
  };

  return (
    <>
      <div style={{ width: "280px", height: "150px", margin: "0 auto" }}>
        <Bar data={sizeData} options={sizeOptions}></Bar>
      </div>
    </>
  );
}

export function FitBarChart({ analysisFit }) {
  // 착용감통계
  const fitData = {
    labels: ["만족", "불만족"],
    datasets: [
      {
        data: [analysisFit.pos, analysisFit.neg], // 데이터 값
        backgroundColor: ["orange", "#05735F"], //배경색
      },
    ],
  };

  // 옵션 : 착용감
  const fitoptions = {
    indexAxis: "y", // 세로
    responsive: true,
    plugins: {
      legend: false,
      title: {
        display: true,
        text: "착용감",
      },
      datalabels: {
        color: "#2D2D2D",
        formatter: (value) => {
          return value + "%"; // 데이터 레이블 퍼센트 붙여주기
        },
        font: {
          weight: "bold",
          size: "12",
        },
        anchor: "end",
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          callback: function (value) {
            return value + "%";
          }, // end callback
        }, // end ticks
      }, //end xAxis
      y: {
        stacked: true,
      }, //end yAxis
    }, // end scales
  };

  return (
    <>
      <div style={{ width: "280px", height: "150px", margin: "0 auto" }}>
        <Bar data={fitData} options={fitoptions}></Bar>
      </div>
    </>
  );
}

export function DeliveryBarChart({ analysisDelivery }) {
  // 배송통계
  const deliveryData = {
    labels: ["빠르다", "느리다"],
    datasets: [
      {
        data: [analysisDelivery.pos, analysisDelivery.neg], // 데이터 값
        backgroundColor: ["orange", "#05735F"], //배경색
      },
    ],
  };

  // 옵션 : 배송
  const options = {
    indexAxis: "y", // 세로
    responsive: true,
    plugins: {
      legend: false,
      title: {
        display: true,
        text: "배송",
      },
      datalabels: {
        color: "#2D2D2D",
        formatter: (value) => {
          return value + "%"; // 데이터 레이블 퍼센트 붙여주기
        },
        font: {
          weight: "bold",
          size: "12",
        },
        anchor: "end",
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          callback: function (value) {
            return value + "%";
          }, // end callback
        }, // end ticks
      }, //end xAxis
      y: {
        stacked: true,
      }, //end yAxis
    }, // end scales
  };

  return (
    <>
      <div style={{ width: "280px", height: "150px", margin: "0 auto" }}>
        <Bar data={deliveryData} options={options}></Bar>
      </div>
    </>
  );
}

export function BreatheBarChart({ analysisBreathe }) {
  // 호흡통계
  const breatheData = {
    labels: ["편하다", "불편하다"],
    datasets: [
      {
        data: [analysisBreathe.pos, analysisBreathe.neg], // 데이터 값
        backgroundColor: ["orange", "#05735F"], //배경색
      },
    ],
  };

  // 옵션 : 호흡
  const options = {
    indexAxis: "y", // 세로
    responsive: true,
    plugins: {
      legend: false,
      title: {
        display: true,
        text: "호흡",
      },
      datalabels: {
        color: "#2D2D2D",
        formatter: (value) => {
          return value + "%"; // 데이터 레이블 퍼센트 붙여주기
        },
        font: {
          weight: "bold",
          size: "12",
        },
        anchor: "end",
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          callback: function (value) {
            return value + "%";
          }, // end callback
        }, // end ticks
      }, //end xAxis
      y: {
        stacked: true,
      }, //end yAxis
    }, // end scales
  };

  return (
    <>
      <div style={{ width: "280px", height: "150px", margin: "0 auto" }}>
        <Bar data={breatheData} options={options}></Bar>
      </div>
    </>
  );
}
