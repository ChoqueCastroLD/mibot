const jkanime = require('jkanime');

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
  if (msg.content === '!ip') {
    let embed = new Discord.MessageEmbed()
      .setThumbnail('https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-articleLarge.jpg')
      .setColor(0x00ff00)
      .setFooter('Bot hecho por Shoko#9351', 'https://cdn.discordapp.com/avatars/514259565089390604/2c4e2efab548f4d6f6698ab2e3434d57.webp?size=128')
      .setDescription('Descripcion').setURL('https://aodmc.net/').setAuthor('Shoko')
      .setImage('https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif')
      .setTitle('Titulo');
    msg.channel.send(embed);
  } else if (msg.content === '!hora') {
    let embed = new Discord.MessageEmbed()
      .setThumbnail('https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-articleLarge.jpg')
      .setColor(0x00ff00)
      .setFooter('Bot hecho por Shoko#9351', 'https://cdn.discordapp.com/avatars/514259565089390604/2c4e2efab548f4d6f6698ab2e3434d57.webp?size=128')
      .setDescription('La hora es '+new Date())
      .setURL('https://aodmc.net/').setAuthor('Shoko')
      .setImage('https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif')
      .setTitle('Titulo');
    msg.channel.send(embed);
  } else if (msg.content.startsWith('!anime')) {

    let busqueda = msg.content.split('!anime')[1].trim();

    console.log('buscando '+busqueda);

    let resultados = await jkanime.searchAnime(busqueda);
    
    let embed = new Discord.MessageEmbed()
      .setColor(0x00ff00)
      .setFooter('Bot hecho por Shoko#9351', 'https://cdn.discordapp.com/avatars/514259565089390604/2c4e2efab548f4d6f6698ab2e3434d57.webp?size=128')
      .setDescription('Busqueda: '+busqueda)
      .addFields(resultados.filter((v, i) => i < 3).map(v => ({name: v.title, value: v.synopsis})))
      .setImage(resultados[0] && resultados[0].poster)
      .setTitle('Busqueda de animes: '+busqueda);
    msg.channel.send(embed);
  }
});

client.login('token');