import { Component, OnInit , Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig, Validator} from '../interfaces/fieldconfig.interface';

@Component({
  selector: 'app-catalogo',
  template: `
    <div [formGroup] = group>
    <label for='{{ field.name }}'>{{ field.label }}</label>
    <select [formControlName] = field.name [(ngModel)] = field.value>
      <option *ngFor="let item of field.options" [value] = item.valor>
        {{item.descripcion}}
      </option>
    </select>
    <span *ngFor="let valid of field.validations" id="valid.name" class="txtAlert">{{ valid.message }}</span>
    </div>`,
    styles: [`label, select {display:block;} .txtAlert{color:red; display:block;}`]
})
export class CatalogoComponent implements OnInit {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  ngOnInit() {
    // console.log(this.field);
  }
}
