// //import require module
// import express from "express";
// import cors from "cors";
// import sequelize from "./config/db";

// //initialize Express App
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// app.get("/", (req, res) => {
//     res.json({message: "itworks1"});
// });

// //initialize Sequelize with the config.tsx file
// (async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection to database established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to database:', error);
//     process.exit(1);
//   }
// })();
// const PORT = process.env.PORT || 8080
// app.listen(PORT, () => {
//     console.log(`server is running on port ${PORT}`);
// });
const http = require('http'); //Import Node.js core module
const app = require('./app');


const normalizePort = (val:any) => { //normalizePort this function returns a valid port wether it's a number or a string.
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if(port >= 0) {
        return port;
    }
    return false;
};

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const errorHandler = (error:any) => { // errorHandler this function seek all the errors and handle it. then save it in the server. 
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
            default:
                throw error;
    }
};

const server = http.createServer(app); 


server.on('error', errorHandler);
server.on('listening', () => { // event listener store the port or the canal named after it on which the server is executing.
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('listening on ' + bind);
})

server.listen(port);