import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

type Props = {
  color: string[];
};

const PieChart = ({color}:Props) => {
  const chartOptions = {
    chart: {
      type: "pie",
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      margin: [0, 280, 100, -85], 
      spacing: [10, 10, 10, 10],
    },
    title: {
      text: "",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    events: {
      render() {
        const chart = this,
          series = chart.series[0];
        let customLabel = chart.options.chart.custom.label;

        if (!customLabel) {
          customLabel = chart.options.chart.custom.label = chart.renderer
            .label("Total<br/>" + "<strong>2 877 820</strong>")
            .css({
              color: "#000",
              textAnchor: "middle",
            })
            .add();
        }

        const x = series.center[0] + chart.plotLeft,
          y = series.center[1] + chart.plotTop - customLabel.attr("height") / 2;

        customLabel.attr({
          x,
          y,
        });
        // Set font size based on chart diameter
        customLabel.css({
          fontSize: `${series.center[2] / 12}px`,
        });
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          style: {
            color:
              (Highcharts.theme && Highcharts.theme.contrastTextColor) ||
              "black",
          },
        },
      },
      series: {
        borderWidth: 0,
        colorByPoint: true,
        type: "pie",
        size: "70%",
        innerSize: "65%",
        dataLabels: {
          enabled: false, // Disabling the default data labels
        },
      },
    },
    colors: color,
    series: [
      {
        name: "Accounts",
        colorByPoint: true,
        data: [
          {
            name: "",
            y: 2,
            dataLabels: {
              enabled: false,
              format: "Total 2", // Custom label text
              style: {
                fontSize: "16px",
              },
              inside: true, // Place inside the pie
              align: "center",
              verticalAlign: "middle",
              y: 0, // Center vertically
            },
          },
          {
            name: "",
            y: 2,
          },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default PieChart;
