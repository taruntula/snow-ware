<?php

require_once('functions.php');
if (!INTERNAL) {
  exit('no direct calls');
}

$input = getBodyData();
$id = intval($input['id']);

if ($id) {
  if ($id <= 0) {
    throw new Exception("Id is not greater than 0");
  } else if (gettype($id) !== 'integer') {
    throw new Exception("Id is not an integer");
  }
} else {
  throw new Exception("Id not given");
}

if (!empty($_SESSION['cartId'])) {
  $cartID = $_SESSION['cartId'];
} else {
  $cartID = false;
}

$removeCartItemQuery = "DELETE FROM `cartItems` WHERE `productID` = {$id} AND `cartID` = {$cartID}";
$removeCartItemResult = mysqli_query($conn,$removeCartItemQuery);

if (!$removeCartItemResult) {
  throw new Exception('Query error; invalid DELETE: ' . mysqli_error($conn));
  exit();
}

if (mysqli_affected_rows($conn) === 0) {
  throw new Exception('Unable to delete from cart, item not removed');
  exit();
}





?>
