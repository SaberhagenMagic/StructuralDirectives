import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-matcatalogo',
  templateUrl: './matcatalogo.component.html',
  styles: [``]
})
export class MatCatalogoComponent implements OnInit {
  @Input() catconfig: Config;

  constructor() { }

  ngOnInit(): void { }
}
export class Config {
  placeholder: string;
  lsItem: { valor: any, descripcion: any }[];
}
