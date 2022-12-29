import { Client, CommandInteraction, SlashCommandBuilder } from "discord.js";

export interface SlashCommand {
    name: string,
    description: string
    data: SlashCommandBuilder,
    async execute: (client: Client, interaction: CommandInteraction) => Promise<void>
}