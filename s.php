<?php
function isStrongPassword($password) {
    return (
        strlen($password) >= 8 &&
        preg_match('/[A-Z]/', $password) &&
        preg_match('/[0-9]/', $password)
    );
}

function generatePassword($length, $callback) {
    $characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    $maxIndex = strlen($characters) - 1;

    do {
        $password = '';
        for ($i = 0; $i < $length; $i++) {
            $password .= $characters[random_int(0, $maxIndex)];
        }
    } while (!$callback($password));

    return $password;
}
?>

<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Генератор паролів</title>
</head>
<body>

<h2>Генерація безпечних паролів</h2>

<form method="post">
    <label>Кількість паролів:</label>
    <input type="number" name="count" min="1" required><br><br>

    <label>Довжина пароля:</label>
    <input type="number" name="length" min="8" required><br><br>

    <button type="submit">Згенерувати</button>
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $count = (int)$_POST["count"];
    $length = (int)$_POST["length"];

    echo "<h3>Згенеровані паролі:</h3>";
    echo "<ul>";

    for ($i = 0; $i < $count; $i++) {
        $password = generatePassword($length, 'isStrongPassword');
        echo "<li>$password</li>";
    }

    echo "</ul>";
}
?>

</body>
</html>