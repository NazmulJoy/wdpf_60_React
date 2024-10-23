<?php

    define("HOST","localhost:3310");
    define("USR","root");
    define("PASS","");
    define("DATABASE","wdpf_60_react_crud");

    $db = new mysqli();

    @$db->connect(HOST, USR, PASS);

    @$db->select_db(DATABASE);
?>