google.charts.load('current', {'packages':['corechart']});  //Pie
google.charts.load('current', {'packages':['corechart']}); ///Clandestick
google.charts.load('current', {'packages':['gauge']}); // Gauge
google.charts.load('current', {'packages':['corechart']}); //Bubble
google.charts.load('current', {'packages':['corechart']});//Waterfal
google.charts.load('current', {packages:["orgchart"]}); //Organization
      
      
      
      google.charts.setOnLoadCallback(Pie); 
      google.charts.setOnLoadCallback(Clandestick);
      google.charts.setOnLoadCallback(Gauge);
      google.charts.setOnLoadCallback(Bubble);
      google.charts.setOnLoadCallback(Waterfal);
      google.charts.setOnLoadCallback(Organization);

  function Pie() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Campiñones', 2.5],
       ['Catsup', 0.5],
       ['Queso', 5],
       ['Pepperoni', 3],
       ['Jamon', 1],
       ['Piña', 3]
    ]);
  
    // Set chart options
    var options = {'title':'¿Cuanta Pizza comiste anoche?',};
  
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('pie'));
    chart.draw(data, options);
  }

  function Clandestick() {
    var data = google.visualization.arrayToDataTable([
      ['Lun', 10, 18, 16, 20],
      ['Mar', 20, 18, 15, 10],
      ['Mier', 20, 15, 18, 8],
      ['Jue', 17, 17, 16, 5],
      ['Vier', 18, 6, 2, 15]
      // Treat first row as data as well.
    ], true);

    var options = {
      legend:'none'
    };

    var chart = new google.visualization.CandlestickChart(document.getElementById('Clandestick'));

    chart.draw(data, options);
  }

  function Gauge() {

    var data = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['Memoria', 80],
      ['CPU', 55],
      ['Network', 68]
    ]);

    var options = {
      width: 400, height: 150,
      redFrom: 90, redTo: 100,
      yellowFrom:75, yellowTo: 90,
      minorTicks: 10
    };

    var chart = new google.visualization.Gauge(document.getElementById('Gauge'));
    
    chart.draw(data, options);

    setInterval(function() {
      data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
      chart.draw(data, options);
    }, 13000);
    setInterval(function() {
      data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
      chart.draw(data, options);
    }, 5000);
    setInterval(function() {
      data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
      chart.draw(data, options);
    }, 26000);
  }

  function Bubble() {

    var data = google.visualization.arrayToDataTable([
      ['ID', 'Life Expectancy', 'Fertility Rate', 'Region',     'Population'],
      ['CAN',    80.66,              1.67,      'North America',  33739900],
      ['DEU',    79.84,              1.36,      'Europe',         81902307],
      ['DNK',    78.6,               1.84,      'Europe',         5523095],
      ['EGY',    72.73,              2.78,      'Middle East',    79716203],
      ['GBR',    80.05,              2,         'Europe',         61801570],
      ['IRN',    72.49,              1.7,       'Middle East',    73137148],
      ['IRQ',    68.09,              4.77,      'Middle East',    31090763],
      ['ISR',    81.55,              2.96,      'Middle East',    7485600],
      ['RUS',    68.6,               1.54,      'Europe',         141850000],
      ['USA',    78.09,              2.05,      'North America',  307007000]
    ]);

    var options = {
      title: 'Fertility rate vs life expectancy in selected countries (2010).' +
        ' X=Life Expectancy, Y=Fertility, Bubble size=Population, Bubble color=Region',
      hAxis: {title: 'Life Expectancy'},
      vAxis: {title: 'Fertility Rate'},
      bubble: {textStyle: {fontSize: 11}}
    };

    var chart = new google.visualization.BubbleChart(document.getElementById('Bubble'));
    chart.draw(data, options);
  }

  function Waterfal() {
    var data = google.visualization.arrayToDataTable([
      ['Mon', 28, 28, 38, 38],
      ['Tue', 38, 38, 55, 55],
      ['Wed', 55, 55, 77, 77],
      ['Thu', 77, 77, 66, 66],
      ['Fri', 66, 66, 22, 22]
      // Treat the first row as data.
    ], true);

    var options = {
      legend: 'none',
      bar: { groupWidth: '100%' }, // Remove space between bars.
      candlestick: {
        fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
        risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
      }
    };

    var chart = new google.visualization.CandlestickChart(document.getElementById('Waterfal'));
    chart.draw(data, options);
  }

  function Organization() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Name');
    data.addColumn('string', 'Manager');
    data.addColumn('string', 'ToolTip');

    // For each orgchart box, provide the name, manager, and tooltip to show.
    data.addRows([
      [{'v':'Mike', 'f':'Mike<div style="color:red; font-style:italic">President</div>'},
       '', 'The President'],
      [{'v':'Jim', 'f':'Jim<div style="color:red; font-style:italic">Vice President</div>'},
       'Mike', 'VP'],
      ['Alice', 'Mike', ''],
      ['Bob', 'Jim', 'Bob Sponge'],
      ['Carol', 'Bob', '']
    ]);

    // Create the chart.
    var chart = new google.visualization.OrgChart(document.getElementById('Organization'));
    // Draw the chart, setting the allowHtml option to true for the tooltips.
    chart.draw(data, {'allowHtml':true});
  }