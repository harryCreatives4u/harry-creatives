<?php
if (isset($_POST['submit'])) {
    $name = htmlspecialchars($_POST['firstName']);
    $email_subject = "Harry Creatives contact";
    $email_from =htmlspecialchars($_POST['mail']);
    $to = "harsh58585@gmail.com";
    $message = htmlspecialchars($_POST['message']);
    $email_body = "Hi Harry, $name ($email_from) wants to say something: \n $message";
   
    mail($to,$email_subject,$email_body);
    header('Location: ./');
} else{
    header('Location: ./');
}
?>