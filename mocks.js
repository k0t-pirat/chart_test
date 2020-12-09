window.mocks = (function() {
  const LEGEND_TITLES = ['Apples', 'Oranges', 'Bananas'];
  const PLOT_TITLES = ['USA', 'China'];
  
  const legends = LEGEND_TITLES.map((title, index) => {
    return {
      id: index + 1,
      color: '',
      title: title,
    }
  });

  const plots = PLOT_TITLES.map((title, index) => {
    return {
      id: index + 1,
      title: title,
    }
  });

  const getRandomInteger = (a = 0, b = 1) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    return Math.floor(lower + Math.random() * (upper - lower + 1));
  };
  
  const getRandomDecimal = (a, b) => {
    return getRandomInteger(a * 10, b * 10) / 10;
  };
  
  const getValues = (amount = 15) => {
    const values = [];
  
    for (i = 0; i < amount; i++) {
      values.push(getRandomDecimal(30, 250));
    }

    return values;
  };
  
  const getValuesData = () => {
    const values = [];

    plots.forEach((plot) => {
      legends.forEach((legend) => {
        values.push({
          legendId: legend.id,
          plotId: plot.id,
          list: getValues(),
        });
      });
    });

    return values;
  };

  const outerLegends = legends.map((legend, legendIndex) => {
    return {
      id: legendIndex + 1,
      title: legend.title,
      color: legend.color,
      plots: plots.map((plot, plotIndex) => {
        return {
          id: plotIndex + 1,
          title: plot.title,
          values: getValues(),
        };
      }),
    }
  });

  const outerPlots = plots.map((plot, plotIndex) => (
    {
      id: plotIndex + 1,
      title: plot.title,
      legends: legends.map((legend, legendIndex) => (
        {
          id: legendIndex + 1,
          title: legend.title,
          color: legend.color,
          values: getValues(),
        }
      )),
    }
  ));

  return {
    values: getValuesData(),
    legends: legends,
    plots: plots,
    outerLegends: outerLegends,
    outerPlots: outerPlots,
  }
})();

// [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4];
// [71, 74, 76, 77, 63, 74, 72, 46, 23.8, 62, 59.6, 40.5];
