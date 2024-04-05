import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from 'app/routes/users/user.service';
import { MaterialModule } from 'app/material.module';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
  standalone: true,
  imports: [CommonModule, MaterialModule],
})
export class DeleteDialogComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onDelete() {
    this.productService.deleteProduct(this.data).subscribe({
      next: (res: any) => {
        this.dialogRef.close(true);
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }
}
