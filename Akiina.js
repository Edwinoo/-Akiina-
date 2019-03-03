const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = ("<")

client.login(process.env.TOKEN);

const activities_list = [
    "NEW BOT > Akiix | By Edwin [V4.7]",
    "NEW BOT > Akiix | By Edwin [V4.7]",
    "Discord ► https://discord.gg/dehgnGp"
    ];

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
    }, 10000);
});
