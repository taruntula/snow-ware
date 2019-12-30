<?php

if (!INTERNAL) {
  exit('no direct calls');
}

if (empty($_SESSION['cartId'])) {
  print(json_encode("[]"));
  exit('no cart for this session');
} else {
  $cartID = intval($_SESSION['cartId']);
}

$query = "SELECT cartItems.`count`, products.`id`, products.`name`, products.`price`, products.`shortDescription`,
            (SELECT `url`
            FROM `images`
            WHERE products.`id` = images.`product_id` LIMIT 1) AS images
            FROM `cartItems`
            JOIN `products` ON cartItems.`productID` = products.`id`";

$result = mysqli_query($conn, $query);
if (!$result) {
  throw new Exception("query error: " . mysqli_error($conn));
};

$data = [];
while ($row = mysqli_fetch_assoc($result)) {
  $data[] = $row;
}
// if ($data === []) {
//   print(json_decode("empty array: []"));
//   exit();
// } else {
//   print(json_encode($data));
// }
print(json_encode($data));













?>
