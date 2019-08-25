<?php include_once 'config.php'; ?>
<?php 
$conn = $mysqli;
header('Access-Control-Allow-Origin:*');
$data = json_decode(file_get_contents('php://input'));

$name = $data->name;
$email = $data->email;
$contact = $data->contact1;
$contact2 = $data->contact2;
$qualificationID = $data->qualificationID;
$yearofpassing = $data->yearofpassing;
$address = $data->address;
$specialzation = $data->specialzation;
$mailToken = $data->mailToken;

$res = [];

$insertstudentStatement = "INSERT INTO `student`(`name`, `emailID`, `contact1`, `contact2`, `qualification`, `yearofpassing`, `address`, `specialization`,`mailToken`) VALUES ('$name', '$email', '$contact','$contact2','$qualificationID','$yearofpassing','$address','$specialzation','$mailToken')";

if ($mysqli->query($insertstudentStatement)) {
    $res['res']=true;
    $res['message'] = 'succesfully added';
} else {
    $res['res']=false;
    $res['message'] = 'failed to save';
}


print_r(json_encode($res));
?>