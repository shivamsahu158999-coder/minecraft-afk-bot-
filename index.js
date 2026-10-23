const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: tridentsmp12345.mcsh.gg,
  port: Number(process.env.MC_PORT || 25565),
  username: Bot,
  auth: 'offline',
  version: '26.2'
});

bot.once('spawn', () => {
  console.log('AFK bot connected!');
});

bot.on('kicked', reason => {
  console.log('Kicked:', reason);
});

bot.on('error', err => {
  console.log('Error:', err.message);
});

bot.on('end', () => {
  console.log('Disconnected');
});
