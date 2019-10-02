var faker  = require('faker');
var {writeFile} = require('fs');
var _ = require('lodash');
var uuid = require('uuid');


const roundsReport1 = []
const roundsReport2 = []
const rCount = 100;

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
  const round = {
    start : faker.date.past(),
    success: faker.random.boolean(),
    attendingUsers
  };
  roundsReport1.push(round);
}

for (var i=0; i < rCount; i++) {
  const attendingUsers = _.map(_.sampleSize(users, 2), u => {
    const pseudonym = `${faker.hacker.ingverb()} ${faker.company.bsNoun()}`;
    u.pseudonyms.push(pseudonym);
    return pseudonym;
  });
  const round = {
    start : faker.date.past(),
    success: faker.random.boolean(),
    attendingUsers
  };
  roundsReport2.push(round);
}

writeFile("./users.json", JSON.stringify(users), err => {});
writeFile("./rounds-1.json", JSON.stringify(roundsReport1), err => {});
writeFile("./rounds-2.json", JSON.stringify(roundsReport2), err => {});
