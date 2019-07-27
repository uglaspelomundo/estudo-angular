import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    name: null,
    email: null,
    zipcode: null,
    number: null,
    complement: null,
    // street: null,
    // neighborhood: null,
    // city: null
  };

  form: FormGroup;

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      zipcode: ['', [Validators.required, Validators.minLength(8)]],
      number: ['', [Validators.required]],
      complement: ['', [Validators.required]],
      street: ['', [Validators.required]],
      neighborhood: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
    });
  }

  onSumit(form: any) {
    this.validateForm();
    if (this.form.valid) {
      this.fillUser();
      console.log(this.usuario);
    }
  }

  private fillUser() {
    this.usuario = {
      name: this.name.value,
      email: this.email.value,
      zipcode: this.zipcode.value,
      number: this.number.value,
      complement: this.complement.value,
      street: this.street.value,
      neighborhood: this.neighborhood.value,
      city: this.city.value,
      state: this.city.value,
    };
  }

  private validateForm() {
    Object.keys(this.form.value).forEach(name => {
      const control = this.form.get(name);
      control.markAsDirty();
      control.markAsTouched();
      control.updateValueAndValidity();
    });
  }

  get email(): AbstractControl { return this.form.get('email'); }
  get email2(): any { return this.form.get('email'); }
  get name(): AbstractControl { return this.form.get('name'); }
  get zipcode(): AbstractControl { return this.form.get('zipcode'); }
  get number(): AbstractControl { return this.form.get('number'); }
  get complement(): AbstractControl { return this.form.get('complement'); }
  get street(): AbstractControl { return this.form.get('street'); }
  get neighborhood(): AbstractControl { return this.form.get('neighborhood'); }
  get city(): AbstractControl { return this.form.get('city'); }
  get state(): AbstractControl { return this.form.get('state'); }
}
