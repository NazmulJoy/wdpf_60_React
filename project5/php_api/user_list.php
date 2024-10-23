<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");
?>
<?php
include("dbconfig.php");

            $stmt = $db->query("SELECT * FROM users");
            $dataset = [];

            while($row = $stmt->fetch_assoc()){
                $dataset[] = $row;
            };        
            echo json_encode($dataset);
            
?>