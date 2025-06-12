<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Book extends Model
{
    use HasFactory;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'book'; // nama tabel yang dihubungkan
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [ // kolom yang akan diolah pada controller, jika mau ditambah maka tambahkan, namun untuk id tidak perlu, karena sudah automatis
        'title',
        'author',
        'publisher',
        'year',
        'isbn',
    ];
    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
    ];
}
?>