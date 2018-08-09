const Discord = require("discord.js");
const opus = require("opusscript");
const config = require("./config.json");

const client = new Discord.Client();
const guild= new Discord.Guild();

var text, textArray;

client.on("ready", () => {

	var fs = require('fs')
	//, filename = process.argv[2];
	fs.readFile('antebot/ante.txt', 'utf8', function(err, data) {
	if (err) throw err;
	text=data.replace( /\n/g, " " );
	//console.log('OK: ' + filename);
	console.log(data)
		textArray=text.split([" "]);
	console.log(textArray);
	});

	
});


client.on("message", (message) => {
	
	if(!message.author.bot){
		var snd;
		var x;
	var mess=message.content.toLowerCase();
	var tmptext=text.toLowerCase();
	var arr= tmptext.split(' ');
	var messArray=mess.split(" ");
	console.log(messArray);
	for(var i=0; i<arr.length;i++){
		for(var j=0; j<messArray.length;j++){
			if(arr[i]==messArray[j]){
				console.log(arr[i]);
				console.log(messArray[j]);
				x=i;break;
			}
			break;
		}	
		console.log(textArray[i]);
	}
	
	snd='';
	console.log("______________________________________________")
	if(arr[x]){
	do{
		x--;
		//console.log();
	}while((!arr[x].includes(".") && !arr[x].includes("!") && !arr[x].includes("?")  ) || arr[x].includes(".."))
		
	do{
		x++;
		snd+=textArray[x]+" ";
		console.log(arr[x]);
		console.log(!arr[x].includes("."));
		console.log(arr[x].includes("..."));
		console.log(!arr[x].includes("!"));
		console.log(!arr[x].includes("?"));
		//console.log();
		
	}while((!arr[x].includes(".") && !arr[x].includes("!") && !arr[x].includes("?")  ) || arr[x].includes(".."))
		console.log(snd);
	//message.channel.send(text.substring(tmptext.indexOf(mess),text.indexOf(".",tmptext.indexOf(mess)) ) );
	message.channel.send(snd);
	}
	}
	
});





client.login(config.token);