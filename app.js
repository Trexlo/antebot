const Discord = require("discord.js");
const opus = require("opusscript");


const client = new Discord.Client();
const guild= new Discord.Guild();

function sleep(miliseconds) {
   var currentTime = new Date().getTime();
	console.log("i sleep");
   while (currentTime + miliseconds >= new Date().getTime()) {
   }
   
}
	 
var randNum= Math.floor((Math.random() * 30) + 1); 
var file;
var isPlaying=false;
var randTime= Math.floor((Math.random() * 300000) + 60000);
var found=false;
var channels= [];
var empty= [];
client.on("ready", () => {

	
	//var voice= GuildChannel.VoiceChannel;
	//console.log(client.channels.get('468828946809618432'));
//	console.log("---------------");
//	console.log(client.channels.array());
	//console.log("---------------");
	chans=client.channels.array();
	for(var chan in chans){
		//console.log("++++++++++++++")
		if(chans[chan].type!="text")
		channels.push(chans[chan]);
	}
		
	
	for(chan in channels){
	//	console.log("-_--_-_-_---_-_____-");
	//	console.log(channels[chan]);
	}
	/*'468828946809618432' => VoiceChannel {
     type: 'voice',
     id: '468828946809618432',
     name: 'General',
     position: 0,
     parentID: '468828946339987471',
     permissionOverwrites: Collection {},
     bitrate: 64,
     userLimit: 0,
     guild: [Object],
     members: [Object] }*/
//	voiceChannel=client.channels.get('468828946809618432');
	var isIn=false;
	
	client.setInterval(function (){
		function playVoice(file, voiceChannel){
	isPlaying=true;
	//message author in voice channel
	
		if(voiceChannel.members){
		voiceChannel.join()
		.then(
        connection =>{
			isIn=true;
			const dispatcher = connection.playFile(file);
			
			dispatcher.on("end", end => {voiceChannel.leave();
			isPlaying=false;
			isIn=false;
			});

		});
		}
	
		
	}
		
	
	randNum= Math.random();
	var voiceChannel;
	
	console.log(randNum);
	if(randNum<0.1){
		console.log("start------------------------");
		for(var chan in channels){
			console.log("searching");
		if(channels[chan].members){
			console.log("has members");
		if (channels[chan].members.array().length>0){
			console.log("not undefined");
			console.log(channels[chan].members.array());
		voiceChannel=channels[chan];
		found=true; console.log("found");
		console.log("!!!!!!!!!!!!!!!!!!!!!!!!1")
			break;
		}}
	}
		
		isPlaying=true;
		randNum= Math.floor((Math.random() * 3) + 1);
		if(found){if(randNum==1){
			console.log(1);
		playVoice('audio/scream1.mp3',voiceChannel);}
	if(randNum==2){
			console.log(2);
		playVoice('audio/scream2.mp3',voiceChannel);}
	if(randNum==3){
			console.log(3);
		playVoice('audio/scream3.mp3',voiceChannel);}
		found=false;
		}
		
	}
		
		randTime= Math.floor((Math.random() * 5) + 5)*60*1000;
		console.log(randTime/1000/60);
		console.log("cycle over!");
	}, randTime);

});


client.on("message", (message) => {
	
	

}
);

var fs = require('fs');
 
fs.readFile('token.txt', 'utf8', function(err, contents) {
    client.login(contents);
});

