<?php
header("Access-Control-Allow-Origin: *");
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
         $hold = json_encode(array('name' => $row['Name'], 'type' => $row['Type']));
	echo($hold);
	echo("=>");
     }
} else {
     echo "";
}

$conn->close();
?>  