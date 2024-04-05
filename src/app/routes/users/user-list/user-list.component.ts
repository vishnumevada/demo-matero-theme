import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../user.service';
import { UsersUserAddComponent } from '../user-add/user-add.component';
import { DeleteDialogComponent } from '@shared/components/delete-dialog/delete-dialog.component';
import { AddUpdateUserComponent } from '@shared/components/add-update/add-update.component';

@Component({
  selector: 'app-users-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UsersUserListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['image', 'title', 'price', 'description', 'createdAt', 'action'];
  isButtonEnable = false;
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {this.getProductList();}

  getProductList() {
    this.productService.getAllProduct().subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  onCreateProduct() {
    const dialogRef = this.dialog.open(AddUpdateUserComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getProductList();
        }
      },
    });
  }

  onUpdateProduct(data: any) {
    const dialogRef = this.dialog.open(AddUpdateUserComponent, {
      width: '600px',
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getProductList();
        }
      },
    });
  }

  onDeleteProduct(productId: any) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '400px',
      data: productId,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          // Filter out the data with the provided ID
          const filteredData = this.dataSource.data.filter(
            (item: any) => item.id !== productId
          );

          // Update the dataSource with the filtered data
          this.dataSource.data = filteredData;

          // this.getProductList();
        }
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    // For any specific column here we have assign filter on "title"
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const value = data.title.toString().toLowerCase();
      return value.includes(filter.toLowerCase());
    };

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit(): void {}

}
