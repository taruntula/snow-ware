<?php
require_once('functions.php');
set_exception_handler('error_handler');
startup();
require_once('db_connection.php');

if(!empty($_GET['id'])) {
  if(!is_numeric($_GET['id'])){
    throw new Exception("id needs to be a number");
  }
  else {
    $whereClause = "p.id = {$_GET['id']}";
  }
}
else {
  $whereClause = 1;
}

$subQuery = "SELECT `id`,`name`,`price`,`shortDescription`, `image`
FROM `products` P
WHERE EXISTS ( SELECT * FROM `images` WHERE `product_id` = P.id LIMIT 1)";
$subResult = mysqli_query($conn,$subQuery);
if (!$subResult) {
  throw new Exception('query error ' . mysqli_error($conn));
}


$query = "SELECT p.id, p.name, p.price, p.shortDescription,p.longDescription,
	GROUP_CONCAT(i.url) AS images
FROM `products` AS p
JOIN `images` AS i
	ON p.id = i.product_id
  WHERE {$whereClause}
GROUP BY p.id";


$result = mysqli_query($conn,$query);

if(!$result){
  throw new Exception('query error ' . mysqli_error($conn));
}
if (mysqli_num_rows($result) === 0 && !empty($_GET['id'])) {
    throw new Exception("invalid ID: " . $_GET['id']);
}

$output = [];

while ($row = mysqli_fetch_assoc($result)) {
  $row['id'] = intval($row['id']);
  $row['price'] = intval($row['price']);
  $row['images'] = explode(",",$row['images']);
  $output[] = $row;
}

$jsonData = json_encode($output);
print($jsonData);
?>
