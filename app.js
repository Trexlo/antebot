const Discord = require("discord.js");
const opus = require("opusscript");


const client = new Discord.Client();
const guild= new Discord.Guild();

var messTime=new Date();

function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}


client.on("ready", () => {
  console.log("I am ready!");
 // client.user.setAvatar('img/normal.png');
 
 console.log(
	messTime.getTime()
	);
	sleep(5000);
	
 console.log(
	messTime.getTime()
	);
	console.log(guild);
});


client.on("message", (message) => {
	
	

}
);






client.login("NDcyNDU0OTkxOTExNTgzNzcy.Djzw3w.nw7VU33Bo-_bWAWiKRgyFS2qFlM");