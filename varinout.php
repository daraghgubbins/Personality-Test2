<?php
header("Access-Control-Allow-Origin: *");
if(isset($_POST["Name"]) && (isset ($_POST["results"]))){
$Name= $_POST["Name"];
$Type= $_POST["results"];
$dbhost = "danu6.it.nuigalway.ie";
$dbuser = "mydb1523gd";
$dbpass = "tu4xuj";

$Name = str_replace("'", '', $Name);
$con = mysqli_connect($dbhost, $dbuser, $dbpass);
if (!$con) {
    die("Database connection failed: " . mysqli_error());
}

$dbname = "mydb1523";
$db_select = mysqli_select_db($con, $dbname);
if (!$db_select) {
    die("Database selection failed: " . mysqli_error());
}

$sql = "INSERT INTO Personality_Results (Name, Type)
VALUES ('$Name', '$Type')";
if ($con->query($sql) === TRUE) {
    echo "New record created successfully";
	header("location:javascript://history.go(-1)");
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

mysqli_close($con);
}
else{
echo("No Args recieved");
}
?>  