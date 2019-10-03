const axios = require('axios');
const { readFile, writeFile } = require('fs').promises;
const _ = require('lodash')
const db = 'https://my-json-server.typicode.com/asteroidb612/sturdy-system/';

axios.get(db + 'oldInterviews', {params: {success: true}}).then(function(report) {
  const reportData = JSON.parse(report)
  const emails = [];
  for (const r of reportData) {
    for (const email of r.users) {
      emails.push(email)
    }
  }
  const uniqEmails = _.uniq(emails);

  let output = 'email\n'
  for (var i=0; i<uniqEmails.length; i++ ) 
    output += `${uniqEmails[i]}\n`
  writeFile('output.csv', output).catch(function() {
      console.log("Error", err);
  });
});
