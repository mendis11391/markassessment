<?php include_once 'config.php'; ?>
<?php 
$conn = $mysqli;
header('Access-Control-Allow-Origin:*');
$data = json_decode(file_get_contents('php://input'));

$action = $data->action;

if($action === 'getall') {

    $sql = "select * from categories";
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
    $categoryID = $data->categoryID;
    $categoryName = $data->categoryName;

    $res = [];
    $res["categoryID"] = $categoryID;
    $res["categoryName"] = $categoryName;

    $insertCategoryStatement = "INSERT INTO `categories`(`categoryID`, `categoryName`) VALUES ('$categoryID', '$categoryName')";

    if ($mysqli->query($insertCategoryStatement)) {
        $res['res'] = true;
        $res['message'] ='Added successfully';
    } else {
        $res['res'] = false;
        $res['message'] = 'Insertion operation failed!';
    }
}

if($action === 'update') {
    $categoryID = $data->categoryID;
    $categoryName = $data->categoryName;

    $res = [];
    $res["categoryID"] = $categoryID;
    $res["categoryName"] = $categoryName;

    $updateCategoryStatement = "UPDATE `categories` SET `categoryName`='$categoryName' WHERE `categoryID` = '$categoryID'";

    if ($mysqli->query($updateCategoryStatement)) {
        $res['res'] = true;
        $res['message'] ='updated successfully';
    } else {
        $res['res'] = false;
        $res['message'] ='Update operation failed!';
    }
}

if($action === 'delete') {
    $res = [];
    $categoryID = $data->categoryID;

    $deleteCategoryStatement = "DELETE FROM `categories` WHERE `categoryID` = '$categoryID'";

    if ($mysqli->query($deleteCategoryStatement)) {
        $res['res'] = true;
        $res['message'] ='Deleted successfully';
    } else {
        $res['res'] = false;
        $res['message'] ='Delete operation failed!';
    }
}


print_r(json_encode($res));
?>