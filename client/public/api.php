<?php

$requestBody = file_get_contents('php://input');
$data = json_decode($requestBody, true);

if(isset($data['name']) && isset($data['phone'])) {

    $name = $data['name'];
    $phone = $data['phone'];

    // TODO: add logic to send message to bot

    $response = array('status' => 'success', 'message' => 'Data received successfully');
    echo json_encode($response);
} else {
    $response = array('status' => 'error', 'message' => 'Name and phone parameters are required');
    echo json_encode($response);
}

?>