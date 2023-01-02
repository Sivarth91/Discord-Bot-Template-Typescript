import { ChatInputCommandInteraction, Client, SlashCommandBuilder } from "discord.js";
import { SlashCommand } from "src/types";

export const Ping: SlashCommand = {
    name: 'ping',
    description: 'give your ping',
    data: new SlashCommandBuilder()
                .setName('ping')
                .setDescription('give your ping'),
    execute: async(client: Client, interaction: ChatInputCommandInteraction) => {
        const ping = client.ws.ping;
        const content = `Pong !\nTon ping est de **${ping}**`;

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};
