const {fullPlots, legends} = window.valuesData;
const charts = [];

const baseContainer = document.querySelector('#base-container');
const legendContainer = document.querySelector('#legend-list');

fullPlots.forEach((plot) => {
  const chartContainer = document.createElement('div');

  const series = plot.legends.map((legend) => {
    return {
      id: legend.id,
      name: legend.title,
      color: legend.color,
      data: legend.values,
    }
  });

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
    title: {
      text: plot.title,
      align: 'left',
      verticalAlign: 'bottom',
    },
    series: series,
  });
  charts.push(chart);
  baseContainer.insertAdjacentElement('beforeend', chartContainer);
});

legends.forEach((legend) => {
  const legendNode = document.createElement('li');

  charts.forEach((chart) => {
    const series = chart.get(legend.id);
    legend.color = legend.color || series.color;
  });

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

  legendNode.classList.add('legend-item');
  legendNode.textContent = legend.title;
  legendNode.style.color = legend.color;
  legendNode.addEventListener('click', onCustomLegendClick);
  legendContainer.insertAdjacentElement('beforeend', legendNode);
});
