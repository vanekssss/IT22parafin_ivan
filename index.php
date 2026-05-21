<?php
$languages = [
    'uk' => 'uk_UA.UTF-8',
    'en' => 'en_US.UTF-8',
    'de' => 'de_DE.UTF-8',
    'fr' => 'fr_FR.UTF-8'
];

if (isset($_POST['lang']) && array_key_exists($_POST['lang'], $languages)) {
    $selectedLang = $_POST['lang'];
    setcookie("site_lang", $selectedLang, time() + 86400 * 30);
    $_COOKIE['site_lang'] = $selectedLang;
} else {
    $selectedLang = $_COOKIE['site_lang'] ?? 'uk';
}
setlocale(LC_TIME, $languages[$selectedLang]);
date_default_timezone_set('Europe/Kyiv');

$date = strftime("%A, %d %B %Y");
$time = date("H:i:s");
$userIP = $_SERVER['REMOTE_ADDR'];

$text = [
    'uk' => [
        'title' => 'Локалізований час',
        'choose' => 'Оберіть мову:',
        'button' => 'Застосувати',
        'date' => 'Дата',
        'time' => 'Час',
        'ip' => 'Ваш IP',
        'cookie' => 'Збережена мова'
    ],
    'en' => [
        'title' => 'Localized time',
        'choose' => 'Choose language:',
        'button' => 'Apply',
        'date' => 'Date',
        'time' => 'Time',
        'ip' => 'Your IP',
        'cookie' => 'Saved language'
    ],
    'de' => [
        'title' => 'Lokalisierte Zeit',
        'choose' => 'Sprache wählen:',
        'button' => 'Anwenden',
        'date' => 'Datum',
        'time' => 'Uhrzeit',
        'ip' => 'Ihre IP',
        'cookie' => 'Gespeicherte Sprache'
    ],
    'fr' => [
        'title' => 'Heure localisée',
        'choose' => 'Choisissez la langue :',
        'button' => 'Appliquer',
        'date' => 'Date',
        'time' => 'Heure',
        'ip' => 'Votre IP',
        'cookie' => 'Langue enregistrée'
    ]
];

$t = $text[$selectedLang];
?>

<!DOCTYPE html>
<html lang="<?= $selectedLang ?>">
<head>
    <meta charset="UTF-8">
    <title><?= $t['title'] ?></title>
</head>
<body>

<h2><?= $t['title'] ?></h2>

<form method="POST">
    <label><?= $t['choose'] ?></label><br>

    <select name="lang">
        <option value="uk" <?= $selectedLang=='uk' ? 'selected' : '' ?>>Українська</option>
        <option value="en" <?= $selectedLang=='en' ? 'selected' : '' ?>>English</option>
        <option value="de" <?= $selectedLang=='de' ? 'selected' : '' ?>>Deutsch</option>
        <option value="fr" <?= $selectedLang=='fr' ? 'selected' : '' ?>>Français</option>
    </select>

    <button type="submit"><?= $t['button'] ?></button>
</form>

<p><b><?= $t['date'] ?>:</b> <?= $date ?></p>
<p><b><?= $t['time'] ?>:</b> <?= $time ?></p>
<p><b><?= $t['ip'] ?>:</b> <?= $userIP ?></p>
<p><b><?= $t['cookie'] ?>:</b> <?= $_COOKIE['site_lang'] ?? '-' ?></p>

</body>
</html>