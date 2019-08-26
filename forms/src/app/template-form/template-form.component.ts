import { Observable } from 'rxjs';
import { DropdownService } from './../shared/services/dropdown.service';
import { BuscaCepService } from './../shared/services/busca-cep.service';
import { ApisService } from './../shared/services/apis.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { RetornoCep } from '../models/cep.models';
import { ToastrService } from 'ngx-toastr';
import { EstadoBr } from '../models/estado.models';



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
    street: null,
    neighborhood: null,
    city: null,
    state: null,
    termos: null
  };

  form: FormGroup;
  listOfStates: Observable<EstadoBr[]>;
  http: any;
  cargos: any[];
  tecnologias: any[];
  newsletterOp: any[];

  constructor(
    private fb: FormBuilder,
    private buscaCep: BuscaCepService,
    private apis: ApisService,
    private toastr: ToastrService,
    private dropdownService: DropdownService) { }


  ngOnInit() {

    this.listOfStates = this.dropdownService.getEstadosBR();

    // this.dropdownService.getEstadosBR()
    //   .subscribe((data: EstadoBr[]) => {
    //     this.listOfStates = data;
    //     console.log(data);
    //   });

    this.cargos = this.dropdownService.getCargos();
    this.tecnologias = this.dropdownService.getTecnologias();
    this.newsletterOp = this.dropdownService.getNewsletter();


    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      zipcode: ['', [Validators.required, Validators.minLength(8)]],
      number: ['', Validators.required],
      complement: ['', []],
      street: ['', [Validators.required]],
      neighborhood: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      cargo: [null],
      tecnologia: [null],
      newsletter: ['s'],
      termos: [null],
    });
  }

  onSumit(form: any) {

    this.validateForm();
    if (this.form.valid) {
      this.fillUser();
      console.log(this.usuario);

      this.apis.postForm(this.usuario)
        .subscribe(data => {
          console.log(data);
          this.resetar();
          this.toastr.success('Validado com sucesso');
        });
    } else {
      this.toastr.error('Os campos são obrigatorio');
    }
  }

  resetar() {
    this.form.reset();
  }

  geConsultaCep() {
    this.buscaCep.consultaCEP(this.zipcode.value)
      .subscribe((data: RetornoCep) => {
        if (data.erro) {
        } else {
          this.street.setValue(data.logradouro);
          this.neighborhood.setValue(data.bairro);
          this.city.setValue(data.localidade);
          this.state.setValue(data.uf);

        }
      }, err => {
        this.toastr.error('Hello world!', 'Toastr fun!');
      });
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
      state: this.state.value,
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
  get name(): AbstractControl { return this.form.get('name'); }
  get zipcode(): AbstractControl { return this.form.get('zipcode'); }
  get number(): AbstractControl { return this.form.get('number'); }
  get complement(): AbstractControl { return this.form.get('complement'); }
  get street(): AbstractControl { return this.form.get('street'); }
  get neighborhood(): AbstractControl { return this.form.get('neighborhood'); }
  get city(): AbstractControl { return this.form.get('city'); }
  get state(): AbstractControl { return this.form.get('state'); }

  setarCargo() {
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' };
    this.form.get('cargo').setValue(cargo);
    console.log(cargo);
  }

  compararCargos(obj1, obj2) {
    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2;
  }

  setarTecnologias() {
    this.form.get('tecnologia').setValue(['java', 'ruby']);
  }

}
