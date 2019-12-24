<?php
Route::resource('/','HomeController')->only(['index','store']);
Route::resource('/home/{choix}','AdminController')->only(['index']);
Route::resource('/note','NoteController')->only(['show']);
Route::post('/home/inscritEtud','AdminController@storeEtud');
Route::post('home/admin','AdminController@storeEns');

Route::get('/form', function () {
    return view('Form');
});

Route::get('/student', function () {
    return view('Student');
});