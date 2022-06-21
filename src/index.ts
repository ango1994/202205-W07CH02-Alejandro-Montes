import http from 'http';
import { AddressInfo } from 'net';
import { app } from './app.js';

const PORT = process.env.PORT || 3200;

const onListening = () => {
  var addr = server.address();
  var bind =
    typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + (addr as AddressInfo).port;
  console.log('Listening on ' + bind);
};

app.set('port', PORT);
const server = http.createServer(app);
server.listen(PORT);

server.on('listening', onListening);
