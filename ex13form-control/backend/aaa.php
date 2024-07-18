<?php
    header('Content-type:text/plain; charset-utf8');

    $title= $_GET['title'];
    $message= $_GET['msg'];

    echo "[ $title : $message ] 데이터 처리를 완료했어요.";
?>