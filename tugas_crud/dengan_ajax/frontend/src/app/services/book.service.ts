import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private baseUrl = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {}

  create(newBook: Partial<Book>) {
    return this.http.post(this.baseUrl, newBook);
  }

  findAll() {
    return this.http.get<Book[]>(this.baseUrl);
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updatedBook: Partial<Book>) {
    return this.http.patch(`${this.baseUrl}/${id}`, updatedBook);
  }

  remove(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
