<html>
<head>
  <link rel="stylesheet" type="text/css" href="FYPCSS.css">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
  <link href="http://netdna.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.css" rel="stylesheet">
  <script src="FYPJS.js"></script>
  <script src="quickJS.js"></script>
  <script src="extensiveJS.js"></script>
  <script src="extensiveJS.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
  </head>

  <body>
  <div>
  <h1 class="text-primary" style="font-family:verdana"><b>Test Results</b></h1>          
</div>

<table class='table'>
    <thead>
      <tr>
        <th class='text-center'>Name</th>
        <th class='text-center'>Type</th>
      </tr>
    </thead>
	</table>

<?php
$servername = "danu6.it.nuigalway.ie";
$username = "mydb1523gd";
$password = "tu4xuj";
$dbname = "mydb1523";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
     die("Connection failed: " . $conn->connect_error);
} 


$sql = "SELECT Name, Type FROM Personality_Results";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
     // output data of each row
	 
     while($row = $result->fetch_assoc()) {
         echo " <table class='table'>

	 <tr class='success'>
        <td class='text-center'>". $row['Name']."</td>
        <td class='text-center'>". $row['Type']."</td>
      </tr>
	</table>";
     }
} else {
     echo "0 results";
}

$conn->close();
?>  
<body>
</html>