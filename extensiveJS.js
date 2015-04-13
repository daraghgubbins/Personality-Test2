var section1=0,section2=0,section3=0,section4=0,section5=0,section6=0,section7=0,section8=0;
var total = 0;
var finalScore = [];
var result = []

function checkExtensive(){
document.getElementById("btn").disabled = false;
}


function confirmHome(){
    if (confirm("Are you sure you want to exit?")== true) {
		parent.location="index.html";
	}
}

function toggleOverlay(){
	var overlay = document.getElementById('overlay');
	var specialBox = document.getElementById('specialBox');
	overlay.style.opacity = .8;
	if(overlay.style.display == "block"){
		overlay.style.display = "none";
		specialBox.style.display = "none";
	} else {
		overlay.style.display = "block";
		specialBox.style.display = "block";
	}
}

function reset1(){
document.getElementById("11").style.color="";
document.getElementById("12").style.color="";
document.getElementById("13").style.color="";
document.getElementById("14").style.color="";
document.getElementById("15").style.color="";
document.getElementById("16").style.color="";
}
function reset2(){
document.getElementById("21").style.color="";
document.getElementById("22").style.color="";
document.getElementById("23").style.color="";
document.getElementById("24").style.color="";
document.getElementById("25").style.color="";
document.getElementById("26").style.color="";
}
function reset3(){
document.getElementById("31").style.color="";
document.getElementById("32").style.color="";
document.getElementById("33").style.color="";
document.getElementById("34").style.color="";
document.getElementById("35").style.color="";
document.getElementById("36").style.color="";
}
function reset4(){
document.getElementById("41").style.color="";
document.getElementById("42").style.color="";
document.getElementById("43").style.color="";
document.getElementById("44").style.color="";
document.getElementById("45").style.color="";
document.getElementById("46").style.color="";
}
function reset5(){
document.getElementById("51").style.color="";
document.getElementById("52").style.color="";
document.getElementById("53").style.color="";
document.getElementById("54").style.color="";
document.getElementById("55").style.color="";
document.getElementById("56").style.color="";
}
function reset6(){
document.getElementById("61").style.color="";
document.getElementById("62").style.color="";
document.getElementById("63").style.color="";
document.getElementById("64").style.color="";
document.getElementById("65").style.color="";
document.getElementById("66").style.color="";
}
function reset7(){
document.getElementById("71").style.color="";
document.getElementById("72").style.color="";
document.getElementById("73").style.color="";
document.getElementById("74").style.color="";
document.getElementById("75").style.color="";
document.getElementById("76").style.color="";
}
function reset8(){
document.getElementById("81").style.color="";
document.getElementById("82").style.color="";
document.getElementById("83").style.color="";
document.getElementById("84").style.color="";
document.getElementById("85").style.color="";
document.getElementById("86").style.color="";
}

function Store1(int){
section1=int;
if(int==-3){
reset1();
document.getElementById("11").style.color = "#3366FF";
}
else if(int==-2){
reset1();
document.getElementById("12").style.color = "#3366FF";
}
else if(int==-1){
reset1();
document.getElementById("13").style.color = "#3366FF";
}
else if(int==1){
reset1();
document.getElementById("14").style.color = "#3366FF";
}
else if(int==2){
reset1();
document.getElementById("15").style.color = "#3366FF";
}
else if(int==3){
reset1();
document.getElementById("16").style.color = "#3366FF";
}
}

function Store2(int){
section2=int;
if(int==-3){
reset2();
document.getElementById("21").style.color = "#3366FF";
}
else if(int==-2){
reset2();
document.getElementById("22").style.color = "#3366FF";
}
else if(int==-1){
reset2();
document.getElementById("23").style.color = "#3366FF";
}
else if(int==1){
reset2();
document.getElementById("24").style.color = "#3366FF";
}
else if(int==2){
reset2();
document.getElementById("25").style.color = "#3366FF";
}
else if(int==3){
reset2();
document.getElementById("26").style.color = "#3366FF";
}
}

function Store3(int){
section3=int;
if(int==3){
reset3();
document.getElementById("31").style.color = "#3366FF";
}
else if(int==2){
reset3();
document.getElementById("32").style.color = "#3366FF";
}
else if(int==1){
reset3();
document.getElementById("33").style.color = "#3366FF";
}
else if(int==-1){
reset3();
document.getElementById("34").style.color = "#3366FF";
}
else if(int==-2){
reset3();
document.getElementById("35").style.color = "#3366FF";
}
else if(int==-3){
reset3();
document.getElementById("36").style.color = "#3366FF";
}
}

function Store4(int){
section4=int;
if(int==3){
reset4();
document.getElementById("41").style.color = "#3366FF";
}
else if(int==2){
reset4();
document.getElementById("42").style.color = "#3366FF";
}
else if(int==1){
reset4();
document.getElementById("43").style.color = "#3366FF";
}
else if(int==-1){
reset4();
document.getElementById("44").style.color = "#3366FF";
}
else if(int==-2){
reset4();
document.getElementById("45").style.color = "#3366FF";
}
else if(int==-3){
reset4();
document.getElementById("46").style.color = "#3366FF";
}
}

function Store5(int){
section5=int;
if(int==-3){
reset5();
document.getElementById("51").style.color = "#3366FF";
}
else if(int==-2){
reset5();
document.getElementById("52").style.color = "#3366FF";
}
else if(int==-1){
reset5();
document.getElementById("53").style.color = "#3366FF";
}
else if(int==1){
reset5();
document.getElementById("54").style.color = "#3366FF";
}
else if(int==2){
reset5();
document.getElementById("55").style.color = "#3366FF";
}
else if(int==3){
reset5();
document.getElementById("56").style.color = "#3366FF";
}
}

function Store6(int){
section6=int;
if(int==3){
reset6();
document.getElementById("61").style.color = "#3366FF";
}
else if(int==2){
reset6();
document.getElementById("62").style.color = "#3366FF";
}
else if(int==1){
reset6();
document.getElementById("63").style.color = "#3366FF";
}
else if(int==-1){
reset6();
document.getElementById("64").style.color = "#3366FF";
}
else if(int==-2){
reset6();
document.getElementById("65").style.color = "#3366FF";
}
else if(int==-3){
reset6();
document.getElementById("66").style.color = "#3366FF";
}
}

function Store7(int){
section7=int;
if(int==-3){
reset7();
document.getElementById("71").style.color = "#3366FF";
}
else if(int==-2){
reset7();
document.getElementById("72").style.color = "#3366FF";
}
else if(int==-1){
reset7();
document.getElementById("73").style.color = "#3366FF";
}
else if(int==1){
reset7();
document.getElementById("74").style.color = "#3366FF";
}
else if(int==2){
reset7();
document.getElementById("75").style.color = "#3366FF";
}
else if(int==3){
reset7();
document.getElementById("76").style.color = "#3366FF";
}
}

function Store8(int){
section8=int;
if(int==3){
reset8();
document.getElementById("81").style.color = "#3366FF";
}
else if(int==2){
reset8();
document.getElementById("82").style.color = "#3366FF";
}
else if(int==1){
reset8();
document.getElementById("83").style.color = "#3366FF";
}
else if(int==-1){
reset8();
document.getElementById("84").style.color = "#3366FF";
}
else if(int==-2){
reset8();
document.getElementById("85").style.color = "#3366FF";
}
else if(int==-3){
reset8();
document.getElementById("86").style.color = "#3366FF";
}
}

function addScore(){
finalScore.push(section1,section2,section3,
section4,section5,section6,section7,section8);
$.each(finalScore,function() {
    total += this;
});
}

function EorI(){
		if (total >= 0){
		result.push("E");
	}
		else if (total < 0){
		result.push("I");
	}
	reset();
}

function SorN(){
		if (total >= 0){
		result.push("S");
	}
		else if (total < 0){
		result.push("N");
	}
	reset();
}

function TorF(){
		if (total >= 0){
		result.push("T");
	}
		else if (total < 0){
		result.push("F");
	}
	reset();
}

function JorP(){
		if (total >= 0){
		result.push("J");
	}
		else if (total < 0){
		result.push("P");
	}
	GetResults2();
}
	var results2="";
	
function GetResults2(){

	for(j= result.length-1; j>=0;j--){
    results2=result[j]+results2;
	}
	saveResults2()
	
}

function reset(){
	section1=0,section2=0,section3=0,section4=0,
	section5=0,section6=0,section7=0,section8=0;
	total = 0;
	finalScore=[];
}

	function saveResults2(){
	var x = document.getElementById("section");
	x.innerHTML = '<div><h1 class="text-primary" style="font-family:verdana"><b>Personality Type Indicator</b></h1></div>'+
	'<div id="image"><img src="brain2.png" alt="Brain" style="width:304px;height:228px"></div><h2>Save Result '+results2+'</h2>' +
	  '<div class="row1">'+
    '<div class="col-md-12 col-sm-12 col-xs-12">'+
     ' <div class="panel panel-default">'+
      '  <div class="panel-heading clearfix">'+
       '   <i class="icon-calendar"></i>'+
        '  <h3 class="panel-title">Save Results</h3>'+
        '</div>'+
        '<div class="panel-body">'+
         ' <form class="form-inline" role="form" method="post" action="http://danu6.it.nuigalway.ie/daraghG06/Personality-Test2/varinout.php">'+
          '  <div class="form-group">'+
           '   <label class="sr-only">Name</label>'+
            '  <input type="text" class="form-control" name="Name" placeholder="Name">'+
            '</div>'+
            '<div class="form-group">'+
             ' <label class="sr-only">Password</label>'+
              '<input type="text" class="form-control" id="results1" name="results" value="'+results2+'" readonly=""/>'+
            '</div>'+
			'<button id="savebtn" type="submit" class="btn btn-info">Save</button>'+
          '</form>'+
		  '<button  id="savebtn" class="btn btn-info"onclick="resultpage2()">Continue to Results</button>'+
        '</div>'+
      '</div>'+
    '</div>'+
  '</div>';
	}
	function resultpage2(){
		window.location.href=(""+results2+"-page.html");
		}
function page2(){
	var x = document.getElementById("section");
	x.innerHTML = '<div>'+
  '<h1 class="text-primary" style="font-family:verdana"><b>Extensive Test</b></h1>'+
  '<h4 class="text-warning" style="font-family:verdana"><b>Section Two</b></h4>'+
'</div>'+

 '<div class="container-fluid">'+
 	'<div align="center" class="container"> '+
	'	<div class="progress" style="width:300px" >'+
		'	<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width:25%">'+
		'	 25%</div>'+
		'</div>'+
	'</div> '+
		'<div id="section1" class="row">'+
		'	<div><strong>You never contemplate lifes complexities</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i id="11"class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i id="12"class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i id="13"class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i id="14"class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i id="15"class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i id="16"class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+
		'<div id="section2" class="row">'+
		'	<div><strong>You focus on realities rather than possibilities</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store2(-3)">'+
							'<i id="21"class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store2(-2)">'+
							'<i id="22"class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store2(-1)">'+
							'<i id="23"class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store2(1)">'+
							'<i id="24"class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store2(2)">'+
							'<i id="25"class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store2(3)">'+
							'<i id="26"class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section3" class="row">'+
		'	<div><strong>You like to deal with ideas rather than facts</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store3(3)">'+
							'<i id="31"class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store3(2)">'+
							'<i id="32"class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store3(1)">'+
							'<i id="33"class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store3(-1)">'+
							'<i id="34"class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store3(-2)">'+
							'<i id="35"class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store3(-3)">'+
							'<i id="36"class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section4" class="row">'+
		'	<div><strong>I like trying new ways to do things</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store4(3)">'+
							'<i id="41"class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store4(2)">'+
							'<i id="42"class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store4(1)">'+
							'<i id="43"class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store4(-1)">'+
							'<i id="44"class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store4(-2)">'+
							'<i id="45"class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store4(-3)">'+
							'<i id="46"class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section5" class="row">'+
		'	<div><strong>The "unknown" does not interest you</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store5(-3)">'+
							'<i id="51"class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store5(-2)">'+
							'<i id="52"class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store5(-1)">'+
							'<i id="53"class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store5(1)">'+
							'<i id="54"class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store5(2)">'+
							'<i id="55"class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store5(3)">'+
							'<i id="56"class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section6" class="row">'+
		'	<div><strong>You like to experiment</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store6(3)">'+
							'<i id="61"class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store6(2)">'+
							'<i id="62"class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store6(1)">'+
							'<i id="63"class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store6(-1)">'+
							'<i id="64" class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store6(-2)">'+
							'<i id="65"class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store6(-3)">'+
							'<i id="66"class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section7" class="row">'+
		'	<div><strong>You dislike ambiguity in information</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store7(-3)">'+
							'<i id="71"class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store7(-2)">'+
							'<i id="72"class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store7(-1)">'+
							'<i id="73"class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store7(1)">'+
							'<i id="74"class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store7(2)">'+
							'<i id="75"class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store7(3)">'+
							'<i id="76"class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section8" class="row">'+
		'	<div><strong>You enjoy experimenting to see what happens</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store8(3);checkExtensive()">'+
							'<i id="81"class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store8(2);checkExtensive()">'+
							'<i id="82"class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store8(1);checkExtensive()">'+
							'<i id="83"class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store8(-1);checkExtensive()">'+
							'<i id="84"class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store8(-2);checkExtensive()">'+
							'<i id="85"class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store8(-3);checkExtensive()">'+
							'<i id="86"class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+
					  '<button type="button" class="btn btn-info btn-md" onclick= "confirmHome()" style="margin-bottom:15px;">Home</button>'+
	 ' <a href="#"> <button id="btn" type="button" class="btn btn-info btn-md" onclick="addScore();SorN();page3()" disabled style="margin-left:70px; margin-bottom:15px;">Next</button></a>'+
		'</div>';

		
}

function page3(){
	var x = document.getElementById("section");
	x.innerHTML = '<div>'+
  '<h1 class="text-primary" style="font-family:verdana"><b>Extensive Test</b></h1>'+
  '<h4 class="text-warning" style="font-family:verdana"><b>Section Three</b></h4>'+
'</div>'+

 '<div class="container-fluid">'+
 	'<div align="center" class="container"> '+
	'	<div class="progress" style="width:300px" >'+
		'	<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:50%">'+
		'	 50%</div>'+
		'</div>'+
	'</div> '+
		'<div id="section1" class="row">'+
		'	<div><strong>You try and suppress your emotions</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i id="11"class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i id="12"class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i id="13"class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i id="14"class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i id="15"class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i id="16"class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+
		'<div id="section2" class="row">'+
		"	<div><strong>It's difficult to get you excited</strong></div>"+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store2(-3)">'+
							'<i id="21"class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store2(-2)">'+
							'<i id="22"class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store2(-1)">'+
							'<i id="23"class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store2(1)">'+
							'<i id="24"class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store2(2)">'+
							'<i id="25"class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store2(3)">'+
							'<i id="26"class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section3" class="row">'+
		'	<div><strong>Always thinking logically is boring</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store3(3)">'+
							'<i id="31"class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store3(2)">'+
							'<i id="32"class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store3(1)">'+
							'<i id="33"class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store3(-1)">'+
							'<i id="34"class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store3(-2)">'+
							'<i id="35"class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store3(-3)">'+
							'<i id="36"class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section4" class="row">'+
		'	<div><strong>You tend to sympathise with others</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store4(3)">'+
							'<i id="41"class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store4(2)">'+
							'<i id="42"class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store4(1)">'+
							'<i id="43"class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store4(-1)">'+
							'<i id="44"class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store4(-2)">'+
							'<i id="45"class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store4(-3)">'+
							'<i id="46"class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section5" class="row">'+
		'	<div><strong>You trust reasoning rather than feelings</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store5(-3)">'+
							'<i id="51"class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store5(-2)">'+
							'<i id="52"class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store5(-1)">'+
							'<i id="53"class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store5(1)">'+
							'<i id="54"class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store5(2)">'+
							'<i id="55"class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store5(3)">'+
							'<i id="56"class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section6" class="row">'+
		'	<div><strong>You are easily affected by strong emotions</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store6(3)">'+
							'<i id="61"class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store6(2)">'+
							'<i id="62"class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store6(1)">'+
							'<i id="63"class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store6(-1)">'+
							'<i id="64"class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store6(-2)">'+
							'<i id="65"class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store6(-3)">'+
							'<i id="66"class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section7" class="row">'+
		'	<div><strong>Emotions rarely influence your decisions</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store7(-3)">'+
							'<i id="71"class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store7(-2)">'+
							'<i id="72"class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store7(-1)">'+
							'<i id="73"class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store7(1)">'+
							'<i id="74"class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store7(2)">'+
							'<i id="75"class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store7(3)">'+
							'<i id="76"class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section8" class="row">'+
		'	<div><strong>You easily understand others concerns</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store8(3);checkExtensive()">'+
							'<i id="81"class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store8(2);checkExtensive()">'+
							'<i id="82"class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store8(1);checkExtensive()">'+
							'<i id="83"class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store8(-1);checkExtensive()">'+
							'<i id="84"class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store8(-2);checkExtensive()">'+
							'<i id="85"class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store8(-3);checkExtensive()">'+
							'<i id="86"class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+
					  '<button type="button" class="btn btn-info btn-md" onclick= "confirmHome()" style="margin-bottom:15px;">Home</button>'+
	 ' <a href="#"><button id="btn" type="button" class="btn btn-info btn-md" onclick="addScore();TorF();page4()" disabled style="margin-left:70px; margin-bottom:15px;">Next</button></a>'+
		'</div>';

		
}

function page4(){
	var x = document.getElementById("section");
	x.innerHTML = '<div>'+
  '<h1 class="text-primary" style="font-family:verdana"><b>Extensive Test</b></h1>'+
  '<h4 class="text-warning" style="font-family:verdana"><b>Section Four</b></h4>'+
'</div>'+

 '<div class="container-fluid">'+
 	'<div align="center" class="container"> '+
	'	<div class="progress" style="width:300px" >'+
		'	<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width:75%">'+
		'	 75%</div>'+
		'</div>'+
	'</div> '+
		'<div id="section1" class="row">'+
		'	<div><strong>You are almost never late for appointments</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i id="11"class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i id="12"class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i id="13"class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i id="14"class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i id="15"class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i id="16"class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+
		'<div id="section2" class="row">'+
		'	<div><strong>You prefer planning rather than improvisation</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store2(-3)">'+
							'<i id="21"class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store2(-2)">'+
							'<i id="22"class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store2(-1)">'+
							'<i id="23"class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store2(1)">'+
							'<i id="24"class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store2(2)">'+
							'<i id="25"class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store2(3)">'+
							'<i id="26"class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section3" class="row">'+
		'	<div><strong>The best decison is one that can be changed</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store3(3)">'+
							'<i id="31"class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store3(2)">'+
							'<i id="32"class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store3(1)">'+
							'<i id="33"class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store3(-1)">'+
							'<i id="34"class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store3(-2)">'+
							'<i id="35"class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store3(-3)">'+
							'<i id="36"class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section4" class="row">'+
		'	<div><strong>You usually plan your actions as you go</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store4(3)">'+
							'<i id="41"class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store4(2)">'+
							'<i id="42"class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store4(1)">'+
							'<i id="43"class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store4(-1)">'+
							'<i id="44"class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store4(-2)">'+
							'<i id="45"class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store4(-3)">'+
							'<i id="46"class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section5" class="row">'+
		'	<div><strong>You take pleasure in putting things in order</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store5(-3)">'+
							'<i id="51"class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store5(-2)">'+
							'<i id="52"class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store5(-1)">'+
							'<i id="53"class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store5(1)">'+
							'<i id="54"class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store5(2)">'+
							'<i id="55"class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store5(3)">'+
							'<i id="56"class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section6" class="row">'+
		'	<div><strong>You often do jobs in a hurry</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store6(3)">'+
							'<i id="61"class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store6(2)">'+
							'<i id="62"class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store6(1)">'+
							'<i id="63"class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store6(-1)">'+
							'<i id="64"class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store6(-2)">'+
							'<i id="65"class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store6(-3)">'+
							'<i id="66"class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section7" class="row">'+
		'	<div><strong>You like working towards a deadline</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store7(-3)">'+
							'<i id="71"class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store7(-2)">'+
							'<i id="72"class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store7(-1)">'+
							'<i id="73"class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store7(1)">'+
							'<i id="74"class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store7(2)">'+
							'<i id="75"class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store7(3)">'+
							'<i id="76"class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section8" class="row">'+
		'	<div><strong>You often rush jobs</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store8(3);checkExtensive()">'+
							'<i id="81"class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store8(2);checkExtensive()">'+
							'<i id="82"class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store8(1);checkExtensive()">'+
							'<i id="83"class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store8(-1);checkExtensive()">'+
							'<i id="84"class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store8(-2);checkExtensive()">'+
							'<i id="85"class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store8(-3);checkExtensive()">'+
							'<i id="86"class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+
					  '<button type="button" class="btn btn-info btn-md" onclick= "confirm()" style="margin-bottom:15px;">Home</button>'+
	 ' <button id="btn" type="button" class="btn btn-info btn-md" onclick="addScore();JorP()" disabled style="margin-left:70px; margin-bottom:15px;">Finish</button>'+
		'</div>';

		
}