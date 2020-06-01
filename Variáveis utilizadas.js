// Essas foram as variáveis utilizadas para criar os comandos. 

// O comando é dado pelo prefixo + nome do comando. 

let prefix = botconfig.prefix;
let messageArray = message.content.split(" ");
let cmd = messageArray[0].toLowerCase();
let args = messageArray.slice(1);