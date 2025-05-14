import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';
import { signal } from '@angular/core';

// TODO: Replace this with your own data model type
export interface UsersItem {
  nik: string;
  name: string;
  role: 'Patient' | 'Psychologist';
  sex: 'Man' | 'Woman';
  dateOfBirth: string;
  phoneNumber: string;
  email: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: UsersItem[] = [
  {
    nik: '0123456789101112',
    name: 'Muhammad Rafli Afriansyah Ikhsan',
    role: 'Psychologist',
    sex: 'Man',
    dateOfBirth: '2000-02-29',
    phoneNumber: '+62 8123-4567-891',
    email: 'muhammad.ikhsan23@student.uisi.ac.id',
  },
  {
    nik: '1234567891011120',
    name: 'Ikhsan Afriansyah Rafli Muhammad',
    role: 'Psychologist',
    sex: 'Man',
    dateOfBirth: '2004-02-29',
    phoneNumber: '+62 8123-4567-892',
    email: 'ikhsan.muhammad23@student.uisi.ac.id',
  },
  {
    nik: '2345678910111201',
    name: 'Jane Doe',
    role: 'Patient',
    sex: 'Woman',
    dateOfBirth: '2003-04-08',
    phoneNumber: '+62 8123-4567-893',
    email: 'jane.doe@student.uisi.ac.id',
  },
  {
    nik: '3456789101112012',
    name: 'John Doe',
    role: 'Patient',
    sex: 'Man',
    dateOfBirth: '1995-06-23',
    phoneNumber: '+62 8123-4567-894',
    email: 'john.doe@student.uisi.ac.id',
  },
  {
    nik: '4567891011120123',
    name: 'Fulan bin Fulan',
    role: 'Patient',
    sex: 'Man',
    dateOfBirth: '1985-07-11',
    phoneNumber: '+62 8123-4567-895',
    email: 'fulan.fulan@student.uisi.ac.id',
  },
  {
    nik: '5678910111201234',
    name: 'Fulanti binti Fulanti',
    role: 'Patient',
    sex: 'Woman',
    dateOfBirth: '2013-12-03',
    phoneNumber: '+62 8123-4567-896',
    email: '',
  },
];

/**
 * Data source for the Users view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class UsersDataSource extends DataSource<UsersItem> {
  data: UsersItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  private filterSubject = new BehaviorSubject<string>('');
  filter$ = this.filterSubject.asObservable();

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<UsersItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(
        observableOf(this.data),
        this.paginator.page,
        this.sort.sortChange,
        this.filter$
      ).pipe(
        map(() => {
          return this.getPagedData(
            this.getSortedData(this.getFilteredData([...this.data]))
          );
        })
      );
    } else {
      throw Error(
        'Please set the paginator and sort on the data source before connecting.'
      );
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: UsersItem[]): UsersItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: UsersItem[]): UsersItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'NIK':
          return compare(a.nik, b.nik, isAsc);
        case 'Name':
          return compare(a.name, b.name, isAsc);
        case 'Role':
          return compare(a.role, b.role, isAsc);
        case 'Sex':
          return compare(a.sex, b.sex, isAsc);
        case 'Date of Birth':
          return compare(a.dateOfBirth, b.dateOfBirth, isAsc);
        case 'Phone Number':
          return compare(a.phoneNumber, b.phoneNumber, isAsc);
        case 'Email':
          return compare(a.email, b.email, isAsc);
        default:
          return 0;
      }
    });
  }

  public setFilter(value: string) {
    this.filterSubject.next(value);
  }

  private getFilteredData(data: UsersItem[]): UsersItem[] {
    return data.filter((user) =>
      Object.values(user)
        .join('')
        .toLowerCase()
        .includes(this.filterSubject.value)
    );
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(
  a: string | number,
  b: string | number,
  isAsc: boolean
): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
