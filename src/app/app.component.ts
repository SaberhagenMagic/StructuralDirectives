import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// Interface
import { FieldConfig, Catalogo } from './interfaces/fieldconfig.interface';
import { Config } from './components/matcatalogo/matcatalogo.component';
// Service
import { DataService } from './services/data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
  forma: FormGroup;
  matCatConfig = new Config();

  catClientes = this.srv.getClientes();
  configClientes: FieldConfig = {
    type: 'select',
    label: 'Clientes',
    name: 'catClientes',
    options: this.catClientes
  };

  constructor( private srv: DataService) {
    this.forma = new FormGroup({
      'catClientes': new FormControl('', Validators.required)
    });
  }
  ngOnInit() {
    this.matCatConfig.placeholder = 'Seleccionar Cliente';
    this.matCatConfig.lsItem = this.catClientes;
  }

}
