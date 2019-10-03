const axios = require('axios');
const { writeFile } = require('fs');
const _ = require('lodash')
const db = 'http://localhost:3000/';

axios.get(db + 'oldInterviews', {params: {success: true}}).then(function(response) {
  const emails = [];
  for (const interview of response.data) {
    for (const email of interview.users) {
      emails.push(email)
    }
  }
  const uniqEmails = _.uniq(emails);

  let output = 'email\n'
  for (var i=0; i<uniqEmails.length; i++ ) 
    output += `${uniqEmails[i]}\n`
  writeFile('output.csv', output, function(err) {
    if (err) console.log("Error", err);
  });
}).catch(err => {
  console.log(err)
});
