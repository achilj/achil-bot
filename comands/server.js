const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    return message.channel.send("Wij **ACHILCRAFT** spelen op de wijnpers 2020-2021 server. \n ip:  ");
    var icon = message.guild.iconURL;

    var serverEmbed = new discord.RichEmbed()
        .setTitle("De Wijnpers survival:")
        .setDescription("'2020-2021'")
        .setColor("#FF0000")
        .setThumbnail("https://cdn.discordapp.com/icons/302453258100670465/ccda5964ec02251300c46fa8b3d9f6ac.png")
        .addField("IP: **dewijnpers.serv.nu**");

    return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "server"
}