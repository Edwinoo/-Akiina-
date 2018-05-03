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
            " `<dhelp` : *Te donne les commande en direct.* \n" )
      message.author.send({embed});
      message.reply(" 📧 Regarde tes messages !");
      }

      if(message.content.startsWith(prefix + "help")){
        let embed = new Discord.RichEmbed()
        .setColor('#FF8000')
        .setDescription("__**MODERATION**__ : \n" +
            " `<kick (@user)` : *Pour kick un joueur*(PARFOIS BUG)\n" +
            " `<ban (@user)` : *Pour ban une personne*(PARFOIS BUG)\n" +
            " `<say` : *Pour envoyer un message au nom du bot*\n" +
            " `<clear` : *Pour supprimer des messages.*\n" )
      message.author.send({embed});
      }

      if(message.content.startsWith(prefix + "help")){
      let embed = new Discord.RichEmbed()
      .setColor('#00FFFF')
      .setDescription("__**FUN**__ : \n" +
      " `<avatar (@user)` : *Montre l'avatar d'une personne*\n")
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
            .addField(`MODERATION:` , "` <ban \n<kick \n <say \n <clear`")
            .addField('FUN:' , "' <avatar \n'" ) 
            .setTimestamp()
            .setColor("0x00FF00")
            .setFooter("RIEN METTRE EN MAJ, SI TU COMPREND PAS FAIT [<help]  | @Edωɨה#5292 ")
        message.channel.sendEmbed(embed);
    }

    if(message.content.startsWith(prefix + "846259637891ban")) {
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

    if(message.content.startsWith(prefix + "846259637891kick")) {
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

    if(message.content.startsWith(prefix + "edwin")) {
        var d = new Date()
        let embed = new Discord.RichEmbed()
        .setColor('#5F04B4')
        .setTitle("Voici la date actuelle")
        .setFooter(`Demandé par ${message.author.tag} | @Edωɨה#5292  `)
        .setTimestamp()
            message.channel.send({embed})
    }

});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (!message.content.startsWith(prefix)) return;
    
    var args = message.content.substring(prefix.length).split(" ");
    
    switch (args[0].toLowerCase()) {
        case "846259637891play":
        var argsplay = message.content.substring(prefix.length).split(" ");
            if (!argsplay[1]) {
                message.channel.sendMessage("Merci d'envoyer le lien.");
                return;
            }

            if (!message.member.voiceChannel) {
                message.channel.sendMessage("Tu dois être dans un channel vocal.");
                return;
            }

            if(!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            };

            var server = servers[message.guild.id];

            server.queue.push(argsplay[1]);

            if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
                play(connection, message);
                message.channel.send("Lancement de votre musique. \n En cas de problème, vérifier si c'est un lien ( et non un teste ), si celle-ci n'a pas de copyright ou est correcte.")
            });
            break;
        case "846259637891skip":
            var server = servers[message.guild.id];

            if (server.dispatcher) server.dispatcher.end();
            message.channel.send("Musique skipé !\nEn cas de problème, vérifier si c'est un lien ( et non un teste ), si celle-ci n'a pas de copyright ou est correcte.")
            break;
        case "846259637891stop":
            var server = servers[message.guild.id];

            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
            message.channel.send("Musique arrêté.")
            break;
            case "avatar":
            if (!message.mentions.users.first()) return message.channel.send("Merci de mentionner un utilisateur")
                let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                let ava = user.displayAvatarURL
                let embed = {
                color:0x000000,
                description:"Avatar de "+user.username+"",
                image:{url:ava}
                }
            message.channel.send("", {embed})
            break;
            case "clear":
           if (message.member.hasPermission("MANAGE_MESSAGES")) {
               message.channel.fetchMessages()
                  .then(function(list){
                       message.channel.bulkDelete(list);
                   }, function(err){message.channel.send("Erreur")})}
               break;
               case "kick":
           let command = message.content.split(" ")[0];
           const args = message.content.slice(prefix.length).split(/ +/);
           command = args.shift().toLowerCase();
    
               if(!message.member.hasPermission("KICK_MEMBERS")) {
                   return message.reply("❌ **hep hep, Ta pas les permissions !**").catch(console.error);
               }
               if(message.mentions.users.size === 0) {
                   return message.reply("Merci de mentionner l'utilisateur à expluser.").catch(console.error);
               }
               let kickMember = message.guild.member(message.mentions.users.first());
               if(!kickMember) {
                   return message.reply("Cet utilisateur est introuvable ou impossible à expulser.")
               }
               if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
                   return message.reply("Je n'ai pas la permission KICK_MEMBERS pour faire ceci.").catch(console.error);
               }
               kickMember.kick().then(member => {
                   message.reply(" ✅ " + member.displayName + " **Je les dégager mais fait gaf il peut revenir.** :wave: ").catch(console.error);
               }).catch(console.error)
           break;
           case "ban":
           let commande = message.content.split(" ")[0];
           const argse = message.content.slice(prefix.length).split(/ +/);
           commande = argse.shift().toLowerCase();
           if(!message.member.hasPermission("BAN_MEMBERS")) {
               return message.reply("❌ **hep hep, Ta pas les permissions !**").catch(console.error);
           }
           const member = message.mentions.members.first();
           if (!member) return message.reply("Merci de mentionner l'utilisateur à bannir.");
           member.ban().then(member => {
               message.reply(" ✅ " + member.displayName + " **C'est bon, il reviendra plus.** :wave: ").catch(console.error);
           }).catch(console.error)
           break;
           case "chat":
                   try {
                    get('http://random.cat').then(res => {
                        var replys = [
                            '#F407FC', 
                            '#034EEF',
                            '#09F4D1',
                            '#09F14E',
                            '#E7EF07',
                            '#F5A718',
                            '#FB4B06',
                            '#FB2702',
                            '#F6F4F3',
                            '#201F1F'
                        ];
                    
                        let reponse = (replys[Math.floor(Math.random() * replys.length)])
                        const embed = new Discord.RichEmbed()
                        .setDescription(`:cat: Voilà une image aléatoire de chat pour toi, ${message.author.username} !`)
                        .setImage(res.body.file)
                        .setColor(reponse)
                        return message.channel.send({embed});
                    });
                } catch(err) {
                    return message.channel.send(error.stack);
                }
            break;
            }});
