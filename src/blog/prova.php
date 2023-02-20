<?php
try{
    // DA METTERE IN HTDOCS SE NO NON VA
    // IN XAMPP DEVI AVVIARE MYSQL 
    
    // pdo è l'oggetto che rappresenta il database, è il mezzo con cui comunichi
    $pdo = new PDO("mysql:host=localhost; dbname=minghie", "root", "");
    
    // prepariamo la query, diciamo al pdo di prepararne una 
    $query = $pdo->prepare("SELECT * FROM dipartimenti ");
    $query->execute(); 
    
    while ($riga = $query->fetch()) {
        echo $riga['Nome']."<br/>\n";
    }

    $pdo = null; // chiudo la connessione
}
catch (PDOException $e){
    echo "Impossibile connettersi al server di database. ".$e;
    exit();
}
?>