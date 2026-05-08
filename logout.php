<?php
session_start();

session_unset();
session_destroy();

if (isset($_COOKIE["color"])) {
    setcookie("color", "", time() - 3600, "/");
}

header("Location: index.php");
exit();
?>