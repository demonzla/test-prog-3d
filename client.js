var prompt = require('prompt');
var rpc = require('avs-rpc');
var ioA = require('socket.io-client')('http://localhost:4141');

prompt.start()

var sideA = new rpc.ioRpc(ioA);
remote = sideA.remote('evalxxx');

function start(){
prompt.get(['comm'], function(err, result)
{
remote.evalxxx(result.comm, function(user, err){
  if (err)
    console.log("remote error in evalxxx: " + err);
  else
    console.log("output: " + user + " :");
start()});});
}

start()