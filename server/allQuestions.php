<?php include_once 'config.php'; ?>
<?php 
$conn = $mysqli;
header('Access-Control-Allow-Origin:*');
$data = json_decode(file_get_contents('php://input'));

$res = array();

$topicID = $data->topicID;

$getQuestionStatement = "SELECT * FROM `questions` WHERE `topicID` = '$topicID'";
$result = $conn->query($getQuestionStatement);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
    array_push( $res, $row);    
    }
} else {
    print_r(json_encode(["{'Error': 'ErrorResponse'}"]));
}


print_r(json_encode($res));
?>