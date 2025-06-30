<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DataValidationController;
use App\Http\Controllers\JobVacanciesController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

Route::get('/', [LoginController::class, 'index']);

Route::get('/dashboard', [DashboardController::class, 'index']);

Route::get('/data_validation', [DataValidationController::class, 'create']);

Route::resource('job_vacancies', JobVacanciesController::class);
