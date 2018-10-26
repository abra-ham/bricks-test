const options = (data = {}) => {
	const { industrial, commercial, houses, offices } = data;
  return {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
			plotShadow: false,
			style: {
				fontFamily: 'Roboto'
			},
      type: 'pie',
      height: '214px',
      width: '200',
      padding: 0,
      margin: 0
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
          name: 'Industrial',
          y: industrial,
          color: '#306aae',
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
          name: 'Comercial',
          y: commercial,
          color: '#4a90e2',
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
				},
				{
          name: 'Casa habitación',
          y: houses,
          color: '#8bb6ea',
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
				},
				{
          name: 'Oficinas',
          y: offices,
          color: '#daebff',
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
