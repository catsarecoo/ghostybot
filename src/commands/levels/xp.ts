import Command from "../../structures/Command";
import Bot from "../../structures/Bot";
import { Message } from "discord.js";

export default class XpCommand extends Command {
  constructor(bot: Bot) {
    super(bot, {
      name: "xp",
      description: "Get xp from a user or yourself",
      category: "levels",
      usage: "<user>",
    });
  }

  async execute(bot: Bot, message: Message, args: string[]) {
    // const lang = await bot.getGuildLang(message.guild.id);
    const member = await bot.utils.findMember(message, args, true);
    const lang = [] as any;

    if (member.user?.bot) {
      return message.channel.send(lang.MEMBER.BOT_DATA);
    }

    console.log(message);

    const user = await this.bot.utils.getUserById("ddd", "dd");

    const embed = this.bot.utils
      .baseEmbed(message)
      .setTitle(`${member.user.username} ${lang.LEVELS.XP}`)
      .setDescription(`${lang.LEVELS.XP}: ${user?.xp}`);

    message.channel.send({ embed });
  }
}
