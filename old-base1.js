p

var chart1 = new Highcharts.Chart({
  chart: {
    renderTo: 'container1',
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },

  legend: {
    enabled: false
  },

  series: [{
    id: 'someId1',
    name: 'Apples',
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
  }, {
    id: 'someId2',
    name: 'Bananas',
    data: [71, 74, 76, 77, 63, 74, 72, 46, 23.8, 62, 59.6, 40.5]
  }]
});

var chart2 = new Highcharts.Chart({
  chart: {
    renderTo: 'container2',
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  legend: {
    enabled: false,
    align: 'right',
    verticalAlign: 'top',
    // floating: true,
    layout: 'vertical',
    margin: 30,
    backgroundColor: '#FCFFC5', 
  },

    // plotOptions: {
    //   series: {
    //     events: {
    //       legendItemClick: function() {
    //         var clickChart1 = chart1;
    //         var series1 = clickChart1.get(this.options.id);
    //         var clickChart3 = chart3;
    //         var series3 = clickChart3.get(this.options.id);

    //           console.log(this)
    //           console.log(this.options);
    //           console.log(this.options.id);

    //         if (series1) {
    //           if (this.visible) {
    //             series1.hide();
    //           } else {
    //             series1.show();
    //           }
    //         }
    //         if (series3) {
    //           if (this.visible) {
    //             series3.hide();
    //           } else {
    //             series3.show();
    //           }
    //         }
    //       }
    //     }
    //   }
    // },
  series: [{
    id: 'someId1',
    name: 'Apples',
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
  }, {
    id: 'someId2',
    name: 'Bananas',
    data: [71, 74, 76, 77, 63, 74, 72, 46, 23.8, 62, 59.6, 40.5]
  }]
});

var chart3 = new Highcharts.Chart({
  chart: {
    renderTo: 'container3',
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },

  legend: {
    enabled: false
  },

  series: [{
    id: 'someId1',
    name: 'Apples',
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
  }, {
    id: 'someId2',
    name: 'Bananas',
    data: [71, 74, 76, 77, 63, 74, 72, 46, 23.8, 62, 59.6, 40.5]

  }]
});

var legend1 = document.querySelector('#legend1');
var legend2 = document.querySelector('#legend2');

var onCustomLegendClick = (evt) => {
  const legendDataset = evt.currentTarget.dataset;
  var clickChart1 = chart1;
  var series1 = clickChart1.get(legendDataset.legendId);
  var clickChart2 = chart2;
  var series2 = clickChart2.get(legendDataset.legendId);
  var clickChart3 = chart3;
  var series3 = clickChart3.get(legendDataset.legendId);

  if (series1) {
    if (legendDataset.visible) {
      series1.hide();
      legendDataset.visible = 'visible';
    } else {
      series1.show();
      legendDataset.visible = '';
    }
  }
  if (series2) {
    if (legendDataset.visible) {
      series2.hide();
      legendDataset.visible = 'visible';
    } else {
      series2.show();
      legendDataset.visible = '';
    }
  }
  if (series3) {
    if (legendDataset.visible) {
      series3.hide();
      legendDataset.visible = '';
    } else {
      series3.show();
      legendDataset.visible = 'visible';
    }
  }
}


legend1.addEventListener('click', onCustomLegendClick);
legend2.addEventListener('click', onCustomLegendClick);
