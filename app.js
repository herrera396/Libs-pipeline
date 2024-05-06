const app = require('./config/serverConfig')

const PORT = 3009

app.listen(PORT, function () {
  console.log(`Servidor Express - OK - Porta:${PORT}`)
})