<?php

require_once 'vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

use SergiX44\Nutgram\Nutgram;
use SergiX44\Nutgram\RunningMode\Webhook;
use SergiX44\Nutgram\Telegram\Types\Message\Message;

$bot = new Nutgram($_ENV["TELEGRAM_BOT_TOKEN"]);

$chat_id = $_ENV["TELEGRAM_CHAT_ID"];

$bot->setRunningMode(Webhook::class);

?>