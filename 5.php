<?php

// Змінні: ім'я, прізвище та рік народження + обчислення віку
$first_name = "Джамшут";
$last_name = "Шаурменко";
$year_of_birth = 2006;

$current_year = date("Y");
$age = $current_year - $year_of_birth;

echo "Повне ім'я: " . $first_name . " " . $last_name . "<br>";
echo "Вік: " . $age . "<br>";

// Масив країн + вивід у нумерованому списку
$countries = ["Україна", "Польща", "Німеччина", "Франція"];

echo "<ol>";
foreach ($countries as $country) {
    echo "<li>" . $country . "</li>";
}
echo "</ol>";

// Асоціативний масив міст і населення + фільтр більше 1 млн
$cities = [
    "Київ" => 3000000,
    "Львів" => 800000,
    "Харків" => 1400000,
    "Одеса" => 1000000
];

foreach ($cities as $city => $population) {
    if ($population > 1000000) {
        echo $city . ": " . $population . "<br>";
    }
}

// Перевірка парне чи непарне число
$number = 8;

if ($number % 2 == 0) {
    echo "Парне<br>";
} else {
    echo "Непарне<br>";
}

// Перевірка високосного року
$year = date("Y");

if ($year % 4 == 0) {
    echo "Високосний рік";
} else {
    echo "Не високосний рік";
}

?>