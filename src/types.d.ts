import { ChatInputCommandInteraction, Client, SlashCommandBuilder } from "discord.js";

export interface SlashCommand {
    name: string,
    description: string
    data: SlashCommandBuilder,
    async execute: (client: Client, interaction: ChatInputCommandInteraction) => Promise<void>
}
