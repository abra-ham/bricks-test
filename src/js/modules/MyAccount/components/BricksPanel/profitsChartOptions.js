const options = (investment, capitalGain) => {
  return {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      height: '214px',
      width: '200',
      padding: 0,
      margin: 0,
      style: {
				fontFamily: 'Roboto'
			},
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
          y: investment,
          color: '#3ab398',
          dataLabels: {
            enabled: true,
            format: '{point.percentage: .1f} %',
            distance: -40,
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
          y: capitalGain,
          color: '#d9fff7',
          dataLabels: {
            enabled: true,
            format: '{point.percentage: .1f} %',
            distance: -40,
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
