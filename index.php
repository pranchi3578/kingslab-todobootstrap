<?php 
header('Content-type: text/html; charset=utf-8');
$task=$_POST['task'];
$time=date("h:i:sa");
//Database connection
$conn=new mysqli('localhost','root','','todo');
if(!$conn){
    die('Connection Failed:' .mysqli_connect_error());
}
else{
    $stmt=$conn->prepare("insert into task(task,time)values(?,?)");
    $stmt->bind_param("ss",$task,$time);
    $stmt->execute();
    echo "task posted successfully..";
    $stmt->close();
    $conn->close();
}
?>