<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars(trim($_POST["name"]));
    $color = htmlspecialchars(trim($_POST["color"]));
    $theme = $_POST["theme"];

    if ($theme !== "light" && $theme !== "dark") {
        $theme = "light";
    }

    $_SESSION["name"] = $name;
    $_SESSION["theme"] = $theme;

    setcookie("color", $color, time() + (86400 * 30), "/");

    header("Location: dashboard.php");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Налаштування</title>
</head>
<body>

<h2>Налаштування користувача</h2>

<form method="POST">
    Ім’я:<br>
    <input type="text" name="name" required><br><br>

    Улюблений колір:<br>
    <input type="color" name="color" required><br><br>

    Тема:<br>
    <select name="theme">
        <option value="light">Світла</option>
        <option value="dark">Темна</option>
    </select><br><br>

    <button type="submit">Зберегти</button>
</form>

</body>
</html>