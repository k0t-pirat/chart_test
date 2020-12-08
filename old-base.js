// console.log(Highcharts);

// document.addEventListener('DOMContentLoaded', () => {
//   Highcharts.chart('container', {
//     chart: {
//       type: 'bar',
//     },
//     title: {
//       text: 'test-bar',
//     },
//     xAxis: {
//       categories: ['top', 'middle', 'bottom', 'creep'],
//     },
//     yAxis: {
//       title: {
//         text: 'SOme textr',
//       }
//     },
//     series: [
//       {
//         name: 'Valera',
//         data: [1, 5, 7, 1],
//       },
//       {
//         name: 'Andjei',
//         data: [3, 3, 8, 2],
//       }
//     ]
//   });
// });

Highcharts.setOptions({
  chart: {
      backgroundColor: {
          linearGradient: [0, 0, 500, 500],
          stops: [
              [0, 'rgb(255, 255, 255)'],
              [1, 'rgb(240, 240, 255)']
          ]
      },
      borderWidth: 2,
      plotBackgroundColor: 'rgba(255, 255, 255, .9)',
      plotShadow: true,
      plotBorderWidth: 1
  }
});
var chart1 = new Highcharts.Chart({
  chart: {
      renderTo: 'container',
  },
  xAxis: {
      type: 'datetime'
  },
  series: [
    {
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      pointStart: Date.UTC(2010, 0, 1),
      pointInterval: 3600 * 1000 // one hour
    },
    {
      data: [39.9, 61.5, 107.2, 113.2, 145.5, 186.0, 185.6, 208.5, 213.3, 154.1, 125.6, 52.3],
      pointStart: Date.UTC(2010, 0, 1),
      pointInterval: 3600 * 1000 // one hour
    }
  ]
});
// var chart2 = new Highcharts.Chart({
//   chart: {
//       renderTo: 'container2',
//       type: 'column'
//   },
//   xAxis: {
//       type: 'datetime'
//   },
//   series: [{
//       data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
//       pointStart: Date.UTC(2010, 0, 1),
//       pointInterval: 3600 * 1000 // one hour
//   }]
// });

// var struct = [
//   {
//     id: 1,
//     legend: `Apples`,
//     data: [
//       {
//         type: 'from USA',
//         values: [123, 321],
//       },
//       {
//         type: 'from Greece',
//         values: [456, 654],
//       },
//     ]
//   },
//   {
//     id: 2,
//     legend: `Oranges`,
//     data: [
//       {
//         type: 'from USA',
//         values: [789, 987],
//       },
//       {
//         type: 'from Greece',
//         values: [987, 789],
//       },
//     ]
//   },
// ];

// var struct = [
//   {
//     legend: 'Apples',
//     type: 'from USA',
//     values: [123, 321],
//   },
//   {
//     legend: 'Apples',
//     type: 'from Greece',
//     values: [456, 654],
//   },
//   {
//     legend: 'Oranges',
//     type: 'from USA',
//     values: [123, 321],
//   },
//   {
//     legend: 'Oranges',
//     type: 'from Greece',
//     values: [456, 654],
//   },
// ];
