<?php
// ROUTER
// VERSION: a1.0
// AUTHOR: Tania Rascia
// USED FOR / CHANGED BY: Beau Jean van Bemmel

$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/':
    case '':
        require __DIR__ . '/views/homepage.html';
        break;
    case '/test':
        require __DIR__ . '/views/test.html';
        break;
    default:
        http_response_code(404);
        require __DIR__ . '/views/404.html';
        break;
}
