<?php
if (defined(INTERNAL)) {
  print("Exiting, cannot allow direct access");
  exit();
}


$input = getBodyData();
$id =intval($input['id']);

if ($id) {
  if ($id <= 0) {
    throw new Exception("Id is not greater than 0");
  }
  else if(gettype($id) !== 'integer') {
    throw new Exception("Id is not an integer");
  }
} else {
  throw new Exception("Id not given");
}

if (empty($_SESSION['cartId'])) {
  $cartID = $_SESSION['cartId'];
} else {
  $cartID = false;
}

$query = "SELECT `price` FROM `products` WHERE `id` = {$id}";
$result = mysqli_query($conn, $query);
if (!$result) {
  throw new Exception("Sql error" . mysqli_error($conn));
}
if (mysqli_affected_rows($conn) < 1) {
  throw new Exception("No rows affected, not valid product id");
}

$productData = [];
while ($row = mysqli_fetch_assoc($result)) {
  $productData[] = $row;
  $price = $productData[0]['price'];
}

mysqli_query($conn, "START TRANSACTION");

if(!$cartID) {
  $insertQuery = "INSERT INTO `cart`
   SET `created` = NOW()";
  $insertResult = mysqli_query($conn,$insertQuery);
  if (!$insertResult) {
    throw new Exception("Sql error" . mysqli_error($conn));
  }
  if (mysqli_affected_rows($conn) < 1) {
    throw new Exception("No rows affected for cart insert");
  }
  $cartID = mysqli_insert_id($conn);
  $_SESSION['cartId'] = $cartID;
}

$insertCartItemsQuery = "INSERT INTO `cartItems`
(`count`,`productID`,`price`,`added`,`cartID`) VALUES
(1, {$id}, {$price}, NOW(), {$cartID}) ON DUPLICATE KEY UPDATE `count` = count + 1";
$result = mysqli_query($conn, $insertCartItemsQuery);
if (!$result) {
  throw new Exception("Sql error with insert cart items query" . mysqli_error($conn));
}

if (mysqli_affected_rows($conn) < 1) {
  mysqli_query($conn, "ROLLBACK");
  throw new Exception("affected rows is not equal to 1");
};
mysqli_query($conn, "COMMIT");









?>
