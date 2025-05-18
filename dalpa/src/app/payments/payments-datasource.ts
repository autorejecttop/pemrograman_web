import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';

// TODO: Replace this with your own data model type
export interface PaymentsItem {
  id: number;
  patientName: string;
  amount: number;
  isPaid: boolean;
  method: string;
  updatedAt: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: PaymentsItem[] = [
  {
    id: 1,
    patientName: 'Jane Doe',
    amount: 300000,
    isPaid: true,
    method: 'cash',
    updatedAt: '2025-05-13 03:18:10',
  },
  {
    id: 2,
    patientName: 'John Doe',
    amount: 500000,
    isPaid: true,
    method: 'qris',
    updatedAt: '2025-05-13 04:18:10',
  },
  {
    id: 3,
    patientName: 'Fulan bin Fulan',
    amount: 500000,
    isPaid: true,
    method: 'qris',
    updatedAt: '2025-05-13 05:18:10',
  },
  {
    id: 4,
    patientName: 'Fulanti bin Fulanti',
    amount: 700000,
    isPaid: true,
    method: 'cash',
    updatedAt: '2025-05-13 06:18:10',
  },
  {
    id: 5,
    patientName: 'Jane Doe',
    amount: 500000,
    isPaid: true,
    method: 'qris',
    updatedAt: '2025-05-13 06:18:10',
  },
];

/**
 * Data source for the Payments view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class PaymentsDataSource extends DataSource<PaymentsItem> {
  data: PaymentsItem[] = EXAMPLE_DATA;
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
  connect(): Observable<PaymentsItem[]> {
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
  private getPagedData(data: PaymentsItem[]): PaymentsItem[] {
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
  private getSortedData(data: PaymentsItem[]): PaymentsItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'ID':
          return compare(+a.id, +b.id, isAsc);
        case 'Patient Name':
          return compare(a.patientName, b.patientName, isAsc);
        case 'Amount':
          return compare(a.amount, b.amount, isAsc);
        case 'Status':
          return compare(a.isPaid, b.isPaid, isAsc);
        case 'Method':
          return compare(a.method, b.method, isAsc);
        case 'Updated At':
          return compare(a.updatedAt, b.updatedAt, isAsc);
        default:
          return 0;
      }
    });
  }

  public setFilter(value: string) {
    this.filterSubject.next(value);
  }

  private getFilteredData(data: PaymentsItem[]): PaymentsItem[] {
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
  a: string | number | boolean,
  b: string | number | boolean,
  isAsc: boolean
): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
