module.exports.run = (_client, message, _args) => { 
  message.delete().catch(O_o=>{})
  message.author.send(`\`\`\`md\n
# Liste de commandes disponibles:\n
* _help : pour recevoir ce message de help.\n
* _kick : pour kickr un membre.\n
* _ban : pour bannir un membre.\n
\`\`\``)
}

module.exports.command = {
  name: 'help'
}