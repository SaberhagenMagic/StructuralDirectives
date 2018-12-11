import { Directive, OnInit, Input, ViewContainerRef, TemplateRef, ComponentFactoryResolver,  Output } from '@angular/core';
// Components
import { MatCatalogoComponent, Config } from '../components/matcatalogo/matcatalogo.component';
import { EventEmitter } from 'events';

@Directive({
  selector: '[appMatCatalogo2]'
})
export class MatCatalogo2Directive implements OnInit {
  context;
  catalogConfig: Config;

  @Input() set appMatCatalogo2Of(data: any) {
    console.log(data);
    this.catalogConfig = new Config();
    this.catalogConfig.placeholder = data['label'];
    this.catalogConfig.lsItem = data['options'];
    this.catalogConfig.selected = data['value'];
    this.context = {
      $implicit: this.catalogConfig,
    };
    this.view.createEmbeddedView(this.template, this.context);
  }
  @Output() valor: EventEmitter = new EventEmitter();

  constructor(
    private view: ViewContainerRef,
    private template: TemplateRef<any>,
    private resolver: ComponentFactoryResolver
  ) { console.log('Directiva2 - Constructor'); }

  ngOnInit() {
    console.log('Directiva2 - Inicialicizando');
    this.view.clear();
    const matCatalogo = this.resolver.resolveComponentFactory(MatCatalogoComponent);
    const componentRef = this.view.createComponent(matCatalogo).instance;
    componentRef.catconfig = this.catalogConfig;
    componentRef.valSelected.subscribe( (_val) => {
      console.log(`Valor seleccionado: ${_val}`);
      this.catalogConfig.selected = _val;
      this.valor.emit(_val);
    } );

  }
}
