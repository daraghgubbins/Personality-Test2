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

function Store1(int){
section1=int;
}

function Store2(int){
section2=int;
}

function Store3(int){
section3=int;
}

function Store4(int){
section4=int;
}

function Store5(int){
section5=int;
}

function Store6(int){
section6=int;
}

function Store7(int){
section7=int;
}

function Store8(int){
section8=int;
}

function addScore(){
finalScore.push(section1,section2,section3,section4,section5,section6,section7,section8);
$.each(finalScore,function() {
    total += this;
});
}

function EorI(){
		if (total > 0){
		result.push("E");
	}
		else if (total < 0){
		result.push("I");
	}
	reset();
}

function SorN(){
		if (total > 0){
		result.push("S");
	}
		else if (total < 0){
		result.push("N");
	}
	reset();
}

function TorF(){
		if (total > 0){
		result.push("T");
	}
		else if (total < 0){
		result.push("F");
	}
	reset();
}

function JorP(){
		if (total > 0){
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
	section1=0,section2=0,section3=0,section4=0,section5=0,section6=0,section7=0,section8=0;
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
              '<input type="text" class="form-control" id="results1" name="results" value="'+results2+'">'+
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
		'<div class="row">'+
		'	<div><strong>You often contemplate lifes complexities</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+
		'<div id="section1" class="row">'+
		'	<div><strong>You focus on possibilities rather than realities</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>I like to deal with facts rather than ideas</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>I like trying new ways to do things</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>The "unknown" intrigues you</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>You prefer following a trusted method</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>You dislike ambiguity in information</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>You enjoy experimenting to see what happens</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(3);checkExtensive()">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(2);checkExtensive()">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(1);checkExtensive()">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-1);checkExtensive()">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(-2);checkExtensive()">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-3);checkExtensive()">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
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
		'	<div><strong>You are willing to engage with your emotions</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+
		'<div id="section1" class="row">'+
		"	<div><strong>It's difficult to get you excited</strong></div>"+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>Thinking lociacally is what matters most</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>You tend to sympathise with others</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>You trust reasoning rather than feelings</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>You are easily affected by strong emotions</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>Emotions rarely influence your decisions</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>You easily understand others concerns</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(3);checkExtensive()">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(2);checkExtensive()">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(1);checkExtensive()">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-1);checkExtensive()">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(-2);checkExtensive()">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-3);checkExtensive()">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
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
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+
		'<div id="section1" class="row">'+
		'	<div><strong>You prefer improvisation rather than planning</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>The best decison is one that can be changed</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>You usually plan your actions in advance</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>You take pleasure in putting things in order</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>You often do jobs in a hurry</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>You like working towards a deadline</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>You often rush jobs</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(3);checkExtensive()">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(2);checkExtensive()">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(1);checkExtensive()">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-1;checkExtensive())">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(-2);checkExtensive()">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-3);checkExtensive()">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+
					  '<button type="button" class="btn btn-info btn-md" onclick= "confirm()" style="margin-bottom:15px;">Home</button>'+
	 ' <button id="btn" type="button" class="btn btn-info btn-md" onclick="addScore();JorP()" disabled style="margin-left:70px; margin-bottom:15px;">Finish</button>'+
		'</div>';

		
}