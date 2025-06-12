@extends('layouts.app')
{{-- memanggil isi konten layouts --}}
@section('title', 'Detail Book')
{{-- memangil yield title --}}
@section('content')
    {{-- menaggil yield content --}}
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2>Detail Book</h2>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{ $book->nama }}</h5>
                        {{-- memanggil aray dari variabel controller “Book” --}}
                        <p class="card-text"><strong>Title:</strong> {{ $book->title }}</p>
                        <p class="card-text"><strong>Author:</strong> {{ $book->author }}</p>
                        <p class="card-text"><strong>Publisher:</strong> {{ $book->publisher }}</p>
                        <p class="card-text"><strong>Year:</strong> {{ $book->year }}</p>
                        <p class="card-text"><strong>ISBN:</strong> {{ $book->isbn }}</p>
                        <a href="{{ route('books.edit', $book->id) }}" class="btn btn-warning">Edit</a>
                        <form action="{{ route('books.destroy', $book->id) }}" method="POST" style="display: inline-block;">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger"
                                onclick="return confirm('Apakah Anda yakin ingin menghapus?')">Hapus</button>
                        </form>
                        <a href="{{ route('books.index') }}" class="btn btn-secondary">Kembali</a>
                    </div>

                </div>
            </div>
        </div>
    </div>
@endsection