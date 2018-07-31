const Discord = require("discord.js");
const opus = require("opusscript");


const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
  client.user.setStatus('online')
	.then(console.log)
	.catch(console.error);
 // client.user.setAvatar('img/normal.png');
});
var pers=null;
var i=0;
var j=0;
var randNum= Math.floor((Math.random() * 10) + 5);
var randAnswer;
var isQ;
var messTime;
var guild=new Discord.Guild();
console.log(randNum);
var isPlaying=false;
client.on("message", (message) => {

	//function for playing audio files
	function playVoice(file){
		isPlaying=true;
	//message author in voice channel
		if(message.member.voiceChannel){
			
		var voiceChannel = message.member.voiceChannel;
		voiceChannel.join().then(connection =>{
			console.log("usao");
			const dispatcher = connection.playFile(file);
			dispatcher.on("end", end => {voiceChannel.leave();
			console.log("izasao");
			isPlaying=false;
			});
		
		
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
	  
	  
	 
	 
	let role = message.guild.roles.find("name", "BLOCKIRAN");

// Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
	let member = message.mentions.members.first();

// or the person who made the command: let member = message.member;

// Add the role!
		console.log(member);
		if(member!=undefined){
		member.addRole(role).catch(console.error);	
		
		message.channel.send(name+" BLOCKIRAN!!!");
	 
		const embed = new Discord.RichEmbed()

		.setImage("https://media.giphy.com/media/9uHZpjg00XUVPjjJEm/giphy.gif")

		message.channel.send({embed});
		
		}
		else{
			message.channel.send("NITKO nije BLOCKIRAN jer si krivo napisao ime OSOBE BUDALO BUDALASTA!!! želiš li TI MOŽDA BLOCK?");
		}
//console.log( role,"  " ,member, member.id);	
	
  }
  
   if (mess.includes("unblockiraj")) {
	  
/*	
	  
   
	name.add_roles()*/
	 var s = mess;
	 console.log(s);
	 var index= s.substring(s.indexOf('<'), s.indexOf('>'));

	 var name=index+'>';
	  	let role = message.guild.roles.find("name", "BLOCKIRAN");

// Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
let member = message.mentions.members.first();
	  if(member!=undefined){
	 message.channel.send(name+" unblockan, ovaj put!");


// or the person who made the command: let member = message.member;

// Add the role!
member.removeRole(role).catch(console.error);
	  }
	  else{
		  message.channel.send("NITKO nije BLOCKIRAN jer si krivo napisao ime OSOBE BUDALO BUDALASTA!!! želiš li TI MOŽDA BLOCK?");
	  }
	
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
		
	if(mess.includes("kiroprakt"))
	{	
			playVoice("audio/kiro.mp3");
	}	
	
	if(mess.includes("glup"))
	{	
			playVoice("audio/manemoj.mp3");
	}
	
	if(mess.includes("pusi") || mess.includes("puši"))
	{	
			playVoice("audio/pusis.mp3");
	}
	
	if(mess.includes("ne ") || mess.includes("naslanjati"))
	{	
			playVoice("audio/np.mp3");
	}
	
	if(mess.includes("150") || mess.includes("stopedeset"))
	{	
			playVoice("audio/150.mp3");
	}
	
	if(mess.includes("gledam") || mess.includes("citam")|| mess.includes("čitam"))
	{	
			playVoice("audio/citam.mp3");
	}
	
	if(mess.includes("legs") || mess.includes("noge"))
	{	
			playVoice("audio/legs.mp3");
	}
	
	if(mess.includes("lud"))
	{	
			playVoice("audio/lud.mp3");
	}
	
	if(mess.includes("predsjednik") || mess.includes("moram biti"))
	{	
			playVoice("audio/zhim.mp3");
	}
	
	if(mess.includes("ubica"))
	{	
			playVoice("audio/ubica.mp3");
	}
	
	
	if(mess.includes("palmer") || mess.includes("chiropractic"))
	{	
			playVoice("audio/serve.mp3");
	}
	
	
	if((mess.includes("mozemo")||mess.includes("mogu"))&&mess.includes(" li"))
	{
		playVoice("audio/mozete.mp3");
	}
	
	if(mess.includes("platio")||mess.includes("platijo")||mess.includes("platil")||mess.includes("platila")||mess.includes("platili")){
		playVoice("audio/platijo.mp3");
	}
	
	if(mess.includes("pogrijesio")||mess.includes("pogrjesio")||mess.includes("pogriješio")||mess.includes("pogrješio")||mess.includes("pogrijesila")||mess.includes("pogrjesila")||mess.includes("pogriješila")||mess.includes("pogrješila")||mess.includes("pogrijesili")||mess.includes("pogrjesili")||mess.includes("pogriješili")||mess.includes("pogrješili")){
		playVoice("audio/pogreska.mp3");
	}
	
	
	if(mess.includes("?")){ isQ=true;
	
	console.log("pitanje");}
	else{
		isQ=false;
	}
		
		
				
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
			
		
		
	
	if((i%randNum==0 && i!=0 && (new Date().getTime()-messTime)< 300000)&& !isPlaying){
		randAnswer= Math.floor((Math.random() * 2) + 1);
		if(pers == null && randAnswer==1){
		if(pers==null){
		pers=message.author;
		}
		console.log(pers);
		message.channel.send(message.author + " zelis BLOCK!?");
		}
		
		if(randAnswer==2 && !isPlaying){
			if(message.member.voiceChannel){
				playVoice("audio/suti.mp3");
				message.channel.send({
				files: [
						"audio/suti.mp3"
					]
				});
			}
			else{
				playVoice("audio/suti.mp3");
			}
			randNum= Math.floor((Math.random() * 10) + 5);
		}
		else{i--;}
	}
	
	if(i%randNum==1 && i!=1 && !mess.includes("ne") && message.author==pers){
		console.log("nema persa vise");
		message.channel.send(message.author + " BLOCK ti evo, pa nauci lijepo misliti o meni");
		pers=null;
		randNum= Math.floor((Math.random() * 10) + 5);
	}
	if(mess.includes("ne") && message.author==pers){
		pers=null;
		console.log("nema persa vise");
		randNum= Math.floor((Math.random() * 10) + 5);
	}
		

	
	
	
	
	
	messTime= new Date().getTime();

	console.log("time SET!");
}}
	
);

client.on("guildMemberAdd", member => {
    client.channels.get('468828946339987470').sendMessage(`${member} dobrodosli u Antin Hram Zdravlja, ENTER TO LEARN HOW ili sto na hrvatskom znaci UDI DA NAUCIS KAKO!`);
});




client.login("NDcyNDU0OTkxOTExNTgzNzcy.Djzw3w.nw7VU33Bo-_bWAWiKRgyFS2qFlM");