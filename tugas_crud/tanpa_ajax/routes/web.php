<?php

use App\Http\Controllers\BookController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::resource('books', BookController::class); // routes mengunakan controller yakni akses controller 'BookController' dengan akses link '/books'