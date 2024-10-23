<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");
?>
<?php
include("dbconfig.php");
 
$user = json_decode(file_get_contents('php://input'));
            
            $name = $user->name;
            $email = $user->email;
            $mobile = $user->mobile;
            $db->query("INSERT INTO users(id, name, email, mobile) values(null,'$name', '$email', '$mobile')");

            if($db->affected_rows) echo "Inserted";
?>