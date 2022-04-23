const superagent = require("snekfetch");
const Discord = require('discord.js')


module.exports = {
    name: "cat",
    category: "fun",
    aliases: [''],
    description: "Sends a random image of a cat",
    usage: "[command]",
    run: async (client, message, args, level) => {
        //command
        superagent.get('https://nekos.life/api/v2/img/meow')
            .end((err, response) => {
                const embed = new Discord.MessageEmbed()
                    .setTitle("Random cat")
                    .setImage(response.body.url)
                    .setColor(`#000000`)
                    .setFooter(`owo`)
                    .setURL(response.body.url);
                message.channel.send({ embeds: [embed] });
            })
    }
};
