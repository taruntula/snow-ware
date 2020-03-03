<?php
define("INTERNAL",true);
require_once('functions.php');
startup();
session_start();
set_exception_handler('error_handler');
require_once('db_connection.php');

switch($_SERVER['REQUEST_METHOD']) {
  case "POST":
    require_once('cart_add.php');
    break;
  case "GET":
    require_once('cart_get.php');
    break;
  case "PATCH":
    require_once('cart_patch.php');
    break;
  case "DELETE":
    require_once('cart_remove.php');
    break;
}

?>
