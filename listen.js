const Discord = require("discord.js");
const opus = require("opusscript");


const client = new Discord.Client();
var lastTime; //new Date().getTime();//-messTime)< 300000
client.on("ready", () => {
  console.log("I am ready!");
  /*client.user.setStatus('online')
	.then(console.log)
	.catch(console.error);
	*/
	do{
		if(client.channels.get('468828946809618432').members){
		console.log("has membs");
		}
		
	}while(!client.channels.get('468828946809618432').members);
	
	client.channels.get('468828946809618432').join()
	.then(conn => {
        // create our voice receiver
	const receiver = conn.createReceiver();
		var i=0;
		conn.on('speaking', (user, speaking) => {
			{i++;console.log(i);
			  if((new Date().getTime()-lastTime)<1300 && i%15==0)
			  {conn.playFile("audio/suti.mp3");}
			
			  lastTime=new Date().getTime();
			  console.log(lastTime);
			}
});


 // client.user.setAvatar('img/normal.png');
});
});

client.on("message", (message) => {
	
		
}
);

var fs = require('fs');
 
fs.readFile('token.txt', 'utf8', function(err, contents) {
    client.login(contents);
});
