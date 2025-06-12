<?php
namespace App\Http\Controllers;
use App\Models\Book;
use Illuminate\Http\Request;
class BookController extends Controller // nama kelas kontroller harus sama dengan nama file
{
    public function index() // nama fungsi yang tampil secara default
    {
        $books = Book::latest()->paginate(5); // data yang ditampilkan maksimal sebelum ada info next.
        return view('books.index', compact('books')); // memanggil views untuk tampilan
    }
    public function create() // nama fungsi create
    {
        return view('books.create');// memanggil views
    }
    public function store(Request $request) //fungsi untuk requst pengiriman ke DB
    {
        $request->validate([// sesuaikan nama kolom yang mau diisi
            'title' => 'required',
            'author' => 'required',
            'publisher' => 'required',
            'year' => 'required',
            'isbn' => 'required',
        ]);
        Book::create($request->all());// menghubugnkan ke Models
        return redirect()->route('books.index')
            ->with('success', 'Book berhasil ditambahkan.'); // jika sukses akan di redirect ke halaman index

    }
    public function show(Book $book)// fungsi untuk detail dengan pengambilan data dari Models
    {
        return view('books.show', compact('book')); //memanggil ke views
    }
    public function edit(Book $book) // fungsi edit dengan pengambilan data dari Models
    {
        return view('books.edit', compact('book')); //memanggil ke views
    }
    public function update(Request $request, Book $book) //fungsi untuk Update DB dengan menghubungkan ke Models
    {
        $request->validate([// sesuaikan nama kolom yang mau diedit
            'title' => 'required',
            'author' => 'required',
            'publisher' => 'required',
            'year' => 'required',
            'isbn' => 'required',
        ]);
        $book->update($request->all()); // menghubugnkan ke Models
        return redirect()->route('books.index')
            ->with('success', 'Book berhasil diperbarui.'); // jika sukses akan di redirect ke halaman index
    }
    public function destroy(Book $book) //fungsi hapus dengan pengambilan data dari Models
    {
        $book->delete(); // Fungsi Hapus by Id dari DB
        return redirect()->route('books.index')
            ->with('success', 'Book berhasil dihapus.'); // jika sukses akan di redirect ke halaman index
    }
}