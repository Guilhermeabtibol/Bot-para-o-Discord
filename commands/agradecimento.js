const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("mestre")
        .setDescription("Eu"),

    async execute(interaction) {
        await interaction.reply("Meu querido mestre, eu que tenho que lhe agradecer por ter feito de mim a primeira criação (e a melhor) de muitas criações. Que o senhor nunca se esqueça de mim!!.")
    }
}