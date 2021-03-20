const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';


client.once('ready', () => {
    console.log("bot online");
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    const server = message.guild;

    if(command === 'drink'){
        
        var guildMembers = server.members.cache.array();

        filteredMembers = guildMembers.filter(member => !member.user.bot);

        const randomMember = filteredMembers[Math.floor(Math.random() * filteredMembers.length)];
        message.channel.send(`${randomMember.displayName} drinks`);
    }

    if(command === 'red'){
        cardsArray = ['Red', 'Black'];
        const card = cardsArray[Math.floor(Math.random() * cardsArray.length)];
        message.channel.send(`${card}, ${message.author.username} ${card === 'Red' ? "doesn't" : ""} drink${card === 'Red' ? "" : "s"}`);
    }
    
    if(command === 'black'){
        cardsArray = ['Red', 'Black'];
        const card = cardsArray[Math.floor(Math.random() * cardsArray.length)];
        message.channel.send(`${card}, ${message.author.username} ${card === 'Black' ? "doesn't" : ""} drink${card === 'Black' ? "" : "s"}`);
    }
});

client.login('REPLACETOKEN');