import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Product } from '../shared/models/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  productForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(1)]),
    description: new FormControl("", [Validators.required, Validators.minLength(1)]),
    category: new FormControl("", [Validators.required, Validators.minLength(1)]),
    quantity: new FormControl(0, [Validators.required, Validators.minLength(1)]),

  });

  constructor(private formBuilder: FormBuilder){

  };

  products : Product[] = [
    new Product("Cilantro", "To ensure a cilantro harvest for a longer season, plant seeds every six weeks. Cilantro usually reseeds itself, so let it go to seed or collect the coriander to use in cooking. Cilantro is ready to harvest within 45 days.", "SEEDS", 25),
    new Product("Carrots", "Danvers is an excellent high-yield carrot that produces a dependably delicious taste. The Danvers 126 Carrot is a bit longer and thinner than its more familiar cousin - the Chantenay carrot. Plant Danvers Carrot seeds in spring for a bountiful summer harvest.", "SEEDS", 50),
    new Product("Cucumber", "The Marketer is a solid performing cucumber that was an All-America winner in 1943. The flavor of the Marketer Cucumber tends to be sweet and milder than many of its siblings.", "SEEDS", 75)
  ];
  title = 'angularinventoryapp';


  onSubmit(){

    if(this.productForm.valid){
      console.log('productForm',this.productForm.value);
      this.products.push(new Product(
        this.productForm.value.name, 
        this.productForm.value.description, 
        this.productForm.value.category, 
        this.productForm.value.quantity));
      this.productForm.reset();
      this.productForm.value.name = "";
      this.productForm.value.description = "";
      this.productForm.value.category = "";
      this.productForm.value.quantity = 0;
    }else{
      alert('invalid form');
    }


  }
}
