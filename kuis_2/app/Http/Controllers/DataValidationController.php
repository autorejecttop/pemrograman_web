<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DataValidationController extends Controller
{
    public function create(Request $request)
    {
        return view('data_validation.create');
    }
}
