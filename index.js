const { createInterface } = require('node:readline');
const { execSync } = require('child_process');
const fetch = require('node-fetch');
const moment = require ('moment');
const { Client, Routes, GatewayIntentBits } = require('discord.js');


//create new client
const client = new Client({ intents: [GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,] });
const rl = createInterface({ input: process.stdin, output: process.stdout });

client.once('ready', () => {
    console.log('Es ist schon wieder... Donnerstag');
});

const donnerstag = {
  name:'donnerstag',
  description:'endlich wieder Donnerstag'
}

const ping = {
  name: 'ping',
  description: 'Pings the bot and shows the latency'
};



//const today = new Date().getDay(); // Get the current day (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
const bakuTime = new Date().toLocaleString("en-US", { timeZone: "Europe/Berlin" });

const today = new Date(bakuTime).getDay(); 

const commands = [donnerstag, ping];


if (today === 4) {
  client.on("messageCreate", (message) =>{
    if (message.author.bot){ return;}
    if (message.content.toLowerCase().includes('donnerstag')) {
    message.channel.send("https://lukaseins.s-ul.eu/dVTE4cgZ")
    }});
  client.on("messageCreate", (message) =>{
    if (message.author.bot){ return;}
    if (message.content.toLowerCase().includes('dönerstag')) {
    message.channel.send("https://lukaseins.s-ul.eu/2ZbxOb17")
    }});
   client.on("messageCreate", (message) =>{
	   if (message.author.bot){ return;}
	   if (message.content.toLowerCase().includes('dnerstag')) {
		   message.channel.send("https://lukaseins.s-ul.eu/e0fAXBlP")
	   }});
client.on("messageCreate", (message) =>{
	   if (message.author.bot){ return;}
	   if (message.content.toLowerCase().includes('dänemark')) {
		   message.channel.send("https://lukaseins.s-ul.eu/crwzyyzy")
	   }});
 client.on("messageCreate", (message) =>{
	   if (message.author.bot){ return;}
	   if (message.content.toLowerCase().includes('donnersday')) {
		   message.channel.send("https://lukaseins.s-ul.eu/GVvs8xtI")
	   }});
client.on('interactionCreate', (interaction) => {
  if (interaction.commandName === 'ping') {
    interaction.reply(`Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);  
  } else if(interaction.commandName === 'donnerstag') { // This is the example command's name!
    interaction.reply('https://lukaseins.s-ul.eu/dVTE4cgZ');
  } 
});
} else {
  client.on("messageCreate", (message) =>{
    if (message.author.bot){ return;}
    if (message.content.toLowerCase().includes('donnerstag')) {
    message.channel.send("Es ist noch nicht Donnerstag du Hurensohn.")
    }
    if (message.content.toLowerCase().includes('dönerstag')){
       message.channel.send("Döner? Begebe dich lieber mal in die Eisenbude Kollege!")
    }
if (message.content.toLowerCase().includes('donnersday')){
       message.channel.send("Hold your horses! Der day ist noch nicht gekommen. Halt den tea noch eine Weile warm!")
       }
if (message.content.toLowerCase().includes('dänemark')){
       message.channel.send("Du bist an Bord, bevor der Kahn ablegt, makker!")
    }
    if (message.content.toLowerCase().includes('dnerstag')){
      message.channel.send("JOOONGE es ist doch noch gar nicht so weit, entspann dich...")
   }
  });
}


if (today === 1){
  client.on("messageCreate", (message) =>{
	if (message.author.bot){return;}
	if (message.content.toLowerCase().includes('montag')) {
		message.channel.send("und so beginnt es...")
		message.channel.send("https://lukaseins.s-ul.eu/howKEqfv")
	}});
	  client.on("messageCreate", (message) =>{
    if (message.author.bot){ return;}
    if (message.content.toLowerCase().includes('monday')) {
    message.channel.send("https://tenor.com/view/mondays-uh-oh-weeks-rough-week-gif-4480966")
    }});
}

if (today === 2){
  client.on("messageCreate", (message) =>{
	if (message.author.bot){return;}
	if (message.content.toLowerCase().includes('dienstag')) {
		message.channel.send("Das D steht bereit, noch 2 Tage warten, dann steht das onnerstag auch bereit")
	}});
}

if (today === 3){
  client.on("messageCreate", (message) =>{
    if (message.author.bot){ return;}
    if (message.content.toLowerCase().includes('mittwoch')) {
    message.channel.send("Morgen ist es endlich so weit...")
    }});
}

if (today === 5) {
  client.on("messageCreate", (message) =>{
    if (message.author.bot){ return;}
    if (message.content.toLowerCase().includes('freitag')) {
    message.channel.send("Jetzt beginnt eine lange Woche des Wartens, vergiss dein Lächeln trotzdem nicht... https://lukaseins.s-ul.eu/9DLzlJsB")
    }});
  client.on("messageCreate", (message) =>{
    if (message.author.bot){ return;}
    if (message.content.toLowerCase().includes('flytag')) {
    message.channel.send("donnerstag out https://lukaseins.s-ul.eu/OIdVqgC8")
    }});
}

if (today === 6){
  client.on("messageCreate", (message) =>{
    if (message.author.bot){ return;}
    if (message.content.toLowerCase().includes('samstag')) {
    message.channel.send("Ein Tag der Ruhe, wie ihn sich jeder von uns nun reglich verdient hat, entspann dich an diesem wundervollen Samstag!")
    }});
}

if (today === 0){
  client.on("messageCreate", (message) =>{
    if (message.author.bot){ return;}
    if (message.content.toLowerCase().includes('sonntag')) {
    message.channel.send("Sonntag markiert das Ende der Woche. Genieß deinen freien Tag damit du bis zum nächsten, frischen Donnerstag bei Kräften bist!")
    }});
}


//make sure this line is the last line
client.login(''); //login bot using token
