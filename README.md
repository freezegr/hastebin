<h1 align="center">Welcome to Hastebin-Note 👋</h1>
<p align="center">
  <img src="https://img.shields.io/npm/v/hastebin-note?orange=blue" />
  <a href="https://www.npmjs.com/package/hastebin-note">
    <img alt="downloads" src="https://img.shields.io/npm/dm/hastebin-note.svg?color=blue" target="_blank" />
  </a>
  <a href="https://github.com/freezegr/insta.js/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg" target="_blank" />
  </a>
  <a href="https://discord.gg/pQdhaUBFcc">
    <img src="https://img.shields.io/static/v1?label=owner&message=freezegr&color=blue" alt="owner">
  </a>
</p>

---

- [Installation](#Installation)
    - [Upload](#Upload)
    - [option.raw](#option.raw)
    - [option.server](#option.server)
- [Table](#Table)
- [Support](https://discord.gg/pQdhaUBFcc)

## Installation 

`npm i hastebin-note`

## Upload

```js
const hastebin = require('hastebin-note');

hastebin('hello world').then((url) => {
  console.log(url) //-> https://hastebin.de/owixegarak
});
```

## option.raw

```js
const hastebin = require('hastebin-note');

let options = {
  raw: true
};

hastebin('hello world', options).then((url) => {
  console.log(url) //-> https://hastebin.de/raw/owixegarak
});
```

## option.server

```js
const hastebin = require('hastebin-note');

let options = {
  server: 'https://hastebin.com/'
};

hastebin('hello world', options).then((url) => {
  console.log(url) //-> https://hastebin.com/owixegarak
});
```

## Table

[Cli-table](https://www.npmjs.com/package/cli-table) is a table maker npm.

```js
const Table = require(`cli-table`);
const hastebin = require('hastebin-note');

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
```
<img src="./img/table.png"/>