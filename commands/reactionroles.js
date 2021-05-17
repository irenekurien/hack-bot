module.exports = {
    name: 'reactionrole',
    description: 'Set up a reaction role on message',
    async execute(message, args, Discord, client) {
        const channel = process.env.GET_ROLES_ID;
        const compCoderRole = message.guild.roles.cache.find(
            (role) => role.name === 'comp-coder'
        );
        const frontendRole = message.guild.roles.cache.find(
            (role) => role.name === 'frontend-dev'
        );
        const backendRole = message.guild.roles.cache.find(
            (role) => role.name === 'backend-dev'
        );
        const flutterRole = message.guild.roles.cache.find(
            (role) => role.name === 'flutter-dev'
        );
        const scriptingRole = message.guild.roles.cache.find(
            (role) => role.name === 'scripting'
        );
        const MLRole = message.guild.roles.cache.find(
            (role) => role.name === 'ML-dev'
        );

        const compCoderEmoji = '🍏';
        const frontendEmoji = '🍋';
        const backendEmoji = '🍉';
        const flutterEmoji = '🍇';
        const scriptingEmoji = '🥭';
        const MLEmoji = '🥝';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('#Choose your favourite tech stacks')
            .setDescription(
                'React to the corresponding emojis to get your roles assigned.\n\n' +
                    `${compCoderEmoji} for competitive coding \n` +
                    `${frontendEmoji} for frontend developement \n` +
                    `${backendEmoji} for backend development \n` +
                    `${flutterEmoji} for flutter development \n` +
                    `${MLEmoji} for Machine Learning \n` +
                    `${scriptingEmoji} if you are into scripting`
            );

        let messageEmbed = await message.channel.send(embed);

        messageEmbed.react(compCoderEmoji);
        messageEmbed.react(frontendEmoji);
        messageEmbed.react(backendEmoji);
        messageEmbed.react(flutterEmoji);
        messageEmbed.react(MLEmoji);
        messageEmbed.react(scriptingEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id === channel) {
                if (reaction.emoji.name === compCoderEmoji) {
                    await reaction.message.guild.members.cache
                        .get(user.id)
                        .roles.add(compCoderRole);
                }
                if (reaction.emoji.name === frontendEmoji) {
                    await reaction.message.guild.members.cache
                        .get(user.id)
                        .roles.add(frontendRole);
                }
                if (reaction.emoji.name === backendEmoji) {
                    await reaction.message.guild.members.cache
                        .get(user.id)
                        .roles.add(backendRole);
                }
                if (reaction.emoji.name === flutterEmoji) {
                    await reaction.message.guild.members.cache
                        .get(user.id)
                        .roles.add(flutterRole);
                }
                if (reaction.emoji.name === MLEmoji) {
                    await reaction.message.guild.members.cache
                        .get(user.id)
                        .roles.add(MLRole);
                }
                if (reaction.emoji.name === scriptingEmoji) {
                    await reaction.message.guild.members.cache
                        .get(user.id)
                        .roles.add(scriptingRole);
                } else {
                    return;
                }
            }
        });
        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id === channel) {
                if (reaction.emoji.name === compCoderEmoji) {
                    await reaction.message.guild.members.cache
                        .get(user.id)
                        .roles.remove(compCoderRole);
                }
                if (reaction.emoji.name === frontendEmoji) {
                    await reaction.message.guild.members.cache
                        .get(user.id)
                        .roles.remove(frontendRole);
                }
                if (reaction.emoji.name === backendEmoji) {
                    await reaction.message.guild.members.cache
                        .get(user.id)
                        .roles.remove(backendRole);
                }
                if (reaction.emoji.name === flutterEmoji) {
                    await reaction.message.guild.members.cache
                        .get(user.id)
                        .roles.remove(flutterRole);
                }
                if (reaction.emoji.name === MLEmoji) {
                    await reaction.message.guild.members.cache
                        .get(user.id)
                        .roles.remove(MLRole);
                }
                if (reaction.emoji.name === scriptingEmoji) {
                    await reaction.message.guild.members.cache
                        .get(user.id)
                        .roles.remove(scriptingRole);
                } else {
                    return;
                }
            }
        });
    },
};
