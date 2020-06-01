// Armazenamento de membro em variável e checks iniciais.
let kUser = message.guild.member(message.mentions.users.first());
if (!message.member.hasPermission("KICK_MEMBERS")) 
    return message.reply("Apenas um Game Master pode Kickar outros membros!");

// Check se o membro foi mencionado/está no servidor.
if (!kUser) 
    return message.reply("Mencione o membro que deseja kickar.");

// Check se o Membro mencionado pertence a equipe da Staff
if (kUser.roles.cache.find(gm => gm.id === '687785376726777935')) 
    return message.reply("Você não pode kickar outro Game Master.");

// Definição do motivo, caso vazio, recebe "Desrespeito ou má convivência"
let kReason = args.join(" ").slice(22);
if (!kReason) {
    kReason = "Desrespeito ou má convivência.";
}

// Embed construido para enviar ao chat no qual comando foi utilizado
let simpleEmbedKick = new Discord.MessageEmbed()
.setColor("#ff8000")
.setImage('https://cdn.discordapp.com/attachments/351504904256356353/715662884457414666/Burrice.gif')
.setDescription(`${kUser} foi kickado do servidor.`);

message.reply(simpleEmbedKick);

// Embed que será mandado no chat de punidos
let KickEmbed = new Discord.MessageEmbed().setTitle("Usuário kickado.")
.setDescription("Usuário punido.")
.setColor("#ff8000")
.addField("Usuário kickado: ", `${kUser} ID : ${kUser.id}`)
.addField("Game Master: ", `${message.author} ID: ${message.author.id}`)
.addField("Hora: ", message.createdAt)
.addField("Motivo:", kReason);     

// Procura o canal que será mandado a mensagem construida acima.
const kickChannel = message.guild.channels.cache.find(ch => ch.id === '707253571120529498');
kickChannel.send(KickEmbed);  

// Kicka o membro e envia a mensagem no canal definido.
message.guild.member(kUser).kick(kReason);