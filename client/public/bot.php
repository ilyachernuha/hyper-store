<?php

require_once '../vendor/autoload.php';

use SergiX44\Nutgram\Nutgram;
use SergiX44\Nutgram\RunningMode\Webhook;

$bot = new Nutgram('5965516710:AAExUTa5LA93cAToBMwIZfj3DCYoOWIB51Y');
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