// Deleta a mensagem que deu o comando.
message.delete(message);

// Embed
const tutoclearembed = new Discord.MessageEmbed()
.setColor("#5a0091")
.setDescription(`${message.author}, este comando aceita apenas numeros entre 2 e 100.`)
.addField("Exemplo", "`.clear 10`");

// Armazena o numero de mensagens que deve ser apagada/Check se é um numero.
let clearmessage = args[0];
if (isNaN(clearmessage)) {
    return message.reply("Eu só consigo apagar números... Digite números, por favor.")
}

// Check se o numero de mensagens está entre 2 e 100, caso esteja, apaga. Ao contrário, envia o Embed.
if (clearmessage >= 2 && clearmessage <= 100) {
    message.channel.bulkDelete(clearmessage, true);
                
    const simpleembedclear = new Discord.MessageEmbed()
    .setColor("#0ffc03")
    .setDescription(`${message.author}, ${clearmessage} mensagens foram apagadas neste canal.`);
                
    message.channel.send(simpleembedclear)
    .then(msg => { msg.delete({ timeout: 5000 })})

    } else {
        message.channel.send(tutoclearembed);
      }