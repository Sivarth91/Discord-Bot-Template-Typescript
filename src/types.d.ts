import { ChatInputCommandInteraction, CommandInteraction, Client, SlashCommandBuilder } from "discord.js";

export interface SlashCommand {
    name: string,
    data: SlashCommandBuilder,
    async execute: (client: Client, interaction: ChatInputCommandInteraction | CommandInteraction) => Promise<void>
}
