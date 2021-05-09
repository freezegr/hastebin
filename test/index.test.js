const hastebin = require('../index.js');
const Table = require(`cli-table`);

let table = new Table({
  head: [
    `Count`,
    `Name`,
    `ID`,
    `level`,
    `pings`
  ], colWidths: [7, 25, 10, 10, 10]
});

let players = [
  {
    name: 'freeze',
    id: '2321',
    pings: 80,
    level: 60
  },
  {
    name: 'NotIwannis',
    id: 452,
    pings: 9265,
    level: 42
  },
  {
    name: 'roflis',
    id: '2321',
    pings: 80,
    level: 56
  }
];

players.forEach((player, count) => table.push([count, player.name, player.id, player.level, player.pings+'ms']));

hastebin(table.toString().replace(/\u001b[^m]*?m/g,"")).then((url) => {
  console.log(url)
});