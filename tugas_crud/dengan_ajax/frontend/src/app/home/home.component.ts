import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BookService } from '../services/book.service';
import { Book } from '../interfaces/book.interface';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  template: `
    <main class="">
      <div class="max-w-6xl mx-auto px-8 py-4">
        <article class="flex justify-between items-center">
          <h1 class="text-3xl font-bold">Welcome to my library</h1>
          <button
            (click)="isFormOpen.set(true)"
            matFab
            aria-label="Add new book"
          >
            <mat-icon>add</mat-icon>
          </button>
        </article>

        <div class="py-4">
          <table mat-table [dataSource]="books()" class="mat-elevation-z8">
            <!--- Note that these columns can be defined in any order.
            The actual rendered columns are set as a property on the row definition" -->

            <ng-container matColumnDef="id">
              <th mat-header-cell *matHeaderCellDef>ID</th>
              <td mat-cell *matCellDef="let element">{{ element.id }}</td>
            </ng-container>

            <ng-container matColumnDef="title">
              <th mat-header-cell *matHeaderCellDef>Title</th>
              <td mat-cell *matCellDef="let element">{{ element.title }}</td>
            </ng-container>

            <ng-container matColumnDef="author">
              <th mat-header-cell *matHeaderCellDef>Author</th>
              <td mat-cell *matCellDef="let element">{{ element.author }}</td>
            </ng-container>

            <ng-container matColumnDef="publisher">
              <th mat-header-cell *matHeaderCellDef>Publisher</th>
              <td mat-cell *matCellDef="let element">
                {{ element.publisher }}
              </td>
            </ng-container>

            <ng-container matColumnDef="year">
              <th mat-header-cell *matHeaderCellDef>Year</th>
              <td mat-cell *matCellDef="let element">{{ element.year }}</td>
            </ng-container>

            <ng-container matColumnDef="isbn">
              <th mat-header-cell *matHeaderCellDef>ISBN</th>
              <td mat-cell *matCellDef="let element">{{ element.isbn }}</td>
            </ng-container>

            <ng-container matColumnDef="actions">
              <th mat-header-cell *matHeaderCellDef>Actions</th>
              <td class="space-x-2" mat-cell *matCellDef="let element">
                <button
                  (click)="editBook(element)"
                  class="edit-book"
                  matMiniFab
                  aria-label="Edit book"
                >
                  <mat-icon>edit</mat-icon>
                </button>
                <button
                  (click)="deleteBook(element.id)"
                  class="delete-book"
                  matMiniFab
                  aria-label="Delete book"
                >
                  <mat-icon>delete</mat-icon>
                </button>
              </td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
          </table>
        </div>
      </div>

      @if (isFormOpen()) {
      <div
        class="position: fixed bottom-0 top-0 right-0 left-0 z-99 bg-black/50 flex items-center justify-center"
        (click)="closeForm()"
      >
        <div
          class="bg-white rounded-xl px-8 py-4 min-w-96 flex flex-col gap-4"
          (click)="$event.stopPropagation()"
        >
          <div class="flex justify-between items-center">
            <h1 class="text-2xl font-bold">Insert a new book</h1>
            <button matIconButton (click)="closeForm()" aria-label="Cancel">
              <mat-icon>close</mat-icon>
            </button>
          </div>

          <form
            (ngSubmit)="onSubmit()"
            [formGroup]="bookForm"
            class="w-full flex flex-col "
          >
            <mat-form-field>
              <mat-label>Title</mat-label>
              <input
                required
                matInput
                placeholder="cth. Principles of Corporate Finance"
                formControlName="title"
              />
            </mat-form-field>
            <mat-form-field>
              <mat-label>Author</mat-label>
              <input
                required
                matInput
                placeholder="cth. Richard A. Brealey, Stewart Myers, Franklin Allen"
                formControlName="author"
              />
            </mat-form-field>
            <mat-form-field>
              <mat-label>Publisher</mat-label>
              <input
                required
                matInput
                placeholder="cth. McGraw Hill"
                formControlName="publisher"
              />
            </mat-form-field>
            <mat-form-field>
              <mat-label>Year</mat-label>
              <input
                required
                type="number"
                min="0"
                matInput
                placeholder="cth. 2019"
                formControlName="year"
              />
            </mat-form-field>
            <mat-form-field>
              <mat-label>ISBN</mat-label>
              <input
                required
                matInput
                placeholder="cth. 0001"
                formControlName="isbn"
              />
            </mat-form-field>

            <button
              type="submit"
              matButton="filled"
              [disabled]="!bookForm.valid"
            >
              {{ isEditing() ? 'Update' : 'Submit' }}
            </button>
          </form>
        </div>
      </div>
      }
    </main>
  `,
  styles: `
    .edit-book {
      background-color: green;
      color: white;
    }

    .delete-book {
      background-color: red;
      color: white;
    }
  `,
})
export class HomeComponent implements OnInit {
  private bookService = inject(BookService);
  displayedColumns = [
    'id',
    'title',
    'author',
    'publisher',
    'year',
    'isbn',
    'actions',
  ];
  books: WritableSignal<Book[]> = signal([]);
  isFormOpen: WritableSignal<boolean> = signal(false);
  isEditing: WritableSignal<boolean> = signal(false);
  bookId: WritableSignal<number> = signal(0);

  bookForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    publisher: new FormControl('', [Validators.required]),
    year: new FormControl(0, [Validators.required]),
    isbn: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    this.bookService.findAll().subscribe({
      next: (data) => {
        this.books.set(data);
      },
      error: (err) => console.error('GET /books', err),
    });
  }

  closeForm() {
    this.isFormOpen.set(false);
    this.isEditing.set(false);
    this.bookId.set(0);
    this.bookForm.reset();
  }

  editBook(book: Book) {
    this.isFormOpen.set(true);
    this.isEditing.set(true);
    this.bookId.set(book.id);
    this.bookForm.setValue({
      title: book.title,
      author: book.author,
      publisher: book.publisher,
      year: book.year,
      isbn: book.isbn,
    });
  }

  deleteBook(id: number) {
    this.bookService.remove(id).subscribe({
      next: () => {
        this.books.update((books) => books.filter((b) => b.id !== id));
      },
      error: (err) => console.error(`DELETE /books/${id}`, err),
    });
  }

  onSubmit() {
    const book: Partial<Book> = {
      title: this.bookForm.value.title!,
      author: this.bookForm.value.author!,
      publisher: this.bookForm.value.publisher!,
      year: this.bookForm.value.year!,
      isbn: this.bookForm.value.isbn!,
    };

    if (!this.isEditing()) {
      this.bookService.create(book).subscribe({
        next: () => {
          this.closeForm();
          this.bookService.findAll().subscribe({
            next: (data) => {
              this.books.set(data);
            },
            error: (err) => console.error('GET /books', err),
          });
        },
      });
    } else {
      this.bookService.update(this.bookId(), book).subscribe({
        next: () => {
          this.closeForm();
          this.bookService.findAll().subscribe({
            next: (data) => {
              this.books.set(data);
            },
            error: (err) => console.error('GET /books', err),
          });
        },
      });
    }
  }
}
