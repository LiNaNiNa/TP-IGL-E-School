<?php
Route::resource('/','HomeController')->only(['index','store']);
Route::resource('/home','AdminController');