const {admin,prefix} = require('../config.json');

module.exports.run = (_client, message, args) => {
  const user = message.mentions.users.first(),
        member = message.guild.member(user),
        reason = args.join(' ').slice(22);

  if (message.member.roles.find(r => r.name === admin)) {
    if (reason) {
      if (user && member) {
        member.ban(reason).then(() => {
        message.channel.send(user + ' a bien été bannis du serveur.');
        }).catch(error => {
          message.reply('Désolé, je ne peux pas bannir ce membre');
          console.error(error);
        });
      } else {
        message.reply('Il n\'est pas un membre de ce serveur');
      }
    } else {
      message.reply('Il faut mentionner le membre et la raison de de ban.\n Exemple: \`' + prefix + 'ban @membre raison\`');
    }
  } else {
    return;
  }

}

module.exports.command = {
  name: 'ban'
}