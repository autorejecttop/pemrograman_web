@extends('layouts.app')

@section('title', 'List Job Vacancies')

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
                        <a class="nav-link" href="#">Marsito Kusmawati</a>
                    </li>
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
                <h1 class="display-4">Job Vacancies</h1>
            </div>
        </header>
        <!-- E: Header -->

        <div class="container mb-5">

            <div class="section-header mb-4">
                <h4 class="section-title text-muted font-weight-normal">List of Job Vacancies</h4>
            </div>

            <div class="section-body">

                <article class="spot">
                    <div class="row">
                        <div class="col-5">
                            <h5 class="text-primary">PT. Maju Mundur Sejahtera</h5>
                            <span class="text-muted">Ds. Abdullah No. 31, DKI Jakarta</span>
                        </div>
                        <div class="col-4">
                            <h5>Available Position (Capacity)</h5>
                            <span class="text-muted">Desain Grafis (3), Programmer (1), Manager (1)</span>
                        </div>
                        <div class="col-3">
                            <button class="btn btn-danger btn-lg btn-block">
                                Detail / Apply
                            </button>
                        </div>
                    </div>
                </article>

                <article class="spot unavailable">
                    <div class="row">
                        <div class="col-5">
                            <h5 class="text-primary">PT. Maju Mundur Sejahtera</h5>
                            <span class="text-muted">Ds. Abdullah No. 31, DKI Jakarta</span>
                        </div>
                        <div class="col-4">
                            <h5>Available Position (Capacity)</h5>
                            <span class="text-muted">Desain Grafis (3), Programmer (1), Manager (1)</span>
                        </div>
                        <div class="col-3">
                            <div class="bg-success text-white p-2">
                                Vacancies have been submitted
                            </div>
                        </div>
                    </div>
                </article>

                <article class="spot">
                    <div class="row">
                        <div class="col-5">
                            <h5 class="text-primary">PT. Maju Mundur Sejahtera</h5>
                            <span class="text-muted">Ds. Abdullah No. 31, DKI Jakarta</span>
                        </div>
                        <div class="col-4">
                            <h5>Available Position (Capacity)</h5>
                            <span class="text-muted">Desain Grafis (3), Programmer (1), Manager (1)</span>
                        </div>
                        <div class="col-3">
                            <button class="btn btn-danger btn-lg btn-block">
                                Detail / Apply
                            </button>
                        </div>
                    </div>
                </article>
                <article class="spot">
                    <div class="row">
                        <div class="col-5">
                            <h5 class="text-primary">PT. Maju Mundur Sejahtera</h5>
                            <span class="text-muted">Ds. Abdullah No. 31, DKI Jakarta</span>
                        </div>
                        <div class="col-4">
                            <h5>Available Position (Capacity)</h5>
                            <span class="text-muted">Desain Grafis (3), Programmer (1), Manager (1)</span>
                        </div>
                        <div class="col-3">
                            <button class="btn btn-danger btn-lg btn-block">
                                Detail / Apply
                            </button>
                        </div>
                    </div>
                </article>
                <article class="spot">
                    <div class="row">
                        <div class="col-5">
                            <h5 class="text-primary">PT. Maju Mundur Sejahtera</h5>
                            <span class="text-muted">Ds. Abdullah No. 31, DKI Jakarta</span>
                        </div>
                        <div class="col-4">
                            <h5>Available Position (Capacity)</h5>
                            <span class="text-muted">Desain Grafis (3), Programmer (1), Manager (1)</span>
                        </div>
                        <div class="col-3">
                            <button class="btn btn-danger btn-lg btn-block">
                                Detail / Apply
                            </button>
                        </div>
                    </div>
                </article>
                <article class="spot">
                    <div class="row">
                        <div class="col-5">
                            <h5 class="text-primary">PT. Maju Mundur Sejahtera</h5>
                            <span class="text-muted">Ds. Abdullah No. 31, DKI Jakarta</span>
                        </div>
                        <div class="col-4">
                            <h5>Available Position (Capacity)</h5>
                            <span class="text-muted">Desain Grafis (3), Programmer (1), Manager (1)</span>
                        </div>
                        <div class="col-3">
                            <button class="btn btn-danger btn-lg btn-block">
                                Detail / Apply
                            </button>
                        </div>
                    </div>
                </article>

            </div>

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