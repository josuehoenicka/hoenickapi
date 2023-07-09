const http = require('http')

const topFootballPlayers = [
  {
    nombre: "Objeto 1",
    nationality: "Nacionalidad 1",
    top: 1,
    description: "Descripción del objeto 1"
  },
  {
    nombre: "Objeto 2",
    nationality: "Nacionalidad 2",
    top: 2,
    description: "Descripción del objeto 2"
  },
  {
    nombre: "Objeto 3",
    nationality: "Nacionalidad 3",
    top: 3,
    description: "Descripción del objeto 3"
  },
  {
    nombre: "Objeto 4",
    nationality: "Nacionalidad 4",
    top: 4,
    description: "Descripción del objeto 4"
  },
  {
    nombre: "Objeto 5",
    nationality: "Nacionalidad 5",
    top: 5,
    description: "Descripción del objeto 5"
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