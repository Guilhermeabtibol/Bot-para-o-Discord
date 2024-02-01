const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("jarvas")
        .setDescription("Responderei, Mestre"),

    async execute(interaction) {
        await interaction.reply("Olá, Mestre. Como Posso Lhe Ajudar?")
    }
}