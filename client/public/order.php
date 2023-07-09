<?php

require_once '../bot.php';

$name = $phone = "";
$nameErr = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["name"])) {
        $name = "клієнта";
    } else {
        $name = test_input($_POST["name"]);
    }
    
    if (empty($_POST["phone"])) {
        $nameErr = "Phone is required";
    } else {
        $phone = test_input($_POST["phone"]);
    }
    $bot->sendMessage(
        text: "Отримано нове замовлення номер #\nІм'я: {$name}\nНомер телефону: {$phone}",
        chat_id: -1001986367819
    );
} else {
    
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?>

<!DOCTYPE html>
<html lang="uk">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>
      Cloud Stinger Core Wireless Gaming Headset + DTS | Hyper Store
    </title>
    <link
      href="//row.hyperx.com/cdn/shop/files/HX_icon_PNG_72x.png?v=1670258278-72x72.png"
      rel="apple-touch-icon"
      sizes="72x72"
    />
    <link
      href="//row.hyperx.com/cdn/shop/files/HX_icon_PNG_144x.png?v=1670258278-144x144.png"
      rel="apple-touch-icon"
      sizes="144x144"
    />
    <link
      href="//row.hyperx.com/cdn/shop/files/HX_icon_PNG_196x.png?v=1670258278"
      sizes="196x196"
      rel="icon"
      type="image/png"
    />
    <link
      href="//row.hyperx.com/cdn/shop/files/HX_icon_PNG_96x.png?v=1670258278"
      sizes="96x96"
      rel="icon"
      type="image/png"
    />
    <link
      href="//row.hyperx.com/cdn/shop/files/HX_icon_PNG_32x.png?v=1670258278"
      sizes="32x32"
      rel="icon"
      type="image/png"
    />
    <link
      href="//row.hyperx.com/cdn/shop/files/HX_icon_PNG_16x.png?v=1670258278"
      sizes="16x16"
      rel="icon"
      type="image/png"
    />
  </head>
  <body>
    <h1>Дякуємо! Ваше замовлення номер # передано. Менеджер зв'яжеться з вами протягом 10 хвилин.</h1>
  </body>
</html>