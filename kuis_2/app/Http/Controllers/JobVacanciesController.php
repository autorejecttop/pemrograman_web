<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class JobVacanciesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('job_vacancies.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return view('job_vacancies.show');
    }

}
