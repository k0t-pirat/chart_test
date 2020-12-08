const CHARTS_AMOUNT = 3;

const charts = [];
const data = [
  {
    id: 1,
    legend: 'Apples',
    color: '',
    plots: [
      {
        id: 1,
        title: 'from USA',
        values: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      },
      {
        id: 2,
        title: 'from Greece',
        values: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      },
      {
        id: 3,
        title: 'from China',
        values: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      },
    ]
  },
  {
    id: 2,
    legend: 'Oranges',
    color: '',
    plots: [
      {
        id: 1,
        title: 'from USA',
        values: [71, 74, 76, 77, 63, 74, 72, 46, 23.8, 62, 59.6, 40.5],
      },
      {
        id: 2,
        title: 'from Greece',
        values: [71, 74, 76, 77, 63, 74, 72, 46, 23.8, 62, 59.6, 40.5],
      },
      {
        id: 3,
        title: 'from China',
        values: [71, 74, 76, 77, 63, 74, 72, 46, 23.8, 62, 59.6, 40.5],
      },
    ]
  },
];
const fullPlots = [];
data.forEach((datum) => {
  datum.plots.forEach((plot) => {
    if (fullPlots.filter((fullPlot) => fullPlot.id === plot.id).length === 0) {
      fullPlots.push({
        id: plot.id,
        title: plot.title,
        plotData: [],
      });
    }
    // console.log(datum.title);
    fullPlots.forEach((fullPlot) => {
      if (fullPlot.id === plot.id) {
        fullPlot.plotData.push({
          legendTitle: datum.legend,
          legendId: datum.id,
          legendColor: datum.color,
          values: plot.values,
        });
      }
    })
  });
});

// console.log(fullPlots);
// const legends = [
//   {
//     title: 'Apples',
//     data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
//   },
//   {
//     title: 'Bananas',
//     data: [71, 74, 76, 77, 63, 74, 72, 46, 23.8, 62, 59.6, 40.5],
//   },
// ];

const baseContainer = document.querySelector('#base-container');
const legendContainer = document.querySelector('#legend-list');
// const chartLegends = legends.map((legend, index) => (
//   {
//     id: `someId${index + 1}`,
//     name: legend.title,
//     data: legend.data,
//   }
// ));

// data.forEach((datum) => {
  

fullPlots.forEach((plot) => {
  const chartContainer = document.createElement('div');

  const series = plot.plotData.map((plotItem) => {
    return {
      id: plotItem.legendId,
      name: plotItem.legendTitle,
      color: plotItem.legendColor,
      data: plotItem.values,
    }
  });

  console.log(series);

  // const series = 

  const chart = new Highcharts.Chart({
    chart: {
      renderTo: chartContainer,
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    legend: {
      enabled: false
    },
    series: series,
  });
  charts.push(chart);
  baseContainer.insertAdjacentElement('beforeend', chartContainer);
  // });
});

// for (i = 0; i < CHARTS_AMOUNT; i++) {
  
// }

data.forEach((datum) => {
  const legendNode = document.createElement('li');
  const onCustomLegendClick = () => {
    charts.forEach((chart) => {
      const series = chart.get(datum.id);
      // console.log('chart', chart);
      // console.log('series', series);

      if (series) {
        if (series.visible) {
          series.hide();
        } else {
          series.show();
        }
      }
    });
  }

  legendNode.classList.add('legend-item');
  legendNode.textContent = datum.legend;
  legendNode.addEventListener('click', onCustomLegendClick);
  legendContainer.insertAdjacentElement('beforeend', legendNode);
  // console.log('legend', legend)
});
