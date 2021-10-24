const Discord = require("discord.js");
const client = new Discord.Client();
const Enmap = require("enmap");
const fs = require("fs");

const config = require("./config.json");
client.config = config;

client.on('ready', () => {
  console.log(`${client.user.username} starting...`);
  console.log(`Serving ${client.guilds.size} guilds.`);
  console.log(`${client.users.size} users`);
  console.log('🌮Développé par Sxlim🌮');

  
client.on('message', function (message) {
    if (message.content === prefix + "ping") {
        message.delete();
        message.channel.sendMessage('Pong 🏓 '+ client.ping +' ms ')
        console.log('réponse à Ping !')
    }
});
  
  
  
  
  
  
  
  const activities = [
      "🌮 t?help | Tacos",
      `🌮 t?help | ${client.guilds.size} serveurs`,
      `🌮 t?telp | ${client.users.size} users`
  ];
  client.setInterval(() => {
      const index = Math.floor(Math.random() * activities.length);
      client.user.setActivity(activities[index], {
          type: "PLAYING",
          url: "http://twitch.tv/client"
      });
  }, 15000);
});

client.on('message' ,message => {
if (message.content.startsWith(prefix + 'say')) {
    message.delete();
        
    var say = message.content.split(' ').join(' ').slice(5);

    if(!say) return message.reply("⚠ | Entre un texte !")
    
message.channel.send(`${say}`)
  }
});






client.login(config.token);
