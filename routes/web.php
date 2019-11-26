<?php
Route::resource('/','HomeController')->only(['index','store']);
Route::resource('/home','AdminController')->only(['index','store']);
Route::resource('/note','NoteController')->only(['show']);