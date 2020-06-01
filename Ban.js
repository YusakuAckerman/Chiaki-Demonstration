 
    // Armazenamento do membro a ser banido.
    let bUser = message.guild.member(message.mentions.users.first());

    // Check se o membro tem permissão de Ban
    if (!message.member.hasPermission("BAN_MEMBERS")) 
        return message.reply("Apenas um Game Master pode banir outro membro!");
    
    // Check se o membro foi mencionado/está no server.
    if (!bUser)
        return message.reply("Mencione o membro que deseja banir.");

    // Check se o membro mencionado está na Staff.
    if (bUser.roles.cache.find(gm => gm.id === '687785376726777935')) 
        return message.reply("Você não pode banir outro Game Master.");

    // Motivo do ban.
    let bReason = args.join(" ").slice(22);
    if (!bReason) {
        bReason = "Desrespeito ou má convivência";        
    }   
    
    // Embed
    const simpleEmbedBan = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setImage('https://cdn.discordapp.com/attachments/351504904256356353/715662853780013097/discord-ban-gif-4.gif')
    .setDescription(`${bUser} foi banido do servidor.`);
        message.reply(simpleEmbedBan);

    // Embed
    const BanEmbed = new Discord.MessageEmbed().setTitle("Usuário banido")
    .setColor("#ff0000") 
    .addField("Usuário banido: ", `${bUser} ID : ${bUser.id}`)
    .addField("Game Master: ", `${message.author} ID: ${message.author.id}`)
    .addField("Hora: ", message.createdAt)
    .addField("Motivo:", bReason);
    
    // Canal de banidos
    message.guild.channels.cache.find(ch => ch.id === '707253571120529498').send(BanEmbed)

        // Bane o membro armazenado.
        message.guild.member(bUser).ban(bReason);    