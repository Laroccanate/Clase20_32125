import { app } from './app.js'

const PORT = process.env.PORT || 8080;

const connectedServer = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`);
  });
  
  connectedServer.on('error', (error) => console.log(`Error en servidor ${error}`));