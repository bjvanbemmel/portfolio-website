<?php
// ROUTER
// VERSION: a1.0
// AUTHOR: Tania Rascia
// USED FOR / CHANGED BY: Beau Jean van Bemmel

$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/':
    case '':
        require __DIR__ . '/views/homepage.php';
        break;
    case '/cv':
        require __DIR__ . '/views/cv.php';
        break;
    default:
        http_response_code(404);
        require __DIR__ . '/views/404.php';
        break;
}
