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
          values: [71, 74, 76, 77, 63, 74, 72, 46, 23.8, 62, 59.6, 40.5],
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
          values: [71, 74, 76, 77, 63, 74, 72, 46, 23.8, 62, 59.6, 40.5],
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

  const reducedLegends = [];
  plots.forEach((plot) => {
    plot.legends.forEach((legend) => {
      if (reducedLegends.filter((reducedLegend) => reducedLegend.id === legend.id).length === 0) {
        reducedLegends.push({
          id: legend.id,
          title: legend.title,
          color: legend.color,
        });
      }
    });
  });

  return {
    reducedLegends: reducedLegends,
    plots: plots,
  }
})();

window.valuesData = (function() {
  const plots = [
    {
      id: 1,
      title: 'from USA',
    },
    {
      id: 2,
      title: 'from Greece',
    },
    {
      id: 3,
      title: 'from China',
    },
  ];
  const legends = [
    {
      id: 1,
      color: '',
      title: 'Apples',
    },
    {
      id: 2,
      color: '',
      title: 'Oranges',
    },
  ];
  const values = [
    {
      legendId: 1,
      plotId: 1,
      list: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
    },
    {
      legendId: 1,
      plotId: 2,
      list: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
    },
    {
      legendId: 1,
      plotId: 3,
      list: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
    },
    {
      legendId: 2,
      plotId: 1,
      list: [71, 74, 76, 77, 63, 74, 72, 46, 23.8, 62, 59.6, 40.5],
    },
    {
      legendId: 2,
      plotId: 2,
      list: [71, 74, 76, 77, 63, 74, 72, 46, 23.8, 62, 59.6, 40.5],
    },
    {
      legendId: 2,
      plotId: 3,
      list: [71, 74, 76, 77, 63, 74, 72, 46, 23.8, 62, 59.6, 40.5],
    },
  ];

  const fullPlots = plots.map((plot) => {
    const fullPlot = Object.assign({}, plot);

    fullPlot.legends = legends.map((legend) => {
      return {
        id: legend.id,
        title: legend.title,
        color: legend.color,
        values: values.filter((value) => (value.plotId === plot.id) && (value.legendId === legend.id))[0].list,
      }
    });

    return fullPlot;
  });

  return {
    fullPlots: fullPlots,
    legends: legends,
  };
})();
