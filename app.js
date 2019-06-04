const fs = require('fs'),
      Discord = require('discord.js'),
      client = new Discord.Client(),
      clientCollection = new Discord.Collection(),
      {prefix, token} = require('./config.json'); 

fs.readdir('./commands/', (error, files) => {
  const jsfile = files.filter(f => f.split('.').pop() === 'js')
  if (error) console.log(error);
  jsfile.forEach((f) => {
    const p = require('./commands/' + f);
    clientCollection.set(p.command.name, p);
    console.log(f + ' loaded');
  });
});

client.on('ready', () => {
  console.log('Ready, sir!');
  client.user.setActivity(prefix + 'help'); 
});

client.on('message', (message) => {
  const userInput = message.content.substr(1),
        userInputArray = userInput.split(' '),
        cmd = userInputArray[0],
        args = userInputArray.slice(1),
        commandfile = clientCollection.get(cmd);

  if (message.author == client.user) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;
  if (commandfile) commandfile.run(client, message, args);
});
client.login(token);