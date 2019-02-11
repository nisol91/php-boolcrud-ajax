<?php

//connessione al server tramite php plain (non viene piu utilizzata e non va capita troppo a fondo)
include '../credentials/env.php';
// Connect
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
echo ( 'Connection failed: ' . $conn->connect_error);
} else {
  // echo 'Siamo dentro';
}

$id_delete = $_GET['id'];


$sql = "DELETE FROM `ospiti` WHERE id = '$id_delete';";

$result = $conn->query($sql);

//-------********IMPORTANTE questa parte e' diversa nella post rispetto alla get!!!
if ($result == true) {
  echo 'ok, host deleted from db';
//-----------
} else {
  echo '0 results';
}

// var_dump($ospiti);die();



$conn->close();


?>
