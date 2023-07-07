<?php

require_once realpath(__DIR__ . '/../vendor/autoload.php');

$dotenv = Dotenv\Dotenv::createImmutable(realpath(__DIR__ . '/../'));
$dotenv->load();

use SergiX44\Nutgram\Nutgram;
use SergiX44\Nutgram\RunningMode\Webhook;
$bot = new Nutgram($_ENV["TOKEN"]);
$bot->setRunningMode(Webhook::class);


$bot->onCommand('start', function(Nutgram $bot) {
    $bot->sendMessage('Ciao!');
});

$bot->onText('My name is {name}', function(Nutgram $bot, string $name) {
    $bot->sendMessage("Hi $name");
});

$bot->onText('?', function(Nutgram $bot, string $name) {
    $bot->sendMessage($bot);
});

$bot->run();

?>