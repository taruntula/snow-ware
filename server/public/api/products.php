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
    $whereClause = "id = {$_GET['id']}";
  }
}
else {
  $whereClause = 1;
}
$query = "SELECT * FROM `products` WHERE {$whereClause}";
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
  $output[] = $row;
}

$jsonData = json_encode($output);
print($jsonData);
?>
