Preentrega: Segunda Entrega del Proyecto Final
En este desarrolo de backend ecommerce se crearon 4 modos distintos de contenedores de datos:

Contenedor de datos en memoria.
Contenedor de datos en archivo JSON.
Contenedor de datos en MongoDb Altlas.
Contenedor de datos en Firebase.
En las rutas de este servidor se utiliza una instancia de persistencia a travez de un data acces object(DAO). El DAO para los carritosse define el index de la carpeta src/dao/carritos o y para los productos en src/dao/productos. Se tomma la variable de entorno process.argv[2] para indicar que tipo de persistencia utilizaremos.

Para definir que tipo de DAO se utilizara se utlizaran los siguientes scripts
Contenedor en memoria:
    npm run start
Con el mismo se corre el script node server.js

Contenedor en archivo JSON.
    npm run startJson
Con el mismo se corre el script node server.js json

Contenedor en mongodb atlas
    npm run startMongo
Con el mismo se corre el script node server.js mongo

Contenedor en mongodb atlas
    npm run startFirebase
Con el mismo se corre el script node server.js firebase

Tanto como la variable de entorno como las opciones de conexion se encuentran en al archivo config.js.