<?php

require_once('functions.php');
if (!INTERNAL) {
  exit('no direct calls');
}

$input = getBodyData();
$id = intval($input['id']);
$addOrMinus = $input['addOrMinus'];

if($addOrMinus != "add" && $addOrMinus != "minus") {
  throw new Exception("Add or minus doesnt exist");
}

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

if ($addOrMinus === "add") {
  $updateCartItemQuery = "UPDATE `cartItems` SET `count` = `count` + 1 WHERE `productID` = {$id} AND `cartID` = {$cartID}";
  $updateCartItemResult = mysqli_query($conn, $updateCartItemQuery);
  if (!$updateCartItemResult) {
    throw new Exception("Sql error with increment cart items query" . mysqli_error($conn));
  }
}
else {
  $updateCartItemQuery = "UPDATE `cartItems` SET `count` = `count` - 1 WHERE `productID` = {$id} AND `cartID` = {$cartID}";
  $updateCartItemResult = mysqli_query($conn, $updateCartItemQuery);
  if (!$updateCartItemResult) {
    throw new Exception("Sql error with decrement cart items query" . mysqli_error($conn));
  }
}


?>
