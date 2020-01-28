const Eris = require("eris");

const bot = new Eris("BOT_TOKEN");
// Replace BOT_TOKEN with your bot account's token

bot.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
});

bot.on("messageCreate", (msg) => { // When a message is created
    if(msg.content === "!embed") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "I'm an embed!", // Title of the embed
                description: "Here is some more info, with **awesome** formatting.\nPretty *neat*, huh?",
                author: { // Author property
                    name: msg.author.username,
                    icon_url: msg.author.avatarURL
                },
                color: 0x008000, // Color, either in hex (show), or a base-10 integer
                fields: [ // Array of field objects
                    {
                        name: "Some extra info.", // Field title
                        value: "Some extra value.", // Field
                        inline: true // Whether you want multiple fields in same line
                    },
                    {
                        name: "Some more extra info.",
                        value: "Another extra value.",
                        inline: true
                    }
                ],
                footer: { // Footer text
                    text: "Created with Eris."
                }
            }
        });
    }
    if(msg.content === "!embed2") { // embed builder
        const embed = new Eris.Embed()
            .setTitle("I'm an embed!")
            .setDescription("Here is some more info, with **awesome** formatting.\nPretty *neat*, huh?")
            .setAuthor(msg.author.username, msg.author.avatarURL)
            .setColor(0x008000)
            .addField("Some extra info.", "Some extra value.", true)
            .addField("Some more extra info.", "Another extra value.", true)
            .setFooter("Created with Eris.");
        bot.createMessage(msg.channel.id, embed);
    }
});

bot.connect(); // Get the bot to connect to Discord
