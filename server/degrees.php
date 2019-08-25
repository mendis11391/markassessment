<?php include_once 'config.php'; ?>
<?php 
$conn = $mysqli;
header('Access-Control-Allow-Origin:*');
$data = json_decode(file_get_contents('php://input'));

$action = $data->action;

if($action === 'getall') {

    $sql = "select * from degrees";
    $result = $conn->query($sql);
    $res = array();

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
        array_push( $res,$row);    
        }
    } else {
        print_r(json_encode(["{'Error': 'ErrorResponse'}"]));
    }
}

if($action === 'insert') {
    $degreeID = $data->degreeID;
    $degreeName = $data->degreeName;

    $res = [];
    $res["degreeID"] = $degreeID;
    $res["degreeName"] = $degreeName;

    $insertDegreeStatement = "INSERT INTO `degrees`(`dID`, `degree`) VALUES ('$degreeID', '$degreeName')";

    if ($mysqli->query($insertDegreeStatement)) {
        $res['res'] = true;
        $res['message'] = 'Added successfully';
    } else {
        $res['res'] = false;
        $res['res'] = 'Insertion operation failed!';
    }
}

if($action === 'update') {
    $degreeID = $data->degreeID;
    $degreeName = $data->degreeName;

    $res = [];
    $res["degreeID"] = $degreeID;
    $res["degreeName"] = $degreeName;

    $updateDegreeStatement = "UPDATE `degrees` SET `degree`='$degreeName' WHERE `dID` = '$degreeID'";

    if ($mysqli->query($updateDegreeStatement)) {
        $res['res'] = true;
        $res['message']='updated successfully';
    } else {
        $res['res'] = false;
        $res['message'] = 'Update operation failed!';
    }
}

if($action === 'delete') {
    $res = [];
    $degreeID = $data->degreeID;

    $deleteCategoryStatement = "DELETE FROM `degrees` WHERE `dID` = '$degreeID'";

    if ($mysqli->query($deleteCategoryStatement)) {
        $res['res'] = true;
        $res['message']='Deleted successfully';
    } else {
        $res['res'] = false;
        $res['message']='Delete operation failed!';
    }
}


print_r(json_encode($res));
?>