import { AfterViewInit, Component, viewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { UsersDataSource } from './users-datasource';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
})
export class UsersComponent implements AfterViewInit {
  readonly paginator = viewChild.required(MatPaginator);
  readonly sort = viewChild.required(MatSort);
  readonly table = viewChild.required(MatTable);
  dataSource = new UsersDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'NIK',
    'Name',
    'Role',
    'Sex',
    'Date of Birth',
    'Phone Number',
    'Email',
  ];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort();
    this.dataSource.paginator = this.paginator();
    this.table().dataSource = this.dataSource;
  }
}
