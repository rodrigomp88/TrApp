<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->title)
    && isset($data->description)
    && isset($data->image)
    && !empty(trim($data->title))
    && !empty(trim($data->description))
    && !empty(trim($data->image))
) {
    $posttitle = mysqli_real_escape_string($db_conn, trim($data->title));
    $postdescription = mysqli_real_escape_string($db_conn, trim($data->description));
    $postimage = mysqli_real_escape_string($db_conn, trim($data->image));

    $insertPost = mysqli_query($db_conn, "INSERT INTO `posts`(`title`,`description`,`image`) VALUES('$posttitle','$postdescription','$postimage')");
    if ($insertPost) {
        $last_id = mysqli_insert_id($db_conn);
        echo json_encode(["success" => 1, "msg" => "Post Inserted.", "id" => $last_id]);
    } else {
        echo json_encode(["success" => 0, "msg" => "Post Not Inserted!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}
