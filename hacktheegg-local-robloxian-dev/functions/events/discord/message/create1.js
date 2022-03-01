const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let userList = await lib.discord.guilds['@0.1.0'].members.list({
  guild_id: `${context.params.event.guild_id}`,
});
let user = userList[Math.floor(Math.random() * userList.length)];

if (context.params.event.content.startsWith(`?item`)) {
  let text = context.params.event.content.split(` `);
  let object = text.slice(1).join(` `);
  if (!object) {
    await lib.discord.channels['@0.1.0'].messages.create({
      channel_id: event.channel_id,
      content: `unknown item name`,
    });
  } else {
    await lib.discord.channels['@0.1.0'].messages.create({
      channel_id: event.channel_id,
      content:'${object} given to ${user.user.id}',
    });
  }
}