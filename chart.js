
// Variables Defined

var selected=[];
var nation=[];


var svg1 = d3.select("svg"),
    margin = {top: 20, right: 80, bottom: 30, left: 50},
    width = svg1.attr("width") - margin.left - margin.right,
    height = svg1.attr("height") - margin.top - margin.bottom,
    g = svg1.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var parseTime = d3.timeParse("%Y%m%d");
var parseYear = d3.timeParse("%Y");


var x = d3.scaleTime().range([0, width]),
    y = d3.scaleLinear().range([height, 0]),
    z = d3.scaleOrdinal(d3.schemeCategory10);

var line = d3.line()
    .curve(d3.curveBasis)
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.UER); });

 var state ;





//load data
d3.csv("test.csv", type, function(error, data) {
  if (error) throw error;

  //load states
  var states = data.columns.slice(1).map(function(id) {
    return {
      id: id,
      values: data.map(function(d) {
        return {date: d.date, UER: d[id]};
      })
    };
  });

  
  //x.domain(d3.extent([parseYear(+minDate),parseYear(+maxDate)]));
  x.domain(d3.extent(data, function(d) { return d.date; }));


  y.domain([
    d3.min(states, function(c) { return d3.min(c.values, function(d) { return d.UER; }); }),
    d3.max(states, function(c) { return d3.max(c.values, function(d) { return d.UER; }); })
  ]);

  z.domain(states.map(function(c) { return c.id; }));

  g.append("g")
      .attr("class", "axis axis--x")
      .call(d3.axisBottom(x))
      .attr("transform", "translate(0," + height + ")");

  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y))
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("fill", "#000")
      .text("Unemployment Rate");


 state = g.selectAll(".state")
    .data(states)
    .enter().append("g")
    .attr("class", "state"); 

});  



function type(d, _, columns) {
  d.date = parseTime(d.date);
  for (var i = 1, n = columns.length, c; i < n; ++i) d[c = columns[i]] = +d[c];
  return d;
}

 
 function displayNationWide()
  {

    nation.push("NationWide");

  } 

      
