<?php include_once 'config.php'; ?>
<?php 
header('Access-Control-Allow-Origin:*');
$data = json_decode(file_get_contents('php://input'));

function generateRandomString($length = 15) {
    $token = "";
    $characters = '$%&*!0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    for ($i = 0; $i < $length; $i++) {
        $token .= $characters[rand(0, $charactersLength - 1)];
    }
    return $token;
}

    if($data != "" || $data != null){

        $genToken = generateRandomString();

        $username = $data->uname;
        $password = md5($data->pwd);

        $sql = "select * from login where username='$username' and password='$password'";
        $result = $mysqli->query($sql);
        
        if ($result->num_rows > 0) {
            $sql2 = "update login set token = '$genToken' where username='$username' and password='$password'";
            $mysqli->query($sql2);

            $row = $result->fetch_assoc();
            session_start();
            $_SESSION["user"] = $row["username"];
            $data = [];
            $data["success"] = true;
            $data["usertype"] = $row["usertype"];
            $data["token"] = $genToken;

            print_r(json_encode($data));
        } else {
            $data = [];
            $data["success"] = false;
            $data["usertype"] = "Invalid Data";
            $data["token"] = "Invalid Token";

            print_r(json_encode($data));
        }
    }else{
            $data = [];
            $data["success"] = false;
            $data["secret"] = "Invalid";

            print_r(json_encode($data));
    }
            ?>
        