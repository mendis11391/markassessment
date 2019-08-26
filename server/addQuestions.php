<?php include_once 'config.php'; ?>
<?php 
$conn = $mysqli;
header('Access-Control-Allow-Origin:*');
$data = json_decode(file_get_contents('php://input'));

$res = [];

$qID = $data->qID;
$question = $data->question;
$cOptions = $data->correctOptions;
$correctOptions = implode(",",$cOptions);
$topicID = $data->topicID;
$isImg = $data->isImg;
$isAudio = $data->isAudio;
$isString = $data->isString;
$imgPath = $data->imgPath;
$audioPath = $data->audioPath;

$res["qID"] = $qID;
$res["question"] = $question;
$res["correctOptions"] = $correctOptions;
$res["topicID"] = $topicID;
$res["isImg"] = $isImg;
$res["isAudio"] = $isAudio;
$res["isString"] = $isString;
$res["imgPath"] = $imgPath;
$res["audioPath"] = $audioPath;

$insertQuestionStatement = "INSERT INTO `questions`(`qID`, `question`, `topicID`, `isImg`, `isAudio`, `isString`, `imgPath`, `audioPath`) VALUES ('$qID', '$question', '$topicID', '$isImg', '$isAudio', '$isString', '$imgPath', '$audioPath')";

 if ($mysqli->query($insertQuestionStatement)) {
    $insertoptions = "INSERT INTO `answers`(`questionID`, `answer`) VALUES ('$qID', '$correctOptions')";
    $mysqli->query($insertoptions);
} else {
    echo "Couldn't save question";
}


print_r(json_encode($res));
?>