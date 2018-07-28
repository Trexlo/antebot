const Discord = require("discord.js");
const opus = require("opusscript");


const client = new Discord.Client();
const guild= new Discord.Guild();

client.on("ready", () => {
  console.log("I am ready!");
 // client.user.setAvatar('img/normal.png');
 
	console.log(guild);
});


client.on("message", (message) => {
	
	

}
);






client.login("NDcyNDU0OTkxOTExNTgzNzcy.Djzw3w.nw7VU33Bo-_bWAWiKRgyFS2qFlM");