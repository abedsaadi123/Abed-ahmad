<?php
session_start();
include("config.php");

if (isset($_REQUEST['sub'])) {
    $a = $_REQUEST['uname'];
    $b = $_REQUEST['upassword'];
    $res = mysqli_query($con, "SELECT * FROM user WHERE username='$a' AND password='$b'");
    $result = mysqli_fetch_array($res);

    if ($result) {
        
            header("location: gg.html"); 
        
    } else {
        
        header("location: index.php?err=1"); 
    }
}
?>

