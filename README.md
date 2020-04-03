## command to run the coverage tests using shell

using istanbul 
```
npx istanbul cover --include-all-sources jasmine-node test
```

using nyc
```
npx nyc jasmine-node test
```

## output of the coverage data

## command to instrument the code
When running tests using istanbul command from the command line, the instrumented code is not persisted when generating reports.

To persist instrumented code from command line
```
mkdir instrumented-code
npx istanbul instrument dir1 --output instrumented-code
```

Using the API you can instrument files also
```javascript
// Example of Instrumenting code using API
var Istanbul = require('istanbul');
var instrumenter = new Istanbul.Instrumenter();
var file = fs.readFileSync('../dir1/wee.js');
var instrumented = instrumenter.instrumentSync(fs.readFileSync('../dir1/wee.js').toString())
```

## How to generate reports

Generate istanbul reports from the coverage object:
```javascript
var Istanbul = require('istanbul');

// collect the coverage objects and can merge them together
var collector = new Istanbul.Collector(); 
collector.add(coverage);

// write the istanbul reports to filesystem
var reportsDir = '../coverage/reports';  // where reports will be written
var reportTypes = ['html', 'json-summary', 'json'] // istanbul report types desired
var reporter = new Istanbul.Reporter(false, reportsDir);
reporter.addAll(); 
reporter.write(collector, false, callback);
```

## reports

Coverage JSON - coverage/coverage-final.json
Coverage Summary JSON - coverage/reports/coverage-summary.json
Coverage HTML - coverage/index.html (and all non-json files & dirs)
