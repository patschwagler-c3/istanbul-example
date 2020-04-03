var fs = require('fs');
var Istanbul = require('istanbul');

function readCoverageFromJSON (filenames) {
  var collector = new Istanbul.Collector();
  filenames.forEach(function (filename) {
    var contents = fs.readFileSync(filename, 'utf8');
    collector.add(JSON.parse(contents));
  });
  return collector;
}

function writeReports (collector, reportTypes, reportDir) {
  var reporter = new Istanbul.Reporter(false, reportDir);
  reporter.addAll(reportTypes); 
  reporter.write(collector, false, function () { console.log('done'); });
}


// Example of creating & saving reports from JSON
var files = ['./coverage/coverage-final.json'];
var reports = ['html', 'json-summary', 'json'];
var dir = './coverage/reports';
var collector = readCoverageFromJSON(files);
writeReports(collector, reports, dir);


// Example of instrumenting the code
var instrumenter = new Istanbul.Instrumenter();
var file = fs.readFileSync('../dir1/wee.js');
var changed = instrumenter.instrumentSync(fs.readFileSync('../dir1/wee.js').toString())


