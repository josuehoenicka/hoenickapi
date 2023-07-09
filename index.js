const http = require('http')

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
  
//   const json = JSON.stringify(objetos);
//   console.log(json);

const app = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(topFootballPlayers));
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`)