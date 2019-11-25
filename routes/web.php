<?php
Route::resource('/','HomeController')->only(['index','store']);
Route::resource('/home','WorkController');
Route::get('/home/{id}/{code}','WorkController@show_Gr');
