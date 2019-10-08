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
startup();
?>
