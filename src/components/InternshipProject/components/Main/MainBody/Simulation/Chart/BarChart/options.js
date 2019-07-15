export default {
  responsive: true,
  maintainAspectRatio: true,
  barThickness: 1,
  legend: {
    display: false
  },
  layout: {
    padding: {
      left: 50,
      right: 50,
      top: 0,
      bottom: 0
    }
  },
  scales: {
    yAxes: [
      {
        barPercentage: 0.1,
        categoryPercentage: 0.1,
        gridLines: {
          offsetGridLines: false,
          color: 'none',
          // borderDash: [1, 2, 3],
          // lineWidth: 0.01,
          drawBorder: false
        },
        ticks: {
          callback: function(value, index, values) {
            return `$${value}k        `;
          },
          display: true,
          stacked: true,
          beginAtZero: false,
          // min: 10,
          max: 30,
          steps: 10,

          stepSize: 10,
          major: {
            fontColor: '#666',
            fontSize: '100'
          },
          minor: {
            fontColor: '#666'
            // fontSize: '100'
          }
        }
      }
    ],
    xAxes: [
      {
        barPercentage: 0.3,
        categoryPercentage: 1.05,
        // barThickness: 5,
        gridLines: {
          offsetGridLines: false,
          lineWidth: 0.01
        }
      }
    ]
  }
};
