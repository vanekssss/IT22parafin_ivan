<?php
session_start();

if (!isset($_SESSION["name"]) || !isset($_SESSION["theme"])) {
    header("Location: preferences.php");
    exit();
}

header("Location: dashboard.php");
exit();
?>