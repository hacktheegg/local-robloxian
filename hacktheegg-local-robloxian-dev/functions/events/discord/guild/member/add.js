const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
let gif1 = ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fflipanim.com%2Fanim%3DMG3O65tL&psig=AOvVaw0TFY8t8gw0OJZifVYs_Ua3&ust=1643255136382000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIic5cjAzvUCFQAAAAAdAAAAABAD']
let gif2 = ['https://doy2mn9upadnk.cloudfront.net/uploads/default/original/4X/6/7/9/6796cb7a705f671cbd84cb19b45061e0aef86736.gif']
/*let items = ['Yes', 'No', 'Maybe', 'Perhaps', 'Indecisive', "It's better if you don't know", 'Of course', 'Definitely not', 'Obviously not', 'Probably not'];
let random = items[Math.floor(Math.random() * items.length)]
if (context.params.event.content.startsWith('-8ball')) {
  await lib.discord.channels['@0.1.1'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: random
  });
}*/


await lib.discord.channels['@0.2.0'].messages.create({
  "channel_id": `935736391218921512`,
  "content": `hello there <@${context.params.event.user.id}>`,
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `welcome to the server`,
      "description": `sample text`,
      "color": 0x00FFFF,
      "image": {
        "url": 'https://doy2mn9upadnk.cloudfront.net/uploads/default/original/4X/6/7/9/6796cb7a705f671cbd84cb19b45061e0aef86736.gif',
        "height": 560,
        "width": 560
      }
    }
  ]
});
