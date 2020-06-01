// Canal que irá receber os reports
const reportchannel = message.guild.channels.cache.find(ch => ch.id === '707653323695718522');

// Armazenamento de membro em variável
let rUser = message.guild.member(message.mentions.users.first());
if (!rUser) 
    return message.reply("Mencione quem você quer reportar!");

// motivo 
let rreason = args.join(" ").slice(22);
if (!rreason) 
    return message.reply("Especifique um motivo! Não é possivel reportar alguém sem um motivo."); 

// Embed construido que será mandado do canal de reports
let reportEmbed = new Discord.MessageEmbed().setTitle("Usuário reportado.")
.setColor("#fbff00")
.setThumbnail("https://www.pinclipart.com/picdir/middle/1-12435_ace-attorney-clipart-objection-ace-attorney-objection-meme.png")
.addField("Usuário reportado:", `${rUser} ID: ${rUser.id}`)
.addField("Reportado por: ", `${message.author} ID: ${message.author.id}`)
.addField("Hora: ", message.createdAt)
.addField("Motivo: ", rreason);

// Envio da mensagem de report no canal declarado.
reportchannel.send(reportEmbed);

// Deleta a mensagem de report. 
message.delete().catch(O_o=>{});