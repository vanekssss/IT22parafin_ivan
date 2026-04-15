<?php

$a = 8;
$b = 15;

if ($a > $b) {
    $max = $a;
    $min = $b;
} else {
    $max = $b;
    $min = $a;
}

echo "Максимум: " . $max . "<br>";
echo "Мінімум: " . $min . "<br>";

$numbers = [10, 20, 30, 40, 50];

$sum = 0;
$count = count($numbers);

foreach ($numbers as $num) {
    $sum += $num;
}

$average = $sum / $count;

echo "Середнє арифметичне: " . $average . "<br>";

$students = [
    "Устим Кармелюк" => 85,
    "Андрій Шевченко" => 70,
    "Владислав Павлович" => 92
];

foreach ($students as $name => $grade) {
    if ($grade > 80) {
        echo $name . ": " . $grade . "<br>";
    }
}

$num = 12;

if ($num % 3 == 0 || $num % 5 == 0) {
    echo "Число кратне 3 або 5<br>";
} else {
    echo "Число не кратне 3 або 5<br>";
}

for ($i = 1; $i <= 10; $i++) {
    echo "7 x " . $i . " = " . (7 * $i) . "<br>";
}

?>