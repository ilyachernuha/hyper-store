<?php

require_once '../../bot.php';

$requestBody = file_get_contents('php://input');
$data = json_decode($requestBody, true);

if(isset($data['phone'])) {

    $name = $data['name'];
    $phone = $data['phone']; 
    
    $bot->sendMessage(
        text: "Отримано нове замовлення номер #\nІм'я: {$name}\nНомер телефону: {$phone}",
        chat_id: -1001986367819
    );

    $response = array('status' => 'success', 'message' => 'order received');
    echo json_encode($response);

} else {

    $response = array('status' => 'error', 'message' => 'phone is required');
    echo json_encode($response);
    
}

?>