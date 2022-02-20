<?php

if (substr($_SERVER["HTTP_ACCEPT_LANGUAGE"], 0, 2) == "nl") {
    require "cv_nl.php";
} else {
    require "cv_en.php";
}
