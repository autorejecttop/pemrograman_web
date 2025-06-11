@extends('layouts.app')
{{-- memanggil isi konten layouts --}}
@section('title', 'Edit Book')
{{-- memangil yield title --}}
@section('content')
    {{-- menaggil yield content --}}
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2>Edit Book</h2>
                <form action="{{ route('books.update', $book->id) }}" method="POST">
                    {{-- memanggil aksi route yang sudah dibuat di controller ‘Update’ --}}
                    @csrf
                    @method('PUT')
                    <div class="mb-3">
                        <label for="title" class="form-label">Title</label>
                        <input type="text" class="form-control" id="title" name="title" value="{{ $book->title }}" required>
                    </div>
                    <div class="mb-3">
                        <label for="author" class="form-label">Author</label>
                        <input type="text" class="form-control" id="author" name="author" value="{{ $book->author }}"
                            required />
                    </div>
                    <div class="mb-3">
                        <label for="publisher" class="form-label">Publisher</label>
                        <input type="text" class="form-control" id="publisher" name="publisher"
                            value="{{ $book->publisher }}" required />
                    </div>
                    <div class="mb-3">
                        <label for="year" class="form-label">Year</label>
                        <input type="number" class="form-control" id="year" name="year" value="{{ $book->year }}"
                            required />
                    </div>
                    <div class="mb-3">
                        <label for="isbn" class="form-label">ISBN</label>
                        <input type="text" class="form-control" id="isbn" name="isbn" value="{{ $book->isbn }}" required />
                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
                    <a href="{{ route('books.index') }}" class="btn btn-secondary">Batal</a>
                </form>
            </div>
        </div>
    </div>
@endsection