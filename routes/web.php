<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// Route::group(['prefix' => 'ajax'], function() {
//     //all routes that don't need to go to react-router
    
// });

// Route::get('/{path?}', function () {
//     return view('welcome');
// })->where('path', '.*')->name('react');

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::resource('items', 'ItemController');


Route::get('/{path?}', function($path = null){ 
	return View::make('welcome'); 
})->where('path', '.*');

