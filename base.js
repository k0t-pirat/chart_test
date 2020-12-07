const CHARTS_AMOUNT = 3;

const charts = [];
const legends = [
  {
    title: 'Apples',
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
  },
  {
    title: 'Bananas',
    data: [71, 74, 76, 77, 63, 74, 72, 46, 23.8, 62, 59.6, 40.5],
  },
];

const baseContainer = document.querySelector('#base-container');
const legendContainer = document.querySelector('#legend');
const chartLegends = legends.map((legend, index) => (
  {
    id: `someId${index + 1}`,
    name: legend.title,
    data: legend.data,
  }
));

for (i = 0; i < CHARTS_AMOUNT; i++) {
  const container = document.createElement('div');
  const chart = new Highcharts.Chart({
    chart: {
      renderTo: container,
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    legend: {
      enabled: false
    },
    series: chartLegends,
  });
  charts.push(chart);
  baseContainer.insertAdjacentElement('beforeend', container);
}

chartLegends.forEach((legend) => {
  const onCustomLegendClick = () => {
    charts.forEach((chart) => {
      const series = chart.get(legend.id);

      if (series) {
        if (series.visible) {
          series.hide();
        } else {
          series.show();
        }
      }
    });
  }
  const legendNode = document.createElement('p');

  legendNode.textContent = legend.name;
  legendNode.addEventListener('click', onCustomLegendClick);
  legendContainer.insertAdjacentElement('beforeend', legendNode);
});
