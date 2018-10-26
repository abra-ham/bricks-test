const options = (actual = 0, estimated = 0) => {
  return {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      height: '214px',
      
      width: '180',
      margin: [0, 0, 0, 0]
    },
    title: false,
    tooltip: false,
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        innerSize: '40%',
      }
    },
    series: [{
      name: 'Share',
      data: [
        {
          name: 'Investment',
          y: actual,
          color: '#3ab398',
          dataLabels: {
            enabled: true,
            format: '{point.percentage: .1f} %',
            distance: -10,
            filter: {
              property: 'percentage',
              operator: '>',
              value: 4
            },
            style: {
              color: 'white',
              fontWeight: 'bold',
              fontSize: '15',
              textOutline: '0px contrast',
            }
          }
        },
        {
          name: 'Profits',
          y: estimated,
          color: '#d9fff7',
          dataLabels: {
            enabled: true,
            format: '{point.percentage: .1f} %',
            distance: -20,
            filter: {
              property: 'percentage',
              operator: '>',
              value: 4
            },
            style: {
              color: 'black',
              fontWeight: 'bold',
              fontSize: '15',
              textOutline: '0px contrast',
            }
          }
        }
      ]
    }]
  }
}

export default options;
