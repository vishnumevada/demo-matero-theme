import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'app/material.module';
import { ProductService } from 'app/routes/users/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-update',
  standalone: true,
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.scss']
})
export class AddUpdateUserComponent implements OnInit {

  productForm!: FormGroup;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddUpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
   ) {
    this.productForm = this.formBuilder.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
    });
   }

  ngOnInit(): void {
    if (this.data) {
      this.productForm.patchValue(this.data);
    }
  }

  onSubmit() {
    if (this.productForm.valid) {
      if (this.data) {
        this.productService
          .updateProduct(this.data.id, this.productForm.value)
          .subscribe({
            next: (res: any) => {
              this.dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this.productService.addProduct(this.productForm.value).subscribe({
          next: (res: any) => {
            this.dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}
