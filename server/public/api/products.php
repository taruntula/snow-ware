<?php
require_once('functions.php');
set_exception_handler('error_handler');
require_once('db_connection.php');

if(!empty($_GET['id'])) {
  $whereClause = "id = {$_GET['id']}";
}
else {
  $whereClause = 1;
}
$query = "SELECT * FROM `products` WHERE {$whereClause}";
$result = mysqli_query($conn,$query);


if(!$result){
  throw new Exception('query error ' . mysqli_error($conn));
}

$output = [];

while ($row = mysqli_fetch_assoc($result)) {
  $row['id'] = intval($row['id']);
  $row['price'] = intval($row['price']);
  $output[] = $row;
}

$jsonData = json_encode($output);
print($jsonData);

?>
