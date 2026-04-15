<?php

$price1 = 120; // ціна 1 товару
$price2 = 200; // ціна 2 товару
$price3 = 250; // ціна 3 товару

$total = $price1 + $price2 + $price3; // загальна сума
echo "Загальна вартість: " . $total . "<br>"; // вивід суми

$movies = ["Inception", "Matrix", "Avatar", "Titanic", "Interstellar"]; // масив фільмів

foreach ($movies as $movie) { // перебір масиву
    echo $movie . "<br>"; // вивід кожного фільму
}

$user = [
    "login" => "admin", // логін користувача
    "password" => "1234", // пароль
    "email" => "admin@gmail.com" // email
];

echo "Login: " . $user["login"] . "<br>"; // вивід логіну
echo "Password: " . $user["password"] . "<br>"; // вивід пароля
echo "Email: " . $user["email"] . "<br>"; // вивід email

if ($total > 500) { // перевірка чи сума більша 500
    $discount = $total * 0.10; // 10% знижка
    $final = $total - $discount; // кінцева сума зі знижкою
} else {
    $final = $total; // без знижки
}

echo "Підсумкова сума: " . $final . "<br>"; // вивід фінальної суми

$input_login = "admin"; // введений логін
$input_password = "1234"; // введений пароль

if ($input_login == $user["login"] && $input_password == $user["password"]) { // перевірка логіну і пароля
    echo "Доступ дозволено"; // успішний вхід
} else {
    echo "Невірний логін або пароль"; // помилка входу
}

?>