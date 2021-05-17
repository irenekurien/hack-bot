const dotenv = require('dotenv');
const fs = require('fs');
const Discord = require('discord.js');

dotenv.config();

const client = new Discord.Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
}); // discord bot

const prefix = '!';

// get bot commands
client.commands = new Discord.Collection();
const commandFiles = fs
    .readdirSync('./commands/')
    .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('hack-bot is ready');
});

client.on('message', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command === 'reactionrole') {
        client.commands
            .get('reactionrole')
            .execute(message, args, Discord, client);
    }
});

client.login(process.env.TOKEN);
