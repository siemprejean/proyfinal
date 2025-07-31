
module.exports.sockets = {
  
  // Fuerza el uso de WebSockets
  transports: ['websocket'],

  // Permite conexiones desde cualquier origen (solo para pruebas, restringe luego)
  onlyAllowOrigins: ['*'],

  // Acepta todas las conexiones entrantes
  beforeConnect: function (handshake, proceed) {
    return proceed(undefined, true);
  },

  // Desactiva la reconexión automática (opcional, útil para debug)
  grant3rdPartyCookie: false
};
