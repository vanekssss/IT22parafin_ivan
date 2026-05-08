<?php
session_start();

if (!isset($_SESSION["name"]) || !isset($_SESSION["theme"])) {
    header("Location: index.php");
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if (isset($_POST["clear_session"])) {
        session_unset();
        header("Location: index.php");
        exit();
    }

    if (isset($_POST["clear_cookie"])) {
        setcookie("color", "", time() - 3600, "/");
        header("Location: dashboard.php");
        exit();
    }
}

$name = $_SESSION["name"];
$theme = $_SESSION["theme"];
$color = isset($_COOKIE["color"]) ? $_COOKIE["color"] : "#ffffff";

$bg = ($theme === "dark") ? "#222" : "#ffffff";
$text = ($theme === "dark") ? "#ffffff" : "#000000";
?>

<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
</head>

<body style="background-color: <?php echo $color; ?>; color: <?php echo $text; ?>;">

<h1>Привіт, <?php echo $name; ?>!</h1>
<p>Тема: <?php echo $theme; ?></p>

<hr>

<a href="preferences.php">Змінити налаштування</a><br><br>
<a href="logout.php">Вийти (очистити все)</a><br><br>

<form method="POST">
    <button name="clear_session">Очистити тільки сесію</button>
    <button name="clear_cookie">Очистити тільки cookie</button>
</form>

</body>
</html>