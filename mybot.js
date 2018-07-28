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
var randNum= Math.floor((Math.random() * 15) + 8);;
var isQ


client.on("message", (message) => {

	//function for playing audio files
	function playVoice(file){
	
	//message author in voice channel
		if(message.member.voiceChannel){
		var voiceChannel = message.member.voiceChannel;
		voiceChannel.join().then(connection =>{
			
			const dispatcher = connection.playFile(file);
			dispatcher.on("end", end => {voiceChannel.leave();});
		
		
		}).catch(err => console.log(err));
		} //or not
		else{
			
			message.channel.send({
				files: [
						file
					]
				});
		}
	}


	
	var mess= message.content.toLowerCase();
	
	
	if(!message.author.bot){
		
		
	if(mess.includes("?")){ isQ=true;
	
	console.log("pitanje");}
		
		
				
	if(pers==null || message.author==pers || j==randNum)
		{	i++;
			if(j==randNum){
				j=0;
				pers=null;
			}
			console.log("i++");
		}
	
     if(pers!=null)
		{	j++;
		
			console.log("j++");
		}
			
		
	if(i%randNum==0 && i!=0 && pers == null){
		if(pers==null){
		pers=message.author;
		}
		console.log(pers);
		message.channel.send(message.author + " zelis BLOCK!?");
	}
	
	if(i%randNum==1 && i!=1 && !mess.includes("ne") && message.author==pers){
		console.log("nema persa vise");
		message.channel.send(message.author + " BLOCK ti evo, pa nauci lijepo misliti o meni");
		pers=null;
		randNum= Math.floor((Math.random() * 15) + 8);;
	}

		
  if (mess.includes("haha")) {
  //  client.user.setAvatar('img/angry.png');
	
	message.channel.send("Za ovo neprimjereno: haha,slijedi BLOCK!, pa se caci svome: haha, meni ne i mojoj profesiji!");
	//sleep(1000);
	//client.user.setAvatar('img/normal.png');
	
  }		
  
  
  if (mess.includes("blockiraj") && !mess.includes("unblockiraj")) {
	  
/*	
	  
   
	name.add_roles()*/
	 var s = mess;
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
  
   if (mess.includes("unblockiraj")) {
	  
/*	
	  
   
	name.add_roles()*/
	 var s = mess;
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
  
  
	if(mess.includes("posla") && (mess.includes("dosla")  || mess.includes("dosao") ))
	{	
		playVoice("audio/napolje.mp3");
			
	}
		
	if(mess.includes("necu") || mess.includes("neću") || (mess.includes("ne") && isQ==true))
	{	
		playVoice("audio/necu.mp3");
		isQ=false;
	}
		
		
		
	if(mess.includes("kys") || mess.includes("ubi se") || mess.includes("crkni"))
	{	
		playVoice("audio/pk.mp3");
	}
		
		
		
	if(mess.includes("cekaj") || mess.includes("čekaj") || mess.includes("polako") || mess.includes("zuri") || mess.includes("žuri")  )
	{	
		playVoice("audio/zuri.mp3");
	}
		
		
		
		
	if(mess.includes("borio") || mess.includes("borit"))
	{	
			playVoice("audio/kmiv.mp3");
	}
		
		
	if(mess.includes("glup"))
	{	
			playVoice("audio/manemoj.mp3");
	}
		
	
		
	
}}


);






client.login("NDcyNDU0OTkxOTExNTgzNzcy.Djzw3w.nw7VU33Bo-_bWAWiKRgyFS2qFlM");