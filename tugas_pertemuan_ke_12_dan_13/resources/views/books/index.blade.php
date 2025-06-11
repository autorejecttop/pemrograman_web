@extends('layouts.app')
{{-- memanggil isi konten layouts --}}
@section('title', 'Daftar Book')
{{-- memangil yield title --}}
@section('content')
    {{-- menaggil yield content --}}
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                @if(session('success'))
                    {{-- jika menggunakan logika ditambahkan ‘@’ --}}
                    <div class="alert alert-success">
                        {{ session('success') }}
                    </div>
                @endif
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h2>Daftar Book</h2>
                    <a href="{{ route('books.create') }}" class="btn btn-primary">Tambah Book</a>
                    {{-- href bisalangsung pagil route yang dibuat saja --}}
                </div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Publisher</th>
                            <th>Year</th>
                            <th>ISBN</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($books as $book)
                            {{-- Cara pemangilan loping array foreach $books variabel
                            dari kontroller --}}
                            <tr>
                                <td>{{ $loop->iteration }}</td>
                                <td>{{ $book->title }}</td>
                                <td>{{ $book->author }}</td>
                                <td>{{ $book->publisher }}</td>
                                <td>{{ $book->year }}</td>
                                <td>{{ $book->isbn }}</td>
                                <td>
                                    <a href="{{ route('books.show', $book->id) }}" class="btn btn-info btn-sm">Lihat</a>

                                    <a href="{{ route('books.edit', $book->id) }}" class="btn btn-warning btn-sm">Edit</a>
                                    <form action="{{ route('books.destroy', $book->id) }}" method="POST"
                                        style="display: inline-block;">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-danger btn-sm"
                                            onclick="return confirm('Apakah Anda yakin ingin menghapus?')">Hapus</button>
                                    </form>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
                {{ $books->links() }}
                {{-- variabel $books dari controller untuk halman paginate --}}
            </div>
        </div>
    </div>
@endsection