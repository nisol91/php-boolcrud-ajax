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


//ora la query sql
$sql = 'SELECT * FROM `ospiti`;';

$result = $conn->query($sql);
if ($result->num_rows > 0) {
// output data of each row

$ospiti = [];
  while($row = $result->fetch_assoc()) {
    $ospiti[] = $row;
  }
//-----------
} else {
  echo '0 results';
}


$ospitiJson = json_encode($ospiti);
echo $ospitiJson;
// var_dump($ospiti);die();



$conn->close();


?>
