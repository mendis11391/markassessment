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

$res = [];

function generateRandomString($length = 15) {
    $token = "";
    $characters = '$%&*!0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    for ($i = 0; $i < $length; $i++) {
        $token .= $characters[rand(0, $charactersLength - 1)];
    }
    return $token;
}

$mailToken = generateRandomString();

$insertstudentStatement = "INSERT INTO `student`(`name`, `emailID`, `contact1`, `contact2`, `qualification`, `yearofpassing`, `address`, `specialization`,`mailToken`) VALUES ('$name', '$email', '$contact','$contact2','$qualificationID','$yearofpassing','$address','$specialzation','$mailToken')";

if ($mysqli->query($insertstudentStatement)) {
    $res['res']=true;
    $res['message'] = 'succesfully added';

    // $bccEmailAddress1 = "prashanth11391@gmail.com";

    // if($name !== "" && $email !=="" && $comment !==""){

    // $email_from = 'Mark Education Academy';
    // $email_subject = "Assesment Test Link";

    // $message = '<html><body>';
    // $message .= '<div>';
    // $message .= '<hr style="border: 1px solid #00bfff;"/>';
    // $message .= '<div style="padding: 10px; font-size: 16px;"><strong>Name:</strong> ' . strip_tags($_POST['fname']) . '</div>';
    // $message .= '<div style="padding: 10px; font-size: 16px;"><strong>Email:</strong> ' . strip_tags($_POST['email']) . '</div>';
    // $message .= '<div style="padding: 10px; font-size: 16px;"><strong>Phone:</strong> ' . strip_tags($_POST['phone']) . '</div>';
    // $message .= '<div style="padding: 10px; font-size: 16px;"><strong>Message:</strong> ' . strip_tags($_POST['message']) . '</div>';
    // $message .= '</div>';
    // $message .= '</body></html>';

    // $to = "info@sgtestinginstitute.com,prabhakargudi@gmail.com,gopal.gudi@gmail.com";
    // $headers = "From: $email_from \r\n";
    // $headers.= "bcc: " . $bccEmailAddress1 . "\r\n" ;
    // $headers .= "MIME-Version: 1.0\r\n";
    // $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    // mail($to,$email_subject,$message,$headers);
    // echo "Thank you! <br/>";
    // echo "Your mail has been sent <br/>";
    // }else{
    //     echo "<div style='width:100%;text-align:center;font-weight:bold;font-size:20px;'>Direct access restricted!</div>";
    // }
} else {
    $res['res']=false;
    $res['message'] = 'failed to save';
}


print_r(json_encode($res));
?>