const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("<")

bot.on("ready", function() {
    bot.user.setActivity(`<help | ${bot.guilds.size} Servers | ${bot.users.size} Users | © @Edωɨה#5292  [V:2.0]`)
    console.log("Connecté 100%");
});

bot.login(process.env.TOKEN);


bot.on("message", message => {
    if(message.content.startsWith(prefix + "help")){
        let embed = new Discord.RichEmbed()
        .setColor('#FFFF00')
        .setTitle("__Voici la liste des commandes__:")
        .setThumbnail(message.author.avatarURL)
        .setDescription("__**DIVERS**__ : \n" +
            " `<support` : *Te donne le serveur de mon créateur.* \n" +
            " `<invite` : *Te donne un lien pour m'invité;* \n" +
            " `<dhelp` : *Te donne les commande en direct.* \n" +
            " `❌<date❌` : *Te donne la date.* \n" )
      message.author.send({embed});
      message.reply(" 📧 Regarde tes messages !");
      }

      if(message.content.startsWith(prefix + "help")){
        let embed = new Discord.RichEmbed()
        .setColor('#FF8000')
        .setDescription("__**MODERATION**__ : \n" +
            " `<kick (@user)` : *Pour kick un joueur*(PARFOIS BUG)\n" +
            " `<ban (@user)` : *Pour ban une personne*(PARFOIS BUG)\n" +
            " `<say` : *Pour envoyer un message au nom du bot*\n" )
      message.author.send({embed});
      }

      if(message.content.startsWith(prefix + "help")){
      let embed = new Discord.RichEmbed()
      .setColor('#00FFFF')
      .setDescription("__**FUN**__ : \n" +
      "🔔PAS ENCORE🔔")
      message.author.send({embed});
      }

      if(message.content.startsWith(prefix + "help")) {
        let embed = new Discord.RichEmbed()
        .setColor('#00FF00')
        .setDescription("__**INFORMATION**__ : \n" +
        "**[[Mon Steam]](https://steamcommunity.com/id/Fharze)**\n" +
        "**[Ma Chaine YouTube] PAS ENCORE**\n" +
        "**[[Clique ici pour accéder a Alfia's - Unturned]](https://discord.gg/TGm2nAG)**\n")
        .setFooter(`Réclamé par ${message.author.tag} | @Edωɨה#5292 `)
        .setTimestamp()
      message.author.send({embed});
      }

    if (message.content === "<support"){
        message.channel.sendMessage("bah enfaite... j'ai pas de Discord ;)");
        console.log("Commande Support effectué");
    }

    if(message.content.startsWith(prefix + "invite")) {
        let embed = new Discord.RichEmbed()
        .setColor('#00FFFF')
        .setTitle("Invite moi")
        .addField(" 📋 Pour m'ajouter a ton discord ", "[Cliquez ici](https://discordapp.com/api/oauth2/authorize?client_id=441314766720598036&scope=bot&permissions=66321471)", true)
        .setFooter(`Réclamé par ${message.author.tag} |  @Edωɨה#5292 `)
        .setTimestamp()
        message.channel.send({embed})
      }

    if (message.content === prefix + "dhelp"){
        var embed = new Discord.RichEmbed()
            .setDescription(`${message.author.username}, Voici la liste des commandes:`)
            .addField('DIVERS:' , "` <support \n<invite \n<dhelp `")
            .addField(`MODERATION:` , "` ❌<ban \n❌<kick \n <say`")
            .addField('FUN:' , "'PAS ENCORE'" ) 
            .setTimestamp()
            .setColor("0x00FF00")
            .setFooter("RIEN METTRE EN MAJ, SI TU COMPREND PAS FAIT [<help]  | @Edωɨה#5292 ")
        message.channel.sendEmbed(embed);
    }

    if(message.content.startsWith(prefix + "ban")) {
        var member= message.mentions.members.first();
        // Ban
        member.ban().then((member) => {
        // Successmessage
        message.channel.send(" ✅ " + member.displayName + " **C'est bon, il reviendra plus.** :wave: ");
        }).catch(() => {
        // Failmessage
        message.channel.send(" ❌ **hep hep, Ta pas les permissions !**");
        })
    }

    if(message.content.startsWith(prefix + "kick")) {
        var member= message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
        // Successmessage
        message.channel.send(" ✅ " + member.displayName + " **Je les dégager mais fait gaf il peut revenir.** :wave: ");
        }).catch(() => {
        // Failmessage
        message.channel.send(" ❌ **hep hep, Ta pas les permissions !**");
        })
    }

    if (message.content.startsWith( prefix + "say")) {
        if(message.member.hasPermission("ADMINISTRATOR")){
        var msg = message.content.substr('4')
        message.delete(message.author);
        message.channel.send(msg);
    }
}

    if(message.content.startsWith(prefix + "testdate")) {
        var d = new Date()
        let embed = new Discord.RichEmbed()
        .setColor('#5F04B4')
        .setTitle("Voici la date actuelle")
        .addField("Nous sommes le " + d, "Bonne journée")
        .setFooter(`Demandé par ${message.author.tag} | @Edωɨה#5292  `)
        .setTimestamp()
            message.channel.send({embed})
    }
    
    if (message.content === "<passager"){
        message.channel.sendMessage("Discord: https://discord.gg/TyzYKvG");
        console.log("Commande Passager effectué");

});
