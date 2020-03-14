<?php
function startup() {
  header('Content-Type:application/json');
}
function error_handler($error){
  $output = [
    'success' => false ,
    'error' => $error ->getMessage()
  ];
  http_response_code(500);
  $json_output = json_encode($output);
  print($json_output);
}
if (!function_exists('getBodyData')) {
  function getBodyData()
  {
    $data = file_get_contents('php://input');
    return json_decode($data, true);
  }
}
?>
