module.exports = {
  token: process.env.TOKEN || "BOT_TOKEN",
  prefix: process.env.PREFIX || "BOT_PREFIX",
  embed: {
    color: "#2f3136",
    wrongcolor: "#2f3136",
  },
  emoji: {
    ERROR: "❌",
    SUCCESS: "✅",
    disabled: "🔴",
    enabled: "🟢",
    cleared: "🧹",
    time: "⏲️",
    search: "🔎",
    ping: "🏓",
    bot: "🤖",
  },
  // others
  slash: {
    global: true,
    guildID: "GuildId", // for slash command
  },
};
