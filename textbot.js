const Discord = require("discord.js");
const opus = require("opusscript");
const config = require("./config.json");

const client = new Discord.Client();
const guild= new Discord.Guild();

var text, textArray;
var matrix=[];
var matArr=[];
var txtMat=[];
var tmpTxtMat=[];
var tmptext;
var arr;

client.on("ready", () => {

	var fs = require('fs')
	//, filename = process.argv[2];
	fs.readFile('antebot/ante.txt', 'utf8', function(err, data) {
	if (err) throw err;
	text=data.replace( /\r\n/g, " " );
	////console.log('OK: ' + filename);
	//console.log(data)
		textArray=text.split([" "]);
	//console.log(textArray);
	
	tmptext=text.toLowerCase();
	arr= tmptext.split(' ');
	});
	
});


client.on("message", (message) => {
	
	matrix=[];
    matArr=[];
    txtMat=[];
    tmpTxtMat=[];
	//console.log("---------------------------------------");
	if(!message.author.bot){
	var snd;
	var x=0;;
	var mess=message.content.toLowerCase();
	var messArray=mess.split(" ");
	
	//console.log("---------------------------------------");
	//console.log(messArray);
	
	//console.log("---------------------------------------");
	for(var j=0; j<messArray.length;j++){
		x=0;
		matArr=[];
		for(var i=0; i<arr.length;i++){
			if(arr[i]==messArray[j]){
	//console.log("---------------------------------------");
				//console.log(arr[i]);
	//console.log("---------------------------------------");
				//console.log(messArray[j]);
	//console.log("---------------------------------------");
				matArr[x]=i;
				x++;
			}
			
		}	
		matrix[j]=matArr;
	//console.log("---------------------------------------");
		//console.log(textArray[i]);
	//console.log("---------------------------------------");
	}
	//console.log("---------------------------------------");
	//console.log(matrix);
	
	//console.log("---------------------------------------");
	
	for(var j=0; j<matrix.length;j++){
		tmpTxtMat=[];
		for(var i=0; i<matrix[j].length;i++){
			var found=false;
			x=matrix[j][i];
			
				//console.log(x);
			snd='';
			do{
				x--;
				//console.log(x);
	//console.log("---------------------------------------");
			//console.log(arr[x]);
	//console.log("---------------------------------------");
	if(x==-1){break;}
			}while(((!arr[x].includes(" .") || !arr[x].includes(". ") ) && !arr[x].includes("!") && !arr[x].includes("?")  ) || arr[x].includes(".."));
		
			do{
			x++;
			snd+=textArray[x]+" ";
			
	//console.log("---------------------------------------");
			//console.log(arr[x]);
	//console.log("---------------------------------------");
			////console.log(!arr[x].includes("."));
			////console.log(arr[x].includes("..."));
			////console.log(!arr[x].includes("!"));
			////console.log(!arr[x].includes("?"));
			////console.log();
		
			}while(((!arr[x].includes(" .") || !arr[x].includes(". ") ) && !arr[x].includes("!") && !arr[x].includes("?")  ) || arr[x].includes(".."));
				for(var k=0; k<tmpTxtMat.length; k++)
				{	
					if(tmpTxtMat[k]==snd)
					{
						found=true;
					}
				}
				if(!found && snd.length<2000)
				{tmpTxtMat.push(snd);}
		}
		txtMat[j]=tmpTxtMat;
	}
	
	//console.log("---------------------------------------");
	//console.log(txtMat);
	//console.log("---------------------------------------");
	var finalMat=[];
	
	for(var i=0;i<txtMat.length;i++){
		for(var j=i+1;j<txtMat.length;j++){
			
			for(var k=0; k<txtMat[i].length;k++){
				for(var l=0; l<txtMat[j].length; l++){
					if(txtMat[i][k]==txtMat[j][l]){
						finalMat.push(txtMat[i][k])
					}
				}
			}
		
		}
	}
	
	//console.log("----------------------------------")
	//console.log(finalMat);
	snd='';
	////console.log("______________________________________________")
	
	if(finalMat.length==0){
		console.log("empty");
		var min=0;
		for(var i=1; i<txtMat.length;i++){
			if(txtMat[i].length<txtMat[min].length){min=i;}
		}
		var n=0;
		do{
			var randNum= Math.floor((Math.random() * finalMat.length) + 0);
			n++;
			if(n==41){break;}
			if(!txtMat[min][Math.floor((Math.random() * txtMat[min].length) + 0)]){continue;}
			//if(txtMat[min][Math.floor((Math.random() * txtMat[min].length) + 0)].length<2000){break;}
		}while(true);
		if(txtMat[min][Math.floor((Math.random() * txtMat[min].length) + 0)]){
		if(txtMat[min][Math.floor((Math.random() * txtMat[min].length) + 0)].length!=0){
		message.channel.send(txtMat[min][Math.floor((Math.random() * txtMat[min].length) + 0)]);
		}}
	}else{
		console.log("NOT EMPTY");
		var n=0;
	do{
		var randNum= Math.floor((Math.random() * finalMat.length) + 0);
		n++;
		if(n==41){break;}
		console.log(finalMat[randNum].length);
		//console.log(finalMat[randNum].length<2000);
		//if(finalMat[randNum].length<2000){break;}
	}while(true);
	if(finalMat[randNum].length!=0){
	message.channel.send(finalMat[randNum]);}
	}
	/*if(arr[x]){
	do{
		x--;
		////console.log();
	}while(((!arr[x].includes(" .") || !arr[x].includes(". ") ) && !arr[x].includes("!") && !arr[x].includes("?")  ) || arr[x].includes(".."))
		
	do{
		x++;
		snd+=textArray[x]+" ";
		//console.log(arr[x]);
		//console.log(!arr[x].includes("."));
		//console.log(arr[x].includes("..."));
		//console.log(!arr[x].includes("!"));
		//console.log(!arr[x].includes("?"));
		////console.log();
		
	}while(((!arr[x].includes(" .") || !arr[x].includes(". ") ) && !arr[x].includes("!") && !arr[x].includes("?")  ) || arr[x].includes(".."))
		//console.log(snd);
	*/
	//message.channel.send(text.substring(tmptext.indexOf(mess),text.indexOf(".",tmptext.indexOf(mess)) ) );
	
	}
	
	
});





client.login(config.token);