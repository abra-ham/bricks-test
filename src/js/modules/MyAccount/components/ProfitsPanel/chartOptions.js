const salesData = [];
const rentsData = [];
const others = [];

const getData = data => {
  if (data) {
    data.forEach(element => {
      salesData.push(element.profits.sales);
      rentsData.push(element.profits.rents);
      others.push(element.profits.others);
    });
  }
}

const options = data => {
  getData(data);

  return {
    legend: { 
      align: 'right',
      verticalAlign: 'top',
      x: -25,
      y: 1,
      floating: true,
      borderWidth: 0,
    },
    chart: {
      height: '484px',
      marginLeft: 1,
      marginRight: 1,
      marginTop: 0,
      borderRadius: 7,
      style: {
        fontFamily: 'Roboto',
      }
    },
    tooltip: {
      headerFormat: '<span style="text-align: center">4</span>',
      backgroundColor: '#757171',
      borderWidth: 0,
      borderRadius: 0,
      shadow: false,
      formatter: function () {
        let s = '<b>' + this.y + '</b>';
        return s;
      },
    },
    yAxis: {
      gridLineColor: 'rgba(211, 214, 225, 0.26)',
      gridLineWidth: 2,
      title: false,
      labels: {
        align: 'left',
        x: 7,
        y: 27.5
      }
    },
    title: false,
    plotOptions: {
      line: {
        lineWidth: 0.7,
        marker: { enabled: false },
      }
    },
    series: [
      {
        name: 'Utilidad de Ventas',
        color: '#80afcc',
        data: salesData,
      },
      {	
        name: 'Rentas Recibidas',
        color: 'red',
        data: rentsData,
      },
      {	
        name: 'Otros',
        color: '#7ed321',
        data: others,
      },
    ]
  }
}

export default options;
