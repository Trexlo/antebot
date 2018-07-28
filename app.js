const Discord = require("discord.js");
const opus = require("opusscript");


const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
 // client.user.setAvatar('img/normal.png');
});
var pers=null;
var i=0;
var j=0;

client.on("message", (message) => {
	
	if(!message.author.bot){
				
	if(pers==null || message.author==pers || j==11)
		{	i++;
			if(j==11){
				j=0;
				pers=null;
			}
			console.log("i++");
		}
	
     if(pers!=null)
		{	j++;
		
			console.log("j++");
		}
			
		
	if(i%8==0 && i!=0 && pers == null){
		if(pers==null){
		pers=message.author;
		}
		console.log(pers);
		message.channel.send(message.author + " zelis BLOCK!?");
	}
	
	if(i%8==1 && i!=1 && !message.content.includes("ne") && message.author==pers){
		console.log("nema persa vise");
		message.channel.send(message.author + " BLOCK ti evo, pa nauci lijepo misliti o meni");
		pers=null;
	
	}

		
  if (message.content.includes("haha")) {
  //  client.user.setAvatar('img/angry.png');
	
	message.channel.send("Za ovo neprimjereno: haha,slijedi BLOCK!, pa se caci svome: haha, meni ne i mojoj profesiji!");
	//sleep(1000);
	//client.user.setAvatar('img/normal.png');
	
  }		
  
  
  if (message.content.includes("blockiraj") && !message.content.includes("unblockiraj")) {
	  
/*	
	  
   
	name.add_roles()*/
	 var s = message.content;
	// console.log(s);
	 var index= s.substring(s.indexOf('<'), s.indexOf('>'));

	 var name=index+'>';
	  
	  
	 message.channel.send(name+" BLOCKIRAN!!!");
	 
	 const embed = new Discord.RichEmbed()

.setImage("https://media.giphy.com/media/9uHZpjg00XUVPjjJEm/giphy.gif")

 message.channel.send({embed});
	 
	let role = message.guild.roles.find("name", "BLOCKIRAN");

// Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
let member = message.mentions.members.first();

// or the person who made the command: let member = message.member;

// Add the role!
member.addRole(role).catch(console.error);
//console.log( role,"  " ,member, member.id);	
	
  }
  
   if (message.content.includes("unblockiraj")) {
	  
/*	
	  
   
	name.add_roles()*/
	 var s = message.content;
	 console.log(s);
	 var index= s.substring(s.indexOf('<'), s.indexOf('>'));

	 var name=index+'>';
	  
	  
	 message.channel.send(name+" unblockan, ovaj put!");
	let role = message.guild.roles.find("name", "BLOCKIRAN");

// Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
let member = message.mentions.members.first();

// or the person who made the command: let member = message.member;

// Add the role!
member.removeRole(role).catch(console.error);
	
	
  }
  
  
	if(message.content.includes("posla") && (message.content.includes("dosla")  || message.content.includes("dosao") ))
	{	//message author in voice channel
		if(message.member.voiceChannel){
		var voiceChannel = message.member.voiceChannel;
		voiceChannel.join().then(connection =>{
			
			const dispatcher = connection.playFile('audio/napolje.mp3');
			dispatcher.on("end", end => {voiceChannel.leave();});
		
		
		}).catch(err => console.log(err));
		} //or not
		else{
			message.channel.send({
			files: [
					"audio/napolje.mp3"
				]
			});
		}
		
	}
	




	if(message.content.includes("necu") || message.content.includes("neću"))
		{	//message author in voice channel
			if(message.member.voiceChannel){
			var voiceChannel = message.member.voiceChannel;
			voiceChannel.join().then(connection =>{
				
				const dispatcher = connection.playFile('audio/necu.mp3');
				dispatcher.on("end", end => {voiceChannel.leave();});
		
		
			}).catch(err => console.log(err));
			} //or not
			else{
				message.channel.send({
				files: [
						"audio/necu.mp3"
					]
				});
			}
		
		}
	
}}


);






client.login("NDcyNDU0OTkxOTExNTgzNzcy.Djzw3w.nw7VU33Bo-_bWAWiKRgyFS2qFlM");