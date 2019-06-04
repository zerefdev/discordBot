# discordBot
This is the discord bot I am currently using on my discord.  
If you want to use this bot, make sure to have **Node.js** latest version and **discord.js** library.  
Only *basic* commands are on this repository, I might add more later..
You can make your own commands. If you have difficulties, contact me.  

# add commands
to add new commands, simply create a new js file inside **commands** folder, use this as a sample or copy from other commands:

```js
/* call libraries, cfg, or other variables here if needed
* Example: * if you need to recall the prefix inside this command code.  
const {prefix} = require(../config.json);
*/
module.exports.run = (client, message, args) => { 
    // your code goes here
}

module.exports.command = {
  name: 'commandNameHere'
}
```


Code is written by **ZerefGG#4819**  
To see how the bot works, join: https://alttabgaming.com/discord  
For more information how the bot works, visit: https://discord.js.org/#/  

Official docs: https://discord.js.org/#/docs/main/stable/general/welcome