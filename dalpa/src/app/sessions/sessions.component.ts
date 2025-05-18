import { AfterViewInit, Component, viewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { SessionsDataSource, SessionsItem } from './sessions-datasource';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrl: './sessions.component.scss',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterLink,
  ],
})
export class SessionsComponent implements AfterViewInit {
  readonly paginator = viewChild.required(MatPaginator);
  readonly sort = viewChild.required(MatSort);
  readonly table = viewChild.required(MatTable);
  dataSource = new SessionsDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'ID',
    'Patient Name',
    'Start',
    'End',
    'Psychologist Name',
  ];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort();
    this.dataSource.paginator = this.paginator();
    this.table().dataSource = this.dataSource;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.setFilter(filterValue.trim().toLowerCase());

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
