import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../user.service';

@Component({
  selector: 'app-users-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UsersUserAddComponent implements OnInit {

  productForm!: FormGroup;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
  ) {
    this.productForm = this.formBuilder.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.productForm.valid) {
        this.productService.addProduct(this.productForm.value).subscribe({
          next: (res: any) => {
            console.log('Product added successfully');
          },
          error: (err: any) => {
            console.error(err);
          },
        });
    }
  }

}
