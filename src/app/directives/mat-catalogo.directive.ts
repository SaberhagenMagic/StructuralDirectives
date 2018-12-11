import { Directive, OnInit, Input, ViewContainerRef, TemplateRef, ComponentFactoryResolver } from '@angular/core';
// Components
import { MatCatalogoComponent, Config } from '../components/matcatalogo/matcatalogo.component';

@Directive({
  selector: '[appMatCatalogo]'
})
export class MatCatalogoDirective implements OnInit {
  context;
  catalogConfig: Config;

  @Input() set appMatCatalogo(data: any) {
    // console.log(data);
    this.catalogConfig = new Config();
    this.catalogConfig.placeholder = data['label'];
    this.catalogConfig.lsItem = data['options'];
    this.catalogConfig.selected = data['value'];
    this.context = {
      config: this.catalogConfig
    };
    this.view.createEmbeddedView(this.template, this.context);
  }

  constructor(
    private view: ViewContainerRef,
    private template: TemplateRef<any>,
    private resolver: ComponentFactoryResolver
  ) {
    // console.log('Directiva - Constructor');
    // console.log(this.el);
    // this.view.createEmbeddedView(this.template);
  }

  ngOnInit() {
    // console.log('Directiva - Inicialicizando');
    this.view.clear();
    const matCatalogo = this.resolver.resolveComponentFactory(MatCatalogoComponent);
    const componentRef = this.view.createComponent(matCatalogo);
    componentRef.instance.catconfig = this.catalogConfig;
  }

}
