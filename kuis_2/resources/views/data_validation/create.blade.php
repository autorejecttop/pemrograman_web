@extends('layouts.app')

@section('title', 'Request Data Validation')

@section('content')

    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
        <div class="container">
            <a class="navbar-brand" href="#">Job Seeker Platform</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Login</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main>
        <!-- S: Header -->
        <header class="jumbotron">
            <div class="container">
                <h1 class="display-4">Request Data Validation</h1>
            </div>
        </header>
        <!-- E: Header -->

        <div class="container">

            <form action="">
                <div class="row mb-4">
                    <div class="col-md-6">
                        <div class="form-group">
                            <div class="d-flex align-items-center mb-3">
                                <label class="mr-3 mb-0">Job Category</label>
                                <select class="form-control-sm">
                                    <option value="1">Computing and ICT</option>
                                    <option value="2">Construction and building</option>
                                    <option value="3">Animals, land and environment</option>
                                    <option value="4">Design, arts and crafts</option>
                                    <option value="5">Education and training</option>
                                </select>
                            </div>
                            <textarea class="form-control" cols="30" rows="5"
                                placeholder="Job position sparate with , (comma)"></textarea>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group">
                            <div class="d-flex align-items-center mb-3">
                                <label class="mr-3 mb-0">Work Experiences ?</label>
                                <select class="form-control-sm">
                                    <option value="yes">Yes, I have</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <textarea class="form-control" cols="30" rows="5"
                                placeholder="Describe your work experiences"></textarea>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <div class="form-group">
                            <div class="d-flex align-items-center mb-3">
                                <label class="mr-3 mb-0">Reason Accepted</label>
                            </div>
                            <textarea class="form-control" cols="30" rows="6"
                                placeholder="Explain why you should be accepted"></textarea>
                        </div>
                    </div>
                </div>

                <button class="btn btn-primary">Send Request</button>
            </form>

        </div>

    </main>

    <!-- S: Footer -->
    <footer>
        <div class="container">
            <div class="text-center py-4 text-muted">
                Copyright &copy; 2023 - Web Tech ID
            </div>
        </div>
    </footer>
    <!-- E: Footer -->
@endsection