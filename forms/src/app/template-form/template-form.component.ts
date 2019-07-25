import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  };

  form: FormGroup;

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
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
      nome: this.name.value,
      email: this.email.value
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

  get email(): AbstractControl {
    return this.form.get('email');
  }

  get name(): AbstractControl {
    return this.form.get('name');
  }

}
