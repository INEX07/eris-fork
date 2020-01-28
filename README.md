Eris [![NPM version](https://img.shields.io/npm/v/eris.svg?style=flat-square)](https://npmjs.com/package/eris)
====

Forked version of Eris.

Installing
----------

```
npm install inex07/eris-fork
```

Original Version: [Eris](https://npmjs.com/package/Eris)

Ping Pong Example
-----------------

```js
const Eris = require("eris");
const client = new Eris("Token");

client.on("messageCreate", (message) => {
    if (!message.channel.guild || message.author.bot) return;
    if (message.content === "!ping") {
        return message.channel.send("Pong!"); // supports send, sendMessage & createMessage
    };
    if (message.content === "!embed") {
        const embed = new Eris.Embed()
          .setAuthor("Hello World!", client.user.avatarURL)
          .setDescription("With embed builder 😀")
          .setColor("#FF0000")
        return message.channel.send(embed);
    }
});

client.connect();
```

More examples can be found in [the examples folder](https://github.com/abalabahaha/eris/tree/master/examples).

Useful Links
------------

[The website](https://abal.moe/Eris) includes more detailed information on getting started, as well as documentation for the different components.

[The Discord API channel (#js_eris)](https://abal.moe/Eris/invite) is the best place to get support.

[The GitHub repo](https://github.com/abalabahaha/eris) has the most updated code.

[The NPM package](https://npmjs.com/package/eris)

License
-------

Refer to the [LICENSE](LICENSE) file.

# Author: Abalabahaha [Abal]
