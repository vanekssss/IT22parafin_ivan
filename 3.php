<?php
$login = "";
$password = "";
$confirm = "";
$success = "";
$errors = [];

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $login = trim($_POST["login"]);
    $password = trim($_POST["password"]);
    $confirm = trim($_POST["confirm"]);

    if (!filter_var($login, FILTER_VALIDATE_REGEXP, [
        "options" => ["regexp" => "/^[a-zA-Z0-9]+$/"]
    ])) {
        $errors[] = "Логін не повинен містити спецсимволів";
    }

    if (!filter_var($password, FILTER_VALIDATE_REGEXP, [
        "options" => ["regexp" => "/^.{6,}$/"]
    ])) {
        $errors[] = "Пароль має містити мінімум 6 символів";
    }

    if ($password !== $confirm) {
        $errors[] = "Паролі не співпадають";
    }

    if (empty($errors)) {
        $success = "Реєстрація успішна!";
        $login = "";
        $password = "";
        $confirm = "";
    }
}
?>

<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Реєстрація</title>
</head>
<body>

<h2>Форма реєстрації</h2>

<?php
if (!empty($errors)) {
    foreach ($errors as $error) {
        echo "<p style='color:red;'>$error</p>";
    }
}

if ($success) {
    echo "<p style='color:green;'>$success</p>";
}
?>

<form method="post">
    <label>Логін:</label><br>
    <input type="text" name="login" value="<?= htmlspecialchars($login) ?>"><br><br>

    <label>Пароль:</label><br>
    <input type="password" name="password"><br><br>

    <label>Підтвердження паролю:</label><br>
    <input type="password" name="confirm"><br><br>

    <button type="submit">Зареєструватися</button>
</form>

</body>
</html>