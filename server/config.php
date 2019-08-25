<?php

$username = "root";
$password = "";
$hostname = "127.0.0.1";
$databasename = 'markedu_assesment';

$mysqli = new mysqli($hostname, $username, $password, $databasename);


if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
} 

?>
