const axios = require('axios');
const { readFile, writeFile } = require('fs');
const _ = require('lodash')

readFile('rounds.json', function engReportToSupportReport(err, report) {
  const reportData = JSON.parse(report)
  const emails = _.flatMap(reportData, 'users');
  const uniqEmails = _.uniq(emails);

  let output = 'email\n'
  for (var i=0; i<uniqEmails.length; i++ ) 
    output += `${uniqEmails[i]}\n`
  writeFile('output.csv', output, function(err) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log('Write success')
    }
  });
});
