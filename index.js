// const http = require('http')
const express = require('express');
const app = express();

const topFootballPlayers = [
  {
    nombre: "Messi",
    nationality: "Argentinian",
    top: 1,
  },
  {
    nombre: "Pelé",
    nationality: "Brazilian",
    top: 2,
  },
  {
    nombre: "Maradona",
    nationality: "Argentinian",
    top: 3,
  },
  {
    nombre: "C. Ronaldo",
    nationality: "Portuguese",
    top: 4,
  },
  {
    nombre: "Cruyff",
    nationality: "Netherlander",
    top: 5,
  }
];

/*
const app = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(topFootballPlayers));
});
*/

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/players', (request, response) => {
  response.json(topFootballPlayers)
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
