//	Created by Jeremy Karlsson
//	Copyright 2011
//	Mail: info@enji.se 

window.onload = function () {
	loadVoice(2, 'Ballad Grand Piano');
};

var channel_max = 999;
audiochannels = new Array();
for (a=0;a<channel_max;a++) {
	audiochannels[a] = new Array();
	audiochannels[a]['channel'] = new Audio();
	audiochannels[a]['finished'] = -1;
}

function loadVoice(nr, g) {
	document.getElementById('voice').innerHTML = g;
	document.getElementById('audios').innerHTML = '<audio id="C" src="sounds/'+nr+'/C.mp3" /><audio id="C1" src="sounds/'+nr+'/C1.mp3" /><audio id="D" src="sounds/'+nr+'/D.mp3" /><audio id="D1" src="sounds/'+nr+'/D1.mp3" /><audio id="E" src="sounds/'+nr+'/E.mp3" /><audio id="E1" src="sounds/'+nr+'/E1.mp3" /><audio id="F" src="sounds/'+nr+'/F.mp3" /><audio id="F1" src="sounds/'+nr+'/F1.mp3" /><audio id="G" src="sounds/'+nr+'/G.mp3" /><audio id="G1" src="sounds/'+nr+'/G1.mp3" /><audio id="A" src="sounds/'+nr+'/A.mp3" /><audio id="A1" src="sounds/'+nr+'/A1.mp3" /><audio id="B" src="sounds/'+nr+'/B.mp3" /><audio id="B1" src="sounds/'+nr+'/B1.mp3" /><audio id="C2" src="sounds/'+nr+'/C2.mp3" /><audio id="CS" src="sounds/'+nr+'/CS.mp3" /><audio id="DS" src="sounds/'+nr+'/DS.mp3" /><audio id="FS" src="sounds/'+nr+'/FS.mp3" /><audio id="GS" src="sounds/'+nr+'/GS.mp3" /><audio id="AS" src="sounds/'+nr+'/AS.mp3" /><audio id="CS1" src="sounds/'+nr+'/CS1.mp3" /><audio id="DS1" src="sounds/'+nr+'/DS1.mp3" /><audio id="FS1" src="sounds/'+nr+'/FS1.mp3" /><audio id="GS1" src="sounds/'+nr+'/GS1.mp3" /><audio id="AS1" src="sounds/'+nr+'/AS1.mp3" />"';
}

function playSound(s) {
	for (a=0;a<audiochannels.length;a++) {
		thistime = new Date();
		if (audiochannels[a]['finished'] < thistime.getTime()) {
			audiochannels[a]['finished'] = thistime.getTime() + document.getElementById(s).duration*1000;
			audiochannels[a]['channel'].src = document.getElementById(s).src;
			audiochannels[a]['channel'].load();
			audiochannels[a]['channel'].play();
			break;
		}
	}
}

function disableSelection(target) {
	target.onmousedown= function() {return false;};
	target.style.cursor = "default";
}

document.onkeydown = function(e) {
	var keyCode = ('which' in e) ? e.which : e.keyCode;
	//alert ("The Unicode key code is: " + keyCode);
	if (keyCode == 90) {playSound('C');document.getElementById('keyC').className = "keyActive";}
	if (keyCode == 88) {playSound('D');document.getElementById('keyD').className = "keyActive";}
	if (keyCode == 67) {playSound('E');document.getElementById('keyE').className = "keyActive";}
	if (keyCode == 86) {playSound('F');document.getElementById('keyF').className = "keyActive";}
	if (keyCode == 66) {playSound('G');document.getElementById('keyG').className = "keyActive";}
	if (keyCode == 78) {playSound('A');document.getElementById('keyA').className = "keyActive";}
	if (keyCode == 77) {playSound('B');document.getElementById('keyB').className = "keyActive";}
	if (keyCode == 81) {playSound('C1');document.getElementById('keyC1').className = "keyActive";}
	if (keyCode == 87) {playSound('D1');document.getElementById('keyD1').className = "keyActive";}
	if (keyCode == 69) {playSound('E1');document.getElementById('keyE1').className = "keyActive";}
	if (keyCode == 82) {playSound('F1');document.getElementById('keyF1').className = "keyActive";}
	if (keyCode == 84) {playSound('G1');document.getElementById('keyG1').className = "keyActive";}
	if (keyCode == 89) {playSound('A1');document.getElementById('keyA1').className = "keyActive";}
	if (keyCode == 85) {playSound('B1');document.getElementById('keyB1').className = "keyActive";}
	if (keyCode == 73) {playSound('C2');document.getElementById('keyC2').className = "keyActive";}
	if (keyCode == 83) {playSound('CS');document.getElementById('keyCS').className = "keySActive";}
	if (keyCode == 68) {playSound('DS');document.getElementById('keyDS').className = "keySActive";}
	if (keyCode == 71) {playSound('FS');document.getElementById('keyFS').className = "keySActive";}
	if (keyCode == 72) {playSound('GS');document.getElementById('keyGS').className = "keySActive";}
	if (keyCode == 74) {playSound('AS');document.getElementById('keyAS').className = "keySActive";}
	if (keyCode == 50) {playSound('CS1');document.getElementById('keyCS1').className = "keySActive";}
	if (keyCode == 51) {playSound('DS1');document.getElementById('keyDS1').className = "keySActive";}
	if (keyCode == 53) {playSound('FS1');document.getElementById('keyFS1').className = "keySActive";}
	if (keyCode == 54) {playSound('GS1');document.getElementById('keyGS1').className = "keySActive";}
	if (keyCode == 55) {playSound('AS1');document.getElementById('keyAS1').className = "keySActive";}
}

document.onkeyup = function(e) {
	var keyCode = ('which' in e) ? e.which : e.keyCode;
	if (keyCode == 90) {document.getElementById('keyC').className = "key";}
	if (keyCode == 88) {document.getElementById('keyD').className = "key";}
	if (keyCode == 67) {document.getElementById('keyE').className = "key";}
	if (keyCode == 86) {document.getElementById('keyF').className = "key";}
	if (keyCode == 66) {document.getElementById('keyG').className = "key";}
	if (keyCode == 78) {document.getElementById('keyA').className = "key";}
	if (keyCode == 77) {document.getElementById('keyB').className = "key";}
	if (keyCode == 81) {document.getElementById('keyC1').className = "key";}
	if (keyCode == 87) {document.getElementById('keyD1').className = "key";}
	if (keyCode == 69) {document.getElementById('keyE1').className = "key";}
	if (keyCode == 82) {document.getElementById('keyF1').className = "key";}
	if (keyCode == 84) {document.getElementById('keyG1').className = "key";}
	if (keyCode == 89) {document.getElementById('keyA1').className = "key";}
	if (keyCode == 85) {document.getElementById('keyB1').className = "key";}
	if (keyCode == 73) {document.getElementById('keyC2').className = "key";}
	if (keyCode == 83) {document.getElementById('keyCS').className = "keyS";}
	if (keyCode == 68) {document.getElementById('keyDS').className = "keyS";}
	if (keyCode == 71) {document.getElementById('keyFS').className = "keyS";}
	if (keyCode == 72) {document.getElementById('keyGS').className = "keyS";}
	if (keyCode == 74) {document.getElementById('keyAS').className = "keyS";}
	if (keyCode == 50) {document.getElementById('keyCS1').className = "keyS";}
	if (keyCode == 51) {document.getElementById('keyDS1').className = "keyS";}
	if (keyCode == 53) {document.getElementById('keyFS1').className = "keyS";}
	if (keyCode == 54) {document.getElementById('keyGS1').className = "keyS";}
	if (keyCode == 55) {document.getElementById('keyAS1').className = "keyS";}
}

//	Created by Jeremy Karlsson
//	Copyright 2011
//	Mail: info@enji.se 