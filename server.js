const app = require('./app');
const port = 5000;

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
