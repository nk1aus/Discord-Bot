
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
    name: "slap",
    aliases: ["batmanslap", "slp"],
    category: "Image",
    description: "Return A Slap Image!",
    usage: "Slap <Mention Or ID> | <Text>",
    run: async (client, message, args) => {

        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!Member) return message.channel.send("Please Mention someone!");

        const Other = args.slice(1).join(" ") || "Stop it";
        if (Other.length > 50) return message.channel.send("<:recluse10:827723702727606333> Characters Limit Reached - 50!");

        const Embed = new Discord.MessageEmbed()
            .setColor(Color)
            .setImage(encodeURI(`https://vacefron.nl/api/batmanslap?text1=bruh&text2=${Other}&batman=${message.author.avatarURL({ format: "png" })}&robin=${Member.user.displayAvatarURL({ format: "png" })}`))
            .setTimestamp();

        message.channel.send({ embeds: [embed] });
    }
};