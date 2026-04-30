<?php
$users = [
    ["name" => "Ivan", "age" => 22, "email" => "ivan@example.com"],
    ["name" => "Olena", "age" => 17, "email" => "olena@example.com"],
    ["name" => "Petro", "age" => 30, "email" => "petro@example.com"],
    ["name" => "Anna", "age" => 19, "email" => "anna@example.com"],
    ["name" => "Mykola", "age" => 16, "email" => "mykola@example.com"],
    ["name" => "Sofia", "age" => 25, "email" => "sofia@example.com"],
    ["name" => "Dmytro", "age" => 18, "email" => "dmytro@example.com"],
    ["name" => "Oksana", "age" => 21, "email" => "oksana@example.com"],
    ["name" => "Yurii", "age" => 15, "email" => "yurii@example.com"],
    ["name" => "Kateryna", "age" => 28, "email" => "kateryna@example.com"],
];

function filterAdults($users) {
    return array_filter($users, function($user) {
        return $user["age"] >= 18;
    });
}

function compareByNameLength($a, $b) {
    return strlen($a["name"]) <=> strlen($b["name"]);
}

$adults = filterAdults($users);

usort($adults, "compareByNameLength");
?>

<!DOCTYPE html>
<html>
<body>

<table border="1">
    <tr>
        <th>name</th>
        <th>age</th>
        <th>email</th>
    </tr>

    <?php foreach ($adults as $user): ?>
        <tr>
            <td><?php echo $user["name"]; ?></td>
            <td><?php echo $user["age"]; ?></td>
            <td><?php echo $user["email"]; ?></td>
        </tr>
    <?php endforeach; ?>

</table>

</body>
</html>