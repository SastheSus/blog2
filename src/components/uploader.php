<?php
/*
$title = $_REQUEST["title"];
$img = $_REQUEST["img"];
$content = $_REQUEST["content"];*/
$email = $_REQUEST["email"];
$password = $_REQUEST["password"];

header("Access-Control-Expose-Headers: *", true);
header("Access-Control-Allow-Credentials: *", true);
header("Access-Control-Allow-Origin: *", true);

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        
  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
      // may also be using PUT, PATCH, HEAD etc
      header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
  
  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
      header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

  exit(0);
}
$hint ="";
try{

  $pdo = new PDO("mysql:host=localhost; dbname=blog", "root", "");
  
  //echo "/".$d."/".strlen($d)."/".$h."/".strlen($h)."/\n";
  $text = "SELECT email FROM utenti WHERE email = ? AND password = ?";
  
  $query= $pdo->prepare($text);
  $query->execute([$email,$password]);
  
  while ($row = $query->fetch()) {
      $hint.=$row['email'];
  }
  }
  catch (PDOException $e){
      echo "Impossibile connettersi al server di database. ".$e;
      exit();
  }
  //se più di un prof a disposizione
  //cercare l'idProf del select in profhaclasse
  //cercare l'idProf del select in profhamateria
  
  echo $hint === "" ? "no suggestion" : $hint;
?>