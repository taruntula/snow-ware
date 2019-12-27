<?php
// if (defined('INTERNAL')) {
//   print("Exiting, cannot allow direct access");
//   exit();
// }
if (!INTERNAL) {
  exit('no direct calls');
}

if (empty($_SESSION['cartId'])) {
  print(json_encode("[]"));
  exit('no cart for this session');
} else {
  $cartID = intval($_SESSION['cartId']);
}

$query = "SELECT cartItems.`count`, products.`id`, products.`name`, products.`price`, products.`image`, products.`shortDescription` FROM `cartItems`
          JOIN `products` ON cartItems.`productID` = products.`id`";

$result = mysqli_query($conn, $query);
if (!$result) {
  throw new Exception("query error: " . mysqli_error($conn));
};

$data = [];
while ($row = mysqli_fetch_assoc($result)) {
  $data[] = $row;
}
if ($data === []) {
  print("empty array: []");
  exit();
} else {
  print(json_encode($data));
}













?>
