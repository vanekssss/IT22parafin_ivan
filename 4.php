<?php
$name = "";
$email = "";
$product = "";
$quantity = "";
$result = "";
$errors = [];

$products = [
    "Телефон" => 10000,
    "Ноутбук" => 25000,
    "Навушники" => 2000
];

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $product = $_POST["product"];
    $quantity = trim($_POST["quantity"]);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Невірний email";
    }

    if (!filter_var($quantity, FILTER_VALIDATE_INT, [
        "options" => ["min_range" => 1, "max_range" => 100]
    ])) {
        $errors[] = "Кількість має бути від 1 до 100";
    }

    if (!array_key_exists($product, $products)) {
        $errors[] = "Невірний товар";
    }

    if (empty($errors)) {
        $total = $products[$product] * $quantity;

        $result = "Замовлення оформлено:<br>" .
            "Ім’я: " . htmlspecialchars($name) . "<br>" .
            "Email: " . htmlspecialchars($email) . "<br>" .
            "Товар: " . htmlspecialchars($product) . "<br>" .
            "Кількість: " . htmlspecialchars($quantity) . "<br>" .
            "Сума: " . htmlspecialchars($total) . " грн";
        
        $name = "";
        $email = "";
        $product = "";
        $quantity = "";
    }
}
?>

<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Замовлення товару</title>
</head>
<body>

<h2>Форма замовлення</h2>

<?php
if (!empty($errors)) {
    foreach ($errors as $error) {
        echo "<p style='color:red;'>$error</p>";
    }
}

if ($result) {
    echo "<p style='color:green;'>$result</p>";
}
?>

<form method="post">
    <label>Ім’я:</label><br>
    <input type="text" name="name" value="<?= htmlspecialchars($name) ?>"><br><br>

    <label>Email:</label><br>
    <input type="text" name="email" value="<?= htmlspecialchars($email) ?>"><br><br>

    <label>Товар:</label><br>
    <select name="product">
        <option value="Телефон">Телефон</option>
        <option value="Ноутбук">Ноутбук</option>
        <option value="Навушники">Навушники</option>
    </select><br><br>

    <label>Кількість:</label><br>
    <input type="number" name="quantity" value="<?= htmlspecialchars($quantity) ?>"><br><br>

    <button type="submit">Замовити</button>
</form>

</body>
</html>