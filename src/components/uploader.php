<?php
/*
$title = $_REQUEST["title"];
$img = $_REQUEST["img"];
$content = $_REQUEST["content"];*/
$email = $_REQUEST["email"];

try{
  $pdo = new PDO("mysql:host=localhost; dbname=blog", "root", "");
  
  //echo "/".$d."/".strlen($d)."/".$h."/".strlen($h)."/\n";
  $text = "SELECT email FROM utenti WHERE email = ?";
  
  $query= $pdo->prepare($text);
  $query->execute([$email]);
  
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