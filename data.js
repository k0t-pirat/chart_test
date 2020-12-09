window.legendsData = (function() {
  const legends = window.mocks.outerLegends;

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
  const plots = window.mocks.outerPlots;

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
  const {values, plots, legends} = window.mocks;

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
