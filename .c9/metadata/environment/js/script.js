{"filter":false,"title":"script.js","tooltip":"/js/script.js","undoManager":{"mark":2,"position":2,"stack":[[{"start":{"row":0,"column":0},"end":{"row":41,"column":1},"action":"insert","lines":["queue()","    .defer(d3.json, \"../data/transactionData.json\")","    .await(makeGraphs);","","  // fetch(\"../data/transactionData.json\")","   // .then(function(results){","     //   results.json().then(function(results){","       //  makeGraphs(null,results);","//        });","  //  });","    ","function makeGraphs(error, transactionData) {","    console.log(transactionData);","    var ndx = crossfilter(transactionData);","    var store_dim = ndx.dimension(dc.pluck('store'));","    var total_score_per_store = store_dim.group().reduceSum(dc.pluck('cost'));","","   show_test(ndx);","","    dc.renderAll();","","console.log(d3);","","function show_test(ndx){","    var VariableDim= ndx.dimension(dc.pluck('store'))","","","dc.barChart(\"#test\")","    .width(600)","    .height(300)","    .margins({ top: 10, right: 50, bottom: 30, left: 50 })","    .dimension(store_dim)","    .group(total_score_per_store)","    .transitionDuration(1000)","    .x(d3.scale.ordinal())","    .xUnits(dc.units.ordinal) ","    .xAxisLabel(\"The Stores!\")","    .yAxis().ticks(6);","    ","","}","}"],"id":1}],[{"start":{"row":1,"column":22},"end":{"row":1,"column":23},"action":"remove","lines":["."],"id":2}],[{"start":{"row":1,"column":22},"end":{"row":1,"column":23},"action":"insert","lines":["."],"id":3}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":1,"column":23},"end":{"row":1,"column":23},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1579096774615,"hash":"f9560a931638836fe83a593178516d966f1cb329"}