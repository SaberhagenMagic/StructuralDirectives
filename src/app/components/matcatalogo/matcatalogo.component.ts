import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-matcatalogo',
  templateUrl: './matcatalogo.component.html',
  styles: [``]
})
export class MatCatalogoComponent implements OnInit {
  @Input() catconfig: Config;
  @Output() valSelected: EventEmitter<string> = new EventEmitter();
  set valor(val: string) {
    // console.log(`Set value: ${val}`);
    this.valSelected.emit(val);
    this.catconfig.selected = val;
  }
  get valor() {
    return this.catconfig.selected;
  }

  constructor() { }

  ngOnInit() {
    if (this.catconfig.selected !== '' && this.catconfig.selected !== undefined) {
      // console.log(`Recibi valor: ${this.catconfig.selected}`);
      this.valor = this.catconfig.selected;
    }
  }

}
export class Config {
  placeholder: string;
  lsItem: { valor: any, descripcion: any }[];
  selected: string;
}
