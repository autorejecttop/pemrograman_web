@extends('layouts.app')
{{-- memanggil isi konten layouts --}}
@section('title', 'Tambah Book Baru')
{{-- memangil yield title --}}
@section('content')
    {{-- menaggil yield content --}}
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2>Tambah Book Baru</h2>
                <form action="{{ route('books.store') }}" method="POST">
                    {{-- memanggil aksi route yang sudah dibuat di controller ‘Store’ --}}
                    @csrf
                    <div class="mb-3">
                        <label for="title" class="form-label">Title</label>
                        <input type="text" class="form-control" id="title" name="title" required>
                    </div>
                    <div class="mb-3">
                        <label for="author" class="form-label">Author</label>
                        <input type="text" class="form-control" id="author" name="author" required />
                    </div>
                    <div class="mb-3">
                        <label for="publisher" class="form-label">Publisher</label>
                        <input type="text" class="form-control" id="publisher" name="publisher" required />
                    </div>
                    <div class="mb-3">
                        <label for="year" class="form-label">Year</label>
                        <input type="number" class="form-control" id="year" name="year" required />
                    </div>
                    <div class="mb-3">
                        <label for="isbn" class="form-label">ISBN</label>
                        <input type="text" class="form-control" id="isbn" name="isbn" required />
                    </div>
                    <button type="submit" class="btn btn-primary">Simpan</button>
                    <a href="{{ route('books.index') }}" class="btn btn-secondary">Batal</a>
                    {{-- href bisa langsung pagil route yang dibuat saja --}}
                </form>
            </div>
        </div>
    </div>
@endsection