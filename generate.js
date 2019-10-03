var faker  = require('faker');
var {writeFile} = require('fs');
var _ = require('lodash');
var uuid = require('uuid');


const interviewsReport1 = []
const interviewsReport2 = []
const rCount = 30;

const users = [];
const uCount = 100;

for (var i = 0; i < uCount; i++) {
  const user = {
    id: uuid.v1(),
    email: faker.internet.email(),
    name: faker.name.findName(),
    pseudonyms: []
  };
  users.push(user)
}

for (var i=0; i < rCount; i++) {
  const attendingUsers = _.map(_.sampleSize(users, 2), u => {
    return u.email;
  });
  const interview = {
    start : faker.date.past(),
    success: faker.random.boolean(),
    users:  attendingUsers
  };
  interviewsReport1.push(interview);
}

for (var i=0; i < rCount; i++) {
  const attendingUsers = _.map(_.sampleSize(users, 2), u => {
    const pseudonym = `${faker.hacker.ingverb()} ${faker.company.bsNoun()}`;
    u.pseudonyms.push(pseudonym);
    return pseudonym;
  });
  const interview = {
    start : faker.date.past(),
    success: faker.random.boolean(),
    users: attendingUsers
  };
  interviewsReport2.push(interview);
}

writeFile("./db.json", JSON.stringify({users, oldInterviews: interviewsReport1, newInterviews: interviewsReport2}), err => {});
