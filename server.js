var rpc = require('avs-rpc');
var io = require('socket.io');
var a = 100; 
function evalxxx(func) { try {return eval(func)} catch(err) {return err.message} }
var local = {}; // interface declaration 
local.evalxxx = evalxxx;
 
var ioB = io(4141);
ioB.on('connection', function(socket) {
  console.log("NEW connection "+socket.id);
  var sideB = new rpc.ioRpc(socket);
  sideB.implement(local);
});

