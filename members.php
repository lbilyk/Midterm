<?php
session_start();
if ($_SESSION['username'] == null || $_SESSION == '') {
    header('Location: login.html');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Sign Up</title>
    <meta name="author" content="Lyubomyr Bilyk">
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Karla" rel="stylesheet">
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link href="css/index.css" rel="stylesheet">
    <script src="https://www.google.com/jsapi"></script>
</head>
<body id="page-top" class="bg-white">
<nav class="navbar navbar-expand navbar-dark bg-dark static-top">
    <a class="navbar-brand mr-1 text-white">Members Only</a>
    <ul class="navbar-nav ml-auto mr-0 mr-md-3 my-2 my-md-0">
        <li class="nav-item dropdown no-arrow">
            <a href="signup.html" class="nav-link d-inline active">Welcome, <?php echo $_SESSION['username'] ?></a>
            <a href="logout.php" class="nav-link d-inline ">Logout</a>
        </li>
    </ul>
</nav>
<div class="container container-fluid pt-xl-5 text-center">
    <div class="container pt-2">
        <div class="text-center btn btn-outline-dark" id="catBtn" onclick="newImage()">More!!!</div>
    </div>
    <div class="row pt-5 justify-content-center">
        <div class="col-xl-5 col-xl-6 mb-4 text-center justify-content-center">
            <div class="card shadow justify-content-center">
                <div class="card-body text-center">
                    <img id="photo" width="" height="" src="">
                </div>
            </div>
        </div>
    </div>
</div>
<div class="text-center copyright">
    <hr/>
    <span>Copyright © Lyubomyr Bilyk</span>
</div>
<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<script src="vendor/jquery/jquery.min.js"></script>
<script src="js/members.js"></script>
</body>
</html>
