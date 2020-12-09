window.legendsData = (function() {
  const legends = [
    {
      id: 1,
      title: 'Apples',
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
      title: 'Oranges',
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
  legends.forEach((legend) => {
    legend.plots.forEach((plot) => {
      if (fullPlots.filter((fullPlot) => fullPlot.id === plot.id).length === 0) {
        fullPlots.push({
          id: plot.id,
          title: plot.title,
          plotData: [],
        });
      }
      
      fullPlots.forEach((fullPlot) => {
        if (fullPlot.id === plot.id) {
          fullPlot.plotData.push({
            legendTitle: legend.title,
            legendId: legend.id,
            legendColor: legend.color,
            values: plot.values,
          });
        }
      })
    });
  });

  return {
    legends: legends,
    fullPlots: fullPlots,
  }
})();

window.plotsData = (function() {
  const plots = [
    {
      id: 1,
      title: 'from USA',
      legends: [
        {
          id: 1,
          color: '',
          title: 'Apples',
          values: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        },
        {
          id: 2,
          color: '',
          title: 'Oranges',
          values: [71, 74, 76, 77, 63, 74, 72, 46, 23.8, 62, 59.6, 40.],
        },
      ]
    },
    {
      id: 2,
      title: 'from Greece',
      legends: [
        {
          id: 1,
          color: '',
          title: 'Apples',
          values: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        },
        {
          id: 2,
          color: '',
          title: 'Oranges',
          values: [71, 74, 76, 77, 63, 74, 72, 46, 23.8, 62, 59.6, 40.],
        },
      ]
    },
    {
      id: 3,
      title: 'from China',
      legends: [
        {
          id: 1,
          color: '',
          title: 'Apples',
          values: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        },
        {
          id: 2,
          color: '',
          title: 'Oranges',
          values: [71, 74, 76, 77, 63, 74, 72, 46, 23.8, 62, 59.6, 40.],
        },
      ]
    },
  ];

  const fullLegends = [];
  plots.forEach((plot) => {
    plot.legends.forEach((legend) => {
      if (fullLegends.filter((fullLegend) => fullLegend.id === legend.id).length === 0) {
        fullLegends.push({
          id: plot.id,
          title: plot.title,
          legendData: [],
        });
      }
      
      fullLegends.forEach((fullLegend) => {
        if (fullLegend.id === legend.id) {
          fullLegend.legendData.push({
            legendTitle: legend.title,
            legendId: legend.id,
            legendColor: legend.color,
            values: legend.values,
          });
        }
      })
    });
  });

  return {
    fullLegends: fullLegends,
    plots: plots,
  }
})();
